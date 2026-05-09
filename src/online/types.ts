// src/online/types.ts

export type PlayerInRoom = {
  name: string;
  score: number;
  isReady: boolean;
  online?: boolean;
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
