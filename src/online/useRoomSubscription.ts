// src/online/useRoomSubscription.ts
import { useEffect } from 'react';
import type { FirestoreError } from 'firebase/firestore';
import type { RoomDocument } from './types';

export function useRoomSubscription(
  roomId: string | null,
  onUpdate: (data: RoomDocument) => void,
  onError?: (err: FirestoreError) => void
) {
  useEffect(() => {
    if (!roomId) return;

    // Firebase sa načíta až pri pripojení do miestnosti (nie pri štarte appky).
    let unsubscribe: (() => void) | null = null;
    let cancelled = false;
    Promise.all([import('../lib/firebase'), import('firebase/firestore')]).then(([{ db }, { doc, onSnapshot }]) => {
      if (cancelled) return;
      const roomRef = doc(db, 'rooms', roomId);
      unsubscribe = onSnapshot(
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
    }).catch((err) => {
      console.error('[useRoomSubscription] Firebase sa nepodarilo načítať:', err);
      onError?.({ code: 'unavailable', message: String(err) } as FirestoreError);
    });

    return () => {
      cancelled = true;
      unsubscribe?.();
    };
  }, [roomId]);
}
