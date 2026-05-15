import {
  TournamentState,
  GameSettings,
  EngineResult,
  PlayerId,
  GameEvent,
  GameResult,
} from "./types";

/**
 * GAME LOGIC LOCK
 *
 * Toto je jediný autoritatívny zdroj pravidiel hry.
 * Bez explicitného schválenia sa tu nemení správanie:
 * - víťazstva a remízy
 * - koncovky a potvrdenia
 * - dočasného kráľa
 * - uzamknutia kola po dosiahnutí cieľa
 *
 * Implementácia musí odrážať dokument docs/game-rules.md.
 */

export function applyScore(
  state: TournamentState,
  settings: GameSettings,
  playerId: PlayerId,
  rawValue: number | null
): EngineResult {
  // 1. skopíruj stav (aby sme nemenili pôvodný objekt)
  const nextState: TournamentState = {
    ...state,
    players: state.players.map((p) => ({ ...p })),
    rounds: state.rounds.map((r) => ({
      ...r,
      entries: r.entries.map((e) => ({ ...e })),
    })),
  };

  const events: GameEvent[] = [];

  // 2. nájdi hráča
  const player = nextState.players.find((p) => p.id === playerId);
  if (!player) {
    return { state, events };
  }

  // 3. nájdi aktuálne kolo
  const currentRound = nextState.rounds[nextState.currentRoundIndex];
  if (!currentRound) {
    return { state, events };
  }

  // 4. nájdi alebo vytvor zápis pre hráča v tomto kole
  let entry = currentRound.entries.find((e) => e.playerId === playerId);
  if (!entry) {
    entry = { playerId, value: null };
    currentRound.entries.push(entry);
  }

  // 5. aplikuj value
  if (rawValue !== null) {
    // Happy path: obyčajný plusový zápis
    if (rawValue > 0) {
      const minWO = settings.minWriteOut;
      const target = settings.targetScore;
      const currentTotal = player.totalScore;
      const newTotal = currentTotal + rawValue;

      // 5.1. minimálny odpis – zápis je príliš malý, engine ho neaplikuje
      if (rawValue < minWO) {
        return { state, events };
      }

      // 5.2. prekročenie cieľa – engine zápis neaplikuje
      if (newTotal > target) {
        return { state, events };
      }

      // 5.3. presný zásah cieľa mimo koncovky – engine neaplikuje zápis,
      // len signalizuje, že treba spustiť špeciálny flow (temporary king / popup)
      if (newTotal === target) {
        events.push({
          type: "HIT_TARGET_OUTSIDE_ENDGAME",
          payload: {
            playerId,
            rawValue,
            previousTotal: currentTotal,
            newTotal,
            target,
          },
        });
        return { state, events };
      }

      // 5.4. skutočný happy path: rawValue >= minWO a newTotal < target
      entry.value = rawValue;
      player.totalScore = newTotal;

      return { state: nextState, events };
    } else {
      // Ostatné prípady (penalizácia, záporné hodnoty, špeciálne kódy)
      entry.value = rawValue;
      player.totalScore += rawValue;
    }
  } else {
    // Čiarka / žiadny zápis
    entry.value = null;
  }

  // 6. (Neskôr: tu pôjde generovanie eventov – TEMPORARY_KING, WIN_PENDING_CONFIRM, ROUND_LOCKED, atď.)
  return { state: nextState, events };
}

export function computeWinners(
  state: TournamentState,
  settings: GameSettings
): GameResult {
  // TODO: implementovať podľa pravidiel:
  // - classic vs strict
  // - výhra vs remíza
  // - rozhodujúce kolo

  return {
    winners: [],
    isDraw: false,
  };
}
