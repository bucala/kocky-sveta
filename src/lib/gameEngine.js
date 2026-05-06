// ─── Game Engine — pure funkcie bez React závislostí ─────────────────────
// Obsahuje všetku hernú logiku ktorá nepotrebuje React state.
// Tieto funkcie sú testovateľné izolovane (vitest).
//
// POZOR NA IMPORT CYKLY:
//   Tento modul neimportuje nič z App.jsx, atoms/*, screens/*.
//   Môžu ho bezpečne importovať: App.jsx, hooks/*, screens/*, testy.

// ─── Formátovanie dátumu/času ─────────────────────────────────────────────
export function formatDateTime(iso) {
  if (!iso) return '—';
  const d = new Date(iso);
  return d.toLocaleString('sk-SK', {
    day: 'numeric', month: 'long', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  });
}

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

// ─── isStrictMode — pravidlo r18 ako prepínač chovania ───────────────────
// Strict mode (r18 = "Nie", default):
//   • Akonáhle sa skončí kolo a aspoň jeden hráč má skóre >= target,
//     turnaj OKAMŽITE skončí.
// Klasický mode (r18 = "Áno"):
//   • Hráč musí potvrdiť výhru ničnehodením v ďalšom ťahu.
export function isStrictMode(rules) {
  const r18 = (rules || []).find(r => r.id === 'r18');
  return !r18 || r18.selected !== 'Áno';
}

// ─── computeTotals — single source of truth pre súčty ────────────────────
// Null/'dash'/string hodnoty sa rátajú ako 0.
export function computeTotals(rounds, playersCount) {
  return new Array(playersCount).fill(0).map((_, pIdx) => {
    let sum = 0;
    for (const round of (Array.isArray(rounds) ? rounds : [])) {
      const v = round?.[pIdx];
      if (typeof v === 'number' && Number.isFinite(v)) sum += v;
    }
    return sum;
  });
}

// ─── computeWinners — autoritatívne určenie víťazov ──────────────────────
// Používa sa ako single source of truth pre:
//   • hlavičku VÍŤAZI (winnerCelebration)
//   • finálnu tabuľku v archíve
//   • finishTournament checksum validáciu
//
// Vstup:
//   tournament: { players, rounds, targetScore, _confirmedDetailed?, rules? }
// Návrat:
//   { winners, totals, achievers, pendingAchievers, isDraw, valid, errors, reason }
export function computeWinners(tournament) {
  const players = tournament?.players || [];
  const rounds = tournament?.rounds || [];
  const target = tournament?.targetScore || 10000;
  const totals = computeTotals(rounds, players.length);

  const achievers = totals
    .map((t, idx) => ({ idx, total: t }))
    .filter(x => x.total >= target)
    .map(x => x.idx);

  const r18 = (tournament.rules || []).find(r => r.id === 'r18');
  const requiresConfirmation = !r18 || r18.selected !== 'Nie'; // default Áno
  const confirmed = Array.isArray(tournament._confirmedDetailed) ? tournament._confirmedDetailed : [];

  // Fallback pre importované/archívne turnaje bez _confirmedDetailed
  const isFinishedWithoutConfirm =
    tournament.status === 'finished' &&
    requiresConfirmation &&
    confirmed.length === 0 &&
    achievers.length > 0;
  const useStrictDetection = !requiresConfirmation || isFinishedWithoutConfirm;

  if (achievers.length === 0) {
    return {
      winners: [], totals, achievers: [], pendingAchievers: [],
      isDraw: false, valid: true, errors: [],
      reason: 'Žiadny hráč ešte nedosiahol cieľ.',
    };
  }

  let winners = [];
  let reason = '';
  let pendingAchievers = [];

  if (useStrictDetection) {
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
    const confirmedAchievers = confirmed.filter(c => achievers.includes(c.player));
    pendingAchievers = achievers.filter(a => !confirmedAchievers.some(c => c.player === a));

    if (confirmedAchievers.length === 0) {
      return {
        winners: [], totals, achievers, pendingAchievers,
        isDraw: false, valid: false,
        errors: [`Turnaj sa nedá uzatvoriť — ${achievers.length} hráč(ov) dosiahlo cieľ, no žiadny ešte nepotvrdil výhru.`],
        reason: `${achievers.length} hráč(ov) dosiahlo cieľ, ale ešte nepotvrdil(i) výhru.`,
      };
    }

    const minRound = Math.min(...confirmedAchievers.map(c => c.round));
    const earliest = confirmedAchievers.filter(c => c.round === minRound);
    winners = earliest.map(c => c.player);

    if (pendingAchievers.length > 0) {
      return {
        winners: [], totals, achievers, pendingAchievers,
        isDraw: false, valid: false,
        errors: [`Turnaj sa nedá uzatvoriť — ${pendingAchievers.length} hráč(ov) ešte nepotvrdil(i) výhru.`],
        reason: `${pendingAchievers.length} hráč(ov) má dosiahnutý cieľ ale ešte nepotvrdil(i) výhru.`,
      };
    }

    reason = winners.length === 1
      ? `Víťazstvo potvrdené najskôr v kole ${minRound + 1}.`
      : `${winners.length} hráči potvrdili víťazstvo v rovnakom kole (${minRound + 1}). Remíza.`;
  }

  // Validácia: každý víťaz musí mať totals[idx] >= target
  const errors = [];
  for (const w of winners) {
    if (typeof w !== 'number' || w < 0 || w >= players.length) {
      errors.push(`Neplatný index víťaza: ${w}.`);
      continue;
    }
    if (totals[w] < target) {
      errors.push(`Víťaz "${players[w]}" má skóre ${totals[w]}, čo je menej ako cieľ ${target}.`);
    }
  }
  const valid = errors.length === 0;

  return {
    winners: valid ? winners : [],
    totals, achievers, pendingAchievers,
    isDraw: valid && winners.length > 1,
    valid, errors, reason,
  };
}
