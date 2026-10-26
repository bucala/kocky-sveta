# Google Play – Data safety (podklad na vyplnenie)

Verejné zásady ochrany súkromia: `https://kocky-sveta.vercel.app/privacy.html` (zdroj `src/content/privacy.js`, `npm run privacy`).

| Kategória údajov | Zbierané | Zdieľané | Účel | Voliteľné | Poznámka |
|---|---|---|---|---|---|
| Meno (mená hráčov, meno zariadenia) | áno, len v online režime | nie (spracovateľ: Google Firebase) | funkčnosť aplikácie | áno | offline hra nič neposiela |
| Fotky (import tabuľky) | áno, po potvrdení | áno, spracovateľ Anthropic | funkčnosť (rozpoznanie tabuľky) | áno | spracované jednorazovo, neukladá sa |
| Správy v aplikácii (chat miestnosti) | áno, v online režime | nie | funkčnosť | áno | |
| Identifikátory zariadenia | áno (pseudonymný, iný pre každú miestnosť) | nie | funkčnosť (rozpoznanie zariadenia v miestnosti) | áno | |
| Údaje o aplikácii (archív hier) | áno, v online režime | nie | funkčnosť | áno | |

- Šifrovanie pri prenose: áno (HTTPS/TLS).
- Žiadosť o vymazanie: v aplikácii „Zmazať miestnosť a jej údaje“ (Online), lokálne údaje „Vymazať všetky dáta“; inak cez GitHub Issues.
- Reklamy, analytika, sledovanie: nie.
