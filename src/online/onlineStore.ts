// src/online/onlineStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { RoomDocument } from './types';

type OnlineStatus = 'offline' | 'connected' | 'error';

type OnlineStore = {
  roomId: string | null;
  uid: string | null;
  isRecorder: boolean;   // true = room creator (writes to Firestore), false = observer (read-only)
  roomState: RoomDocument | null;
  status: OnlineStatus;

  setRoomId: (roomId: string) => void;
  setUid: (uid: string) => void;
  setIsRecorder: (v: boolean) => void;
  setRoomState: (state: RoomDocument) => void;
  setStatus: (status: OnlineStatus) => void;
  reset: () => void;
};

export const useOnlineStore = create<OnlineStore>()(
  persist(
    (set) => ({
      roomId: null,
      uid: null,
      isRecorder: false,
      roomState: null,
      status: 'offline',

      setRoomId: (roomId) => set({ roomId }),
      setUid: (uid) => set({ uid }),
      setIsRecorder: (isRecorder) => set({ isRecorder }),
      setRoomState: (roomState) => set({ roomState, status: 'connected' }),
      setStatus: (status) => set({ status }),
      reset: () => set({ roomId: null, uid: null, isRecorder: false, roomState: null, status: 'offline' }),
    }),
    {
      name: 'ks-online',
      partialize: (state) => ({ roomId: state.roomId, uid: state.uid, isRecorder: state.isRecorder }),
    }
  )
);
