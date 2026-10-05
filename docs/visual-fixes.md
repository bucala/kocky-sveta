# Vizuálne opravy 1.6.4

Opravy z auditu V1–V5 a Z1–Z5 používajú spoločný frontend pre web/PWA a Android vrátane ovládania TV šípkami. Predvolená paleta skinu Klasik a pravidlá bodovania zostávajú zachované.

| ID | Oprava |
| --- | --- |
| V1 | Svetlé skiny majú čitateľné rýchle hodnoty, vstupy, čakajúce body, čiarku, penalizáciu a záporné hodnoty. |
| V2 | Text hráčov a krivky grafu používajú v svetlých skinoch tmavšie varianty pôvodných farieb; rámiky a avatary zachovávajú farebnú identitu. |
| V3 | Čísla poradia a korunky na tmavých odznakoch majú svetlú farbu. |
| V4 | Tmavé rozhodovacie, víťazné a informačné prekrytia používajú samostatnú svetlú paletu aj pri svetlom skine. |
| V5 | Aktívne tlačidlo zápisu má čitateľný kontrast v Brawl Stars aj Pergamene. |
| Z1 | Pozorovateľ škáluje čísla podľa šírky obrazovky: 18 px na mobile, 34 px pri 1920 px. |
| Z2 | Posúva sa skutočný kontajner tabuľky; posledné kolo a aktuálny hráč sa sledujú automaticky. Fokusovanú tabuľku a dlhý graf možno posúvať šípkami. |
| Z3 | Pozorovateľské režimy používajú skutočnú výšku hlavičky a zostávajú v dostupnej výške. Dlhá tabuľka nerozťahuje hlavičku mimo mobilnej obrazovky. |
| Z4 | Graf na celej obrazovke zachytáva Tab aj TV navigáciu; Escape/Späť zatvára graf a vracia fokus. |
| Z5 | Zjednodušené režimy nezobrazujú neúčinný prepínač Δ/Σ. |

## Animované skiny

- Brawl Stars: hviezdy, lebky, štíty, drahokamy a energetický obrys.
- Brawl Blue: modré energetické efekty, blesky a drahokamy.
- Harry Potter: sovy s pohybujúcimi sa krídlami, prútiky a čarovné iskry.
- Ostatné alternatívne skiny: kocky a vhodné motívy listov, korún alebo drahokamov.
- Klasik nedostáva nové animované pozadie.
- Dekorácie sú pod obsahom a nezachytávajú dotyky ani kliknutia. Počet prvkov je obmedzený, na úzkych obrazovkách znížený a pri skrytí stránky sa pozadie pozastaví.
- Vypnuté animácie a systémové `prefers-reduced-motion` vypínajú pozadie, prechody a konfety.
- Konfety používajú tematické tvary, časový krok nezávislý od obnovovacej frekvencie a aktualizujú rozlíšenie pri otočení alebo zmene veľkosti obrazovky.

## Overenie

Automatizované overenie Chromium pokrýva 12 skinov × 5 režimov × 3 obrazovky (390×844, 844×390, 1920×1080), spolu 180 kombinácií. Funkčné scenáre pokrývajú zápis bodov, čiarku, penalizáciu, validáciu vlastnej hodnoty, graf, kumulatívne skóre a uloženie režimu. Samostatne sa kontrolujú rozhodovacie popupy, 50-kolová tabuľka, TV posúvanie, všetky tematické pozadia, systémové obmedzenie pohybu a konfety.

`npm test`: 69 úspešných testov vrátane pôvodných 50 testov herného enginu a nových regresných testov focusu, posúvania a obmedzenia pohybu. Produkčný build a synchronizácia Capacitor pre Android prešli. Všetkých päť režimov prešlo aj kontrolou produkčného buildu; Android assety sa s ním zhodujú bajt po bajte. V 180 kombináciách nebolo zistené pretečenie skóre ani výšky pozorovateľských režimov; hlavičky pozorovateľa zostávajú v dostupnej šírke.

Snímky a strojové výsledky sú v pracovnom priečinku `/workspace/fix-verification`. Testy v Chromium emulujú rozmery TV a mobilu; nenahrádzajú skúšku na fyzickom Android/TV zariadení. V tomto prostredí nie je Android SDK, preto nie je zostavený ani otestovaný APK. Online Firebase multiplayer nebol overovaný proti produkčnej miestnosti.

Verzia webu a Androidu: 1.6.4, Android versionCode 10. Cache PWA má nový názov, aby nová verzia nepreberala HTML zo starej cache. Tieto zmeny pripravujú aktualizáciu; release ani APK zatiaľ neboli publikované.
