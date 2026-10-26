// Preklad chybových kódov Firebase do slovenčiny pre používateľa.
const MESSAGES = {
  'permission-denied': 'K miestnosti nemáš prístup. Skontroluj kód miestnosti, alebo ju možno zrušil jej zakladateľ.',
  'not-found': 'Miestnosť s týmto kódom neexistuje.',
  unavailable: 'Server nie je dostupný. Skontroluj pripojenie na internet a skús znova.',
  'deadline-exceeded': 'Server neodpovedá. Skús to o chvíľu znova.',
  'resource-exhausted': 'Online režim je dočasne preťažený. Skús to neskôr.',
  unauthenticated: 'Prihlásenie vypršalo. Obnov aplikáciu a skús znova.',
  'already-exists': 'Miestnosť s týmto kódom už existuje.',
};

export function friendlyFirebaseError(e, fallback = 'Niečo sa nepodarilo. Skús znova.') {
  const code = String(e?.code || '').replace(/^firestore\//, '').replace(/^auth\//, '');
  if (MESSAGES[code]) return MESSAGES[code];
  if (code === 'network-request-failed') return MESSAGES.unavailable;
  // vlastné slovenské hlášky (napr. „Miestnosť neexistuje“) ponecháme
  const msg = e?.message || '';
  if (msg && !/[A-Za-z]{4,} [A-Za-z]{3,} [A-Za-z]{3,}/.test(msg)) return msg;
  return fallback;
}
