export type PlayerId = string;

export interface PlayerState {
  id: PlayerId;
  name: string;
  totalScore: number;
}

export interface RoundEntry {
  playerId: PlayerId;
  value: number | null; // null = čiarka / žiadny zápis
}

export interface RoundState {
  index: number; // kolo 1,2,3...
  entries: RoundEntry[];
}

export type GameMode = "classic" | "strict";

export interface GameSettings {
  targetScore: number; // napr. 10000
  mode: GameMode;
}

export interface TournamentState {
  players: PlayerState[];
  rounds: RoundState[];
  currentRoundIndex: number; // index v rounds
  currentPlayerId: PlayerId;
  isRoundLocked: boolean; // po tom, čo niekto dosiahne cieľ v kole
}

export type GameEventType =
  | "TEMPORARY_KING"
  | "WIN_PENDING_CONFIRM"
  | "WIN_CONFIRMED"
  | "DRAW_CONFIRMED"
  | "ROUND_LOCKED"
  | "FUNNY_TRIGGER";

export interface GameEvent {
  type: GameEventType;
  payload?: Record<string, unknown>;
}

export interface EngineResult {
  state: TournamentState;
  events: GameEvent[];
}

export interface GameResult {
  winners: PlayerId[];
  isDraw: boolean;
}