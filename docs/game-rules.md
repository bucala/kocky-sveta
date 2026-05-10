# Pravidlá hry – technická špecifikácia

Tento dokument popisuje pravidlá hry v podobe, ktorú má implementovať herná logika (rules engine).
Ide o zdroj pravdy pre výpočet výsledkov, víťazov, remíz a správania v koncovke.

## 1. Základné pojmy

- **Hráč** – účastník turnaja, má svoje meno a aktuálne skóre.
- **Kolo** – riadok v tabuľke, v ktorom môže mať každý hráč jeden zápis (skóre za dané kolo).
- **Zápis** – číslo (kladné alebo záporné) priradené konkrétnemu hráčovi v konkrétnom kole.
- **Cieľ (target)** – cieľové skóre, štandardne 10 000 bodov.
- **Turnaj** – sekvencia kôl, v ktorých hráči zbierajú body až do ukončenia hry.

## 2. Zápis bodov

1. Každý nový zápis sa pridáva k aktuálnemu skóre hráča.
2. Minimálny povolený zápis je 300 bodov (alebo čiarka – špeciálny prípad bez bodov).
3. Zápis môže byť aj záporný (napr. -1000), ak pravidlá hry dovolia odčítanie bodov.
4. Po zapísaní sa v tabuľke aktualizuje súčet (Σ) pre každého hráča.

## 3. Stav „na ťahu“

1. V každom okamihu je na ťahu konkrétny hráč a konkrétne kolo.
2. UI zobrazuje hráča „NA ŤAHU – KOLO X“ a aktuálne skóre daného hráča.
3. Náhľad (preview) zobrazí, aké skóre bude mať hráč po zapísaní navrhnutého zápisu.

## 4. Koncovka a cieľové skóre

1. Koncovka nastáva, keď niektorý hráč prvýkrát dosiahne alebo presiahne cieľové skóre (10 000) v konkrétnom kole.
2. Rozhodujúce je **konkrétne kolo**, v ktorom sa toto stane, nie historická suma cez všetky kolá.
3. Ak hráč v tomto kole:
   - presne trafí cieľ (napr. 9900 → +100 = 10 000), označí sa ako kandidát na výhru,
   - presiahne cieľ (napr. 9900 → +400 = 10 300), podľa pravidiel môže alebo nemusí byť platný kandidát (treba definovať – napr. „presiahnuť je OK“ alebo „musí byť presne 10 000“).
4. Po tom, čo sa v kole objaví prvý kandidát, nové kolo sa **nesmie začať**, kým sa rozhodujúce kolo nedorieši.

## 5. Dočasný kráľ a kandidáti

1. Hráč, ktorý ako prvý v danom kole dosiahne cieľ, sa stáva **dočasným kráľom** (časť UI, nie konečný stav).
2. Dočasný kráľ je len kandidát – výhra sa potvrdzuje až po ukončení rozhodujúceho kola.
3. Ďalší hráči v tom istom kole môžu tiež dosiahnuť cieľ:
   - ak pravidlá dovoľujú, môžu sa stať spolu-víťazmi (remíza),
   - alebo sa označia len ako „tiež dosiahol, ale nevyhral“, podľa nastavenia hry.

## 6. Uzamknutie kola

1. Ak v kole niekto dosiahne cieľ:
   - nové kolo sa nesmie začať,
   - hráč, ktorý má v danom kole už uznaných 10 000, **nemá vidieť preview ďalšieho zápisu** (napr. 10 100).
2. Uzamknutie kola znamená:
   - kolo pokračuje len dovtedy, kým všetci relevantní hráči nemajú možnosť odpovedať (napr. dohrať kolo),
   - po ukončení tohto kola sa rozhodne o víťazovi alebo remíze,
   - až potom je dovolené vytvoriť nové kolo.

## 7. Výhra a remíza

1. Po ukončení rozhodujúceho kola sa spočítajú finálne skóre.
2. Výhra:
   - ak má najvyššie skóre presne jeden hráč, tento hráč vyhráva turnaj.
3. Remíza:
   - ak má najvyššie skóre viac hráčov, výsledok je remíza medzi týmito hráčmi.
4. Hráči, ktorí v rozhodujúcom kole dosiahli cieľ, ale majú nižšie skóre než iný hráč, nie sú víťazi.

## 8. Popupy a funny okná (vstupy pre UI)

Logika hry generuje len udalosti, UI z nich robí konkrétne okná:

- `TEMPORARY_KING` – hráč práve prvýkrát dosiahol cieľ v danom kole.
- `WIN_PENDING_CONFIRM` – stav, keď treba potvrdiť koncovku (napr. presný zásah v špeciálnom režime).
- `WIN_CONFIRMED` – finálne potvrdenie výhry.
- `DRAW_CONFIRMED` – finálne potvrdenie remízy.
- `ROUND_LOCKED` – od okamihu, keď niekto v kole dosiahne cieľ.
- `FUNNY_TRIGGER` – signál pre funny okno, ktoré sa môže zobraziť podľa svojej vlastnej interne definovanej logiky.

Engine nerozhoduje, **ako** vyzerá popup; len povie *čo sa stalo*.

## 9. Režimy hry (napr. strict/classic)

1. Režim **strict**:
   - cieľ treba trafiť presne (preskočenie cieľa neplatí),
   - kandidát sa stáva víťazom len pri presnom zásahu.
2. Režim **classic**:
   - preskočenie cieľa je akceptované,
   - víťaz je ten, kto má na konci najvyššie skóre >= cieľu.
3. Zvolený režim je uložený v nastavení turnaja a musí byť konzistentný v celom výpočte – engine nesmie miešať rôzne interpretácie.

## 10. Požiadavky na engine

1. Logika má byť sústredená v samostatnom module (napr. `src/game/rulesEngine.ts`).
2. UI komponenty môžu engine používať, ale nesmú obsahovať vlastné alternatívne pravidlá.
3. Engine musí byť pokrytý unit testami pre hlavné scenáre:
   - prvý hráč dosiahne cieľ, ďalší ho dobehne v tom istom kole → remíza alebo výhra podľa režimu,
   - koncovka z 9 900 → presný zásah,  
   - hráč s 10 000 už nedostane preview 10 100,
   - nové kolo sa nevytvorí po dosiahnutí cieľa v rozhodujúcom kole.