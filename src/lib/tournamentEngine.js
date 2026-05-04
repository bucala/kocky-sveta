// ─── tournamentEngine.js ─────────────────────────────────────────────────
// Single source of truth for all tournament state derivation.
// Pure functions — no React, no side effects, no imports.
// Used by TournamentScreen, ArchiveDetail, finishTournament, and any future consumers.

// ─── normalizeRoundValue ─────────────────────────────────────────────────
// Converts a raw round cell into its canonical form.
//   number  → kept as-is (includes negatives / penalties)
//   'dash'  → kept as 'dash'
//   null    → null  (unplayed — must stay null until explicitly closed)
//   anything else → null
export function normalizeRoundValue(value) {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (value === 'dash') return 'dash';
  return null;
}

// ─── validateTournamentChecksum ──────────────────────────────────────────
// Verifies that sum(rounds[r][p] for all r) === playerTotals[p] for every player.
// Returns { valid: boolean, errors: string[] }
export function validateTournamentChecksum(rounds, playerTotals) {
  const errors = [];
  const n = playerTotals.length;
  for (let p = 0; p < n; p++) {
    let sum = 0;
    for (const round of (Array.isArray(rounds) ? rounds : [])) {
      const v = round?.[p];
      if (typeof v === 'number' && Number.isFinite(v)) sum += v;
    }
    if (sum !== playerTotals[p]) {
      errors.push(
        `Hráč #${p + 1}: súčet kôl = ${sum}, uložený totál = ${playerTotals[p]} — nesúlad.`
      );
    }
  }
  return { valid: errors.length === 0, errors };
}

// ─── computePlayerTotals ─────────────────────────────────────────────────
// Returns number[] of total scores. null/'dash'/non-finite treated as 0.
export function computePlayerTotals(rounds, playersCount) {
  return new Array(playersCount).fill(0).map((_, pIdx) => {
    let sum = 0;
    for (const round of (Array.isArray(rounds) ? rounds : [])) {
      const v = round?.[pIdx];
      if (typeof v === 'number' && Number.isFinite(v)) sum += v;
    }
    return sum;
  });
}

// ─── detectSuddenWin ─────────────────────────────────────────────────────
// Sudden Win: a player scored exactly `target` with a 6-of-a-kind (6 dice).
// The flag is stored on the tournament as _suddenWin: { playerIdx, round }.
// Returns { isSuddenWin: boolean, playerIdx: number|null, round: number|null }
export function detectSuddenWin(tournament) {
  const sw = tournament?._suddenWin;
  if (
    sw &&
    typeof sw.playerIdx === 'number' &&
    sw.playerIdx >= 0 &&
    sw.playerIdx < (tournament.players?.length ?? 0)
  ) {
    return { isSuddenWin: true, playerIdx: sw.playerIdx, round: sw.round ?? null };
  }
  return { isSuddenWin: false, playerIdx: null, round: null };
}

// ─── computeRanking ──────────────────────────────────────────────────────
// Returns players sorted by total descending.
// [{ playerIdx, name, total, rank }]
// Ties share the same rank number.
export function computeRanking(players, playerTotals) {
  const sorted = players
    .map((name, playerIdx) => ({ playerIdx, name, total: playerTotals[playerIdx] }))
    .sort((a, b) => b.total - a.total);

  let rank = 1;
  for (let i = 0; i < sorted.length; i++) {
    if (i > 0 && sorted[i].total < sorted[i - 1].total) rank = i + 1;
    sorted[i].rank = rank;
  }
  return sorted;
}

// ─── computeWinners ──────────────────────────────────────────────────────
// Determines winners from raw tournament data. Returns:
//   { winners: number[], isDraw: boolean, valid: boolean, errors: string[], reason: string,
//     achievers: number[], pendingAchievers: number[] }
//
// Priority:
//   1. Sudden Win → immediate single winner, no confirmation required.
//   2. r18 = 'Nie' (strict mode) → first achiever(s) in earliest round win.
//   3. r18 = 'Áno' (classic mode) → winners from _confirmedDetailed entries.
export function computeWinners(tournament) {
  const players = tournament?.players || [];
  const rounds = tournament?.rounds || [];
  const target = tournament?.targetScore || 10000;
  const playerTotals = computePlayerTotals(rounds, players.length);

  // 1. Sudden Win overrides everything
  const suddenWin = detectSuddenWin(tournament);
  if (suddenWin.isSuddenWin) {
    const idx = suddenWin.playerIdx;
    return {
      winners: [idx],
      totals: playerTotals,
      playerTotals,
      achievers: [idx],
      pendingAchievers: [],
      isDraw: false,
      valid: true,
      errors: [],
      reason: `Náhla výhra — hráč ${players[idx]} hodil 6 rovnakých s 6 kockami.`,
      isSuddenWin: true,
    };
  }

  // 2. Achievers: players at or above target
  const achievers = playerTotals
    .map((t, idx) => ({ idx, total: t }))
    .filter(x => x.total >= target)
    .map(x => x.idx);

  if (achievers.length === 0) {
    return {
      winners: [],
      totals: playerTotals,
      playerTotals,
      achievers: [],
      pendingAchievers: [],
      isDraw: false,
      valid: true,
      errors: [],
      reason: 'Žiadny hráč ešte nedosiahol cieľ.',
      isSuddenWin: false,
    };
  }

  // Determine confirmation mode
  const r18 = (tournament.rules || []).find(r => r.id === 'r18');
  // isStrictMode: r18 not present or selected !== 'Áno'
  const strictMode = !r18 || r18.selected !== 'Áno';

  let winners = [];
  let reason = '';
  let pendingAchievers = [];

  if (strictMode) {
    // r18 = 'Nie': first-to-reach-target wins; ties within same round share victory.
    const reachedAt = achievers.map(idx => {
      let cum = 0;
      for (let r = 0; r < rounds.length; r++) {
        const v = rounds[r]?.[idx];
        if (typeof v === 'number' && Number.isFinite(v)) cum += v;
        if (cum >= target) return { idx, round: r };
      }
      return { idx, round: Infinity };
    });
    const minRound = Math.min(...reachedAt.map(x => x.round));
    winners = reachedAt.filter(x => x.round === minRound).map(x => x.idx);
    reason = winners.length === 1
      ? `Hráč dosiahol cieľ ako prvý v kole ${minRound + 1}.`
      : `${winners.length} hráči dosiahli cieľ v rovnakom kole (${minRound + 1}). Remíza.`;
  } else {
    // r18 = 'Áno': use _confirmedDetailed
    const confirmed = Array.isArray(tournament._confirmedDetailed)
      ? tournament._confirmedDetailed
      : [];
    const confirmedAchievers = confirmed.filter(c => achievers.includes(c.player));
    pendingAchievers = achievers.filter(
      a => !confirmedAchievers.some(c => c.player === a)
    );

    if (confirmedAchievers.length === 0) {
      return {
        winners: [],
        totals: playerTotals,
      playerTotals,
        achievers,
        pendingAchievers,
        isDraw: false,
        valid: false,
        errors: [
          `Turnaj sa nedá uzatvoriť — ${achievers.length} hráč(ov) dosiahlo cieľ, no žiadny ešte nepotvrdil výhru.`,
        ],
        reason: `${achievers.length} hráč(ov) dosiahlo cieľ, ale ešte nepotvrdil(i) výhru.`,
        isSuddenWin: false,
      };
    }

    if (pendingAchievers.length > 0) {
      return {
        winners: [],
        totals: playerTotals,
      playerTotals,
        achievers,
        pendingAchievers,
        isDraw: false,
        valid: false,
        errors: [
          `Turnaj sa nedá uzatvoriť — ${pendingAchievers.length} hráč(ov) ešte nepotvrdil(i) výhru.`,
        ],
        reason: `${pendingAchievers.length} hráč(ov) má dosiahnutý cieľ ale ešte nepotvrdil(i) výhru.`,
        isSuddenWin: false,
      };
    }

    const minRound = Math.min(...confirmedAchievers.map(c => c.round));
    const earliest = confirmedAchievers.filter(c => c.round === minRound);
    winners = earliest.map(c => c.player);
    reason = winners.length === 1
      ? `Víťazstvo potvrdené najskôr v kole ${minRound + 1}.`
      : `${winners.length} hráči potvrdili víťazstvo v rovnakom kole (${minRound + 1}). Remíza.`;
  }

  // Validation: every winner must actually be at or above target
  const errors = [];
  for (const w of winners) {
    if (typeof w !== 'number' || w < 0 || w >= players.length) {
      errors.push(`Neplatný index víťaza: ${w}.`);
      continue;
    }
    if (playerTotals[w] < target) {
      errors.push(
        `Víťaz "${players[w]}" má skóre ${playerTotals[w]}, čo je menej ako cieľ ${target}.`
      );
    }
  }
  const valid = errors.length === 0;

  return {
    winners: valid ? winners : [],
    playerTotals,
    achievers,
    pendingAchievers,
    isDraw: valid && winners.length > 1,
    valid,
    errors,
    reason,
    isSuddenWin: false,
  };
}

// ─── evaluateTournamentState ──────────────────────────────────────────────
// THE single source of truth for all tournament derivations.
// Called once in the parent/container; the result is passed to all children.
//
// Returns:
//   normalizedRounds      – rounds with every cell run through normalizeRoundValue
//   playerTotals          – number[] of total scores
//   ranking               – sorted [{playerIdx,name,total,rank}]
//   winners               – number[] of winner player indices
//   isSuddenWin           – boolean
//   suddenWinPlayerIdx    – number|null
//   isDraw                – boolean
//   status                – 'ACTIVE' | 'WAITING_FOR_OTHERS' | 'FINISHED'
//   finalizationEligibility – { eligible: boolean, reason: string }
//   validationErrors      – string[]
//   checksumValid         – boolean
//   winnerComputation     – full computeWinners result (for debugging / ArchiveDetail)
export function evaluateTournamentState(tournament, options = {}) {
  if (!tournament || !Array.isArray(tournament.players) || !Array.isArray(tournament.rounds)) {
    return {
      normalizedRounds: [],
      playerTotals: [],
      ranking: [],
      winners: [],
      isSuddenWin: false,
      suddenWinPlayerIdx: null,
      isDraw: false,
      status: 'ACTIVE',
      finalizationEligibility: { eligible: false, reason: 'Neplatný turnaj.' },
      validationErrors: ['Neplatný alebo prázdny objekt turnaja.'],
      checksumValid: false,
      winnerComputation: null,
    };
  }

  const players = tournament.players;
  const target = tournament.targetScore || 10000;

  // 1. Normalize all round cells
  const normalizedRounds = (tournament.rounds || []).map(round =>
    Array.isArray(round)
      ? round.map(normalizeRoundValue)
      : new Array(players.length).fill(null)
  );

  // 2. Player totals from normalized rounds
  const playerTotals = computePlayerTotals(normalizedRounds, players.length);

  // 3. Checksum: compare normalized-derived totals against persisted _validatedTotals if present
  let checksumValid = true;
  const checksumErrors = [];
  if (Array.isArray(tournament._validatedTotals)) {
    const cs = validateTournamentChecksum(normalizedRounds, tournament._validatedTotals);
    checksumValid = cs.valid;
    checksumErrors.push(...cs.errors);
  }

  // 4. Ranking
  const ranking = computeRanking(players, playerTotals);

  // 5. Sudden Win detection
  const suddenWinInfo = detectSuddenWin(tournament);

  // 6. Full winner computation
  const winnerComputation = computeWinners({
    ...tournament,
    rounds: normalizedRounds,    // use normalized copy
  });

  const winners = winnerComputation.winners;
  const isDraw = winnerComputation.isDraw;
  const isSuddenWin = winnerComputation.isSuddenWin;
  const suddenWinPlayerIdx = suddenWinInfo.playerIdx;

  // 7. Determine status
  // FINISHED: tournament.status already 'finished', or sudden win, or valid winners after round complete
  let status;
  if (
    tournament.status === 'finished' ||
    isSuddenWin ||
    (winners.length > 0 && winnerComputation.valid)
  ) {
    status = 'FINISHED';
  } else if (winnerComputation.achievers.length > 0 && winnerComputation.pendingAchievers.length > 0) {
    // Someone reached target but others haven't confirmed yet (classic mode)
    status = 'WAITING_FOR_OTHERS';
  } else if (winnerComputation.achievers.length > 0 && !winnerComputation.valid) {
    // Achievers exist but round is incomplete
    status = 'WAITING_FOR_OTHERS';
  } else {
    status = 'ACTIVE';
  }

  // 8. Finalization eligibility
  const validationErrors = [
    ...winnerComputation.errors,
    ...checksumErrors,
  ];

  let finalizationEligible = false;
  let finalizationReason = '';

  if (isSuddenWin) {
    finalizationEligible = true;
    finalizationReason = 'Náhla výhra — okamžité uzavretie.';
  } else if (!checksumValid) {
    finalizationReason = 'Checksum nesúlad — turnaj sa nedá uzatvoriť.';
  } else if (!winnerComputation.valid) {
    finalizationReason = winnerComputation.reason;
  } else if (winners.length === 0) {
    finalizationReason = 'Žiadny víťaz ešte nie je určený.';
  } else {
    finalizationEligible = true;
    finalizationReason = winnerComputation.reason;
  }

  return {
    normalizedRounds,
    playerTotals,
    ranking,
    winners,
    isSuddenWin,
    suddenWinPlayerIdx,
    isDraw,
    status,
    finalizationEligibility: { eligible: finalizationEligible, reason: finalizationReason },
    validationErrors,
    checksumValid,
    winnerComputation,
  };
}
