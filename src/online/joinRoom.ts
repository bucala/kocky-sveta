// src/online/joinRoom.ts
import { db } from '../lib/firebase';
import { getAuth } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

export async function joinRoom(params: {
  roomId: string;
  playerName: string;
}): Promise<{ uid: string }> {
  const roomRef = doc(db, 'rooms', params.roomId);
  const snap = await getDoc(roomRef);

  if (!snap.exists()) {
    if ((window as any).__ksVerboseFirebase) console.error('[joinRoom] Miestnosť neexistuje:', params.roomId);
    throw new Error('Miestnosť neexistuje');
  }

  const uid = getAuth().currentUser?.uid;
  if (!uid) throw new Error('Nie si prihlásený');

  await updateDoc(roomRef, {
    [`players.${uid}`]: {
      name: params.playerName,
      score: 0,
      isReady: false,
      online: true,
    },
  });

  if ((window as any).__ksVerboseFirebase) console.log('[joinRoom] roomId:', params.roomId, 'uid:', uid);
  return { uid };
}
