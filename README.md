# 🎲 Kocky sveta

> Elegantná digitálna verzia bodovacej hry **Kocky** pre web aj Android (Capacitor + React).

![Vite](https://img.shields.io/badge/Vite-6.x-8b5cf6?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-18.x-0f172a?style=for-the-badge&logo=react)
![Capacitor](https://img.shields.io/badge/Capacitor-6.x-2563eb?style=for-the-badge&logo=capacitor&logoColor=white)

## ✨ Funkcie

- offline hra pre viac hráčov na jednom zariadení (až 6 hráčov)
- vlastné pravidlá a nastaviteľné bodovanie
- export a import turnajov cez Excel
- archív odohraných hier a prehľad výsledkov
- niekoľko vizuálnych skinov (Klasik, Les, Royal, Pergamen…)
- progress chart, štandings, history graf
- Android build cez Capacitor + Android Studio

> Aplikácia je **plne offline**. Všetky dáta sa ukladajú lokálne na zariadenie cez `localStorage`.

## 🧭 Rýchly štart

```bash
npm install
npm run dev          # web dev server
```

## 📦 Buildy

### Web

```bash
npm run build
npm run preview      # rýchly local preview
```

Výstup nájdeš v `dist/`. Pre deploy na GitHub Pages:

```bash
npm run deploy
```

### Android

```bash
npm install
npm run build-android   # vite build + cap sync + post-sync fixes
npx cap open android    # otvorí Android Studio
```

V Android Studio: **Build → Clean Project**, potom **Build → Rebuild Project**.

## 🧱 Štruktúra projektu

- `src/App.jsx` — hlavná herná logika a UI (≈3200 riadkov)
- `src/main.jsx` — entry point + `window.storage` polyfill nad `localStorage`
- `src/index.css` — global styles
- `public/` — PWA manifest, ikony, service worker
- `android/` — natívny Android wrapper (Capacitor)
- `scripts/apply-android-fixes.js` — post-cap-sync úpravy (SDK verzie, permissions)

## 🛠 Troubleshooting

### Po update appky na Androide vidím staré dáta / starú verziu
Capacitor WebView agresívne kešuje. Po `cap sync` v Android Studio sprav **Build → Clean Project → Rebuild**, a na zariadení **Settings → Apps → Kocky sveta → Storage → Clear data** (alebo úplne odinštaluj a nainštaluj znova).

### Chýba `capacitor.settings.gradle`
Spusti znova:
```bash
npx cap sync android
```

### Service worker drží starý web build
V dev tools: **Application → Service Workers → Unregister**, potom hard-refresh (Ctrl+Shift+R).

## 📘 Poznámka

Aplikácia bola pôvodne navrhnutá s Firebase online miestnosťami. Tie boli odstránené pre zjednodušenie a zníženie závislostí — celý projekt je teraz čisto offline a ľahšie sa udržiava (žiadny `google-services.json`, žiadne Firestore rules, žiadne env premenné).
