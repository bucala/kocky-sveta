// src/hooks/useFocusTrap.js
// Zachytáva focus v rámci modálneho okna/popupu, kým je `active`:
// - presunie focus na prvý focusovateľný prvok vo vnútri kontajnera
// - Tab / Shift+Tab cyklí len medzi prvkami vo vnútri (nevyjde von)
// - zaregistruje kontajner ako aktívny "focus scope" pre useDpadNavigation,
//   takže aj šípky zostanú v rámci modalu
// - pri zatvorení vráti focus na prvok, ktorý modal otvoril
//
// Pozor: prvok vo vnútri kontajnera by NEMAL mať HTML/React atribút
// `autoFocus` — ten presunie focus synchrónne pri commite, ešte pred touto
// (pasívnou) effect, takže by sme si namiesto pôvodne fokusnutého prvku
// (napr. tlačidlo, ktoré modal otvorilo) zapamätali už samotný vnútorný
// prvok. Initial focus nechaj vždy na tomto hooku.
import { useEffect, useRef } from 'react';
import { getFocusableIn } from './domFocus.js';
import { pushFocusScope, getActiveFocusScope } from './focusScope.js';

export function useFocusTrap(containerRef, active = true) {
  const returnFocusRef = useRef(null);

  useEffect(() => {
    if (!active) return undefined;
    const container = containerRef.current;
    if (!container) return undefined;

    returnFocusRef.current = document.activeElement;
    const removeScope = pushFocusScope(container);

    const initial = getFocusableIn(container)[0];
    (initial || container).focus?.({ preventScroll: true });

    function keepFocusInside(e) {
      if (getActiveFocusScope() !== container || container.contains(e.target)) return;
      (getFocusableIn(container)[0] || container).focus?.({ preventScroll: true });
    }
    document.addEventListener('focusin', keepFocusInside, true);

    function onKeyDown(e) {
      if (e.key !== 'Tab' || getActiveFocusScope() !== container) return;
      const items = getFocusableIn(container);
      if (items.length === 0) {
        e.preventDefault();
        container.focus?.();
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    container.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('focusin', keepFocusInside, true);
      container.removeEventListener('keydown', onKeyDown);
      removeScope();
      if (returnFocusRef.current?.isConnected) returnFocusRef.current.focus?.({ preventScroll: true });
    };
  }, [active, containerRef]);
}
