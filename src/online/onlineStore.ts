// src/online/onlineStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { RoomDocument } from './types';

type OnlineStatus = 'offline' | 'connected' | 'error';

type OnlineStore = {
  roomId: string | null;
  uid: string | null;
  roomState: RoomDocument | null;
  status: OnlineStatus;

  setRoomId: (roomId: string) => void;
  setUid: (uid: string) => void;
  setRoomState: (state: RoomDocument) => void;
  setStatus: (status: OnlineStatus) => void;
  reset: () => void;
};

export const useOnlineStore = create<OnlineStore>()(
  persist(
    (set) => ({
      roomId: null,
      uid: null,
      roomState: null,
      status: 'offline',

      setRoomId: (roomId) => set({ roomId }),
      setUid: (uid) => set({ uid }),
      setRoomState: (roomState) => set({ roomState, status: 'connected' }),
      setStatus: (status) => set({ status }),
      reset: () => set({ roomId: null, uid: null, roomState: null, status: 'offline' }),
    }),
    {
      name: 'ks-online',
      partialize: (state) => ({ roomId: state.roomId, uid: state.uid }),
    }
  )
);
