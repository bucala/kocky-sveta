/**
 * xlsxLazy.js — lazy wrapper pre xlsx knižnicu.
 *
 * xlsx (~800 KB gzip ~400 KB) sa načíta AŽ pri prvom volaní
 * exportToExcel() alebo importFromExcel() — nie pri štarte appky.
 *
 * Použitie v App.jsx:
 *   import { getXLSX } from './utils/xlsxLazy.js';
 *   ...
 *   const XLSX = await getXLSX();
 *   const wb = XLSX.utils.book_new();
 *
 * Modul sa cachuje — druhé volanie getXLSX() je okamžité.
 */

let _xlsx = null;

export async function getXLSX() {
  if (_xlsx) return _xlsx;
  _xlsx = await import('xlsx');
  return _xlsx;
}
