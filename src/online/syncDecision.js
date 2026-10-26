// Čisté rozhodovanie online synchronizácie aktívneho turnaja (bez Reactu
// a Firebase), aby sa dalo otestovať. App.jsx podľa výsledku koná.

// Odtlačok stavu hry – podľa neho undo pozná, či medzitým nezapisoval niekto iný.
export function gameFingerprint(t) {
  if (!t) return '';
  return JSON.stringify([t.rounds, t.currentPlayer, t.currentRound, t.winner ?? null,
    t.pendingDecision ?? null, t.confirmationPendingPlayer ?? null]);
}

// Čo urobiť so snímkou activeTournament z Firestore:
//  skip  – prebieha náš zápis, pole ešte neexistuje, alebo je to ozvena nášho zápisu
//  push  – lokálny stav toho istého turnaja má vyššie rev (offline zápisy) → odoslať ho
//  apply – prevziať vzdialený stav
export function decideRemoteActive({ remoteRaw, lastWrittenJson, local, pendingWrites = 0 }) {
  if (pendingWrites > 0) return { action: 'skip', reason: 'write-in-flight' };
  if (remoteRaw === undefined) return { action: 'skip', reason: 'no-field' };
  // JSON reťazec (nový formát) alebo priamo objekt/null (starší formát)
  const json = typeof remoteRaw === 'string' ? remoteRaw : JSON.stringify(remoteRaw ?? null);
  if (json === lastWrittenJson) return { action: 'skip', reason: 'in-sync', json };
  let parsed = null;
  try { parsed = json ? JSON.parse(json) : null; } catch { parsed = null; }
  if (local && parsed && local.id === parsed.id && (local.rev ?? 0) > (parsed.rev ?? 0)) {
    return { action: 'push', json, parsed };
  }
  return { action: 'apply', json, parsed };
}

// Nový stav po lokálnej zmene dostane rev o jedna vyššie než ktorýkoľvek známy.
export function withNextRev(previous, computed) {
  if (!computed) return computed;
  return { ...computed, rev: Math.max(previous?.rev ?? 0, computed.rev ?? 0) + 1 };
}

// Undo: vráti stav pred posledným zápisom ako novú zmenu (vyššie rev), alebo
// odmietne, ak sa hra medzitým zmenila (napr. zápis z iného zariadenia).
export function decideUndo(stack, current) {
  if (!stack || !stack.length) return { ok: false, reason: 'empty' };
  const last = stack[stack.length - 1];
  if (!current || gameFingerprint(current) !== gameFingerprint(last.after)) {
    return { ok: false, reason: 'changed', clear: true };
  }
  return { ok: true, rest: stack.slice(0, -1), restored: { ...last.before, rev: (current.rev ?? 0) + 1 } };
}
