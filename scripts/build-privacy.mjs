// Vygeneruje public/privacy.html zo src/content/privacy.js (verejná stránka pre Google Play).
// Použitie: npm run privacy
import fs from 'node:fs';
import { PRIVACY_SECTIONS, PRIVACY_UPDATED } from '../src/content/privacy.js';

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const html = `<!doctype html>
<html lang="sk"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Kocky sveta – Ochrana súkromia</title>
<style>body{font-family:Georgia,serif;max-width:42rem;margin:0 auto;padding:2rem 1rem;line-height:1.6;color:#2b1d10;background:#f7f0e0}h1{font-size:1.8rem}h2{font-size:1.15rem;margin-top:1.6rem}</style>
</head><body>
<!-- Vygenerované zo src/content/privacy.js (npm run privacy) -->
<h1>Kocky sveta – Ochrana súkromia</h1>
${PRIVACY_SECTIONS.map((s) => `<h2>${esc(s.title)}</h2>\n<p>${esc(s.body)}</p>`).join('\n')}
<p><small>Posledná aktualizácia: ${PRIVACY_UPDATED}</small></p>
</body></html>
`;
fs.writeFileSync(new URL('../public/privacy.html', import.meta.url), html);
console.log('public/privacy.html updated');
