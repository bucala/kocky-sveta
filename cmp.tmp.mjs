import { chromium } from 'playwright';
const b = await chromium.launch();
async function run(target, players, rounds, cp, cr, steps, mode, rules) {
  const p = await b.newPage({ viewport: { width: 420, height: 900 }, serviceWorkers: 'block' });
  const out = [];
  const active = { id: 1, players, rounds, currentPlayer: cp, currentRound: cr, rev: 1, targetScore: target, minWriteOff: 300, status: 'active', date: '2026-10-26T10:00:00Z' };
  await p.addInitScript(([a, m, r]) => { if (sessionStorage.s) return; sessionStorage.s = 1; localStorage.setItem('active', JSON.stringify(a)); localStorage.setItem('tournamentViewMode', JSON.stringify(m)); if (r) localStorage.setItem('rules', r); }, [active, mode, rules]);
  await p.goto('http://localhost:4197/'); await p.waitForTimeout(400);
  await p.exposeFunction('rec', (s) => { const n = s.replace(/\d[\d  ]*\d|\d/g, 'N'); if (out[out.length-1] !== n) out.push(n); });
  await p.addInitScript(() => {});
  await p.getByText(/POKRAČOVAŤ/).first().click();
  // collect overlay texts continuously
  await p.evaluate(() => { let prev = new Set(); setInterval(() => { const lines = document.body.innerText.split('\n').map(l => l.trim()).filter(l => l.length > 3); const now = new Set(lines); const added = lines.filter(l => !prev.has(l) && /[a-zA-ZÁ-ž]{4}/.test(l)); prev = now; if (added.length) window.rec(added.join(' / ')); }, 150); });
  await p.waitForTimeout(1500);
  for (const v of steps) {
    out.push(`--- step ${v}`);
    if (v === 'dash') { await p.getByRole('button', { name: /ČIARKA/ }).first().click({ timeout: 3000 }).catch(e => out.push('noclick')); await p.getByRole('button', { name: 'Zapísať' }).click({ timeout: 3000 }).catch(e => out.push('nozapis')); }
    else if (typeof v === 'string') await p.getByRole('button', { name: v }).first().click({ timeout: 3000 }).catch(e => out.push('noclick ' + v));
    else { await p.getByPlaceholder('Vlastná hodnota').first().fill(String(v)); await p.getByRole('button', { name: 'Pridaj' }).first().click(); await p.getByRole('button', { name: 'Zapísať' }).click({ timeout: 3000 }).catch(e => out.push('nozapis')); }
    await p.waitForTimeout(2500);
  }
  await p.close();
  return out;
}
const scen = JSON.parse(process.argv[2]);
const s = (x, T) => x.map(v => typeof v === 'number' ? v * (T === 5000 ? 1 : 1) : v);
for (const T of [10000, 5000]) {
  const off = T === 10000 ? 5000 : 0;
  const rounds = scen.rounds.map(r => r.map(v => typeof v === 'number' && v >= 4000 ? v + off : v));
  const out = await run(T, scen.players, rounds, scen.cp, scen.cr, scen.steps, scen.mode || 'basic', scen.rules);
  console.log(`===== T=${T}\n` + out.join('\n'));
}
await b.close();
