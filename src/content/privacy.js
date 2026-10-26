// Zásady ochrany súkromia – jeden zdroj textu pre obrazovku v aplikácii
// aj verejnú stránku public/privacy.html (Google Play – Data safety).
export const PRIVACY_UPDATED = '26. 10. 2026';

export const PRIVACY_SECTIONS = [
  {
    title: 'Čo aplikácia ukladá na tvojom zariadení',
    body: 'Mená hráčov, rozohranú hru, archív turnajov, štatistiky a nastavenia. Údaje zostávajú v zariadení (úložisko prehliadača alebo aplikácie) a nikam sa neposielajú, kým nepoužiješ online režim alebo import z fotky. Vymazať ich môžeš v Nastavenia → Vymazať všetky dáta alebo odinštalovaním aplikácie.',
  },
  {
    title: 'Online režim (Google Firebase)',
    body: 'Ak vytvoríš miestnosť alebo sa k nej pripojíš, do služby Google Firebase (Firestore) sa ukladá meno zariadenia, mená hráčov, rozohraná hra, archív turnajov miestnosti, správy v chate a pseudonymný identifikátor zariadenia, ktorý je pre každú miestnosť iný. Prihlásenie je anonymné, nepotrebuješ účet ani e-mail. Údaje vidia všetci, ktorí poznajú kód miestnosti. Zostávajú uložené, kým miestnosť nevymaže niektorý jej člen.',
  },
  {
    title: 'Import tabuľky z fotky (Anthropic)',
    body: 'Fotka sa po tvojom potvrdení odošle cez náš server (Vercel) službe Anthropic (Claude, USA), ktorá prečíta tabuľku. Fotku ani výsledok neukladáme a neposielame do logov. Anthropic údaje spracúva podľa svojich zásad (anthropic.com/legal/privacy). Na fotke by mala byť iba tabuľka, bez tvárí a iných osobných údajov.',
  },
  {
    title: 'Čo aplikácia nerobí',
    body: 'Nezobrazuje reklamy, nepoužíva analytiku ani sledovanie, nepredáva údaje a nežiada prístup ku kontaktom ani k polohe.',
  },
  {
    title: 'Kontakt',
    body: 'Otázky k ochrane súkromia a žiadosti o vymazanie online údajov: cez GitHub repozitár bucala/kocky-sveta (záložka Issues).',
  },
];
