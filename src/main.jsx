import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

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
// Registruje sa len v produkčnom buildi cez https / http,
// NIE v Android WebView (file://) — tam SW aj tak nefunguje a robí len chyby.
const isHttpContext = typeof window !== 'undefined' &&
  (window.location.protocol === 'https:' || window.location.protocol === 'http:');

if ('serviceWorker' in navigator && import.meta.env.PROD && isHttpContext) {
  window.addEventListener('load', () => {
    const swUrl = `${import.meta.env.BASE_URL}sw.js`;
    navigator.serviceWorker.register(swUrl).then((reg) => {
      console.log('SW registered:', reg.scope);
    }).catch((err) => {
      console.warn('SW registration failed:', err);
    });
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
