import { describe, it, expect } from 'vitest';
import { decideRemoteActive, withNextRev, decideUndo, gameFingerprint } from './syncDecision.js';

const game = (over = {}) => ({ id: 7, rev: 3, rounds: [[300, 0]], currentPlayer: 1, currentRound: 0, ...over });

describe('decideRemoteActive', () => {
  it('počas nášho zápisu snímku preskočí', () => {
    expect(decideRemoteActive({ remoteRaw: '{}', pendingWrites: 1 })).toMatchObject({ action: 'skip', reason: 'write-in-flight' });
  });

  it('nová miestnosť bez poľa → nič', () => {
    expect(decideRemoteActive({ remoteRaw: undefined })).toMatchObject({ action: 'skip', reason: 'no-field' });
  });

  it('ozvenu nášho zápisu ignoruje', () => {
    const json = JSON.stringify(game());
    expect(decideRemoteActive({ remoteRaw: json, lastWrittenJson: json })).toMatchObject({ action: 'skip', reason: 'in-sync' });
  });

  it('vzdialený novší stav prevezme', () => {
    const remote = game({ rev: 5 });
    const d = decideRemoteActive({ remoteRaw: JSON.stringify(remote), lastWrittenJson: null, local: game({ rev: 4 }) });
    expect(d.action).toBe('apply');
    expect(d.parsed).toEqual(remote);
  });

  it('pri rovnakom rev vyhráva vzdialený stav (iné zariadenie zapísalo)', () => {
    expect(decideRemoteActive({ remoteRaw: JSON.stringify(game()), local: game({ currentPlayer: 0 }) }).action).toBe('apply');
  });

  it('lokálny novší stav toho istého turnaja odošle (návrat z offline)', () => {
    const d = decideRemoteActive({ remoteRaw: JSON.stringify(game({ rev: 2 })), local: game({ rev: 6 }) });
    expect(d.action).toBe('push');
  });

  it('iný turnaj s nižším rev sa aj tak prevezme', () => {
    expect(decideRemoteActive({ remoteRaw: JSON.stringify(game({ id: 8, rev: 1 })), local: game({ rev: 9 }) }).action).toBe('apply');
  });

  it('starší formát (objekt) a null', () => {
    expect(decideRemoteActive({ remoteRaw: game({ rev: 9 }), local: null })).toMatchObject({ action: 'apply', parsed: game({ rev: 9 }) });
    expect(decideRemoteActive({ remoteRaw: null, local: game() })).toMatchObject({ action: 'apply', parsed: null });
  });

  it('pokazený JSON → null (ako doteraz)', () => {
    expect(decideRemoteActive({ remoteRaw: '{nie', local: null })).toMatchObject({ action: 'apply', parsed: null });
  });

  it('staré turnaje bez rev', () => {
    expect(decideRemoteActive({ remoteRaw: JSON.stringify({ id: 7 }), local: { id: 7 } }).action).toBe('apply');
    expect(decideRemoteActive({ remoteRaw: JSON.stringify({ id: 7 }), local: { id: 7, rev: 1 } }).action).toBe('push');
  });
});

describe('withNextRev', () => {
  it('zvýši rev nad oba známe stavy', () => {
    expect(withNextRev({ rev: 4 }, { rev: 2, a: 1 })).toEqual({ rev: 5, a: 1 });
    expect(withNextRev({ rev: 1 }, { rev: 8 })).toEqual({ rev: 9 });
    expect(withNextRev(null, { a: 1 })).toEqual({ a: 1, rev: 1 });
  });
  it('null nechá tak (koniec turnaja)', () => {
    expect(withNextRev({ rev: 3 }, null)).toBeNull();
  });
});

describe('decideUndo', () => {
  const before = game({ rev: 3, rounds: [[300]], currentPlayer: 1 });
  const after = game({ rev: 4, rounds: [[300, 500]], currentPlayer: 0, currentRound: 1 });

  it('prázdny zásobník', () => {
    expect(decideUndo([], after)).toEqual({ ok: false, reason: 'empty' });
  });

  it('vráti predchádzajúci stav s vyšším rev', () => {
    const r = decideUndo([{ before, after }], after);
    expect(r.ok).toBe(true);
    expect(r.rest).toEqual([]);
    expect(r.restored).toEqual({ ...before, rev: 5 });
  });

  it('ak medzitým zapisovalo iné zariadenie, odmietne a vyčistí zásobník', () => {
    const remote = { ...after, rounds: [[300, 500], [100]], rev: 6 };
    expect(decideUndo([{ before, after }], remote)).toEqual({ ok: false, reason: 'changed', clear: true });
  });

  it('samotná zmena rev (ozvena) undo nezablokuje', () => {
    expect(decideUndo([{ before, after }], { ...after, rev: 10 }).ok).toBe(true);
  });

  it('odtlačok ignoruje nehernú zmenu', () => {
    expect(gameFingerprint({ ...after, presence: 1 })).toBe(gameFingerprint(after));
  });
});
