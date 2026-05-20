// src/online/joinRoom.ts
import { db } from '../lib/firebase';
import { getAuth } from 'firebase/auth';
import { doc, getDoc, updateDoc, deleteField, serverTimestamp } from 'firebase/firestore';
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

  // Build a single atomic patch:
  // 1. Remove stale players (offline for >5 min) — cleans up ghost accumulation
  // 2. Remove same physical device with a different UID (session refresh)
  // 3. Upsert this device's current player entry
  const patch: Record<string, any> = {};

  for (const [existingUid, player] of Object.entries(existingPlayers)) {
    if (existingUid === uid) continue;
    const p = player as any;

    // Same physical device, different UID → ghost from session refresh
    if (p.deviceId === deviceId) {
      patch[`players.${existingUid}`] = deleteField();
      if ((window as any).__ksVerboseFirebase) console.log('[joinRoom] removing ghost (same device):', existingUid);
      continue;
    }

    // Stale player: offline flag AND lastSeen older than threshold
    const lastSeen = p.lastSeen?.toMillis?.() ?? p.lastSeen ?? 0;
    const isStale = !p.online && typeof lastSeen === 'number' && lastSeen > 0 && Date.now() - lastSeen > STALE_MS;
    if (isStale) {
      patch[`players.${existingUid}`] = deleteField();
      if ((window as any).__ksVerboseFirebase) console.log('[joinRoom] removing stale player:', existingUid, 'lastSeen:', lastSeen);
    }
  }

  patch[`players.${uid}`] = {
    name: params.playerName,
    score: 0,
    isReady: false,
    online: true,
    deviceId,
    lastSeen: serverTimestamp(),
  };

  await updateDoc(roomRef, patch);

  if ((window as any).__ksVerboseFirebase) console.log('[joinRoom] roomId:', params.roomId, 'uid:', uid, 'deviceId:', deviceId);
  return { uid };
}
