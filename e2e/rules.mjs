// Testy pravidiel priamo na hernej obrazovke (r13–r18) v prehliadači.
// Každý scenár začne z pripraveného stavu hry, zahrá ťah cez UI a overí,
// čo sa uložilo. Spustenie: npm run build && npm run e2e
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
const browser = await chromium.launch();

// Rozohraná hra: players, rounds, kto je na ťahu; rules = zmenené pravidlá.
function game({ players = ['Ada', 'Bob'], rounds = [], currentPlayer = 0, currentRound = 0, target = 10000 } = {}) {
  return { id: 900, players, rounds, currentPlayer, currentRound, rev: 1, targetScore: target, minWriteOff: 300,
    status: 'active', winner: null, confirmationQueue: [], date: '2026-10-26T10:00:00Z' };
}

async function open(active, rules = []) {
  const page = await browser.newPage({ viewport: { width: 420, height: 1000 }, serviceWorkers: 'block' });
  page.errors = [];
  page.on('pageerror', (e) => page.errors.push(e.message));
  await page.addInitScript(([a, r]) => {
    if (sessionStorage.getItem('seeded')) return;
    sessionStorage.setItem('seeded', '1');
    localStorage.setItem('active', JSON.stringify(a));
    localStorage.setItem('tournamentViewMode', JSON.stringify('basic'));
    localStorage.setItem('funnyWindowsDisplayMode', JSON.stringify('suppressed'));
    if (r.length) localStorage.setItem('rules', JSON.stringify(r));
  }, [active, rules]);
  await page.goto(base);
  if (active) await page.getByText(/POKRAČOVAŤ/).first().click({ timeout: 5000 });
  return page;
}

const stored = (page, key) => page.evaluate((k) => JSON.parse(localStorage.getItem(k) || 'null'), key);
async function enter(page, value) {
  await page.getByPlaceholder('Vlastná hodnota').first().fill(String(value));
  await page.getByRole('button', { name: 'Pridaj', exact: true }).first().click();
}
const record = (page) => page.getByRole('button', { name: 'Zapísať' }).first().click();
const dash = (page) => page.getByRole('button', { name: /ČIARKA/ }).first().click();
const see = (page, text) => page.getByText(text).first().waitFor({ timeout: 4000 });
function expectEq(actual, expected, what) {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    throw new Error(`${what}: čakal som ${JSON.stringify(expected)}, je ${JSON.stringify(actual)}`);
  }
}
async function settle(page) { await page.waitForTimeout(400); }

const scenarios = {
  'r14: zápis pod minimom sa odmietne': async (ctx) => {
    const page = ctx.page = await open(game());
    await enter(page, 100); await record(page);
    await see(page, 'Každý zápis musí byť aspoň 300 bodov');
    expectEq((await stored(page, 'active')).rounds, [], 'kolá');
  },
  'r17 predvolené: prekročenie cieľa = čiarka': async (ctx) => {
    const page = ctx.page = await open(game({ rounds: [[9500, 0]], currentRound: 1 }));
    await enter(page, 600); await record(page);
    await see(page, 'automatická čiarka');
    await settle(page);
    expectEq((await stored(page, 'active')).rounds[1][0], 'dash', 'zápis');
  },
  'r17 „Hod sa neuznáva“: nič sa nezapíše, hádže znova': async (ctx) => {
    const page = ctx.page = await open(game({ rounds: [[9500, 0]], currentRound: 1 }), [{ id: 'r17', selected: 'Hod sa neuznáva' }]);
    await enter(page, 600); await record(page);
    await see(page, 'hod sa neuznáva');
    const a = await stored(page, 'active');
    expectEq([a.rounds.length, a.currentPlayer], [1, 0], 'kolá a hráč na ťahu');
  },
  'koncovka: nepresný hod = čiarka': async (ctx) => {
    const page = ctx.page = await open(game({ rounds: [[9800, 0]], currentRound: 1 }));
    await see(page, 'Koncovka!');
    await enter(page, 100); await record(page);
    await see(page, 'treba presne 200 bodov');
    await settle(page);
    expectEq((await stored(page, 'active')).rounds[1][0], 'dash', 'zápis');
  },
  'r18 „Nie“ (prísny): presný zásah vyhrá po dohraní kola': async (ctx) => {
    const page = ctx.page = await open(game({ rounds: [[9800, 0]], currentRound: 1 }), [{ id: 'r18', selected: 'Nie' }]);
    await enter(page, 200); await record(page);
    await see(page, 'dosiahol cieľ');
    await settle(page);
    await enter(page, 300); await record(page);
    await page.waitForFunction(() => (JSON.parse(localStorage.getItem('tournaments') || '[]')[0] || {}).status === 'finished', null, { timeout: 8000 });
    const t = (await stored(page, 'tournaments'))[0];
    expectEq([t.winner, t.rounds[1]], [0, [200, 300]], 'víťaz a posledné kolo');
  },
  'r18 predvolené („Áno“): presný zásah čaká na potvrdenie, Nepotvrdil = čiarka': async (ctx) => {
    const page = ctx.page = await open(game({ rounds: [[9800, 0]], currentRound: 1 }));
    await enter(page, 200); await record(page);
    await page.getByRole('button', { name: /Nepotvrdil/ }).first().click({ timeout: 4000 });
    await settle(page);
    const a = await stored(page, 'active');
    expectEq([a.rounds[1][0], a.winner ?? null], ['dash', null], 'zápis a víťaz');
  },
  'r16: penalizácia −1 000 sa zapíše a nedá sa kombinovať': async (ctx) => {
    const page = ctx.page = await open(game({ rounds: [[3000, 0]], currentRound: 1 }));
    await enter(page, 300);
    await page.getByRole('button', { name: /1 000/ }).first().click();
    await enter(page, 300);
    await record(page);
    await settle(page);
    expectEq((await stored(page, 'active')).rounds[1][0], 300, 'body nahradili penalizáciu');
    await page.getByRole('button', { name: /1 000/ }).first().click(); await record(page);
    await settle(page);
    expectEq((await stored(page, 'active')).rounds[1][1], -1000, 'penalizácia');
  },
  'r13: 6 rovnakých cez „Práve pripisuješ“ pripíše body do cieľa': async (ctx) => {
    const page = ctx.page = await open(game({ rounds: [[500, 1200]], currentRound: 1, target: 5000 }), [{ id: 'r13', selected: 'Automatická výhra' }]);
    await page.getByRole('button', { name: /Šesť rovnakých/ }).click();
    await page.getByRole('button', { name: /Pridať výhru/ }).click();
    await see(page, 'Víťazstvo 6 rovnakých kociek');
    expectEq((await stored(page, 'active')).rounds.length, 1, 'pred Zapísať sa nič neuloží');
    await record(page);
    await page.waitForFunction(() => (JSON.parse(localStorage.getItem('tournaments') || '[]')[0] || {}).status === 'finished', null, { timeout: 8000 });
    const t = (await stored(page, 'tournaments'))[0];
    expectEq([t.winner, t.rounds[1][0]], [0, 4500], 'víťaz a pripísané body');
  },
  'r15: cieľ pod 2 000 sa v Novom turnaji zvýši na 2 000': async (ctx) => {
    const page = ctx.page = await open(null, [{ id: 'r15', points: 1500 }]);
    await page.getByText('Nový turnaj').first().click();
    await see(page, 'Vlastný cieľ');
    const text = await page.evaluate(() => document.body.innerText);
    if (!/2\s000\s*Vlastný cieľ/.test(text)) throw new Error('vlastný cieľ nie je 2 000');
  },
};

const results = [];
let failed = false;
for (const [name, run] of Object.entries(scenarios)) {
  const ctx = {};
  try {
    await run(ctx);
    if (ctx.page.errors.length) throw new Error('chyba v konzole: ' + ctx.page.errors[0]);
    results.push(`ok   ${name}`);
  } catch (e) {
    failed = true;
    results.push(`FAIL ${name}: ${e.message.split('\n')[0]}`);
  } finally {
    await ctx.page?.close();
  }
}
await browser.close();
server.close();
console.log(results.join('\n'));
if (failed) process.exit(1);
