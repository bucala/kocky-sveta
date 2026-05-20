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
  selectedSkinTs?: number;
  rules: string[];
  players: Record<string, PlayerInRoom>;
  gameState: GameState;
  activeTournament?: any | null;
  activeTournamentTs?: number;
  syncedTournaments?: any[] | null;
  syncedTournamentsTs?: number;
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
