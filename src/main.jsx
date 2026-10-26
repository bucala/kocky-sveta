import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Capacitor } from '@capacitor/core';
import { ErrorBoundary } from './atoms/ErrorBoundary.jsx';
import './fonts.css';
import './index.css';
import './skin-effects.css';

// ─── window.storage polyfill — namapovanie na localStorage ──────────────
if (typeof window !== 'undefined' && !window.storage) {
  window.storage = {
    async get(key) {
      try {
        const value = localStorage.getItem(key);
        if (value === null) return null;
        return { key, value, shared: false };
      } catch { return null; }
    },
    async set(key, value) {
      try {
        localStorage.setItem(key, value);
        return { key, value, shared: false };
      } catch { return null; }
    },
    async delete(key) {
      try {
        localStorage.removeItem(key);
        return { key, deleted: true, shared: false };
      } catch { return null; }
    },
    async list(prefix = '') {
      const keys = [];
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && k.startsWith(prefix)) keys.push(k);
      }
      return { keys, prefix, shared: false };
    },
  };
}

// ─── PWA — Service Worker registrácia ──────────────────────────────────
// Iba v produkčnom webe. V Android aplikácii (Capacitor, origin https://localhost)
// sa neregistruje – súbory sú priamo v APK a service worker tam nemá zmysel.
if ('serviceWorker' in navigator && import.meta.env.PROD && !Capacitor.isNativePlatform()) {
  window.addEventListener('load', () => {
    const swUrl = `${import.meta.env.BASE_URL}sw.js`;
    navigator.serviceWorker.register(swUrl).catch((err) => {
      console.warn('SW registration failed:', err);
    });
  });
}

// Po deployi môže otvorená stránka žiadať starý lazy chunk (napr. Excel), ktorý
// už na serveri nie je. Vite vtedy vyvolá 'vite:preloadError' – stránku raz
// obnovíme, čím sa načíta nová verzia.
window.addEventListener('vite:preloadError', (event) => {
  try {
    if (sessionStorage.getItem('ks-reloaded-after-deploy')) return;
    sessionStorage.setItem('ks-reloaded-after-deploy', '1');
  } catch { /* bez sessionStorage len obnovíme */ }
  event.preventDefault();
  window.location.reload();
});
window.addEventListener('load', () => {
  setTimeout(() => { try { sessionStorage.removeItem('ks-reloaded-after-deploy'); } catch { /* ignore */ } }, 10000);
});

// ─── Potlačenie kontextového menu (dlhý stisk na mobile) ────────────────
document.addEventListener('contextmenu', (e) => {
  if (!(e.target instanceof HTMLInputElement) && !(e.target instanceof HTMLTextAreaElement)) {
    e.preventDefault();
  }
}, { capture: true });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
