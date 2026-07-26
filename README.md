# 🎲 Kocky Sveta 2026

> Elegantná digitálna verzia bodovacej hry **Kocky** pre web aj Android — s online multiplayerom cez Firebase.

![Vite](https://img.shields.io/badge/Vite-6.x-8b5cf6?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-18.x-0f172a?style=for-the-badge&logo=react)
![Firebase](https://img.shields.io/badge/Firebase-12.x-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Capacitor](https://img.shields.io/badge/Capacitor-6.x-2563eb?style=for-the-badge&logo=capacitor&logoColor=white)
![Tests](https://img.shields.io/badge/tests-57%2F57%20✓-22c55e?style=for-the-badge)
![Release](https://img.shields.io/badge/release-v1.6.6-d4b86a?style=for-the-badge)

## 📦 Status: STABILNÝ — v1.6.6

> **Tag:** [`v1.6.6`](https://github.com/bucala/kocky-sveta/releases/tag/1.6.6) — Kombinovaný režim bez "práve pripisuješ", cieľové skóre pri každom hráčovi

---

## 🌐 Live Demo

**Produkcia:** [https://kocky-sveta.vercel.app](https://kocky-sveta.vercel.app)

---

## ✨ Funkcie

### 📴 Offline režim

- hra pre viac hráčov na jednom zariadení (až 6 hráčov)
- vlastné pravidlá a nastaviteľné bodovanie
- export a import turnajov cez Excel (lazy-loaded)
- archív odohraných hier a prehľad výsledkov
- niekoľko vizuálnych skinov (Klasik, Les, Royal, Pergamen, Orech, HP, Brawl Stars…)
- progress chart (SVG), standings, history graf
- Android build cez Capacitor + Android Studio
- **modulárne screens/components/lib** — časť obrazoviek a zdieľaných komponentov je extrahovaná do samostatných súborov, hlavný herný flow (turnaj, archív, nastavenia) je v `App.jsx`
- **tournamentEngine.js** — čistá doménová knižnica (pure functions, unit testovaná)

### 🔥 Online režim

- **Real-time multiplayer** — hranie s priateľmi online cez Firebase
- **Zdieľané miestnosti** — vytvor kód miestnosti alebo sa pripoj ku existujúcej
- **Vlastný kód miestnosti** — zadaj ľubovoľný názov (napr. RUBIKON) ako kód
- **Session persistencia** — zostaneš prihlásený aj po obnovení stránky (F5)
- **Live sledovanie hráčov** — vidíš kto je v miestnosti v reálnom čase
- **Online/offline badge** — vizuálny indikátor pripojenia v hlavnom menu
- **Klikateľný badge** — rýchla navigácia na online miestnosť
- **Admin panel** — PIN-chránené nastavenia (override kódu, debug mód)
- **Error badge** — vizuálna indikácia zlyhania synchronizácie

---

## 🆕 Changelog

### v1.6.6 — Kombinovaný režim bez "práve pripisuješ", cieľové skóre pri každom hráčovi *(2026-07-26)*

- **Kombinovaný režim** — odstránená celá karta "Práve pripisuješ"; zostáva iba veľký prehľad skóre a karta "na ťahu"
- **Cieľové skóre pri každom hráčovi** — pod skóre každého hráča sa zobrazuje aj cieľová hodnota hry ("/ 10 000" alebo "/ 5 000")

Detaily: [`release-notes.md`](./release-notes.md), [`CHANGELOG.md`](./CHANGELOG.md)

---

### v1.6.5 — Kombinovaný režim bez zapisovania, väčší prehľad pripisovaných bodov *(2026-07-26)*

- **Kombinovaný režim** — odstránené tlačidlo "Zapísať" a sekcia rýchleho zapisovania bodov pod ním; slúži teraz čisto na veľký prehľad skóre + práve prebiehajúceho ťahu
- **"Práve pripisuješ"** — hodnota, ktorú hráč aktuálne dosiahne, má väčší font a je presunutá pod pripočítavané body

Detaily: [`release-notes.md`](./release-notes.md), [`CHANGELOG.md`](./CHANGELOG.md)

---

### v1.6.4 — Kombinovaný režim, oprava landscape prekrytia, editácia cieľa v archíve *(2026-07-25)*

- **Kombinovaný režim zobrazenia** — veľké mená a skóre hore (ako Pozorovateľ zjednodušený) + zapisovanie bodov dole (ako Zapisovateľ), všetko na jednej obrazovke
- **Oprava** — veľké zobrazenie skóre už nepreteká/nepekrýva obsah pod ním pri horizontálnej (landscape) orientácii; 3 hráči teraz v 3 stĺpcoch namiesto mriežky s prázdnou bunkou
- **Pozorovateľ zjednodušený** — graf priebehu hry má už len jeden minimálny rámik (bez dvojitého orámovania) a je bližšie k tabuľkám skóre
- **Archív** — cieľové skóre turnaja sa dá opraviť priamo v editácii detailu (napr. z 10 000 na 5 000)

Detaily: [`release-notes.md`](./release-notes.md), [`CHANGELOG.md`](./CHANGELOG.md)

---

### v1.6.3 — Farby hráčov zhodné s grafom, prehľadnejší graf *(2026-07-05)*

- **Zjednotená paleta** — graf priebehu hry a veľké zobrazenie skóre zdieľajú rovnaké farby hráčov
- **Pozorovateľ zjednodušený** — graf bez legendy (farby už sedia s tabuľkou skóre), body sa pri dlhšej hre nestláčajú (horizontálny scroll namiesto splývania), poradie hráča v rohu karty (líder = korunka)

Detaily: [`release-notes.md`](./release-notes.md), [`CHANGELOG.md`](./CHANGELOG.md)

---

### v1.6.2 — Korunka pre lídra, zjednodušené zobrazenia, fullscreen graf *(2026-07-05)*

- **Korunka pre lídra** — nahradila "Pulzujúceho lídra", aktuálny líder má pri mene korunku namiesto glow efektu
- **Klasický zjednodušený** a **Pozorovateľ zjednodušený** — nové režimy zobrazenia bez tabuľky kôl, iba veľké mená a skóre (3×/6×), pozorovateľ navyše s grafom priebehu hry
- **Fullscreen "Priebeh hry"** — graf sa teraz otvára na celú obrazovku s väčším písmom
- **UX** — jemné odlíšenie pozadia aktuálne hrajúceho hráča vo všetkých režimoch

Detaily: [`release-notes.md`](./release-notes.md), [`CHANGELOG.md`](./CHANGELOG.md)

---

### v1.6.1 — Audit Cleanup: Dead Code, Security & Build Fixes *(2026-07-05)*

- **Odstránené** — 41 backup súborov + ~2900 riadkov mŕtveho duplicitného kódu (opustený refaktor z 1.5.0), nepoužívaná závislosť `recharts`
- **Fix** — `/api/scan` OCR endpoint (obnovený funkčný AI model), sanitizované error hlášky, `vitest` zosúladený s Vite 6
- **Android** — release signing zlyhá rýchlo pri chýbajúcom kľúči namiesto tichého nesprávneho buildu
- **A11y** — `aria-label` na icon-only tlačidlách

Detaily: [`release-notes.md`](./release-notes.md), [`CHANGELOG.md`](./CHANGELOG.md)

---

### v1.6.0 — Online Sync Overhaul + Skins + UX *(2026-05-21)*

#### 🔄 Online sync — kompletný prepis

- **Firestore nested arrays fix** — turnaj sa ukladá ako JSON string (Firestore nepodporuje vnorené polia)
- **Bidirectional real-time sync** — všetky zariadenia syncujú v oboch smeroch bez master-slave logiky
- **Stale ghost cleanup** — pri odpojení sa vyčistia všetky prítomnostné záznamy
- **Recorder-only writes** — observer nikdy nezapíše do Firestore (žiadna korupcia dát)
- **pendingWriteCount guard** — eager module load zabraňuje race condition pri prvom zápise
- **Error badge** — červený indikátor pri zlyhaní Firestore zápisu
- **Firestore ako source of truth** — klientské timestamps odstránené, používa serverový čas
- **Anti-revert ochrana** — porovnanie remote ↔ last-written (nie aktuálny local state)
- **Crash fix: rounds guard** — `ScoreTable` a `ProgressChart` chránené pred `undefined` `rounds` počas sync

#### 🎨 Vizuálne skiny

- **Harry Potter skin** — pergamenové pozadie + plávajúce HP ikony
- **Brawl Stars skin** — dva odtiene (Classic + Brawl Blue) s ikonami postáv
- **Poster backgrounds** — reálne plagátové obrázky ako pozadia skinov
- **Comprehensive skinning** — CSS custom properties pre všetky popupy a overlaye

#### 🔊 Zvuky & animácie

- **Zvukový systém** — herné efekty (zápis, penalta, víťazstvo…)
- **Animácie** — konfigurovateľné cez nastavenia
- **Funny windows** — konfigurovateľný mód zobrazenia vtipných hlášok
- **Caveat Brush** — nový ručne písaný font

#### 📊 UX a herné funkcie

- **SVG Progress Chart** — vlastný graf vývoja skóre (náhrada Recharts)
- **Score display mode** — prepínač Delta (Δ) / Kumulatívny (Σ) v tabuľke skóre
- **Tournament view mode** — základný / rozšírený pohľad na turnaj
- **Web Wake Lock API** — displej nespadne do spánku počas hry
- **OCR scan_sheet tool** — fotka → Excel tabuľka skóre (Anthropic Vision API)

---

### v1.5.5 — Firebase Online Features *(predchádzajúci stabilný release)*

- Real-time multiplayer cez Firebase Firestore
- Zdieľané miestnosti s vlastným kódom
- Session persistencia (anonymný auth)
- Presence systém (online/offline hráči)
- Archive sync cez Firebase

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
- **Vercel** — automatické preview deployments
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

> **Pozn.:** `App.jsx` je hlavný orchestrátor a obsahuje aj inline implementácie hernej obrazovky, archívu, nastavení a editora pravidiel (routing, state, persistence, herná logika). Samostatné súbory v `src/screens/` nižšie sú tie obrazovky, ktoré `App.jsx` reálne importuje.

```
src/
├── App.jsx                    — orchestrátor + TournamentScreen/ArchiveScreen/
│                                 SettingsMenu/RulesEditor (inline)
├── app.css                    — aplikačné štýly
├── index.css                  — global štýly + Google Fonts import
├── main.jsx                   — entry point + ErrorBoundary
├── atoms/
│   ├── DiceIcon.jsx, DiceRow.jsx — kocky
│   ├── ErrorBoundary.jsx      — React Error Boundary
│   ├── FunnyOverlay.jsx       — funny message popup systém
│   ├── GoldButton.jsx, Header.jsx, Ornament.jsx, Toast.jsx — zdieľané UI
│   ├── PendingChips.jsx, StatusBanner.jsx, StrikethroughCrown.jsx
│   ├── SimplifiedResult.jsx   — výsledkový badge
│   ├── SkinSelector.jsx       — výber vizuálneho skinu
│   └── index.js
├── components/
│   ├── BrawlBackground.jsx    — animované pozadie pre Brawl Stars skin
│   ├── Confetti.jsx           — canvas confetti animácia
│   ├── Modal.jsx              — modálne okno
│   ├── ProgressChart.jsx      — vlastný SVG graf vývoja skóre
│   ├── ScoreTable.jsx         — tabuľka skóre (delta / kumulatívny mód)
│   └── ui.jsx                 — zdieľané UI komponenty
├── constants/
│   ├── game.js                — TARGET_OPTIONS a ďalšie herné konštanty
│   └── skins.js               — definície skinov
├── lib/
│   ├── extensions.js          — voliteľné vizuálne rozšírenia (haptika, konfety…)
│   ├── firebase.js            — Firebase konfigurácia
│   ├── gameEngine.js          — herný engine (legacy wrapper)
│   ├── i18n.js                — SK/EN preklady + React Context
│   ├── sounds.js               — zvukový systém
│   ├── storage.js             — localStorage abstrakcia
│   ├── tournamentEngine.js    — čistá doménová knižnica (pure functions)
│   └── tournamentEngine.test.js — 57 unit testov
├── online/
│   ├── createRoom.ts          — vytvorenie Firebase miestnosti
│   ├── deviceId.ts            — perzistentné ID zariadenia
│   ├── hashPin.ts             — PIN hashing
│   ├── joinRoom.ts            — pripojenie do miestnosti
│   ├── onlineStore.ts         — Zustand store s persist middleware
│   ├── types.ts               — TypeScript typy
│   ├── updateGameState.ts     — Firestore write (ukladá JSON string)
│   ├── updatePresence.ts      — heartbeat prítomnosti hráčov
│   └── useRoomSubscription.ts — real-time Firestore listener
└── screens/
    ├── AdminScreen.jsx        — PIN-chránený admin panel
    ├── GameViewModesScreen.jsx
    ├── MainMenu.jsx
    ├── NewTournament.jsx
    ├── OnlineScreen.jsx       — online miestnosti (create/join)
    ├── PlayerStatsScreen.jsx  — štatistiky hráčov
    ├── ScanImportScreen.jsx   — OCR import z fotky
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

### Online sync — červený error badge
Firestore odmietol zápis (napr. bezpečnostné pravidlá). Skontroluj `firestore.rules` a Firebase Console → Firestore → Rules Playground.

---

## ✅ Manual Testing Checklist — v1.6.0

### 🏗️ Build
- [ ] `npm run build` — build prebehne bez chýb
- [ ] `npm test` — 57/57 Vitest testov zelených
- [ ] `npm run dev` — app štartuje bez chýb v konzole

### 🌐 Online funkcie
- [ ] Vytvorenie novej miestnosti — vygeneruje kód
- [ ] Vlastný kód miestnosti (napr. RUBIKON)
- [ ] Pripojenie cez kód — druhé zariadenie vidí miestnosť
- [ ] Real-time sync — zmena skóre sa prejaví na oboch zariadeniach v reálnom čase
- [ ] Pozorovateľ (observer) — nedostane sync späť na recorder, iba číta
- [ ] Session persistencia — po F5 zostáva v miestnosti
- [ ] Online/offline badge — zobrazuje správny stav
- [ ] Kliknutie na badge — navigácia na online miestnosť
- [ ] Error badge — červený indikátor pri Firestore zlyhaní
- [ ] Odpojenie zariadenia — ghost hráč sa vyčistí

### 🎮 Herný flow
- [ ] **Scenár A:** Hráč 1 Nepotvrdil → Hráč 2 Potvrdil → Results screen, Hráč 2 = winner
- [ ] **Scenár B:** Alice Potvrdil (10000) → Bob normálny (9800) → Results screen, Alice = winner
- [ ] **Scenár C:** Alice Potvrdil (10000) → Bob Potvrdil (10000) → Results screen, DRAW
- [ ] **Scenár D:** Bust (prekročenie) → zostáva na pôvodnom skóre, žiadna penalta
- [ ] **Scenár E:** Penalta (hod = 0 bodov) → −1 000 sa odpočíta
- [ ] **Scenár F:** Online hra — obaja hráči pridávajú body, stav je konzistentný na oboch zariadeniach
- [ ] **Scenár G:** Online hra — zariadenie sa odpojí a znovu pripojí, stav sa obnoví

### 📊 Tabuľka skóre
- [ ] Prepínač Delta (Δ) / Kumulatívny (Σ) — oba módy zobrazujú správne hodnoty
- [ ] Progress Chart — graf sa plní po každom kole
- [ ] Standings — poradie hráčov aktuálne po každom kole

### 🎨 Skins & vizuál
- [ ] Harry Potter skin — pergamenové pozadie + HP ikony
- [ ] Brawl Stars skin (Classic + Brawl Blue) — Brawl ikony v pozadí
- [ ] Ostatné skiny (Klasik, Les, Royal, Pergamen, Orech) — fungujú správne
- [ ] Skin sa synchronizuje online — pozorovateľ vidí rovnaký skin ako recorder

### 🔊 Zvuky & animácie
- [ ] Zapnutie/vypnutie zvukov v nastaveniach — efekty reagujú
- [ ] Zapnutie/vypnutie animácií v nastaveniach
- [ ] Funny windows — vtipné hlášky sa zobrazujú (nastaviteľný mód)

### 📱 Wake Lock
- [ ] Displej nespadne do spánku počas hry (Web Wake Lock API)

### 📤 Export / Import
- [ ] Export do Excelu — súbor sa stiahne
- [ ] Import z Excelu — turnaje sa importujú správne
- [ ] Import neznámeho súboru — error, nie crash

---

**Latest Release:** [v1.6.6 — Kombinovaný režim bez "práve pripisuješ", cieľové skóre pri každom hráčovi](https://github.com/bucala/kocky-sveta/releases/tag/1.6.6)
