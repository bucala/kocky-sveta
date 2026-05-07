// ─── Formátovanie dátumu/času ──────────────────────────────────────────────
// Utility funkcie pre formátovanie dátumov, časov a dĺžky trvania.
// Neimportujú nič lokálne — čistý modul bez závislostí.

/**
 * Formátuje ISO dátumový reťazec na slovenský formát.
 * @param {string|null} iso
 * @returns {string}
 */
export function formatDateTime(iso) {
  if (!iso) return '—';
  const d = new Date(iso);
  return d.toLocaleString('sk-SK', {
    day: 'numeric', month: 'long', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  });
}

/**
 * Vypočíta a formátuje trvanie medzi dvoma ISO dátumami.
 * @param {string|null} startIso
 * @param {string|null} endIso
 * @returns {string|null}
 */
export function formatDuration(startIso, endIso) {
  if (!startIso || !endIso) return null;
  const ms = new Date(endIso) - new Date(startIso);
  if (ms < 0) return null;
  const min = Math.floor(ms / 60000);
  if (min < 60) return `${min} min`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return `${h} h ${m} min`;
}
