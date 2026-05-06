# 🎲 Kocky sveta

> Elegantná digitálna verzia bodovacej hry **Kocky** pre web aj Android (Capacitor + React).

![Vite](https://img.shields.io/badge/Vite-6.x-8b5cf6?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-18.x-0f172a?style=for-the-badge&logo=react)
![Capacitor](https://img.shields.io/badge/Capacitor-6.x-2563eb?style=for-the-badge&logo=capacitor&logoColor=white)

## 📦 Status: STABILNÝ — v1.4.1

> **ZIP release:** `kocky-sveta-1.4.1.zip`
> **Tag:** `v1.4.1`

---

## ✨ Funkcie

- offline hra pre viac hráčov na jednom zariadeni (až 6 hráčov)
- vlastné pravidlá a nastaviť bodovanie
- export a import turnajov cez Excel
- archív odohraných hier a prehľad výsledkov
- niekoľko vizuálnych skinov (Klasik, Les, Royal, Pergamen…)
- progress chart, štandings, history graf
- Android build cez Capacitor + Android Studio
- **React Hooks architektura** — komponenty prepísane na hooks, vlastné `useFunnyQueue` hook

> Aplikácia je **plne offline**. Všetky dáta sa ukládajú lokálne na zariadenie cez `localStorage`.

---

## 📝 Changelog

### v1.4.1 — 2026-05-06 — Hook Quality Release

```
🐞 fix: useFunnyQueue — cleanup, stale closure, memoization
• useEffect cleanup opravený: () => () => clearTimer() (predtým odovzdával ref namiesto volania)
• Stale closure v enqueue odstránená: activeRef.current namiesto priameho čítania state
• Všetky interné funkcie memoizované cez useCallback s príslušnými dependency arrays:
    clearTimer []  |  popNext [clearTimer, minDuration]  |  enqueue [clearTimer, minDuration, maxQueue, popNext]
    dismiss [clearTimer, popNext]  |  clear [clearTimer]
• Logika (newer-wins, QUEUE_SIZE, DISPLAY_DURATION) — nedotknutá
• Dotknutý súbor: src/hooks/useFunnyQueue.js

🧪 ci: Vitest test suite pre useFunnyQueue
• Automatizované testy pre init, enqueue, dismiss, clear
• GitHub Actions workflow: .github/workflows/test.yml
```

### v1.4.0 — 2026-05-06 — Hooks Refactor Release

```
♻️ refactor: Migrácia komponentov na React Hooks
• Extrákcia useFunnyQueue hooku do samostatného súboru
• Modulizácia aplikácie — rozdelenie App.jsx na menšie moduly
• Vyčistenie class-based patterns, nahradené čistými hooks
• Zlepšená čitatelʼnosť a udržiovateļnosť kódu
```

### v1.2.9 — 2026-05-05 — Performance Release

```
⚡ perf: React.memo ScoreTable
• ScoreTable sa viac nere-renderuje pri typing, toast stave, funny queue tickoch
• ~30–60% menej zbytočných re-renderov počas aktivity turnaja
• Dotknutý súbor: src/components/ScoreTable.jsx — 1 riadok
• Master logika, props API, UI — nedotknuté
```

### v1.2.8 — 2026-05-05 — Performance Release

```
🔥 perf: Lazy load xlsx — dynamic import() v exportToExcel() a importFromExcel()
• Initial JS bundle: −584 KB
• npm run dev: ~1.6s vs ~2.1s (−37%)
• Export/Import: ~300ms prvý load, potom modul cached → okamžitý
• Dotknutý súbor: src/App.jsx — len 2 funkcie
• Master logika nedotknutá
```

---

## ✅ Manual Testing Checklist — v1.4.1

> Pred tagom `v1.4.1` over všetky body nižšie na skutočnom zariadeni.

### 🧪 useFunnyQueue Hook (nové v 1.4.1)
- [ ] Funny message sa zobrazí po udalosti (víťazstvo kola, tombola...)
- [ ] Popup drží `POPUP_DISPLAY_DURATION` ms pred automat. zatvorením
- [ ] Rýchle 2 udalosti za sebou — druhá sa zaradí do queue, zobrazí sa po prvej
- [ ] `dismiss()` — kliknutím na popup ho zatvorí okamžite
- [ ] Po `clear()` (odchod z turnaja) — žiadny popup sa neobjaví
- [ ] Console — žiadne React warnings (`missing deps`, stale closures, memory leaks)

### 🔁 Regresné testy (hooks refactor)
- [ ] Funny messages fungujú rovnako ako pred refaktorom
- [ ] Popupy sa nezobrazujú po odchode z turnaja (unmount cleanup OK)
- [ ] Console bez warníng po 2+ minútovej hre

### Bundle & Build
- [ ] `npm run dev` — app štartuje bez chýb
- [ ] `npm run build` — build prebehne bez chýb
- [ ] `npm test` — všetky Vitest testy zelené ✅

### Export / Import (Lazy XLSX)
- [ ] Settings → Export do Excelu — prvý klik (~300ms load, súbor sa stiahne)
- [ ] Settings → Export — druhý klik (okamžitý, modul cached)
- [ ] Settings → Import z Excelu — vybrať `.xlsx`, turnaje sa importujú
- [ ] Import prázdneho / neznámeho súboru — error message, nie crash

### ScoreTable (React.memo)
- [ ] Typing do custom input → ScoreTable sa nehýbe (bez re-renderu)
- [ ] Pridanie bodov cez Quick Values → ScoreTable zobrazí `pendingPreview`
- [ ] Zápis kola → ScoreTable sa aktualizuje ✅
- [ ] Prepnutie Σ/Δ mód → ScoreTable sa aktualizuje ✅
- [ ] Observer mód — Live prehľad funguje

### Turnaj — Master Logika
- [ ] Nový turnaj — 2/3/6 hráčov, do 5000 aj 10000
- [ ] Penalizácia −1000 funguje
- [ ] Víťazstvo (r18=Áno a Nie)
- [ ] Remíza — 2 hráči v rovnakom kole
- [ ] Import turnaja → archív → Detail

### Android Build
- [ ] `npm run build-android`
- [ ] `npx cap open android` → Clean + Rebuild
- [ ] APK na zariadeni — export, import, tournament flow
- [ ] Funny popupy na mobile — zobrazujú sa a zatvárajú správne

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

Výstup nájdeš v `dist/`. Pre deploy na GitHub Pages:

```bash
npm run deploy
```

### Android

```bash
npm install
npm run build-android   # vite build + cap sync + post-sync fixes
npx cap open android    # otvori Android Studio
```

V Android Studio: **Build → Clean Project**, potom **Build → Rebuild Project**.

---

## 🧱 Štruktúra projektu

- `src/App.jsx` — hlavná herná logika a UI
- `src/hooks/useFunnyQueue.js` — vlastný hook pre funny queue systém (memoizovaný, v1.4.1)
- `src/components/ScoreTable.jsx` — tabuľka skóre (memo-izovaná od v1.2.9)
- `src/main.jsx` — entry point + `window.storage` polyfill nad `localStorage`
- `src/index.css` — global styles
- `.github/workflows/test.yml` — GitHub Actions CI (Vitest)
- `public/` — PWA manifest, ikóny, service worker
- `android/` — natívny Android wrapper (Capacitor)
- `scripts/apply-android-fixes.js` — post-cap-sync úpravy (SDK verzie, permissions)

---

## 🛠 Troubleshooting

### Po update appky na Androide vidím staré dáta / starú verziu
Capacitor WebView agresívne kešuje. Po `cap sync` v Android Studio sprav **Build → Clean Project → Rebuild**, a na zariadeni **Settings → Apps → Kocky sveta → Storage → Clear data** (alebo úplne odoinštaluj a nainštaluj znova).

### Chýba `capacitor.settings.gradle`
Spusti znova:
```bash
npx cap sync android
```

### Service worker drží starý web build
V dev tools: **Application → Service Workers → Unregister**, potom hard-refresh (Ctrl+Shift+R).

### Vitest testy nefungujú
```bash
npm install          # zabezpečí @testing-library/react a vitest
npm test
```

---

## 📘 Poznámka

Aplikácia bola pôvodne navrhnutá s Firebase online miestnosami. Tie boli odstránené pre zjednodušenie a zníženie závislostí — celý projekt je teraz čisto offline a ļahkšie sa udržiava (žiadny `google-services.json`, žiadne Firestore rules, žiadne env prementé).
