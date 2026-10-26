// Dymový test v prehliadači: prejde hlavné obrazovky a jeden ťah hry.
// Spustenie: npm run build && npm run e2e
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';

const DIST = path.resolve('dist');
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.woff2': 'font/woff2', '.woff': 'font/woff', '.webmanifest': 'application/manifest+json' };

const server = http.createServer((req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0]);
  let file = path.join(DIST, url);
  if (!file.startsWith(DIST) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) file = path.join(DIST, 'index.html');
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
  fs.createReadStream(file).pipe(res);
});
await new Promise((r) => server.listen(0, '127.0.0.1', r));
const base = `http://127.0.0.1:${server.address().port}/`;

const finished = { id: 101, players: ['Anna', 'Boris'], rounds: [[5000, 3000], [5000, 0]], targetScore: 10000,
  status: 'finished', winner: 0, date: '2026-10-01T18:00:00Z', finishedAt: '2026-10-01T19:00:00Z' };
const running = { id: 202, players: ['Cyril', 'Dana'], rounds: [], currentPlayer: 0, currentRound: 0, rev: 1,
  targetScore: 10000, minWriteOff: 300, status: 'active', date: '2026-10-26T10:00:00Z' };

const errors = [];
const steps = [];
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 400, height: 860 }, serviceWorkers: 'block' });
page.on('pageerror', (e) => errors.push(e.message));

async function step(name, fn) {
  try { await fn(); steps.push(`ok   ${name}`); }
  catch (e) {
    steps.push(`FAIL ${name}: ${e.message.split('\n')[0]}`); errors.push(name);
    if (process.env.E2E_DEBUG) console.log(name, '\n', e.message, '\n', (await page.evaluate(() => document.body.innerText)).slice(0, 400));
  }
}
const see = (text) => page.getByText(text, { exact: false }).first().waitFor({ timeout: 5000 });
const click = (text) => page.getByText(text, { exact: true }).first().click({ timeout: 5000 });
const back = () => page.getByRole('button', { name: 'Späť' }).first().click({ timeout: 5000 });

try {
  // dáta vložíme ešte pred štartom aplikácie (window.storage ukladá JSON do localStorage)
  await page.addInitScript(([t, a]) => {
    if (sessionStorage.getItem('seeded')) return;
    sessionStorage.setItem('seeded', '1');
    localStorage.setItem('tournaments', JSON.stringify([t]));
    localStorage.setItem('active', JSON.stringify(a));
    localStorage.setItem('tournamentViewMode', JSON.stringify('basic'));
  }, [finished, running]);
  await page.goto(base);

  await step('hlavné menu', () => see('Archív turnajov'));
  await step('pravidlá hry', async () => { await click('Pravidlá hry'); await see('Jednotka'); await back(); await see('Archív turnajov'); });
  await step('archív a detail', async () => {
    await click('Archív turnajov'); await see('Anna'); await page.getByText('Anna').first().click(); await see('Boris');
    await back(); await back(); await see('Archív turnajov');
  });
  await step('nastavenia → editor pravidiel', async () => {
    await click('Nastavenia'); await click('Úprava pravidiel'); await see('Bodové hodnoty kociek'); await back(); await see('Editácia archívu');
  });
  await step('nastavenia → ochrana súkromia', async () => { await click('Ochrana súkromia'); await see('Firebase'); await back(); await see('Editácia archívu'); await back(); });
  await step('ťah v hre a vrátenie', async () => {
    await page.getByText(/POKRAČOVAŤ/).first().click({ timeout: 5000 });
    await page.getByRole('button', { name: '+300', exact: true }).first().click();
    await page.getByRole('button', { name: 'Zapísať' }).click();
    await page.waitForFunction(() => JSON.parse(localStorage.getItem('active') || '{}').rounds?.[0]?.[0] === 300, null, { timeout: 5000 });
    await page.getByRole('button', { name: 'Vrátiť posledný zápis' }).click();
    await page.getByRole('button', { name: 'Potvrdiť vrátenie posledného zápisu' }).click();
    await page.waitForFunction(() => (JSON.parse(localStorage.getItem('active') || '{}').rounds || []).flat().length === 0, null, { timeout: 5000 });
  });
} finally {
  await browser.close();
  server.close();
}

console.log(steps.join('\n'));
if (errors.length) {
  console.error('\nChyby:', errors);
  process.exit(1);
}
