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
import { useEffect } from 'react';

const FOCUSABLE_SELECTOR = [
  'button:not([disabled])',
  '[tabindex]:not([tabindex="-1"]):not([disabled])',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'a[href]',
].join(',');

function isVisible(el) {
  const rect = el.getBoundingClientRect();
  if (rect.width === 0 && rect.height === 0) return false;
  const style = window.getComputedStyle(el);
  return style.visibility !== 'hidden' && style.display !== 'none' && style.opacity !== '0';
}

function getFocusable() {
  return Array.from(document.querySelectorAll(FOCUSABLE_SELECTOR)).filter(isVisible);
}

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
      const candidates = getFocusable();
      const active = document.activeElement;
      const activeIsValid = active && candidates.includes(active);
      if (!activeIsValid && candidates.length > 0) {
        candidates[0].focus();
      }
    }, 80);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, resetKey]);

  useEffect(() => {
    if (!enabled) return undefined;

    function onKeyDown(e) {
      const direction = ARROW_TO_DIRECTION[e.key];
      if (!direction) return;

      const active = document.activeElement;
      const isTextInput = active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA');
      if (isTextInput && (direction === 'left' || direction === 'right')) return;

      const candidates = getFocusable();
      if (candidates.length === 0) return;

      const current = candidates.includes(active) ? active : null;
      const next = findNext(current, direction, candidates);

      if (next) {
        e.preventDefault();
        next.focus();
        next.scrollIntoView?.({ block: 'nearest', inline: 'nearest', behavior: 'smooth' });
      } else if (!current) {
        e.preventDefault();
        candidates[0].focus();
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [enabled]);
}
