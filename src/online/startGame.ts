// src/online/startGame.ts
import { db } from '../lib/firebase';
import { doc, updateDoc, serverTimestamp } from 'firebase/firestore';

export async function startGame(roomId: string): Promise<void> {
  const roomRef = doc(db, 'rooms', roomId);
  await updateDoc(roomRef, {
    status: 'playing',
    updatedAt: serverTimestamp(),
  });
}
