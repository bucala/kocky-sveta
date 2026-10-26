// Spracovanie ručne zadanej hodnoty bunky (editor archívu).
// Vracia { ok: true, value } kde value je číslo, 'dash' alebo null (prázdna bunka),
// alebo { ok: false } pre text, ktorý nie je číslo.
export function parseScoreCell(input) {
  const raw = String(input ?? '').trim();
  if (raw === '' || raw === '·') return { ok: true, value: null };
  const lower = raw.toLowerCase();
  if (raw === '—' || raw === '–' || raw === '-' || lower === 'dash' || lower === 'čiarka') {
    return { ok: true, value: 'dash' };
  }
  // oddeľovače tisícov: medzery (aj nezalomiteľné), bodky, apostrofy
  const normalized = raw.replace(/[\s  .']/g, '').replace(/^[−–—]/, '-');
  if (!/^-?\d+$/.test(normalized)) return { ok: false };
  const n = Number(normalized);
  return Number.isSafeInteger(n) ? { ok: true, value: n } : { ok: false };
}

export function formatScoreCell(value) {
  if (value === 'dash') return '—';
  return typeof value === 'number' ? String(value) : '';
}
