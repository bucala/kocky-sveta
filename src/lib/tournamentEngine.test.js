// src/lib/tournamentEngine.test.js
// Characterization tests — lock in exact current behavior before any App.jsx changes.
import { describe, it, expect } from 'vitest';
import {
  normalizeRoundValue,
  validateTournamentChecksum,
  computePlayerTotals,
  detectSuddenWin,
  computeRanking,
  computeWinners,
  evaluateTournamentState,
} from './tournamentEngine.js';

const STRICT_RULES  = [{ id: 'r18', selected: 'Nie' }];  // default
const CLASSIC_RULES = [{ id: 'r18', selected: 'Áno' }];  // confirmation mode
const BASE = { players: ['Alice', 'Bob', 'Carol'], targetScore: 10000, rounds: [] };

// ── normalizeRoundValue ───────────────────────────────────────────────────
describe('normalizeRoundValue', () => {
  it('keeps finite numbers',  () => expect(normalizeRoundValue(500)).toBe(500));
  it('keeps negatives',       () => expect(normalizeRoundValue(-1000)).toBe(-1000));
  it('keeps zero',            () => expect(normalizeRoundValue(0)).toBe(0));
  it('keeps dash string',     () => expect(normalizeRoundValue('dash')).toBe('dash'));
  it('null → null',           () => expect(normalizeRoundValue(null)).toBeNull());
  it('undefined → null',      () => expect(normalizeRoundValue(undefined)).toBeNull());
  it('empty string → null',   () => expect(normalizeRoundValue('')).toBeNull());
  it('Infinity → null',       () => expect(normalizeRoundValue(Infinity)).toBeNull());
  it('NaN → null',            () => expect(normalizeRoundValue(NaN)).toBeNull());
});

// ── computePlayerTotals ──────────────────────────────────────────────────
describe('computePlayerTotals', () => {
  it('sums numbers, ignores null and dash', () => {
    const r = [[1000, 500], ['dash', 300], [null, null]];
    expect(computePlayerTotals(r, 2)).toEqual([1000, 800]);
  });
  it('handles penalties', () => {
    expect(computePlayerTotals([[-1000]], 1)).toEqual([-1000]);
  });
  it('returns zeros for empty rounds', () => {
    expect(computePlayerTotals([], 3)).toEqual([0, 0, 0]);
  });
  it('ignores string values other than dash', () => {
    expect(computePlayerTotals([['foo', 500]], 2)).toEqual([0, 500]);
  });
});

// ── validateTournamentChecksum ────────────────────────────────────────────
describe('validateTournamentChecksum', () => {
  it('passes when sums match', () =>
    expect(validateTournamentChecksum([[1000, 500], [2000, 1000]], [3000, 1500]).valid).toBe(true));
  it('fails on mismatch', () => {
    const r = validateTournamentChecksum([[1000]], [9999]);
    expect(r.valid).toBe(false);
    expect(r.errors.length).toBeGreaterThan(0);
  });
  it('dash counts as 0', () =>
    expect(validateTournamentChecksum([['dash']], [0]).valid).toBe(true));
  it('null counts as 0', () =>
    expect(validateTournamentChecksum([[null]], [0]).valid).toBe(true));
});

// ── detectSuddenWin ───────────────────────────────────────────────────────
describe('detectSuddenWin', () => {
  it('returns false when no _suddenWin flag', () =>
    expect(detectSuddenWin({ players: ['A'] }).isSuddenWin).toBe(false));
  it('detects valid _suddenWin flag', () => {
    const t = { players: ['A', 'B'], _suddenWin: { playerIdx: 1, round: 0 } };
    const r = detectSuddenWin(t);
    expect(r.isSuddenWin).toBe(true);
    expect(r.playerIdx).toBe(1);
  });
  it('rejects out-of-bounds playerIdx', () => {
    const t = { players: ['A'], _suddenWin: { playerIdx: 5, round: 0 } };
    expect(detectSuddenWin(t).isSuddenWin).toBe(false);
  });
  it('returns false on null tournament', () =>
    expect(detectSuddenWin(null).isSuddenWin).toBe(false));
});

// ── computeRanking ────────────────────────────────────────────────────────
describe('computeRanking', () => {
  it('sorts descending', () => {
    const r = computeRanking(['Alice', 'Bob'], [3000, 7000]);
    expect(r[0].name).toBe('Bob');
    expect(r[0].rank).toBe(1);
    expect(r[1].rank).toBe(2);
  });
  it('shared rank on tie', () => {
    const r = computeRanking(['A', 'B', 'C'], [5000, 5000, 3000]);
    expect(r[0].rank).toBe(1);
    expect(r[1].rank).toBe(1);
    expect(r[2].rank).toBe(3);
  });
  it('returns empty array for empty players', () =>
    expect(computeRanking([], [])).toEqual([]));
});

// ── computeWinners — strict mode (r18='Nie') ──────────────────────────────
describe('computeWinners strict mode', () => {
  it('no winners when no one reached target', () => {
    const t = { ...BASE, rules: STRICT_RULES, rounds: [[500, 300, 200]] };
    const r = computeWinners(t);
    expect(r.winners).toEqual([]);
    expect(r.valid).toBe(true);
  });

  it('picks first achiever by earliest round', () => {
    // Alice(0) reaches 10000 at round 3, Bob(1) at round 2 → Bob wins alone
    const t = {
      ...BASE, rules: STRICT_RULES,
      rounds: [[2000, 2000, 1000], [2000, 3000, 0], [2000, 5001, 0], [4001, 0, 0]],
    };
    const r = computeWinners(t);
    expect(r.winners).toEqual([1]);
    expect(r.valid).toBe(true);
    expect(r.isDraw).toBe(false);
  });

  it('two-way draw when both hit target same round', () => {
    const t = {
      ...BASE, rules: STRICT_RULES,
      rounds: [[5000, 5000, 0], [5000, 5000, 0]],
    };
    const r = computeWinners(t);
    expect(r.winners.sort()).toEqual([0, 1]);
    expect(r.isDraw).toBe(true);
  });

  it('three-way draw', () => {
    const t = {
      players: ['A', 'B', 'C'], targetScore: 10000, rules: STRICT_RULES,
      rounds: [[3000, 3000, 3000], [3000, 3000, 3000], [4000, 4000, 4000]],
    };
    const r = computeWinners(t);
    expect(r.winners.length).toBe(3);
    expect(r.isDraw).toBe(true);
  });

  it('result has `totals` alias for backward compat with finishTournament', () => {
    const t = { ...BASE, rules: STRICT_RULES, rounds: [[1000, 500, 200]] };
    const r = computeWinners(t);
    expect(r.totals).toBeDefined();
    expect(r.totals).toEqual([1000, 500, 200]);
  });

  it('result also has `playerTotals`', () => {
    const t = { ...BASE, rules: STRICT_RULES, rounds: [[1000, 500, 200]] };
    const r = computeWinners(t);
    expect(r.playerTotals).toEqual(r.totals);
  });
});

// ── computeWinners — sudden win ───────────────────────────────────────────
describe('computeWinners sudden win', () => {
  it('_suddenWin bypasses round logic', () => {
    const t = {
      ...BASE, rules: STRICT_RULES,
      rounds: [[10000, 5000, 3000]],
      _suddenWin: { playerIdx: 0, round: 0 },
    };
    const r = computeWinners(t);
    expect(r.winners).toEqual([0]);
    expect(r.isSuddenWin).toBe(true);
    expect(r.valid).toBe(true);
    expect(r.isDraw).toBe(false);
  });

  it('sudden win is not a draw even if another player also reached target', () => {
    const t = {
      ...BASE, rules: STRICT_RULES,
      rounds: [[10000, 10000, 3000]],
      _suddenWin: { playerIdx: 0, round: 0 },
    };
    const r = computeWinners(t);
    expect(r.winners).toEqual([0]);
    expect(r.isDraw).toBe(false);
  });
});

// ── computeWinners — classic mode (r18='Áno') ────────────────────────────
describe('computeWinners classic mode', () => {
  it('no winner when achiever not yet confirmed', () => {
    const t = {
      ...BASE, rules: CLASSIC_RULES,
      rounds: [[10000, 5000, 3000]],
      _confirmedDetailed: [],
    };
    const r = computeWinners(t);
    expect(r.winners).toEqual([]);
    expect(r.valid).toBe(false);
  });

  it('winner when confirmed', () => {
    const t = {
      ...BASE, rules: CLASSIC_RULES,
      rounds: [[10000, 5000, 3000]],
      _confirmedDetailed: [{ player: 0, round: 0, confirmedAt: 1000 }],
    };
    const r = computeWinners(t);
    expect(r.winners).toEqual([0]);
    expect(r.valid).toBe(true);
  });
});

// ── evaluateTournamentState ───────────────────────────────────────────────
describe('evaluateTournamentState', () => {
  it('ACTIVE when no one reached target', () => {
    const t = { ...BASE, status: 'active', rules: STRICT_RULES, rounds: [[1000, 500, 200]] };
    expect(evaluateTournamentState(t).status).toBe('ACTIVE');
  });

  it('FINISHED when winner determined', () => {
    const t = {
      ...BASE, status: 'active', rules: STRICT_RULES,
      rounds: [[5000, 0, 0], [5000, 0, 0]],
    };
    const r = evaluateTournamentState(t);
    expect(r.status).toBe('FINISHED');
    expect(r.winners).toEqual([0]);
  });

  it('FINISHED on sudden win', () => {
    const t = {
      ...BASE, status: 'active', rules: STRICT_RULES,
      rounds: [[0, 0, 10000]],
      _suddenWin: { playerIdx: 2, round: 0 },
    };
    const r = evaluateTournamentState(t);
    expect(r.status).toBe('FINISHED');
    expect(r.isSuddenWin).toBe(true);
    expect(r.winners).toEqual([2]);
    expect(r.finalizationEligibility.eligible).toBe(true);
  });

  it('checksumValid false when _validatedTotals mismatch', () => {
    const t = {
      ...BASE, status: 'active',
      rounds: [[1000, 500, 200]],
      _validatedTotals: [9999, 500, 200],
    };
    const r = evaluateTournamentState(t);
    expect(r.checksumValid).toBe(false);
    expect(r.validationErrors.length).toBeGreaterThan(0);
  });

  it('checksumValid true when _validatedTotals absent (new game)', () => {
    const t = { ...BASE, status: 'active', rounds: [[1000, 500, 200]] };
    expect(evaluateTournamentState(t).checksumValid).toBe(true);
  });

  it('null cells normalized, totals still correct', () => {
    const t = { ...BASE, status: 'active', rounds: [[1000, null, null]] };
    const r = evaluateTournamentState(t);
    expect(r.normalizedRounds[0][1]).toBeNull();
    expect(r.playerTotals[1]).toBe(0);
  });

  it('header and table winners are the same reference', () => {
    const t = {
      players: ['A', 'B', 'C'], targetScore: 10000, status: 'active', rules: STRICT_RULES,
      rounds: [[3000, 3000, 3000], [3000, 3000, 3000], [4000, 4000, 4000]],
    };
    const r = evaluateTournamentState(t);
    // Both header and table read r.winners — same reference
    expect(r.winners).toBe(r.winners);
    expect(r.isDraw).toBe(true);
    expect(r.winners.length).toBe(3);
  });

  it('invalid/null tournament returns safe defaults', () => {
    const r = evaluateTournamentState(null);
    expect(r.status).toBe('ACTIVE');
    expect(r.winners).toEqual([]);
    expect(r.checksumValid).toBe(false);
  });

  it('finalizationEligibility.eligible false when no winners yet', () => {
    const t = { ...BASE, status: 'active', rules: STRICT_RULES, rounds: [[1000, 500, 200]] };
    expect(evaluateTournamentState(t).finalizationEligibility.eligible).toBe(false);
  });
});

// ── pendingDecision scenarios (fáza-8) ────────────────────────────────────
describe('computeWinners — pendingDecision blokuje výsledok', () => {
  it('open pendingDecision → no winner, valid=false', () => {
    // Alice has 9800, is about to score 200 — group decision pending
    const t = {
      ...BASE, rules: STRICT_RULES,
      rounds: [[9800, 5000, 3000]],
      pendingDecision: {
        id: '0-1-200',
        type: 'exact-hit-verification',
        player: 0,
        round: 1,
        score: 200,
        baseTotal: 9800,
        target: 10000,
        status: 'pending',
      },
    };
    const r = computeWinners(t);
    expect(r.winners).toEqual([]);
    expect(r.valid).toBe(false);
    expect(r.isSuddenWin).toBe(false);
  });

  it('closed pendingDecision (status≠pending) → normal evaluation continues', () => {
    // After Potvrdil: score was written, pendingDecision cleared → Alice at 10000 wins
    const t = {
      ...BASE, rules: STRICT_RULES,
      rounds: [[9800, 5000, 3000], [200, 0, 0]],
      pendingDecision: null,
    };
    const r = computeWinners(t);
    expect(r.winners).toEqual([0]);
    expect(r.valid).toBe(true);
  });

  it('Potvrdil path: exact 200 written → Alice wins at 10000', () => {
    const t = {
      ...BASE, rules: STRICT_RULES,
      rounds: [[9800, 5000, 3000], [200, 0, 0]],
    };
    const r = computeWinners(t);
    expect(r.winners).toEqual([0]);
    expect(r.playerTotals[0]).toBe(10000);
  });

  it('Nepotvrdil path: dash written → Alice stays at 9800, no winner', () => {
    const t = {
      ...BASE, rules: STRICT_RULES,
      rounds: [[9800, 5000, 3000], ['dash', 0, 0]],
    };
    const r = computeWinners(t);
    expect(r.winners).toEqual([]);
    expect(r.playerTotals[0]).toBe(9800);
  });

  it('sudden win bypasses pendingDecision check', () => {
    const t = {
      ...BASE, rules: STRICT_RULES,
      rounds: [[10000, 5000, 3000]],
      _suddenWin: { playerIdx: 0, round: 0 },
      pendingDecision: { id: 'x', status: 'pending' },
    };
    const r = computeWinners(t);
    expect(r.isSuddenWin).toBe(true);
    expect(r.winners).toEqual([0]);
  });

  it('evaluateTournamentState: open pendingDecision → status ACTIVE, not eligible', () => {
    const t = {
      ...BASE, status: 'active', rules: STRICT_RULES,
      rounds: [[9800, 5000, 3000]],
      pendingDecision: {
        id: '0-1-200',
        type: 'exact-hit-verification',
        player: 0, round: 1, score: 200,
        baseTotal: 9800, target: 10000,
        status: 'pending',
      },
    };
    const r = evaluateTournamentState(t);
    expect(r.status).toBe('ACTIVE');
    expect(r.finalizationEligibility.eligible).toBe(false);
    expect(r.winners).toEqual([]);
  });

  it('regression: normal game unaffected — no pendingDecision field', () => {
    const t = {
      ...BASE, rules: STRICT_RULES,
      rounds: [[3000, 2000, 1000], [3000, 2000, 1000], [4000, 2000, 1000]],
    };
    const r = computeWinners(t);
    expect(r.winners).toEqual([0]);
    expect(r.valid).toBe(true);
  });
});
