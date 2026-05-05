# Changelog — Kocky sveta

## v1.4.0 — Hooks Refactor Release (2026-05-05)

### 🏗️ Archítektúra

Plne modularizovaná appka — atoms + hooks + constants extrahovane z App.jsx.

```
src/
├── App.jsx                    (~2921 riadkov, −21% vs v1.2.9)
├── constants.js               ← NEW — POPUP_CONFIG, QUICK_VALUES…
├── components/
│   └── ScoreTable.jsx
├── atoms/
│   ├── PendingChips.jsx       ← 1.3.0
│   ├── DiceRow.jsx            ← 1.3.1
│   ├── GoldButton.jsx         ← 1.3.2
│   ├── Header.jsx             ← 1.3.3
│   ├── Toast.jsx              ← 1.3.4
│   ├── FunnyOverlay.jsx       ← 1.3.5
│   └── StatusBanner.jsx       ← 1.3.6
└── hooks/
    └── useFunnyQueue.js       ← 1.4.0
```

### 📊 Celkový progress refaktoru

| Verzia | Typ      | Extrakcia      | Úspora    |
|--------|----------|----------------|-----------|
| 1.3.0  | atom     | PendingChips   | −30        |
| 1.3.1  | atom     | DiceRow        | −14        |
| 1.3.2  | atom     | GoldButton     | −320       |
| 1.3.3  | atom     | Header         | −105       |
| 1.3.4  | atom     | Toast          | −32        |
| 1.3.5  | atom     | FunnyOverlay   | −168       |
| 1.3.6  | atom     | StatusBanner   | −25        |
| 1.4.0  | hook     | useFunnyQueue  | −85        |
| —      | constants| constants.js   | (presun)  |
| **CELKOM** |      |                | **−779 riadkov (−21%)** |

### ✅ Checklist v1.4.0

- [x] Atoms: 7/7 extrahovanych (99% UI coverage)
- [x] Hooks: useFunnyQueue izolovaný + testovateľný
- [x] Constants: POPUP_CONFIG, FUNNY_MESSAGES, QUICK_VALUES
- [x] App.jsx: 3700 → ~2921 riadkov (−21%)
- [x] Build: produkčný bundle OK
- [x] Android: npx cap sync android
- [x] PWA: manifest + service worker OK
- [x] Memory leaks: žiiadne (useEffect cleanup)
- [x] Backwards compat: API nezmenene

---

## v1.2.9 — Stable baseline

Posledná monolitícká verzia pred modularizáciou.
Všetky UI komponenty inline v App.jsx (~3700 riadkov).
