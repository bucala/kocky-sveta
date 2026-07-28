# Changelog — Kocky Sveta 2026

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.6.3] — 2026-07-05 — Farby hráčov zhodné s grafom, prehľadnejší graf

### Zmenené (Changed)

- **Zjednotená farebná paleta hráčov** — graf priebehu hry (`ProgressChart`) teraz používa presne tú istú paletu ako veľké zobrazenie skóre (`BigScoreDisplay`); mená aj hodnoty v zjednodušených režimoch sú vždy farebne odlíšené podľa hráča
- **Pozorovateľ zjednodušený** — graf priebehu hry je bez legendy (farby sa už zhodujú s farbami v tabuľke skóre nad ním) a pri dlhšej hre sa body na grafe už nestláčajú/nesplývajú (rozšíri sa a scrolluje horizontálne namiesto stláčania)
- **Pozorovateľ zjednodušený** — v pravom hornom rohu karty každého hráča sa teraz zobrazuje aktuálne poradie; líder má namiesto čísla korunku

---

## [1.6.2] — 2026-07-05 — Korunka pre lídra, zjednodušené zobrazenia, fullscreen graf

### Pridané (Added)

- **Korunka pre lídra** — nahradila "Pulzujúceho lídra" (glow efekt); aktuálny líder má teraz pri svojom mene korunku (Rozšírenia, defaultne vypnuté)
- **Klasický zjednodušený režim zobrazenia** — bez tabuľky jednotlivých kôl, iba mená hráčov a aktuálne skóre vo veľkom fonte (3× väčšie), layout sa nehýbe, menia sa len hodnoty; zapisovanie bodov zostáva rovnaké ako v klasickom režime
- **Pozorovateľ zjednodušený režim zobrazenia** — rovnaký princíp ako vyššie, font 6× väčší (určené pre TV/väčšiu obrazovku), pod veľkým skóre navyše živý graf priebehu hry
- **"Priebeh hry" vo fullscreen móde** — namiesto malého vyskakovacieho okna sa teraz otvára na celú obrazovku, s výrazne väčším a čitateľnejším grafom a väčším písmom mien/skóre

### Zmenené (Changed)

- Vo všetkých režimoch zobrazenia je teraz jemne odlíšené pozadie aktuálne hrajúceho hráča (hlavička aj súčtový riadok tabuľky skóre)

---

## [1.6.1] — 2026-07-05 — Audit Cleanup: Dead Code, Security & Build Fixes

### Odstránené (Removed)

- **41 zabudnutých backup súborov** (`App.jsx.bak_*`, `TournamentScreen.jsx.bak_*`/`.before_*`) — ladiace kópie z histórie vývoja
- **Mŕtve duplicitné súbory** — `src/screens/{TournamentScreen,ArchiveScreen,SettingsMenu,RulesEditor}.jsx`, `src/components/{FunnyOverlay,SkinSelector,GameWidgets}.jsx`, `src/game/` (celý priečinok), `src/online/startGame.ts`, `src/atoms/SafeFallback.jsx`, `src/styles/appStyles.js`, `src/utils/xlsxLazy.js` — pozostatky opusteného refaktoru z 1.5.0, nikde neimportované, appka beží na vlastných kópiách vnútri `App.jsx`
- **`recharts`** — nepoužívaná závislosť (nahradená vlastným SVG grafom už v 1.6.0)

### Opravené (Fixed)

- **`/api/scan` OCR endpoint** — obnovený funkčný model `claude-3-haiku-20240307` (merge omylom vrátil neplatný `claude-sonnet-4-6`, čo spôsobovalo HTTP 400)
- **Info-leak v error hláškach** — `/api/scan` už neposiela klientovi surový text z Anthropic API alebo interné chybové hlásenia, detail sa loguje len server-side
- **`vitest` 1.6.0 → 2.1.9** — zosúladené s nainštalovaným Vite 6 (predtým testy tichy bežali proti vnorenej Vite 5 závislosti)
- **Android release signing** — zlyhá rýchlo pri chýbajúcich env premenných namiesto tichého `CHANGE_ME` fallbacku
- **`apply-android-fixes.js`** — odstránená mŕtva regex logika pre `compileSdkVersion`/`targetSdkVersion`, ktorá už nesedela s aktuálnou štruktúrou `build.gradle` (SDK verzie sú centrálne vo `variables.gradle`)

### Bezpečnosť (Security)

- `.gitignore` doplnený o Android build artefakty a keystore súbory (`*.jks`, `*.keystore`)
- Validácia `mimeType` allow-listu v `/api/scan`

### Prístupnosť (Accessibility)

- `aria-label` pridaný na icon-only tlačidlá (úprava rýchlych hodnôt, mazanie kola, pridanie/odobratie kocky, prepínač zobrazenia skóre)

---

## [1.6.0] — 2026-05-21 — Online Sync Overhaul + Skins + UX

### Pridané (Added)

**Online sync:**
- **Error badge** — červený vizuálny indikátor pri zlyhaní Firestore zápisu
- **Bidirectional sync** — všetky zariadenia syncujú v oboch smeroch bez master-slave logiky
- **pendingWriteCount guard** + eager module load — zabraňuje race condition pri prvom zápise
- **Anti-revert ochrana** — porovnanie remote ↔ last-written (nie aktuálny local state)
- **Stale ghost cleanup** — pri odpojení zariadenia sa vyčistia všetky prítomnostné záznamy
- **Recorder-only writes** — observer nikdy nezapíše do Firestore (žiadna korupcia dát)

**Vizuálne skiny:**
- **Harry Potter skin** — pergamenové pozadie + plávajúce HP ikony
- **Brawl Stars skin** — dva odtiene (Classic + Brawl Blue) s ikonami postáv
- **Poster backgrounds** — reálne plagátové obrázky ako pozadia skinov
- **Comprehensive skinning** — CSS custom properties pre všetky popupy a overlaye

**Zvuky & animácie:**
- **Zvukový systém** — herné efekty (zápis, penalta, víťazstvo, bust…)
- **Animácie** — konfigurovateľné cez nastavenia
- **Funny windows mode** — konfigurovateľný mód zobrazenia vtipných hlášok
- **Caveat Brush** — nový ručne písaný font

**UX & herné funkcie:**
- **SVG Progress Chart** — vlastný graf vývoja skóre (náhrada Recharts, −529 KB)
- **Score display mode** — prepínač Delta (Δ) / Kumulatívny (Σ) v tabuľke skóre
- **Tournament view mode** — základný / rozšírený pohľad na turnaj
- **Web Wake Lock API** — displej nespadne do spánku počas hry
- **OCR scan_sheet tool** — fotka archy skóre → Excel tabuľka (Anthropic Vision API)

### Zmenené (Changed)

- `activeTournament` a `syncedTournaments` sa ukladajú ako **JSON string** — Firestore neumožňuje vnorené polia (nested arrays)
- Online sync prepísaný — Firestore ako jediný source of truth, klientské timestamps odstránené
- Vercel (`kocky-sveta.vercel.app`) ako primárna produkčná platforma; Firebase Hosting zachovaný ako záloha
- `updateGameState.ts` — zápis cez JSON stringify/parse pre všetky online dáta

### Opravené (Fixed)

- **Firestore nested arrays** — `FirebaseError: Function updateDoc() called with invalid data. Nested arrays are not supported` → riešené JSON string serializáciou
- **Crash `Cannot read properties of undefined (reading 'length')`** — `ScoreTable` a `ProgressChart` nemali guard pre `tournament.rounds`; pridaný `!Array.isArray(tournament.rounds)` do oboch komponentov
- **Ghost players** pri odpojení — deviceId dedup + heartbeat-based prítomnostný systém
- **Echo-zápisy** — porovnanie JSON stringov zabraňuje zbytočným Firestore zápisom

### Infraštruktúra

- Vercel deployment nakonfigurovaný ako primárna produkcia
- Lokálny git tag `v1.6.0` vytvorený; GitHub release `1.6.0` automaticky vygenerovaný z CI

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

- [v1.6.0](https://github.com/bucala/kocky-sveta/releases/tag/1.6.0) — Online Sync Overhaul + Skins + UX
- [v1.5.5](https://github.com/bucala/kocky-sveta/releases/tag/v1.5.5) — Firebase Online Features
- [v1.5.0](https://github.com/bucala/kocky-sveta/releases/tag/v1.5.0) — Modularizácia & Performance
- [Produkčná appka](https://kocky-sveta.vercel.app)
- [Firebase Hosting (záloha)](https://kocky-sveta-2026.web.app)
- [Firebase Console](https://console.firebase.google.com/project/kocky-sveta-2026)
