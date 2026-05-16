// src/online/createRoom.ts
import { db } from '../lib/firebase';
import { getAuth } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { hashPin } from './hashPin';
import type { RoomDocument } from './types';

function generateRoomId(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  return Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

export async function createRoom(params: {
  hostName: string;
  pin: string;
  selectedSkin: string;
  rules: string[];
}): Promise<string> {
  const roomId = generateRoomId();
  const ownerPinHash = await hashPin(params.pin);

  const uid = getAuth().currentUser?.uid;
  if (!uid) throw new Error('Nie si prihlásený');

  const roomData: RoomDocument = {
    ownerPinHash,
    status: 'waiting',
    updatedAt: serverTimestamp(),
    selectedSkin: params.selectedSkin,
    rules: params.rules,
    players: {
      [uid]: {
        name: params.hostName,
        score: 0,
        isReady: false,
        online: true,
      },
    },
    gameState: {
      currentTurn: uid,
      lastRoll: [],
      history: [],
    },
  };

  await setDoc(doc(db, 'rooms', roomId), roomData);
  if ((window as any).__ksVerboseFirebase) console.log('[createRoom] roomId:', roomId, 'uid:', uid, 'data:', roomData);
  return roomId;
}
