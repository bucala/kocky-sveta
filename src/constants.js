// ─── Konštanty a pure utility funkcie ────────────────────────────────────
// Tento súbor obsahuje VŠETKY konštanty, konfigurácie a čisté (bez React)
// pomocné funkcie, ktoré sa používajú naprieč celou aplikáciou.
// Žiadny import z React tu nie je — je to čistý JS modul.

// ─── Popup / notifikačný systém — globálna konfigurácia ──────────────────
export const POPUP_CONFIG = {
  POPUP_DISPLAY_DURATION: 2000,
  QUEUE_SIZE: 1,
  VERTICAL_OFFSET: '0px',
  OPACITY: 0.92,
};

export const QUICK_VALUES = [50, 100, 300, 400, 500, 600, 1000, 1500, 2000];
export const PENALTY_VALUE = -1000;

export const TARGET_OPTIONS = [
  { value: 5000,  label: 'Krátka hra',   sub: 'do 5 000 bodov' },
  { value: 10000, label: 'Klasická hra', sub: 'do 10 000 bodov' },
];

// Funny hlášky — { msg, emoji, variant }
export const FUNNY_MESSAGES = [
  { msg: 'Čo ti to rieši?!',            emoji: '🤨', variant: 'doubt' },
  { msg: 'Čo ti to rieši?!',            emoji: '🤨', variant: 'doubt' },
  { msg: 'Tak bojuj nééé?!?',           emoji: '😤', variant: 'doubt' },
  { msg: 'Tak bojuj nééé?!?',           emoji: '😤', variant: 'fight' },
  { msg: 'Také mrviny? Vážne?',         emoji: '🙄', variant: 'doubt' },
  { msg: 'Toto ťa nezachráni…',         emoji: '💀', variant: 'doom'  },
  { msg: 'Tak takto sa hra nevyhráva!', emoji: '🎲', variant: 'fight' },
  { msg: 'Hej majster… si si istý?',    emoji: '😏', variant: 'doubt' },
  { msg: 'Riskni to konečne!',          emoji: '🔥', variant: 'fight' },
];

// Kategórie pravidiel — len bodovanie kociek
export const RULE_CATEGORIES = [
  { id: 'cat-basic',   title: 'Bodové hodnoty kociek', subtitle: 'Samostatné kocky',            ruleIds: ['r1', 'r2'] },
  { id: 'cat-trio',    title: 'Trojice rovnakých',     subtitle: 'Tri rovnaké kocky',           ruleIds: ['r3', 'r4', 'r5', 'r6', 'r7', 'r8'] },
  { id: 'cat-special', title: 'Špeciálne kombinácie',  subtitle: 'Postupka a tri páry',         ruleIds: ['r9', 'r10'] },
  { id: 'cat-multi',   title: 'Násobky kociek',        subtitle: 'Štyri, päť, šesť rovnakých', ruleIds: ['r11', 'r12', 'r13'] },
];

// ID pravidiel ktoré sú v skutočnosti nastavenia hry (nie bodové kombinácie)
export const SETTING_RULE_IDS = ['r14', 'r15', 'r16', 'r17', 'r18'];

export const DEFAULT_RULES = [
  { id: 'r1',  name: 'Jednotka',         description: 'Samostatná kocka s hodnotou 1',                        points: 100,   type: 'numeric', dice: [1] },
  { id: 'r2',  name: 'Päťka',            description: 'Samostatná kocka s hodnotou 5',                        points: 50,    type: 'numeric', dice: [5] },
  { id: 'r3',  name: 'Tri jednotky',     description: 'Trojica jednotiek',                                    points: 1000,  type: 'numeric', dice: [1,1,1] },
  { id: 'r4',  name: 'Tri dvojky',       description: 'Trojica dvojok',                                       points: 200,   type: 'numeric', dice: [2,2,2] },
  { id: 'r5',  name: 'Tri trojky',       description: 'Trojica trojok',                                       points: 300,   type: 'numeric', dice: [3,3,3] },
  { id: 'r6',  name: 'Tri štvorky',      description: 'Trojica štvoriek',                                     points: 400,   type: 'numeric', dice: [4,4,4] },
  { id: 'r7',  name: 'Tri päťky',        description: 'Trojica päťok',                                        points: 500,   type: 'numeric', dice: [5,5,5] },
  { id: 'r8',  name: 'Tri šestky',       description: 'Trojica šestiek',                                      points: 600,   type: 'numeric', dice: [6,6,6] },
  { id: 'r9',  name: 'Postupka 1–6',     description: 'Šesť kociek za sebou: 1·2·3·4·5·6',                    points: 2000,  type: 'numeric', dice: [1,2,3,4,5,6] },
  { id: 'r10', name: 'Tri páry',         description: 'Tri rôzne páry kociek',                                points: 1000,  type: 'numeric', dice: [2,2,4,4,6,6] },
  { id: 'r11', name: 'Štyri rovnaké',    description: 'Štyri rovnaké kocky',                                  points: 0,     type: 'select', options: ['Dvojnásobok trojice', 'Pevná hodnota'], selected: 'Dvojnásobok trojice', dice: [3,3,3,3] },
  { id: 'r12', name: 'Päť rovnakých',    description: 'Päť rovnakých kociek',                                 points: 0,     type: 'select', options: ['Štvornásobok trojice', 'Pevná hodnota'], selected: 'Štvornásobok trojice', dice: [4,4,4,4,4] },
  { id: 'r13', name: 'Šesť rovnakých',   description: 'Všetkých šesť kociek rovnakých',                       points: 0,     type: 'select', options: ['Automatická výhra', 'Pevná hodnota 3000'], selected: 'Automatická výhra', dice: [5,5,5,5,5,5] },
  { id: 'r14', name: 'Minimálny odpis (prvý zápis)', description: 'Prvý zápis hráča v turnaji musí byť aspoň 300 bodov. Hru sa dá začať aj čiarkou (—) bez bodov.', points: 300, type: 'numeric', dice: [] },
  { id: 'r15', name: 'Cieľové skóre',    description: 'Body potrebné na výhru turnaja. Klasická hra do 10 000 alebo krátka hra do 5 000.', points: 10000, type: 'numeric', dice: [] },
  { id: 'r16', name: 'Nič nehodené',     description: 'Hod, pri ktorom nepadla žiadna bodujúca kombinácia – ani jednotka, ani päťka, ani trojica, ani postupka. Z aktuálneho skóre sa odpočíta 1 000 bodov.', points: -1000, type: 'numeric', dice: [2,3,4,6] },
  { id: 'r17', name: 'Prekročenie cieľa', description: 'Ak by hod prekročil cieľové skóre, body sa nezapíšu a zapíše sa automaticky čiarka (—).', points: 0, type: 'select', options: ['Automatická čiarka', 'Hod sa neuznáva'], selected: 'Automatická čiarka', dice: [] },
  { id: 'r18', name: 'Režim potvrdenia víťazstva', description: 'Určuje, či sa po presnom dosiahnutí cieľa ešte vyžaduje overenie víťazstva v ďalšom ťahu ničnehodením (čiarkou), alebo sa výhra uzná okamžite po dokončení kola.', points: 0, type: 'select', options: ['Áno', 'Nie'], selected: 'Áno', dice: [] },
];

// ─── Formátovanie dátumu/času ─────────────────────────────────────────────
export function formatDateTime(iso) {
  if (!iso) return '—';
  const d = new Date(iso);
  return d.toLocaleString('sk-SK', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}

export function formatDuration(startIso, endIso) {
  if (!startIso || !endIso) return null;
  const ms = new Date(endIso) - new Date(startIso);
  if (ms < 0) return null;
  const min = Math.floor(ms / 60000);
  if (min < 60) return `${min} min`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return `${h} h ${m} min`;
}

// ─── computeTotals — single source of truth pre súčty ────────────────────
export function computeTotals(rounds, playersCount) {
  return new Array(playersCount).fill(0).map((_, pIdx) => {
    let sum = 0;
    for (const round of (Array.isArray(rounds) ? rounds : [])) {
      const v = round?.[pIdx];
      if (typeof v === 'number' && Number.isFinite(v)) sum += v;
    }
    return sum;
  });
}

// ─── isStrictMode — pravidlo r18 ako prepínač chovania ───────────────────
export function isStrictMode(rules) {
  const r18 = (rules || []).find(r => r.id === 'r18');
  return !r18 || r18.selected !== 'Áno';
}

// ─── computeWinners — autoritatívne určenie víťazov ──────────────────────
export function computeWinners(tournament) {
  const players = tournament?.players || [];
  const rounds = tournament?.rounds || [];
  const target = tournament?.targetScore || 10000;
  const totals = computeTotals(rounds, players.length);

  const achievers = totals
    .map((t, idx) => ({ idx, total: t }))
    .filter(x => x.total >= target)
    .map(x => x.idx);

  const r18 = (tournament.rules || []).find(r => r.id === 'r18');
  const requiresConfirmation = !r18 || r18.selected !== 'Nie';
  const confirmed = Array.isArray(tournament._confirmedDetailed) ? tournament._confirmedDetailed : [];

  const isFinishedWithoutConfirm =
    tournament.status === 'finished' &&
    requiresConfirmation &&
    confirmed.length === 0 &&
    achievers.length > 0;
  const useStrictDetection = !requiresConfirmation || isFinishedWithoutConfirm;

  if (achievers.length === 0) {
    return { winners: [], totals, achievers: [], pendingAchievers: [], isDraw: false, valid: true, errors: [], reason: 'Žiadny hráč ešte nedosiahol cieľ.' };
  }

  let winners = [];
  let reason = '';
  let pendingAchievers = [];

  if (useStrictDetection) {
    const reachedAt = achievers.map(idx => {
      let cum = 0;
      for (let r = 0; r < rounds.length; r++) {
        const v = rounds[r]?.[idx];
        if (typeof v === 'number' && Number.isFinite(v)) cum += v;
        if (cum >= target) return { idx, round: r };
      }
      return { idx, round: Infinity };
    });
    const minRound = Math.min(...reachedAt.map(x => x.round));
    winners = reachedAt.filter(x => x.round === minRound).map(x => x.idx);
    reason = winners.length === 1
      ? `Hráč dosiahol cieľ ako prvý v kole ${minRound + 1}.`
      : `${winners.length} hráči dosiahli cieľ v rovnakom kole (${minRound + 1}). Remíza.`;
  } else {
    const confirmedAchievers = confirmed.filter(c => achievers.includes(c.player));
    pendingAchievers = achievers.filter(a => !confirmedAchievers.some(c => c.player === a));

    if (confirmedAchievers.length === 0) {
      return { winners: [], totals, achievers, pendingAchievers, isDraw: false, valid: false,
        errors: [`Turnaj sa nedá uzatvoriť — ${achievers.length} hráč(ov) dosiahlo cieľ, no žiadny ešte nepotvrdil výhru.`],
        reason: `${achievers.length} hráč(ov) dosiahlo cieľ, ale ešte nepotvrdil(i) výhru.` };
    }

    const minRound = Math.min(...confirmedAchievers.map(c => c.round));
    const earliest = confirmedAchievers.filter(c => c.round === minRound);
    winners = earliest.map(c => c.player);

    if (pendingAchievers.length > 0) {
      return { winners: [], totals, achievers, pendingAchievers, isDraw: false, valid: false,
        errors: [`Turnaj sa nedá uzatvoriť — ${pendingAchievers.length} hráč(ov) ešte nepotvrdil(i) výhru.`],
        reason: `${pendingAchievers.length} hráč(ov) má dosiahnutý cieľ ale ešte nepotvrdil(i) výhru.` };
    }

    reason = winners.length === 1
      ? `Víťazstvo potvrdené najskôr v kole ${minRound + 1}.`
      : `${winners.length} hráči potvrdili víťazstvo v rovnakom kole (${minRound + 1}). Remíza.`;
  }

  const errors = [];
  for (const w of winners) {
    if (typeof w !== 'number' || w < 0 || w >= players.length) {
      errors.push(`Neplatný index víťaza: ${w}.`);
      continue;
    }
    if (totals[w] < target) {
      errors.push(`Víťaz "${players[w]}" má skóre ${totals[w]}, čo je menej ako cieľ ${target}.`);
    }
  }
  const valid = errors.length === 0;

  return { winners: valid ? winners : [], totals, achievers, pendingAchievers,
    isDraw: valid && winners.length > 1, valid, errors, reason };
}
