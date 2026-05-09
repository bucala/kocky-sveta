// src/online/useRoomSubscription.ts
import { useEffect } from 'react';
import { db } from '../lib/firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import type { RoomDocument } from './types';

export function useRoomSubscription(
  roomId: string | null,
  onUpdate: (data: RoomDocument) => void,
  onError?: (err: Error) => void
) {
  useEffect(() => {
    if (!roomId) return;

    const roomRef = doc(db, 'rooms', roomId);
    const unsubscribe = onSnapshot(
      roomRef,
      (snap) => {
        if (snap.exists()) {
          console.log('[useRoomSubscription] update:', roomId);
          onUpdate(snap.data() as RoomDocument);
        }
      },
      (err) => {
        console.error('[useRoomSubscription] chyba:', err.code, err.message);
        onError?.(err);
      }
    );

    return () => unsubscribe();
  }, [roomId]);
}
