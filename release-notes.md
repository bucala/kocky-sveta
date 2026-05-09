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
