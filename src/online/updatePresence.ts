// src/online/updatePresence.ts
import { db } from '../lib/firebase';
import { doc, updateDoc, serverTimestamp } from 'firebase/firestore';

export async function updatePresence(roomId: string, uid: string): Promise<void> {
  await updateDoc(doc(db, 'rooms', roomId), {
    [`players.${uid}.lastSeen`]: serverTimestamp(),
    [`players.${uid}.online`]: true,
  });
}

export async function markOffline(roomId: string, uid: string): Promise<void> {
  await updateDoc(doc(db, 'rooms', roomId), {
    [`players.${uid}.online`]: false,
  });
}
