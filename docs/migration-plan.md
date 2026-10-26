# Plán migrácie závislostí

Stav k 26. 10. 2026 (verzia 1.7.x). Cieľ: dostať sa na aktuálne hlavné verzie bez rozbitia hry,
po malých krokoch, každý ako samostatný PR so zeleným CI a s otestovaným APK na telefóne aj TV.

| Balík | Teraz | Najnovšia | Priorita | Riziko |
|---|---|---|---|---|
| @capacitor/* | 6.2.2 | 8.5 | vysoká (Play: API 36, podpora) | stredné – natívna časť |
| firebase | 12.13 | 13.1 | stredná (transitívne zraniteľnosti v Node časti) | nízke |
| react / react-dom | 18.3 | 19.3 | stredná | stredné – App.jsx |
| vite / @vitejs/plugin-react | 6.4 / 4.7 | 8.3 / 6.1 | nízka | nízke |
| vitest | 2.1 | 5.0 | nízka (spolu s Vite) | nízke |
| tailwindcss | 3.4 | 4.3 | nízka | vysoké – iná konfigurácia |
| lucide-react | 0.468 | 1.61 | nízka | nízke – premenované ikony |

## Krok 1 – drobné aktualizácie v rámci hlavnej verzie (½ dňa)
- `npm update` (firebase 12.19, zustand, postcss, autoprefixer, @testing-library/react).
- Overiť: testy, build, online miestnosť s dvoma zariadeniami.

## Krok 2 – Capacitor 6 → 7 (1 deň)
- `npx cap migrate` z verzie 7 CLI; minSdk 23, Java 21 v CI.
- Pluginy `@capacitor/app`, `filesystem`, `share` na 7.x.
- Overiť: tlačidlo Späť (telefón, TV), export/zdieľanie Excelu, splash, celoobrazovkový režim na TV.

## Krok 3 – Capacitor 7 → 8 (1 deň)
- Podľa oficiálneho návodu: minSdk 24, compile/target 36, AGP ≥ 8.13, Gradle 8.14.3, Node 22, coreSplashScreen 1.2.0.
- Release build (APK + AAB) cez workflow a kontrola podpisu.
- Overiť na najstaršom podporovanom TV (Android 8 → s minSdk 24 je minimum Android 7, OK).

## Krok 4 – Firebase 13 (½ dňa)
- Zmeny API skontrolovať v release notes; náš kód používa iba Firestore (doc, onSnapshot, updateDoc) a anonymné Auth.
- Overiť online miestnosť, pripojenie, návrat z offline.

## Krok 5 – Vite 8 + Vitest 5 + plugin-react 6 (½ dňa)
- Skontrolovať `vite.config.js` (manualChunks, plugin pre service worker), testovacie prostredie jsdom.

## Krok 6 – React 19 (1–2 dni)
- Najprv po rozdelení `App.jsx` na menšie obrazovky (bod 3 auditu).
- Skontrolovať `forwardRef`, `defaultProps`, StrictMode efekty a `React.lazy`.
- Overiť celú hru vo všetkých režimoch zobrazenia + undo + online.

## Krok 7 – lucide-react 1.x (½ dňa)
- Premenované ikony nahradiť; vizuálna kontrola menu, hernej obrazovky a nastavení.

## Krok 8 – Tailwind 4 (2 dni, voliteľné)
- Najväčšie riziko vizuálnych regresií (skiny, `ks-*` triedy). Robiť až keď budú vizuálne snapshot testy.

## Zásady
- Jeden krok = jeden PR, CI zelené, APK vyskúšané pred zlúčením.
- Pred každým krokom GitHub release so zálohou (workflow `backup-release.yml`).
- Dependabot pre npm a GitHub Actions (týždenne), aby sa drift už nenahromadil.
