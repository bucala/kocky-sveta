# 🎲 Kocky sveta

> Elegantná digitálna verzia bodovacej hry **Kocky** pre web aj Android (Capacitor + React).

![Vite](https://img.shields.io/badge/Vite-6.x-8b5cf6?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-18.x-0f172a?style=for-the-badge&logo=react)
![Capacitor](https://img.shields.io/badge/Capacitor-6.x-2563eb?style=for-the-badge&logo=capacitor&logoColor=white)
![Tests](https://img.shields.io/badge/tests-57%2F57%20✓-22c55e?style=for-the-badge)

## 📦 Status: STABILNÝ — v1.5.3

> **Tag:** `v1.5.3`

---

## ✨ Funkcie

- offline hra pre viac hráčov na jednom zariadení (až 6 hráčov)
- vlastné pravidlá a nastaviteľné bodovanie
- export a import turnajov cez Excel (lazy-loaded)
- archív odohraných hier a prehľad výsledkov
- niekoľko vizuálnych skinov (Klasik, Les, Royal, Pergamen, Orech…)
- progress chart, standings, history graf
- Android build cez Capacitor + Android Studio
- **modulárna architektúra** — screens, components, constants, utils, hooks, lib
- **tournamentEngine.js** — čistá doménová knižnica (pure functions, bez React), unit testovaná

> Aplikácia je **plne offline**. Všetky dáta sa ukladajú lokálne na zariadenie cez `localStorage`.

---

## 📝 Changelog

### v1.5.3 — 2026-05-16 — Endgame & Domain Refactor Release

```
🐛 fix: stale closure v handleFinishTournament / handleAbortTournament
  • useCallback([]) zachytával finishTournament z prvého renderu → active=null →
    if (!active) return → turnaj sa nikdy neuzavrel po víťazstve/draw
  • Fix: finishTournamentRef / abortTournamentRef sa aktualizujú každý render;
    stable callback vždy volá aktuálnu verziu funkcie
  • Opravuje scenáre: víťaz, remíza, presný zásah (všetky 3 ✅ overené)

♻️ refactor: unifikácia computeWinners + computeTotals (FÁZA 2)
  • Lokálne kópie oboch funkcií odstránené z App.jsx (~130 riadkov)
  • Jediný zdroj pravdy: src/lib/tournamentEngine.js
  • finishTournament, TournamentScreen aj ArchiveScreen teraz zdieľajú
    rovnakú implementáciu výpočtu víťaza

🛡️ fix(fáza-1): pendingDecision:null v provisional pred computeWinners()
  • confirmWin + roundEnded branch: provisional neobsahoval pendingDecision:null
    → tournamentEngine.js pendingDecision guard blokoval detekciu víťaza
  • normal roundEnded branch: rovnaká oprava
  • Odstránený dead code: commitDash(), opts.confirmCandidate,
    opts.retryWin, opts.declineWin, opts.__declineWin_removed

🧹 chore: odstránené production console.log (6 miest)
  • [APP] App component mounted, view changed, startTournament
  • [APP] HIT_TARGET toast branch
  • [TS] TournamentScreen mounted, render snapshot

🏗️ feat(fázy 1–8): domain/UI decoupling refactor
  • pendingDecision domain objekt pre endgame exact-hit flow
  • resolvePendingDecision() — jediný autoritatívny vstup pre Potvrdil/Nepotvrdil
  • showDecisionPopup ako derived UI state (nie useState)
  • DecisionPresenter — jeden renderer pre všetky vizuálne varianty popupu
  • computeWinners() rešpektuje otvorené pendingDecision (guard v tournamentEngine)
  • Premenovanie technických názvov pre zrozumiteľnosť

🧪 test: 57 unit testov (50 tournamentEngine + 7 useFunnyQueue) — všetky zelené
```

### v1.5.2 — 2026-05-10

```
🐛 fix: opravené zobrazenie nového kola pri dokončení kola
🐛 fix: stabilnejší browser fallback pri sťahovaní Excel exportu
📦 dep: Firebase zafixovaný na ^12.12.1
```

### v1.5.1 — 2026-05-09

```
🐛 fix: riadok tabuľky sa zobrazí hneď v ďalšom kole
📤 fix: export archívu do Excelu — stabilnejší browser fallback
```

### v1.5.0 — 2026-05-08 — Modularizácia & Performance Release

```
♻️ refactor: extrakcia obrazoviek z App.jsx do samostatných súborov
  • TournamentScreen, ArchiveScreen, RulesEditor → src/screens/
  • GameWidgets, FunnyOverlay, ProgressChart, SkinSelector → src/components/

⚡ perf: lazy loading XLSX knižnice (~430 KB chunk len pri exporte)
🎨 style: STYLES konštanta → src/app.css
♿ a11y: aria-label na icon-only tlačidlá
🐛 fix: mojibake v SimplifiedResult.jsx (slovenská diakritika)
🧹 chore: odstránených 38 dočasných Python skriptov
```

### v1.4.1 — 2026-05-07

```
🐞 fix: useFunnyQueue — cleanup, stale closure, memoization
🧪 ci: Vitest test suite pre useFunnyQueue
```

### v1.4.0 — 2026-05-06

```
♻️ refactor: Migrácia komponentov na React Hooks, extrakcia useFunnyQueue
```

### v1.2.9 — 2026-05-05

```
⚡ perf: React.memo ScoreTable — ~30–60% menej re-renderov
```

---

## 🎮 Pravidlá hry (implementované)

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

## 🧩 Rýchly štart

```bash
npm install
npm run dev          # web dev server
npm test             # Vitest unit testy (57/57)
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
├── app.css                    — aplikačné štýly
├── index.css                  — global štýly + Google Fonts import
├── main.jsx                   — entry point + localStorage polyfill
├── atoms/
│   ├── SimplifiedResult.jsx   — výsledkový badge
│   └── index.js
├── components/
│   ├── FunnyOverlay.jsx       — funny message popup systém
│   ├── GameWidgets.jsx        — DiceIcon, DiceRow, GoldButton, Ornament…
│   ├── ProgressChart.jsx      — Recharts graf vývoja skóre
│   ├── ScoreTable.jsx         — tabuľka skóre (React.memo)
│   ├── SkinSelector.jsx       — výber vizuálneho skinu
│   └── ui.jsx                 — zdieľané UI komponenty
├── constants/
│   ├── game.js                — herné konštanty
│   ├── gameConfig.js          — QUICK_VALUES, TARGET_OPTIONS, POPUP_CONFIG…
│   ├── rules.js               — pravidlá r1–r18
│   └── skins.js               — definície skinov
├── hooks/
│   └── useFunnyQueue.js       — vlastný hook pre funny queue (memoizovaný)
├── lib/
│   ├── gameEngine.js          — herný engine (legacy wrapper)
│   ├── firebase.js            — Firebase konfigurácia (offline stub)
│   ├── storage.js             — localStorage abstrakcia
│   ├── tournamentEngine.js    — čistá doménová knižnica (pure functions)
│   └── tournamentEngine.test.js — 50 unit testov pre domain logiku
├── screens/
│   ├── ArchiveScreen.jsx      — archív turnajov + detail
│   ├── GameViewModesScreen.jsx
│   ├── MainMenu.jsx
│   ├── NewTournament.jsx
│   ├── OnlineScreen.jsx
│   ├── RulesEditor.jsx        — editor pravidiel
│   ├── SettingsMenu.jsx
│   ├── TournamentScreen.jsx   — herný flow (Master logika)
│   └── VisualAndSkinScreen.jsx
└── utils/
    ├── format.js              — formátovanie dátumov a časov
    └── xlsxLazy.js            — lazy loader pre XLSX knižnicu
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

## ✅ Manual Testing Checklist — v1.5.3

### 🏗️ Build
- [ ] `npm run build` — build prebehne bez chýb
- [ ] `npm test` — 57/57 Vitest testov zelených ✅
- [ ] `npm run dev` — app štartuje bez chýb v konzole

### 🎮 Endgame scenáre (kritické)
- [ ] **Scenár A:** Hráč 1 Nepotvrdil → Hráč 2 Potvrdil → Results screen, Hráč 2 = winner ✅
- [ ] **Scenár B:** Alice Potvrdil (10000) → Bob normálny (9800) → Results screen, Alice = winner ✅
- [ ] **Scenár C:** Alice Potvrdil (10000) → Bob Potvrdil (10000) → Results screen, DRAW ✅
- [ ] **Scenár D:** Bust (prekročenie) → zostáva na pôvodnom skóre, žiadna penalta
- [ ] **Scenár E:** Penalta (hod = 0 bodov) → −1000 sa odpočíta

### 🏆 Základný herný flow
- [ ] Nový turnaj — 2/3/6 hráčov, rôzne ciele
- [ ] Penalizácia −1000 funguje
- [ ] Archív → Detail → správne výsledky
- [ ] Strict mode (r18=Nie) — prvý hráč čo dosiahne cieľ vyhráva

### 📤 Export / Import
- [ ] Export do Excelu — súbor sa stiahne
- [ ] Import z Excelu — turnaje sa importujú
- [ ] Import neznámeho súboru — error, nie crash

### 🎨 Skin & Fonty
- [ ] Všetky skiny sa správne aplikujú (Klasik, Les, Royal, Pergamen, Orech)
- [ ] Fonty sa načítajú bez FOIT

### 📱 Android Build
- [ ] `npm run build-android`
- [ ] APK na zariadení — endgame flow, archív, export

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

---

## 📘 Poznámka

Aplikácia bola pôvodne navrhnutá s Firebase online miestnosťami. Tie boli odstránené pre zjednodušenie — projekt je teraz čisto offline (žiadny `google-services.json`, žiadne Firestore rules, žiadne env premenné).
