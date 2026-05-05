# 🎲 Kocky sveta

> Elegantná digitálna verzia bodovacej hry **Kocky** pre web aj Android (Capacitor + React).

![Vite](https://img.shields.io/badge/Vite-6.x-8b5cf6?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-18.x-0f172a?style=for-the-badge&logo=react)
![Capacitor](https://img.shields.io/badge/Capacitor-6.x-2563eb?style=for-the-badge&logo=capacitor&logoColor=white)

## 📦 Status: STABILNÝ — v1.4.0

> **ZIP release:** `kocky-sveta-1.4.0.zip`
> **Tag:** `v1.4.0`

---

## ✨ Funkcie

- offline hra pre viac hráčov na jednom zariadeni (až 6 hráčov)
- vlastné pravidlá a nastaviť bodovanie
- export a import turnajov cez Excel
- archív odohraných hier a prehľad výsledkov
- niekoľko vizuálnych skinov (Klasik, Les, Royal, Pergamen…)
- progress chart, štandings, history graf
- Android build cez Capacitor + Android Studio
- **React Hooks architekúra** — komponenty prepísané na hooks, vlastné `useFunnyQueue` hook

> Aplikácia je **plne offline**. Všetky dáta sa ukladávajú lokálne na zariadenie cez `localStorage`.

---

## 📝 Changelog

### v1.4.0 — 2026-05-06 — Hooks Refactor Release

```
♻️ refactor: Migrácia komponentov na React Hooks
• Extrakcia useFunnyQueue hooku do samostatného súboru
• Modularizácia aplikácie — rozdelenie App.jsx na menšie moduly
• Vyčistenie class-based patterns, nahradené čistými hooks
• Zlepšená čitateľnosť a udržiavateľnosť kódu
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

## ✅ Testing Checklist v1.4.0 — Hooks Refactor

### 🔁 Hooks Refactor
- [ ] `useFunnyQueue` hook funguje — funny messages sa zobrazujú správne
- [ ] Žiadne regresy v hernej logike po refaktore
- [ ] Komponenty používajú hooks namiesto class patterns
- [ ] Console — žiadne React warnings (missing deps, stale closures)

### Bundle & Initial Load
- [ ] `npm run dev` — app štartuje bez chýb
- [ ] `npm run build` — build prebehne bez chýb
- [ ] Vite bundle analyzer — žiadne neočakávané veľké chunks

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
- [ ] APK na zariadení — export, import, tournament flow

---

## 🧩 Rýchly štart

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
npx cap open android    # otvori Android Studio
```

V Android Studio: **Build → Clean Project**, potom **Build → Rebuild Project**.

---

## 🧱 Štruktúra projektu

- `src/App.jsx` — hlavná herná logika a UI
- `src/hooks/useFunnyQueue.js` — vlastný hook pre funny queue systém
- `src/components/ScoreTable.jsx` — tabuľka skóre (memo-izovaná od v1.2.9)
- `src/main.jsx` — entry point + `window.storage` polyfill nad `localStorage`
- `src/index.css` — global styles
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

---

## 📘 Poznámka

Aplikácia bola pôvodne navrhnutá s Firebase online miestnosťami. Tie boli odstránené pre zjednodušenie a zníženie závislostí — celý projekt je teraz čisto offline a ľahšie sa udržiava (žiadny `google-services.json`, žiadne Firestore rules, žiadne env premenné).
