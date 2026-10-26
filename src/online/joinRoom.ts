// src/online/joinRoom.ts
import { db } from '../lib/firebase';
import { getAuth } from 'firebase/auth';
import { doc, getDoc, updateDoc, deleteField } from 'firebase/firestore';
import { hashPin } from './hashPin';
import { getDeviceId } from './deviceId';

const PIN_VERIFICATION_ENABLED = false;

export async function joinRoom(params: {
  roomId: string;
  playerName: string;
  pin?: string;
}): Promise<{ uid: string }> {
  const roomRef = doc(db, 'rooms', params.roomId);
  const snap = await getDoc(roomRef);

  if (!snap.exists()) {
    if ((window as any).__ksVerboseFirebase) console.error('[joinRoom] Miestnosť neexistuje:', params.roomId);
    throw new Error('Miestnosť neexistuje');
  }

  if (PIN_VERIFICATION_ENABLED && params.pin) {
    const roomData = snap.data();
    const inputHash = await hashPin(params.pin);
    if (inputHash !== roomData.ownerPinHash) {
      throw new Error('Nesprávny PIN miestnosti');
    }
  }

  const uid = getAuth().currentUser?.uid;
  if (!uid) throw new Error('Nie si prihlásený');

  const deviceId = getDeviceId();
  const existingPlayers = snap.data()?.players ?? {};
  const STALE_MS = 5 * 60 * 1000; // 5 minutes

  // 1. Vstup: iba pridanie vlastného záznamu. Pravidlá Firestore dovoľujú
  //    nečlenovi len pridať seba, nie mazať iných – preto sa upratuje až potom.
  await updateDoc(roomRef, {
    [`players.${uid}`]: {
      name: params.playerName,
      score: 0,
      isReady: false,
      online: true,
      deviceId,
      lastSeen: Date.now(),
    },
  });

  // 2. Upratanie ako člen: duch z tohto zariadenia (stará relácia) a hráči
  //    dlhšie offline. Zlyhanie upratovania nesmie zablokovať vstup.
  const cleanup: Record<string, any> = {};
  for (const [existingUid, player] of Object.entries(existingPlayers)) {
    if (existingUid === uid) continue;
    const p = player as any;
    if (p.deviceId === deviceId) {
      cleanup[`players.${existingUid}`] = deleteField();
      continue;
    }
    const lastSeen = p.lastSeen?.toMillis?.() ?? p.lastSeen ?? 0;
    const isStale = !p.online && typeof lastSeen === 'number' && lastSeen > 0 && Date.now() - lastSeen > STALE_MS;
    if (isStale) cleanup[`players.${existingUid}`] = deleteField();
  }
  if (Object.keys(cleanup).length > 0) {
    await updateDoc(roomRef, cleanup).catch((e) => {
      if ((window as any).__ksVerboseFirebase) console.warn('[joinRoom] cleanup skipped:', e?.code);
    });
  }

  if ((window as any).__ksVerboseFirebase) console.log('[joinRoom] roomId:', params.roomId, 'uid:', uid, 'deviceId:', deviceId);
  return { uid };
}
