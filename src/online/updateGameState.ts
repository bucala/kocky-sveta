// src/online/updateGameState.ts
import { db } from '../lib/firebase';
import { doc, updateDoc } from 'firebase/firestore';

// Uses client timestamp for updatedAt — avoids the double-snapshot that
// serverTimestamp sentinels cause (Firestore fires once with the estimated
// value, then again with the confirmed server value, doubling snapshot traffic).
export async function updateGameState(roomId: string, patch: object): Promise<void> {
  const roomRef = doc(db, 'rooms', roomId);
  await updateDoc(roomRef, {
    ...patch,
    updatedAt: Date.now(),
  });
}
