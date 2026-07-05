## Čo je nové v 1.6.0

### 🌐 Online sync
- Bidirectional sync, anti-revert ochrana, stale ghost cleanup, recorder-only writes
- Error badge pri zlyhaní Firestore zápisu

### 🎨 Skiny & vizuál
- Harry Potter a Brawl Stars skiny s vlastnými ikonami a pozadiami
- Comprehensive skinning cez CSS custom properties

### 🔊 Zvuky, animácie & i18n
- Herný zvukový systém, konfigurovateľné animácie, funny windows mode
- Slovenčina / English prepínač jazyka
- Rozšírenia submenu — 8+ voliteľných vizuálnych vylepšení (defaultne vypnuté)

### 🧩 UX & herné funkcie
- Vlastný SVG Progress Chart (náhrada Recharts, −529 KB)
- Delta/Kumulatívny prepínač zobrazenia skóre
- OCR sken skóre-tabuľky z fotky → priamy import do archívu (Anthropic Vision API)
- Predvolený zoznam hráčov s výberom cez chipy

### 🐛 Fix
- Firestore nested arrays serializované ako JSON string
- Ghost hráči po odpojení opravení cez deviceId dedup

**Full Changelog**: https://github.com/bucala/kocky-sveta/compare/v1.5.0...v1.6.0

---

## Čo je nové v 1.5.0

### ♻️ Refaktor — modularizácia
- Extrakcia obrazoviek z App.jsx → src/screens/ (TournamentScreen, ArchiveScreen, RulesEditor, GameViewModesScreen, VisualAndSkinScreen)
- Extrakcia komponentov → src/components/ (FunnyOverlay, GameWidgets, ProgressChart, SkinSelector)

### ⚡ Performance
- Lazy load XLSX (~430 KB chunk) — načíta sa len pri prvom exporte/importe
- Vite manual chunks: vendor-xlsx, vendor-recharts, vendor-react, vendor-lucide
- dvance() — shallow copy len aktívneho riadku (slice namiesto map)

### 🎨 Style & A11y
- CSS extrahovaný z JS STYLES konštanty → src/app.css
- Google Fonts s ont-display:swap + preconnect hinty
- ria-label na icon-only tlačidlá (Zatvoriť ×2, Upraviť)

### 🐛 Fix
- Mojibake v SimplifiedResult.jsx — opravená slovenská diakritika

### 🧹 Chore
- Odstránených 38 dočasných Python skriptov z root adresára

**Full Changelog**: https://github.com/bucala/kocky-sveta/compare/v1.4.1...v1.5.0
