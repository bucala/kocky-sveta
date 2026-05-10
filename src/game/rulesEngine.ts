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

  // 5. aplikuj value (zatiaľ bez pravidiel – len suma)
  if (rawValue !== null) {
    entry.value = rawValue;
    player.totalScore += rawValue;
  } else {
    // čiarka / žiadny zápis
    entry.value = null;
  }

  // 6. (Neskôr: tu pôjde kontrola cieľa, lock kola, eventy...)
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