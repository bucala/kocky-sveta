# Pravidlá hry – ako ich aplikácia naozaj uplatňuje

Tento dokument popisuje skutočné správanie aplikácie (verzia 1.7.2). Je zdrojom pravdy pre text
v obrazovke Pravidlá a pre tabuľku v README. Číselné hodnoty (300, 10 000, −1 000) sú predvolené
a dajú sa zmeniť v **Nastavenia → Úprava pravidiel**. Turnaj si pri štarte uloží snímku pravidiel
(`ruleSnapshot`, `minWriteOff`, `penalty`, `targetScore`), takže neskoršia zmena nastavení rozohranú
hru neovplyvní a všetky zariadenia v online hre sa správajú rovnako.

## 1. Pojmy

- **Kolo** – riadok tabuľky; každý hráč má v kole jeden zápis.
- **Zápis** – body za ťah (kladné číslo), čiarka `—` alebo penalizácia (záporné číslo).
- **Cieľ** – body potrebné na výhru: 10 000 (klasická hra), 5 000 (krátka hra) alebo vlastný cieľ z pravidla r15.

## 2. Zápis bodov (r14, r16)

1. Každý zápis bodov musí byť aspoň **300** (r14). Menej sa zapísať nedá; namiesto bodov sa dá vždy zapísať čiarka.
2. Hod, v ktorom nepadla žiadna bodujúca kombinácia, sa zapíše ako penalizácia **−1 000** (r16). Penalizácia sa nedá kombinovať s inými bodmi.
3. V ťahu sa dá pripísať viac hodov; zapíše sa ich súčet.
4. Posledný zápis sa dá vrátiť tlačidlom „Vrátiť posledný zápis“ (v online hre len ak medzitým nezapisovalo iné zariadenie).

## 3. Prekročenie cieľa a koncovka (r17)

1. Ak by zápis prekročil cieľ:
   - **Automatická čiarka** (predvolené): zapíše sa čiarka a ťah prejde na ďalšieho hráča.
   - **Hod sa neuznáva**: nič sa nezapíše a ten istý hráč hádže znova.
2. **Koncovka** nastáva, keď má hráč **viac ako** cieľ − minimálny zápis (pri 10 000 a 300 teda nad 9 700). V koncovke treba trafiť presne do cieľa.
   Nepresný zápis pod cieľ znamená čiarku; nad cieľ sa riadi pravidlom r17.

## 4. Dosiahnutie cieľa a víťaz (r18)

1. Hráč, ktorý trafí cieľ, sa stáva **dočasným kráľom**; kolo sa vždy dohrá.
2. Na konci kola vyhráva hráč, ktorý cieľ dosiahol ako prvý (v najskoršom kole). Ak ho v tom istom kole dosiahne viac hráčov, je to **remíza**.
3. **Režim potvrdenia víťazstva** (r18 = Áno, predvolené): presný zásah **v koncovke** musí skupina potvrdiť (Potvrdil / Nepotvrdil).
   Potvrdený zásah sa zapíše, nepotvrdený sa zapíše ako čiarka. Pri r18 = Nie sa zásah v koncovke uzná bez potvrdenia.
4. Víťaza určuje `computeWinners` v `src/lib/tournamentEngine.js`. Turnaj sa uzavrie, len ak sa deklarovaný a dopočítaný víťaz zhodujú.

## 5. Šesť rovnakých (r13)

- **Automatická výhra** (predvolené): tlačidlo „6 rovnakých = výhra“ (potvrdenie druhým ťuknutím) ukončí hru výhrou hráča na ťahu (`_suddenWin`).
- **Pevná hodnota 3000**: tlačidlo pridá 3 000 bodov ako bežný hod.

## 6. Archív a štatistiky

- Úprava turnaja v archíve po uložení prepočíta víťaza (ručne zvolený víťaz má prednosť), stav a súčty.
- Štatistiky počítajú len dohrané hry; zrušené hry sa nerátajú.

## 7. Kde je logika

- Bodovanie ťahu: `commitPoints` a `advance` v `TournamentScreen` (`src/App.jsx`).
- Víťaz a súčty: `src/lib/tournamentEngine.js` (testy v `tournamentEngine.test.js`).
- Štatistiky: `src/lib/stats.js`.
