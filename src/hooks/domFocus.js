// src/hooks/domFocus.js
// Zdieľané DOM utility pre focus management — používané useDpadNavigation.js
// aj useFocusTrap.js, aby sa logika "čo je focusovateľné/viditeľné" nemusela
// duplikovať.

export const FOCUSABLE_SELECTOR = [
  'button:not([disabled])',
  '[tabindex]:not([tabindex="-1"]):not([disabled])',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'a[href]',
].join(',');

/**
 * Overí, či je prvok reálne viditeľný a použiteľný pre navigáciu —
 * nie len či existuje v DOM-e. Pokrýva:
 * - display: none / visibility: hidden / opacity: 0 (na samotnom prvku)
 * - aria-hidden="true" (na prvku alebo ktoromkoľvek predkovi)
 * - offsetParent === null (skrytý predkom cez display:none), s výnimkou
 *   position:fixed prvkov, ktoré môžu mať offsetParent null aj keď sú viditeľné
 */
export function isElementVisible(el) {
  if (!el || !el.isConnected) return false;

  const rect = el.getBoundingClientRect();
  if (rect.width === 0 && rect.height === 0) return false;

  const style = window.getComputedStyle(el);
  if (style.visibility === 'hidden' || style.display === 'none' || style.opacity === '0') return false;

  if (el.offsetParent === null && style.position !== 'fixed') return false;

  if (el.closest('[aria-hidden="true"]')) return false;

  return true;
}

/** Vráti zoznam focusovateľných a viditeľných prvkov v rámci `root`. */
export function getFocusableIn(root = document) {
  return Array.from(root.querySelectorAll(FOCUSABLE_SELECTOR)).filter(isElementVisible);
}
