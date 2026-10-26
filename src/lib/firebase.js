// src/lib/firebase.js
import { initializeApp } from 'firebase/app';
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager, getFirestore } from 'firebase/firestore';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';

const firebaseConfig = {
  apiKey:            import.meta.env.VITE_FIREBASE_API_KEY            ?? 'AIzaSyC1lWDUwmBOlDmJHiqn8PBdGXf63GFZM8g',
  authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN        ?? 'kocky-sveta-2026.firebaseapp.com',
  projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID         ?? 'kocky-sveta-2026',
  storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET     ?? 'kocky-sveta-2026.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID ?? '390822285835',
  appId:             import.meta.env.VITE_FIREBASE_APP_ID             ?? '1:390822285835:web:31021a6bb7c67d7a58ad0e',
  measurementId:     import.meta.env.VITE_FIREBASE_MEASUREMENT_ID     ?? 'G-VB20M681V5',
};

const app = initializeApp(firebaseConfig);
// Trvalá lokálna cache: zápisy spravené offline prežijú aj zatvorenie aplikácie
// a odošlú sa po návrate pripojenia. Ak IndexedDB nie je dostupná, použije sa
// pamäťová cache ako doteraz.
function createDb() {
  try {
    return initializeFirestore(app, {
      localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() }),
    });
  } catch {
    return getFirestore(app);
  }
}
export const db = createDb();

const auth = getAuth(app);
// Explicitly persist auth across page reloads (default on web, but made explicit for Capacitor)
setPersistence(auth, browserLocalPersistence).catch(() => {});
export { auth };
