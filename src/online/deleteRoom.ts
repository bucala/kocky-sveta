// src/online/deleteRoom.ts
// Vymaže celú miestnosť (hru, archív miestnosti, chat, zoznam hráčov) pre všetkých.
// Pravidlá Firestore to dovoľujú iba členovi miestnosti.
import { db } from '../lib/firebase';
import { doc, deleteDoc } from 'firebase/firestore';

export async function deleteRoom(roomId: string): Promise<void> {
  await deleteDoc(doc(db, 'rooms', roomId));
}
