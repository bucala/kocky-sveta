# 🎲 Kocky sveta

> Elegantná digitálna verzia bodovacej hry **Kocky** pre web aj Android (Capacitor + React).

![Vite](https://img.shields.io/badge/Vite-6.x-8b5cf6?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-18.x-0f172a?style=for-the-badge&logo=react)
![Capacitor](https://img.shields.io/badge/Capacitor-6.x-2563eb?style=for-the-badge&logo=capacitor&logoColor=white)

## 📦 Status: STABILNÝ — v1.5.0

> **Tag:** `v1.5.0`

---

## ✨ Funkcie

- offline hra pre viac hráčov na jednom zariadeni (až 6 hráčov)
- vlastné pravidlá a nastaviteľné bodovanie
- export a import turnajov cez Excel (lazy-loaded)
- archív odohraných hier a prehľad výsledkov
- niekoľko vizuálnych skinov (Klasik, Les, Royal, Pergamen…)
- progress chart, štandings, history graf
- Android build cez Capacitor + Android Studio
- **modulárna architektúra** — screens, components, constants, utils, hooks

> Aplikácia je **plne offline**. Všetky dáta sa ukladajú lokálne na zariadenie cez `localStorage`.

---

## 📝 Changelog

### v1.5.0 — 2026-05-08 — Modularizácia & Performance Release

```
♻️ refactor: extrakcia obrazoviek z App.jsx do samostatných súborov
• TournamentScreen → src/screens/TournamentScreen.jsx
• ArchiveScreen    → src/screens/ArchiveScreen.jsx
• RulesEditor      → src/screens/RulesEditor.jsx
• GameWidgets, FunnyOverlay, ProgressChart, SkinSelector → src/components/
• GameViewModesScreen, VisualAndSkinScreen → src/screens/

⚡ perf: lazy loading XLSX knižnice
• xlsx chunk (~430 KB) sa načíta len pri prvom exporte/importe
• xlsxLazy.js wrapper — modul sa cachuje po prvom načítaní
• vite.config.js — manual chunks: vendor-xlsx, vendor-recharts, vendor-react, vendor-lucide

🎨 style: STYLES konštanta → src/app.css
• CSS presnuté z inline JS stringu do samostatného súboru
• Google Fonts @import presunutý do src/index.css s font-display:swap
• Preconnect hinty pre Google Fonts v index.html

♿ a11y: aria-label na icon-only tlačidlá
• "Zatvoriť" na X tlačidlá (×2)
• "Upraviť" na edit tlačidlo

🐛 fix: mojibake v SimplifiedResult.jsx
• VÍŤAZ, REMÍZA, DOČASNÝ KRÁĽ, POTVRD VÍŤAZU — opravená slovenská diakritika

🧹 chore: vyčistenie repozitára
• Odstránených 38 dočasných Python skriptov z root adresára
• Opravený Vite index.html (omylom zmazaný)

⚡ perf: advance() — optimalizácia shallow copy
• prev.rounds.slice() namiesto prev.rounds.map(r => [...r])
• Kopíruje len aktívny riadok, nie celú tabuľku
```

### v1.4.1 — 2026-05-07 — Hook Quality Release

```
🐞 fix: useFunnyQueue — cleanup, stale closure, memoization
🧪 ci: Vitest test suite pre useFunnyQueue
```

### v1.4.0 — 2026-05-06 — Hooks Refactor Release

```
♻️ refactor: Migrácia komponentov na React Hooks
• Extrakcia useFunnyQueue hooku
• Modulizácia — rozdelenie App.jsx na menšie moduly
```

### v1.2.9 — 2026-05-05 — Performance Release

```
⚡ perf: React.memo ScoreTable — ~30–60% menej re-renderov
```

---

## ✅ Manual Testing Checklist — v1.5.0

### 🏗️ Build
- [ ] `npm run build` — build prebehne bez chýb
- [ ] `npm test` — všetky Vitest testy zelené ✅
- [ ] `npm run dev` — app štartuje bez chýb v konzole

### 📦 Bundle (Vite manual chunks)
- [ ] `dist/assets/vendor-xlsx-*.js` existuje ako samostatný chunk
- [ ] `dist/assets/vendor-recharts-*.js` existuje ako samostatný chunk
- [ ] Initial load — DevTools Network: xlsx chunk sa nenačíta pri štarte

### 📤 Export / Import (Lazy XLSX)
- [ ] Export do Excelu — prvý klik (~300ms load, súbor sa stiahne)
- [ ] Export — druhý klik (okamžitý, modul cached)
- [ ] Import z Excelu — vybrať `.xlsx`, turnaje sa importujú
- [ ] Import prázdneho / neznámeho súboru — error message, nie crash

### 🎮 Turnaj — Master Logika
- [ ] Nový turnaj — 2/3/6 hráčov, do 5000 aj 10000
- [ ] Penalizácia −1000 funguje
- [ ] Víťazstvo (r18=Áno a Nie)
- [ ] Remíza — 2 hráči v rovnakom kole
- [ ] Archív → Detail → správne výsledky

### ♿ Accessibility
- [ ] X tlačidlá majú `aria-label="Zatvoriť"`
- [ ] Edit tlačidlo má `aria-label="Upraviť"`
- [ ] Tab navigácia funguje na všetkých interaktívnych prvkoch

### 🎨 Skin & Fonts
- [ ] Všetky skiny sa správne aplikujú
- [ ] Fonty (Cormorant, Crimson Pro, Bebas Neue) sa načítajú
- [ ] Žiadne FOIT (flash of invisible text)

### 📱 Android Build
- [ ] `npm run build-android`
- [ ] `npx cap open android` → Clean + Rebuild
- [ ] APK na zariadení — export, import, tournament flow

---

## 🧩 Rýchly štart

```bash
npm install
npm run dev          # web dev server
npm test             # Vitest unit testy
```

## 📦 Buildy

### Web

```bash
npm run build
npm run preview      # rýchly local preview
```

### Android

```bash
npm install
npm run build-android   # vite build + cap sync + post-sync fixes
npx cap open android    # otvorí Android Studio
```

V Android Studio: **Build → Clean Project**, potom **Build → Rebuild Project**.

---

## 🧱 Štruktúra projektu

```
src/
├── App.jsx                    — orchestrátor (routing, state, persistence)
├── app.css                    — aplikačné štýly (extrahované z STYLES konštanty)
├── index.css                  — global štýly + Google Fonts import
├── main.jsx                   — entry point + localStorage polyfill
├── atoms/
│   ├── SimplifiedResult.jsx   — výsledkový badge
│   └── index.js
├── components/
│   ├── FunnyOverlay.jsx       — funny message popup systém
│   ├── GameWidgets.jsx        — DiceIcon, DiceRow, GoldButton, Ornament...
│   ├── ProgressChart.jsx      — Recharts graf vývoja skóre
│   ├── SkinSelector.jsx       — výber vizuálneho skinu
│   └── ui.jsx                 — zdieľané UI komponenty
├── constants/
│   ├── game.js                — herné konštanty
│   ├── gameConfig.js          — QUICK_VALUES, TARGET_OPTIONS, POPUP_CONFIG...
│   ├── rules.js               — pravidlá r1–r18
│   └── skins.js               — definície skinov
├── hooks/
│   └── useFunnyQueue.js       — vlastný hook pre funny queue (memoizovaný)
├── screens/
│   ├── ArchiveScreen.jsx      — archív turnajov + detail
│   ├── GameViewModesScreen.jsx
│   ├── MainMenu.jsx
│   ├── NewTournament.jsx
│   ├── RulesEditor.jsx        — editor pravidiel
│   ├── SettingsMenu.jsx
│   ├── TournamentScreen.jsx   — herný flow (Master logika)
│   └── VisualAndSkinScreen.jsx
└── utils/
    ├── format.js              — formátovanie dátumov a časov
    └── xlsxLazy.js            — lazy loader pre XLSX knižnicu
```

---

## 🛠 Troubleshooting

### Po update appky na Androide vidím staré dáta / starú verziu
Capacitor WebView agresívne kešuje. Po `cap sync` v Android Studio sprav **Build → Clean Project → Rebuild**, a na zariadení **Settings → Apps → Kocky sveta → Storage → Clear data**.

### Chýba `capacitor.settings.gradle`
```bash
npx cap sync android
```

### Service worker drží starý web build
V dev tools: **Application → Service Workers → Unregister**, potom hard-refresh (Ctrl+Shift+R).

### Vitest testy nefungujú
```bash
npm install
npm test
```

---

## 📘 Poznámka

Aplikácia bola pôvodne navrhnutá s Firebase online miestnosťami. Tie boli odstránené pre zjednodušenie — celý projekt je teraz čisto offline (žiadny `google-services.json`, žiadne Firestore rules, žiadne env premenné).

## 1.5.1

- Opravené zobrazenie nového kola pri dokončení kola; riadok v tabuľke sa zobrazí hneď v ďalšom kole.
- Upravený export archívu do Excelu; stabilnejší browser fallback pri sťahovaní.
- Firebase zafixovaný na stabilnú verziu `^12.12.1`.
