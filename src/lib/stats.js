// Štatistiky hráčov z archívu turnajov. Čisté funkcie bez Reactu (testovateľné).
import { computePlayerTotals } from './tournamentEngine.js';

// Víťazi turnaja ako pole indexov. Podporuje všetky tvary v archíve:
// `winner` (číslo alebo pole – hra a import z Excelu), `winners` (OCR import)
// a staršie `_validatedWinners`.
export function getWinners(t) {
  if (!t) return [];
  const src = t.winner ?? t.winners ?? t._validatedWinners ?? null;
  const arr = Array.isArray(src) ? src : (src === null || src === undefined ? [] : [src]);
  return arr.filter(i => Number.isInteger(i) && i >= 0 && i < (t.players?.length ?? 0));
}

// Do štatistík patria iba dohrané hry. OCR import nemá `status`, ale má víťazov.
export function isCompletedGame(t) {
  if (t?.status === 'finished') return true;
  if (t?.status === 'aborted' || t?.status === 'active') return false;
  return getWinners(t).length > 0;
}

function gameDate(t) {
  return t.finishedAt || t.date || t.startedAt || null;
}

function timeOf(t) {
  const d = gameDate(t);
  const ms = typeof d === 'number' ? d : Date.parse(d);
  return Number.isFinite(ms) ? ms : 0;
}

function nameKey(name) {
  return String(name ?? '').trim().toLocaleLowerCase('sk');
}

export function computeAllStats(tournaments) {
  const map = {};
  const games = (Array.isArray(tournaments) ? tournaments : [])
    .filter(t => Array.isArray(t?.players) && Array.isArray(t?.rounds) && t.players.length >= 2)
    .filter(isCompletedGame)
    // od najnovšej po najstaršiu, aby „Posledné hry“ ukazovali naozaj posledné
    .sort((a, b) => timeOf(b) - timeOf(a));

  for (const t of games) {
    const totals = computePlayerTotals(t.rounds, t.players.length);
    const winners = getWinners(t);
    const isDrawGame = winners.length > 1;
    const counted = new Set();

    t.players.forEach((rawName, idx) => {
      const key = nameKey(rawName);
      if (!key || counted.has(key)) return;
      counted.add(key);
      if (!map[key]) {
        map[key] = {
          name: String(rawName).trim(),
          games: 0, wins: 0, draws: 0, totalScore: 0, bestGame: 0,
          roundsPlayed: 0, roundScores: [], opponents: {}, recentGames: [],
        };
      }
      const s = map[key];
      const score = totals[idx] ?? 0;
      const isWin = winners.includes(idx);
      const isDraw = isWin && isDrawGame;

      s.games++;
      if (isWin && !isDraw) s.wins++;
      if (isDraw) s.draws++;
      s.totalScore += score;
      if (score > s.bestGame) s.bestGame = score;
      s.roundsPlayed += t.rounds.filter(r => typeof r?.[idx] === 'number').length;
      for (const r of t.rounds) {
        const v = r?.[idx];
        if (typeof v === 'number' && v !== 0) s.roundScores.push(v);
      }
      t.players.forEach((opp, oi) => {
        const ok = nameKey(opp);
        if (oi !== idx && ok && ok !== key) {
          const label = String(opp).trim();
          s.opponents[label] = (s.opponents[label] || 0) + 1;
        }
      });
      s.recentGames.push({
        date: gameDate(t),
        players: t.players,
        score,
        win: isWin,
        draw: isDraw,
        target: t.targetScore || 10000,
      });
    });
  }

  return Object.values(map)
    .filter(s => s.games > 0)
    .map(s => ({
      ...s,
      avgScore: Math.round(s.totalScore / s.games),
      avgRound: s.roundScores.length > 0
        ? Math.round(s.roundScores.reduce((a, b) => a + b, 0) / s.roundScores.length)
        : 0,
      winRate: Math.round(((s.wins + s.draws * 0.5) / s.games) * 100),
      topOpponent: Object.entries(s.opponents).sort((a, b) => b[1] - a[1])[0]?.[0] ?? '—',
      recentGames: s.recentGames.slice(0, 5),
    }))
    .sort((a, b) => b.games - a.games || b.winRate - a.winRate);
}
