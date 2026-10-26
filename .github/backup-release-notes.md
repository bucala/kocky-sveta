## Záloha stavu aplikácie pred veľkou prerábkou

Presný stav vetvy `main` na commite **ed1ff22** (verzia **1.6.4**, versionCode 10) pred opravami z auditu z 26. 10. 2026.
Táto vetva pridáva iba tento zálohovací workflow, kód aplikácie je nezmenený.

### Obsah
- `kocky-sveta-source-*.tar.gz` – kompletné zdrojáky (git archive)
- `kocky-sveta-full-history-*.bundle` – celá git história všetkých vetiev (`git clone <bundle>` obnoví repozitár)
- `kocky-sveta-web-dist-*.zip` – webový build (rovnaký ako produkcia na Verceli)
- `kocky-sveta-committed-apk-*.apk` – APK, ktoré bolo uložené v repozitári (`android/app/release/app-release.apk`)
- `SHA256SUMS.txt` – kontrolné súčty

Pred zabalením prebehli testy (vitest) a produkčný build.

### Obnova
```bash
git checkout v1.6.4-backup-2026-10-26   # alebo: git clone kocky-sveta-full-history-*.bundle
```
