// src/online/useRoomSubscription.ts
import { useEffect } from 'react';
import { db } from '../lib/firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import type { FirestoreError } from 'firebase/firestore';
import type { RoomDocument } from './types';

export function useRoomSubscription(
  roomId: string | null,
  onUpdate: (data: RoomDocument) => void,
  onError?: (err: FirestoreError) => void
) {
  useEffect(() => {
    if (!roomId) return;

    const roomRef = doc(db, 'rooms', roomId);
    const unsubscribe = onSnapshot(
      roomRef,
      { includeMetadataChanges: true },
      (snap) => {
        if (!snap.exists()) return;
        // Skip optimistic local snapshots (our own un-confirmed writes).
        // Processing only server-confirmed snapshots makes the Firestore
        // document the single source of truth: a device never re-applies its
        // own echo, and while it has pending writes it skips snapshots so it
        // never applies a stale intermediate echo of its own rapid writes.
        if (snap.metadata.hasPendingWrites) return;
        onUpdate(snap.data() as RoomDocument);
      },
      (err) => {
        console.error('[useRoomSubscription] chyba:', err.code, err.message);
        onError?.(err);
      }
    );

    return () => unsubscribe();
  }, [roomId]);
}
