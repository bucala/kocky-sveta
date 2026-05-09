// src/online/updateGameState.ts
import { db } from '../lib/firebase';
import { doc, updateDoc, serverTimestamp } from 'firebase/firestore';

export async function updateGameState(roomId: string, patch: object): Promise<void> {
  const roomRef = doc(db, 'rooms', roomId);
  await updateDoc(roomRef, {
    ...patch,
    updatedAt: serverTimestamp(),
  });
}
