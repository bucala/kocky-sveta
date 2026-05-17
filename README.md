# 🎲 Kocky Sveta 2026

> Elegantná digitálna verzia bodovacej hry **Kocky** pre web aj Android — s online multiplayerom cez Firebase.

![Vite](https://img.shields.io/badge/Vite-6.x-8b5cf6?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-18.x-0f172a?style=for-the-badge&logo=react)
![Firebase](https://img.shields.io/badge/Firebase-12.x-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Capacitor](https://img.shields.io/badge/Capacitor-6.x-2563eb?style=for-the-badge&logo=capacitor&logoColor=white)
![Tests](https://img.shields.io/badge/tests-57%2F57%20✓-22c55e?style=for-the-badge)
![Release](https://img.shields.io/badge/release-v1.5.5-d4b86a?style=for-the-badge)

## 📦 Status: STABILNÝ — v1.5.5

> **Tag:** [`v1.5.5`](https://github.com/bucala/kocky-sveta/releases/tag/v1.5.5) — Firebase Online Features

---

## 🌐 Live Demo

**Produkcia:** [https://kocky-sveta-2026.web.app](https://kocky-sveta-2026.web.app)

---

## ✨ Funkcie

### 📴 Offline režim

- hra pre viac hráčov na jednom zariadení (až 6 hráčov)
- vlastné pravidlá a nastaviteľné bodovanie
- export a import turnajov cez Excel (lazy-loaded)
- archív odohraných hier a prehľad výsledkov
- niekoľko vizuálnych skinov (Klasik, Les, Royal, Pergamen, Orech…)
- progress chart, standings, history graf
- Android build cez Capacitor + Android Studio
- **modulárna architektúra** — screens, components, constants, utils, hooks, lib
- **tournamentEngine.js** — čistá doménová knižnica (pure functions, unit testovaná)

### 🔥 Online režim (nové vo v1.5.5)

- **Real-time multiplayer** — hranie s priateľmi online cez Firebase
- **Zdieľané miestnosti** — vytvor kód miestnosti alebo sa pripoj ku existujúcej
- **Vlastný kód miestnosti** — zadaj ľubovoľný názov (napr. RUBIKON) ako kód
- **Session persistencia** — zostaneš prihlásený aj po obnovení stránky (F5)
- **Live sledovanie hráčov** — vidíš kto je v miestnosti v reálnom čase
- **Online/offline badge** — vizuálny indikátor pripojenia v hlavnom menu
- **Klikateľný badge** — rýchla navigácia na online miestnosť
- **Admin panel** — PIN-chránené nastavenia (override kódu, debug mód)

---

## 🛠️ Tech Stack

### Frontend
- **React 18** + Vite 6
- **Lucide React** (ikony)
- **SheetJS / xlsx** (Excel export/import, lazy-loaded)
- **Zustand** (state management + persist middleware)
- **Tailwind CSS** (štýlovanie)

### Backend & Služby
- **Firebase Authentication** — anonymné prihlásenie
- **Cloud Firestore** — real-time databáza pre online miestnosti
- **Firebase Hosting** — produkčné nasadenie
- **Capacitor 6** — Android natívne buildy

---

## 🚀 Rýchly štart

### Predpoklady

- Node.js 18+
- npm alebo yarn
- Firebase účet (pre online funkcie)

### Inštalácia

```bash
# Klonovanie repozitára
git clone https://github.com/bucala/kocky-sveta.git
cd kocky-sveta

# Inštalácia závislostí
npm install

# Nastavenie env premenných
cp .env.example .env.local
# Uprav .env.local s tvojimi Firebase údajmi
```

### Nastavenie prostredia

Vytvor `.env.local` s Firebase prihlasovacími údajmi:

```bash
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
VITE_FIREBASE_MEASUREMENT_ID=your-measurement-id
```

Údaje nájdeš vo [Firebase Console](https://console.firebase.google.com/project/kocky-sveta-2026/settings/general/web).

### Vývoj

```bash
npm run dev      # dev server
npm test         # Vitest unit testy (57/57)
npm run build    # produkčný build
npm run preview  # lokálny náhľad produkcie
```

---

## 📦 Nasadenie

### Firebase Hosting

```bash
# Produkčný build
npm run build

# Nasadiť všetko
firebase deploy

# Nasadiť len hosting
firebase deploy --only hosting

# Nasadiť len Firestore pravidlá
firebase deploy --only firestore:rules
```

### Firebase Setup (prvýkrát)

1. Inštalácia Firebase CLI: `npm install -g firebase-tools`
2. Prihlásenie: `firebase login`
3. Inicializácia: `firebase init` (ak ešte nebola spravená)
4. Nasadenie: `firebase deploy`

---

## 🔧 Firebase konfigurácia

### Požadované služby

- **Authentication** → povolené anonymné prihlásenie
- **Firestore Database** → produkčný mód s bezpečnostnými pravidlami
- **Hosting** → napojené na repozitár

### Bezpečnostné pravidlá

Pozri `firestore.rules` pre databázové prístupové pravidlá.

---

## 📱 Android Build

```bash
npm install
npm run build-android   # vite build + cap sync + post-sync fixes
npx cap open android    # otvorí Android Studio
```

V Android Studio: **Build → Clean Project**, potom **Build → Rebuild Project**.

---

## 🎮 Pravidlá hry

| Kategória | Pravidlo |
|-----------|----------|
| **Cieľ** | Presne 10 000 bodov (konfigurovateľné) |
| **Zápis** | Minimálny hod 50 bodov |
| **Penalta** | −1 000 bodov iba ak hráč hodí 0 bodov (nič) |
| **Endgame** | Od 9 700 bodov — treba presne X bodov na výhru |
| **Presný zásah** | Popup: Potvrdil / Nepotvrdil |
| **Bust** | Prekročenie cieľa = zostáva na pôvodnom skóre, žiadna penalta |
| **Kolo musí dohrať** | Všetci hráči dokončia kolo pred vyhodnotením víťaza |
| **Remíza** | Viacero hráčov dosiahne cieľ v rovnakom kole |

---

## 🧱 Štruktúra projektu

```
src/
├── App.jsx                    — orchestrátor (routing, state, persistence)
├── app.css                    — aplikačné štýly
├── index.css                  — global štýly + Google Fonts import
├── main.jsx                   — entry point + ErrorBoundary
├── atoms/
│   ├── ErrorBoundary.jsx      — React Error Boundary
│   ├── SimplifiedResult.jsx   — výsledkový badge
│   └── index.js
├── components/
│   ├── FunnyOverlay.jsx       — funny message popup systém
│   ├── GameWidgets.jsx        — DiceIcon, DiceRow, GoldButton, Ornament…
│   ├── Modal.jsx              — modálne okno
│   ├── ProgressChart.jsx      — SVG graf vývoja skóre
│   ├── RulesContent.jsx       — obsah pravidiel
│   ├── ScoreTable.jsx         — tabuľka skóre (React.memo)
│   ├── SkinSelector.jsx       — výber vizuálneho skinu
│   └── ui.jsx                 — zdieľané UI komponenty
├── constants/
│   ├── gameConfig.js          — QUICK_VALUES, TARGET_OPTIONS, POPUP_CONFIG…
│   ├── rules.js               — pravidlá r1–r18
│   └── skins.js               — definície skinov
├── lib/
│   ├── firebase.js            — Firebase konfigurácia
│   ├── gameEngine.js          — herný engine (legacy wrapper)
│   ├── storage.js             — localStorage abstrakcia
│   ├── tournamentEngine.js    — čistá doménová knižnica (pure functions)
│   └── tournamentEngine.test.js — 50 unit testov
├── online/
│   ├── createRoom.ts          — vytvorenie Firebase miestnosti
│   ├── hashPin.ts             — PIN hashing
│   ├── joinRoom.ts            — pripojenie do miestnosti
│   ├── onlineStore.ts         — Zustand store s persist middleware
│   ├── types.ts               — TypeScript typy
│   ├── updateGameState.ts     — Firestore write
│   └── useRoomSubscription.ts — real-time Firestore listener
└── screens/
    ├── AdminScreen.jsx        — PIN-chránený admin panel
    ├── ArchiveScreen.jsx      — archív turnajov + detail
    ├── GameViewModesScreen.jsx
    ├── MainMenu.jsx
    ├── NewTournament.jsx
    ├── OnlineScreen.jsx       — online miestnosti (create/join)
    ├── RulesEditor.jsx        — editor pravidiel
    ├── SettingsMenu.jsx
    ├── TournamentScreen.jsx   — herný flow
    └── VisualAndSkinScreen.jsx
```

---

## 🔬 tournamentEngine.js — Domain API

Čistá knižnica bez React závislostí. Importovaná vo všetkých spotrebiteľoch.

| Funkcia | Popis |
|---------|-------|
| `normalizeRoundValue(value)` | Normalizuje bunku kola (number / 'dash' / null) |
| `computePlayerTotals(rounds, n)` | Súčty skóre pre všetkých hráčov |
| `validateTournamentChecksum(rounds, totals)` | Overuje konzistenciu uložených totálov |
| `detectSuddenWin(tournament)` | Detekuje Náhlu výhru (6 kociek = cieľ) |
| `computeRanking(players, totals)` | Zoradí hráčov, pridelí rank (zdieľaný pri remíze) |
| `computeWinners(tournament)` | Určí víťazov — strict / classic / sudden win / pendingDecision |
| `evaluateTournamentState(tournament)` | Komplexný derivovaný stav (status, ranking, eligibility…) |

---

## 🛠 Troubleshooting

### Po update appky na Androide vidím staré dáta / starú verziu
Capacitor WebView agresívne kešuje. Po `cap sync` v Android Studio: **Build → Clean Project → Rebuild**. Na zariadení: **Nastavenia → Aplikácie → Kocky sveta → Úložisko → Vymazať dáta**.

### Chýba `capacitor.settings.gradle`
```bash
npx cap sync android
```

### Service worker drží starý web build
Dev tools: **Application → Service Workers → Unregister**, potom hard-refresh (Ctrl+Shift+R).

### Vitest testy nefungujú
```bash
npm install
npm test
```

### Firebase Auth — nový UID po každom refreshi
Skontroluj, či je `browserLocalPersistence` nastavené vo `firebase.js` a či `ensureAuth()` čaká na `authStateReady()` pred `signInAnonymously()`.

---

## ✅ Manual Testing Checklist — v1.5.5

### 🏗️ Build
- [ ] `npm run build` — build prebehne bez chýb
- [ ] `npm test` — 57/57 Vitest testov zelených
- [ ] `npm run dev` — app štartuje bez chýb v konzole

### 🌐 Online funkcie
- [ ] Vytvorenie novej miestnosti — vygeneruje kód
- [ ] Vlastný kód miestnosti (napr. RUBIKON)
- [ ] Pripojenie cez kód — druhé zariadenie vidí miestnosť
- [ ] Real-time sync — zmena hry sa prejaví na oboch zariadeniach
- [ ] Session persistencia — po F5 zostáva v miestnosti
- [ ] Online/offline badge — zobrazuje správny stav
- [ ] Kliknutie na badge — navigácia na online miestnosť

### 🎮 Herný flow
- [ ] **Scenár A:** Hráč 1 Nepotvrdil → Hráč 2 Potvrdil → Results screen, Hráč 2 = winner
- [ ] **Scenár B:** Alice Potvrdil (10000) → Bob normálny (9800) → Results screen, Alice = winner
- [ ] **Scenár C:** Alice Potvrdil (10000) → Bob Potvrdil (10000) → Results screen, DRAW
- [ ] **Scenár D:** Bust (prekročenie) → zostáva na pôvodnom skóre, žiadna penalta
- [ ] **Scenár E:** Penalta (hod = 0 bodov) → −1000 sa odpočíta

### 📤 Export / Import
- [ ] Export do Excelu — súbor sa stiahne
- [ ] Import z Excelu — turnaje sa importujú správne
- [ ] Import neznámeho súboru — error, nie crash

---

**Latest Release:** [v1.5.5 — Firebase Online Features](https://github.com/bucala/kocky-sveta/releases/tag/v1.5.5)
