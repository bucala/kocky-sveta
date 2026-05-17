# Changelog — Kocky Sveta 2026

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.5.5] — 2026-05-17 — Firebase Online Features

### Pridané (Added)

- **Firebase Authentication** — anonymné prihlásenie bez registrácie
- **Cloud Firestore** — real-time databáza pre online miestnosti
- **Online multiplayer** — zdieľanie hry medzi zariadeniami v reálnom čase
- **Session persistencia** — `browserLocalPersistence` + `authStateReady()` → UID sa zachová po F5
- **Zustand `persist` middleware** — `roomId` a `uid` prežijú refresh stránky
- **Aktívny panel hráčov** — real-time zoznam pripojených zariadení (online/offline)
- **Online/offline badge** v hlavnom menu s vizuálnym indikátorom stavu
- **Klikateľný badge** — ťuknutím na ikonu WiFi prejdeš na online miestnosť
- **Vlastný kód miestnosti** — zadaný názov (napr. RUBIKON) sa použije priamo ako Firestore ID
- **AdminScreen** — PIN-chránený admin panel s nastaveniami pre vývojárov
- **PIN infraštruktúra** — `hashPin()`, `ownerPinHash` v Firestore, `PIN_VERIFICATION_ENABLED` flag
- **Error Boundary** — React class component, zachytí neočakávané chyby bez pádu appky
- **12-hodinový inaktivity timeout** s 2-minútovým varovaním pred odpojením
- **Easter egg** — 5× klik na ikonu ℹ v nastaveniach zobrazí fotku kociek
- **Zakázanie výberu textu** — `user-select: none` v celej appke, správanie ako natívna appka
- **Undo stack** — až 5 krokov späť v hernom stave (TournamentScreen)
- **Firebase CLI konfigurácia** — `firebase.json`, `.firebaserc`
- **Firestore security rules** — produkčné pravidlá nasadené
- **`.env.example`** — šablóna pre Firebase prihlasovacie údaje
- **CHANGELOG.md** — tento súbor

### Zmenené (Changed)

- Firebase konfigurácia teraz používa env premenné s fallback hodnotami
- `ensureAuth()` čaká na `authStateReady()` pred `signInAnonymously()` — zabraňuje duplikovaniu UID
- `OnlineScreen` zobrazuje real-time stav hráčov (🟢 online / 🔴 offline)
- Online sync používa JSON string porovnanie na predchádzanie echo-zapisov
- Firestore write chyby teraz menia status badge na červený (neboli tiché)
- Tlačidlo PRIDAJ v TournamentScreen opravené pre mobilné zobrazenie
- Konfirmačné popupy povolené aj v režimoch Pozorovateľ a Zapisovateľ
- Text pravidiel aktualizovaný podľa nových herných pravidiel
- `ProgressChart` — nahradená recharts (~529 KB) za SVG implementáciu (0.04 KB)
- Verzia balíka zvýšená na 1.5.5

### Opravené (Fixed)

- Auth stav sa neobnovoval správne po refreshi stránky (F5)
- Anonymní používatelia dostávali nové UID pri každom refreshi
- Race condition v online sync medzi remote→local a local→remote efektmi
- Tiché Firestore chyby (`.catch(() => {})` prehltávalo všetky chyby)
- Import z Excelu — `XLSX` knižnica nebola importovaná v `importFromExcel()`
- Easter egg overlay bol za iným obsahom (CSS stacking context z `ks-fade` animácie)

### Infraštruktúra

- Nasadené Firestore security rules do produkcie
- Aplikácia nasadená na Firebase Hosting: https://kocky-sveta-2026.web.app
- Pridané `.firebase/` a `firebase-debug.log` do `.gitignore`
- Odstránené `dist/` súbory z version control

### Bezpečnosť

- Produkčné Firestore pravidlá: autentifikovaní používatelia môžu čítať/vytvárať/aktualizovať miestnosti
- API key obmedzenia nakonfigurované v Google Cloud Console
- Anonymná autentifikácia povolená vo Firebase Console
- PIN infraštruktúra pripravená, zatiaľ neaktívna (`PIN_VERIFICATION_ENABLED = false`)

---

## [1.5.4] — 2026-05-16

### Pridané
- AdminScreen s PIN-chráneným prístupom
- Online miestnosti — základná infraštruktúra (createRoom, joinRoom, onlineStore)
- Real-time Firestore subscription pre stav hry

### Opravené
- Stale closure v `handleFinishTournament` / `handleAbortTournament`
- Unifikácia `computeWinners` / `computeTotals` logiky

---

## [1.5.3] — 2026-05-16 — Endgame & Domain Refactor Release

### Pridané
- `pendingDecision` domain objekt pre endgame exact-hit flow
- `resolvePendingDecision()` — jediný autoritatívny vstup pre Potvrdil/Nepotvrdil
- `DecisionPresenter` — jeden renderer pre všetky vizuálne varianty popupu
- 57 unit testov (50 tournamentEngine + 7 useFunnyQueue) — všetky zelené

### Zmenené
- `computeWinners()` rešpektuje otvorené `pendingDecision` (guard v tournamentEngine)
- Lokálne kópie `computeWinners` + `computeTotals` odstránené z App.jsx (~130 riadkov)

### Opravené
- `useCallback([])` zachytával `finishTournament` z prvého renderu → `active=null` → turnaj sa nikdy neuzavrel
- `pendingDecision:null` v provisional pred `computeWinners()` blokoval detekciu víťaza

---

## [1.5.2] — 2026-05-10

### Opravené
- Zobrazenie nového kola pri dokončení kola
- Stabilnejší browser fallback pri sťahovaní Excel exportu

### Závislosti
- Firebase zafixovaný na `^12.12.1`

---

## [1.5.1] — 2026-05-09

### Opravené
- Riadok tabuľky sa zobrazí hneď v ďalšom kole
- Export archívu do Excelu — stabilnejší browser fallback

---

## [1.5.0] — 2026-05-08 — Modularizácia & Performance Release

### Zmenené
- Extrakcia obrazoviek z App.jsx do samostatných súborov (TournamentScreen, ArchiveScreen, RulesEditor)
- GameWidgets, FunnyOverlay, ProgressChart, SkinSelector → `src/components/`
- Lazy loading XLSX knižnice (~430 KB chunk len pri exporte)
- STYLES konštanta → `src/app.css`

### Opravené
- Mojibake v SimplifiedResult.jsx (slovenská diakritika)

---

## [1.4.1] — 2026-05-07

### Opravené
- `useFunnyQueue` — cleanup, stale closure, memoization

### Testy
- Vitest test suite pre `useFunnyQueue`

---

## [1.4.0] — 2026-05-06 — Hooks Refactor Release

### Zmenené
- Migrácia komponentov na React Hooks, extrakcia `useFunnyQueue`
- Atoms extrahovane z App.jsx (−779 riadkov, −21%)

---

## [1.2.9] — 2026-05-05

### Výkon
- `React.memo` pre `ScoreTable` — ~30–60% menej re-renderov

---

## Release linky

- [v1.5.5](https://github.com/bucala/kocky-sveta/releases/tag/v1.5.5) — Firebase Online Features
- [Produkčná appka](https://kocky-sveta-2026.web.app)
- [Firebase Console](https://console.firebase.google.com/project/kocky-sveta-2026)
