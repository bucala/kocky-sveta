// src/online/updatePresence.ts
import { db } from '../lib/firebase';
import { doc, updateDoc } from 'firebase/firestore';

// Uses client timestamp (not serverTimestamp) to avoid the double-snapshot
// that serverTimestamp sentinels cause (optimistic + confirmed). The 30-second
// presence threshold tolerates reasonable clock drift between devices.
export async function updatePresence(roomId: string, uid: string): Promise<void> {
  await updateDoc(doc(db, 'rooms', roomId), {
    [`players.${uid}.lastSeen`]: Date.now(),
    [`players.${uid}.online`]: true,
  });
}

export async function markOffline(roomId: string, uid: string): Promise<void> {
  await updateDoc(doc(db, 'rooms', roomId), {
    [`players.${uid}.online`]: false,
  });
}
