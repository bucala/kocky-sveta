// src/hooks/useDpadNavigation.js
// Generická 2D "spatial navigation" pre ovládanie appky šípkami (Android TV
// diaľkový ovládač, klávesnica). Funguje naprieč celou appkou bez potreby
// upravovať jednotlivé obrazovky — pracuje priamo nad DOM-om.
//
// - Šípky hore/dole/vľavo/vpravo presúvajú focus na najbližší focusovateľný
//   prvok v danom smere (tlačidlá, odkazy, inputy, [tabindex]).
// - V textových/číselných poliach necháva vľavo/vpravo na pohyb kurzora.
// - OK/potvrdenie a číselné klávesy fungujú natívne (fokusnuté <button>
//   sa aktivuje na Enter, <input type="number"> prijíma číslice priamo).
// - Keď je otvorený modal (useFocusTrap), navigácia zostáva len v jeho rámci.
// - Rýchly sled stlačení (podržaná šípka na ovládači) je throttlovaný, aby
//   sa slabšie Android TV WebView zariadenia nezasekli na výpočte layoutu.
import { useEffect } from 'react';
import { getFocusableIn, isElementVisible } from './domFocus.js';
import { getActiveFocusScope } from './focusScope.js';

// Minimálny odstup medzi dvoma spracovanými pohybmi (ms) — ochrana proti
// zahlteniu pri podržanej šípke na diaľkovom ovládači.
const MOVE_THROTTLE_MS = 90;

// Či prehliadač/WebView podporuje plynulé scrollovanie — staršie Android
// System WebView verzie `behavior: 'smooth'` ignorujú alebo ho nemusia mať
// konzistentné; radšej na nich scrollujeme okamžite (bez trhania/glitchov).
const SUPPORTS_SMOOTH_SCROLL =
  typeof document !== 'undefined' && 'scrollBehavior' in document.documentElement.style;

function rectCenter(rect) {
  return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
}

function findNext(current, direction, candidates) {
  const fromRect = current ? current.getBoundingClientRect() : { left: 0, top: 0, width: 0, height: 0 };
  const fromCenter = rectCenter(fromRect);

  let best = null;
  let bestScore = Infinity;

  for (const el of candidates) {
    if (el === current) continue;
    const center = rectCenter(el.getBoundingClientRect());
    const dx = center.x - fromCenter.x;
    const dy = center.y - fromCenter.y;

    let primary, cross, valid;
    switch (direction) {
      case 'up':    valid = dy < -1; primary = -dy; cross = Math.abs(dx); break;
      case 'down':  valid = dy > 1;  primary = dy;  cross = Math.abs(dx); break;
      case 'left':  valid = dx < -1; primary = -dx; cross = Math.abs(dy); break;
      case 'right': valid = dx > 1;  primary = dx;  cross = Math.abs(dy); break;
      default: valid = false;
    }
    if (!valid) continue;

    // Priečny posun váži viac, aby navigácia zostávala pokiaľ možno "v riadku/stĺpci"
    const score = primary + cross * 2.5;
    if (score < bestScore) {
      bestScore = score;
      best = el;
    }
  }
  return best;
}

// Vlastný "scroll into view" s okrajom — natívny scrollIntoView({block:'nearest'})
// vie prvok nechať prilepený presne na hranu scrollovateľného kontajnera;
// tu necháme aspoň `margin` px voľného priestoru, aby bol prvok čitateľne vidno.
function scrollIntoViewWithMargin(el, margin = 24) {
  let node = el.parentElement;
  while (node && node !== document.body) {
    const style = window.getComputedStyle(node);
    const canScrollY = /(auto|scroll)/.test(style.overflowY) && node.scrollHeight > node.clientHeight;
    if (canScrollY) {
      const elRect = el.getBoundingClientRect();
      const containerRect = node.getBoundingClientRect();
      if (elRect.top < containerRect.top + margin) {
        node.scrollTop -= (containerRect.top + margin - elRect.top);
      } else if (elRect.bottom > containerRect.bottom - margin) {
        node.scrollTop += (elRect.bottom - (containerRect.bottom - margin));
      }
    }
    node = node.parentElement;
  }
  try {
    el.scrollIntoView(
      SUPPORTS_SMOOTH_SCROLL
        ? { block: 'nearest', inline: 'nearest', behavior: 'smooth' }
        : { block: 'nearest', inline: 'nearest' }
    );
  } catch {
    // Veľmi staré WebView môžu options objekt odmietnuť — skús bez neho.
    try { el.scrollIntoView(); } catch { /* no-op */ }
  }
}

const ARROW_TO_DIRECTION = {
  ArrowUp: 'up',
  ArrowDown: 'down',
  ArrowLeft: 'left',
  ArrowRight: 'right',
};

/**
 * @param {boolean} enabled
 * @param {*} resetKey — pri zmene (napr. názov aktuálnej obrazovky) sa focus
 *                        presunie na prvý dostupný prvok, ak nič relevantné nie je fokusnuté.
 */
export function useDpadNavigation(enabled = true, resetKey) {
  useEffect(() => {
    if (!enabled) return undefined;
    const id = setTimeout(() => {
      const root = getActiveFocusScope() || document;
      const candidates = getFocusableIn(root);
      const active = document.activeElement;
      const activeIsValid = active && isElementVisible(active) && candidates.includes(active);
      if (!activeIsValid && candidates.length > 0) {
        candidates[0].focus();
      }
    }, 80);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, resetKey]);

  useEffect(() => {
    if (!enabled) return undefined;
    let lastMoveAt = 0;

    function onKeyDown(e) {
      const direction = ARROW_TO_DIRECTION[e.key];
      if (!direction) return;

      const active = document.activeElement;
      const tag = active?.tagName;
      // Viacriadkový textarea potrebuje šípky (všetky smery) na pohyb kurzora
      // medzi riadkami — tam sa do spatial navigation vôbec nezapájame.
      if (tag === 'TEXTAREA') return;
      // Jednoriadkový input necháva vľavo/vpravo na pohyb kurzora v texte,
      // hore/dole napriek tomu presúva focus (viď "rolovacie menu" požiadavka).
      if (tag === 'INPUT' && (direction === 'left' || direction === 'right')) return;

      // Vždy potlačíme predvolené scrollovanie stránky šípkami (aby TV
      // obrazovka "neskákala"), aj keď sa nakoniec focus nikam nepresunie.
      e.preventDefault();

      const now = Date.now();
      if (now - lastMoveAt < MOVE_THROTTLE_MS) return;
      lastMoveAt = now;

      const root = getActiveFocusScope() || document;
      const candidates = getFocusableIn(root);
      if (candidates.length === 0) return;

      const current = active && isElementVisible(active) && candidates.includes(active) ? active : null;
      const next = findNext(current, direction, candidates);

      if (next) {
        next.focus();
        scrollIntoViewWithMargin(next);
      } else if (!current) {
        candidates[0].focus();
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [enabled]);
}
