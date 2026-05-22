// src/online/types.ts

export type PlayerInRoom = {
  name: string;
  score: number;
  isReady: boolean;
  online?: boolean;
  deviceId?: string;    // stable per-device ID, independent of Firebase UID
  lastSeen?: any;       // Firestore serverTimestamp — used for presence heartbeat
};

export type GameHistoryItem = {
  playerId: string;
  roll: number[];
  createdAt: number;
};

export type GameState = {
  currentTurn: string;
  lastRoll: number[];
  history: GameHistoryItem[];
};

export type RoomDocument = {
  ownerPinHash: string;
  status: 'waiting' | 'playing' | 'finished';
  updatedAt: any;
  selectedSkin: string;
  rules: string[];
  players: Record<string, PlayerInRoom>;
  gameState: GameState;
  // Stored as a JSON string — the tournament object contains nested arrays
  // (rounds[] of score arrays) which Firestore rejects as raw data.
  activeTournament?: string | null;
  syncedTournaments?: string | null;
  // Chat messages — JSON string of ChatMessage[] (max 100 kept)
  chatMessages?: string | null;
  // Known players — JSON string of string[] — per-room player list
  knownPlayers?: string | null;
};

export type LocalTournament = {
  id: string;
  createdAt: number;
  updatedAt: number;
  state: any;
};

export type LocalArchiveItem = {
  id: string;
  finishedAt: number;
  snapshot: any;
};
