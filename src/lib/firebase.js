// src/lib/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC1lWDUwmBOlDmJHiqn8PBdGXf63GFZM8g",
  authDomain: "kocky-sveta-2026.firebaseapp.com",
  projectId: "kocky-sveta-2026",
  storageBucket: "kocky-sveta-2026.firebasestorage.app",
  messagingSenderId: "390822285835",
  appId: "1:390822285835:web:31021a6bb7c67d7a58ad0e",
  measurementId: "G-VB20M681V5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
