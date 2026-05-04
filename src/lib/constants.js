// ─── constants.js — game constants, skins, config ────────────────────────
// Exact copy of constants from App.jsx.
// No React. No side effects. Pure data.

export const SKIN_PRESETS = {
  classic: {
    id:'classic', name:'Klasik',
    bg:'radial-gradient(circle at top, rgba(120,76,24,0.10), transparent 38%), linear-gradient(180deg,#120f0c 0%,#0d0a08 100%)',
    vars: { '--ks-bg-main':'#0e0c0a','--ks-bg-soft':'rgba(28,22,16,0.85)','--ks-bg-soft-2':'rgba(18,14,10,0.92)','--ks-card-sub':'rgba(20,16,12,0.6)','--ks-border':'rgba(201,168,92,0.18)','--ks-border-strong':'rgba(212,184,106,0.55)','--ks-text':'#f3ead4','--ks-text-muted':'#a89679','--ks-accent':'#d4b86a','--ks-accent-2':'#b8954a','--ks-button-text':'#1a1410','--ks-danger':'#efb0b0' }
  },
  forest: {
    id:'forest', name:'Les',
    bg:'radial-gradient(circle at top, rgba(40,110,70,0.18), transparent 42%), linear-gradient(180deg,#0b1611 0%,#0a0d0b 100%)',
    vars: { '--ks-bg-main':'#09110d','--ks-bg-soft':'rgba(17,34,24,0.84)','--ks-bg-soft-2':'rgba(10,21,14,0.94)','--ks-card-sub':'rgba(12,23,16,0.62)','--ks-border':'rgba(175,160,95,0.22)','--ks-border-strong':'rgba(200,188,116,0.52)','--ks-text':'#eef0d8','--ks-text-muted':'#aeb495','--ks-accent':'#d7c56d','--ks-accent-2':'#7e9e56','--ks-button-text':'#152013','--ks-danger':'#f0b3b3' }
  },
  royal: {
    id:'royal', name:'Royal',
    bg:'radial-gradient(circle at top, rgba(74,52,148,0.18), transparent 42%), linear-gradient(180deg,#0d0b17 0%,#09080d 100%)',
    vars: { '--ks-bg-main':'#0d0918','--ks-bg-soft':'rgba(24,18,45,0.86)','--ks-bg-soft-2':'rgba(14,10,28,0.95)','--ks-card-sub':'rgba(22,16,40,0.62)','--ks-border':'rgba(196,167,255,0.24)','--ks-border-strong':'rgba(214,183,106,0.46)','--ks-text':'#f2eaff','--ks-text-muted':'#b6a6d8','--ks-accent':'#d4b86a','--ks-accent-2':'#8e66d9','--ks-button-text':'#170f25','--ks-danger':'#ffc0d9' }
  },
  parchment: {
    id:'parchment', name:'Pergamen',
    bg:'linear-gradient(180deg,#f2ead8 0%,#e9dfcb 100%)',
    vars: { '--ks-bg-main':'#f8f1e2','--ks-bg-soft':'rgba(255,254,250,0.97)','--ks-bg-soft-2':'rgba(252,246,238,1.0)','--ks-card-sub':'rgba(247,241,230,0.97)','--ks-border':'rgba(195,165,112,0.36)','--ks-border-strong':'rgba(200,165,95,0.70)','--ks-text':'#6b5235','--ks-text-muted':'#967a55','--ks-accent':'#c09a50','--ks-accent-2':'#f0ddb0','--ks-button-text':'#fffbf3','--ks-danger':'#8f3a3a','--ks-sticky-bg':'rgba(248,241,226,0.97)','--ks-sticky-bg2':'rgba(244,237,220,0.98)' }
  },
  walnut: {
    id:'walnut', name:'Orech',
    bg:'linear-gradient(180deg,#24150c 0%,#140d09 100%)',
    vars: { '--ks-bg-main':'#1a100b','--ks-bg-soft':'rgba(45,25,14,0.85)','--ks-bg-soft-2':'rgba(26,15,9,0.95)','--ks-card-sub':'rgba(33,19,12,0.66)','--ks-border':'rgba(205,155,94,0.23)','--ks-border-strong':'rgba(224,184,123,0.55)','--ks-text':'#f4e2c8','--ks-text-muted':'#be9f78','--ks-accent':'#dfb06b','--ks-accent-2':'#8c4f21','--ks-button-text':'#24150c','--ks-danger':'#f0b9a2','--ks-sticky-bg':'rgba(14,12,10,0.97)','--ks-sticky-bg2':'rgba(10,8,6,0.98)' }
  },
  rosered: {
    id:'rosered', name:'Rose Red',
    bg:'radial-gradient(circle at top, rgba(180,40,72,0.22), transparent 42%), linear-gradient(180deg,#2a0812 0%,#12060b 100%)',
    vars: { '--ks-bg-main':'#1a0710','--ks-bg-soft':'rgba(46,12,24,0.86)','--ks-bg-soft-2':'rgba(28,10,18,0.95)','--ks-card-sub':'rgba(36,11,20,0.64)','--ks-border':'rgba(236,128,152,0.26)','--ks-border-strong':'rgba(255,170,191,0.56)','--ks-text':'#ffe7ec','--ks-text-muted':'#d2a2af','--ks-accent':'#f2a0b3','--ks-accent-2':'#c24569','--ks-button-text':'#2b0b15','--ks-danger':'#ffb4c2','--ks-sticky-bg':'rgba(24,8,14,0.97)','--ks-sticky-bg2':'rgba(18,6,10,0.98)' }
  },
  blackwhite: {
    id:'blackwhite', name:'Čierno-biely',
    bg:'#000000',
    vars: { '--ks-bg-main':'#000000','--ks-bg-soft':'rgba(18,18,18,0.98)','--ks-bg-soft-2':'rgba(24,24,24,1.0)','--ks-card-sub':'rgba(28,28,28,0.98)','--ks-border':'rgba(255,255,255,0.22)','--ks-border-strong':'rgba(255,255,255,0.55)','--ks-text':'#ffffff','--ks-text-muted':'#aaaaaa','--ks-accent':'#ffffff','--ks-accent-2':'#444444','--ks-button-text':'#000000','--ks-danger':'#ff4444','--ks-sticky-bg':'rgba(6,6,6,0.99)','--ks-sticky-bg2':'rgba(0,0,0,1.0)' }
  },
  whiteblack: {
    id:'whiteblack', name:'Bielo-čierny',
    bg:'linear-gradient(180deg,#f0f0f0 0%,#e4e4e4 100%)',
    vars: { '--ks-bg-main':'#f5f5f5','--ks-bg-soft':'rgba(255,255,255,0.98)','--ks-bg-soft-2':'rgba(250,250,250,1.0)','--ks-card-sub':'rgba(245,245,245,0.98)','--ks-border':'rgba(0,0,0,0.15)','--ks-border-strong':'rgba(0,0,0,0.40)','--ks-text':'#111111','--ks-text-muted':'#555555','--ks-accent':'#111111','--ks-accent-2':'#cccccc','--ks-button-text':'#ffffff','--ks-danger':'#cc0000','--ks-sticky-bg':'rgba(240,240,240,0.99)','--ks-sticky-bg2':'rgba(230,230,230,1.0)' }
  },
};

export function skinVarsCss(selectedSkin) {
  const skin = SKIN_PRESETS[selectedSkin] || SKIN_PRESETS.classic;
  const vars = skin.vars;
  let css = ':root{' + Object.entries(vars).map(([k,v]) => `${k}:${v}`).join(';') + '}';
  if (selectedSkin === 'blackwhite') {
    css += `
.ks-gold{color:#fff!important}
.ks-cream{color:#fff!important}
.ks-muted{color:#aaa!important}
.ks-gold-bg{background:#fff!important;color:#000!important}
.ks-card{background:rgba(16,16,16,0.98)!important;border-color:rgba(255,255,255,0.20)!important}
.ks-card:hover{border-color:rgba(255,255,255,0.42)!important}
.ks-live-row td,.ks-live-table th{border-color:rgba(255,255,255,0.10)!important}
.ks-live-pos-1{color:#fff!important;border-color:rgba(255,255,255,0.6)!important}
.ks-live-pos-2{color:#ccc!important}
.ks-live-pos-3{color:#999!important}
`;
  }
  if (selectedSkin === 'parchment') {
    css += `
.ks-card{background:rgba(248,241,226,0.96)!important;border-color:rgba(195,165,112,0.36)!important}
.ks-card:hover{border-color:rgba(200,165,95,0.60)!important}
.ks-live-row td,.ks-live-table th{border-color:rgba(195,165,112,0.25)!important}
.ks-live-row:hover td{background:rgba(232,218,196,0.55)!important}
`;
  }
  if (selectedSkin === 'whiteblack') {
    css += `
.ks-gold{color:#111!important}
.ks-cream{color:#111!important}
.ks-muted{color:#555!important}
.ks-gold-bg{background:#111!important;color:#fff!important}
.ks-card{background:rgba(255,255,255,0.97)!important;border-color:rgba(0,0,0,0.13)!important}
.ks-card:hover{border-color:rgba(0,0,0,0.30)!important}
.ks-live-row td,.ks-live-table th{border-color:rgba(0,0,0,0.08)!important}
.ks-live-row:hover td{background:rgba(220,220,220,0.45)!important}
.ks-press{border-color:rgba(0,0,0,0.25)!important}
.ks-press:hover{background:rgba(0,0,0,0.07)!important}
.ks-live-pos-1{color:#111!important;border-color:rgba(0,0,0,0.55)!important}
.ks-live-pos-2{color:#333!important}
.ks-live-pos-3{color:#666!important}
`;
  }
  return css;
}

export const QUICK_VALUES = [50, 100, 300, 400, 500, 600, 1000, 1500, 2000];
export const PENALTY_VALUE = -1000;

export const TARGET_OPTIONS = [
  { value: 5000,  label: 'Krátka hra',   sub: 'do 5 000 bodov' },
  { value: 10000, label: 'Klasická hra', sub: 'do 10 000 bodov' },
];

export const FUNNY_MESSAGES = [
  { msg: 'Čo ti to rieši?!',            emoji: '🤨', variant: 'doubt' },
  { msg: 'Čo ti to rieši?!',            emoji: '🤨', variant: 'doubt' },
  { msg: 'Tak bojuj nééé?!?',           emoji: '😤', variant: 'doubt' },
  { msg: 'Tak bojuj nééé?!?',           emoji: '😤', variant: 'fight' },
  { msg: 'Také mrviny? Vážne?',         emoji: '🙄', variant: 'doubt' },
  { msg: 'Toto ťa nezachráni\u2026',    emoji: '💀', variant: 'doom' },
  { msg: 'Tak takto sa hra nevyhráva!', emoji: '🎲', variant: 'fight' },
  { msg: 'Hej majster\u2026 si si istý?', emoji: '😏', variant: 'doubt' },
  { msg: 'Riskni to konečne!',          emoji: '🔥', variant: 'fight' },
];

export const RULE_CATEGORIES = [
  { id: 'cat-basic',   title: 'Bodové hodnoty kociek', subtitle: 'Samostatné kocky',            ruleIds: ['r1', 'r2'] },
  { id: 'cat-trio',    title: 'Trojice rovnakých',     subtitle: 'Tri rovnaké kocky',            ruleIds: ['r3', 'r4', 'r5', 'r6', 'r7', 'r8'] },
  { id: 'cat-special', title: 'Špeciálne kombinácie',  subtitle: 'Postupka a tri páry',          ruleIds: ['r9', 'r10'] },
  { id: 'cat-multi',   title: 'Násobky kociek',        subtitle: 'Štyri, päť, šesť rovnakých',  ruleIds: ['r11', 'r12', 'r13'] },
];

// ID pravidiel ktoré sú v skutočnosti nastavenia hry (nie bodové kombinácie)
export const SETTING_RULE_IDS = ['r14', 'r15', 'r16', 'r17', 'r18'];

export const POPUP_CONFIG = {
  POPUP_DISPLAY_DURATION: 2000,
  QUEUE_SIZE: 1,
  VERTICAL_OFFSET: '0px',
  OPACITY: 0.92,
};

export const DEFAULT_RULES = [
  { id: 'r1',  name: 'Jednotka',         description: 'Samostatná kocka s hodnotou 1',                        points: 100,   type: 'numeric', dice: [1] },
  { id: 'r2',  name: 'Päťka',            description: 'Samostatná kocka s hodnotou 5',                        points: 50,    type: 'numeric', dice: [5] },
  { id: 'r3',  name: 'Tri jednotky',     description: 'Trojica jednotiek',                                    points: 1000,  type: 'numeric', dice: [1,1,1] },
  { id: 'r4',  name: 'Tri dvojky',       description: 'Trojica dvojok',                                       points: 200,   type: 'numeric', dice: [2,2,2] },
  { id: 'r5',  name: 'Tri trojky',       description: 'Trojica trojok',                                       points: 300,   type: 'numeric', dice: [3,3,3] },
  { id: 'r6',  name: 'Tri štvorky',      description: 'Trojica štvoriek',                                     points: 400,   type: 'numeric', dice: [4,4,4] },
  { id: 'r7',  name: 'Tri päťky',        description: 'Trojica päťok',                                        points: 500,   type: 'numeric', dice: [5,5,5] },
  { id: 'r8',  name: 'Tri šestky',       description: 'Trojica šestiek',                                      points: 600,   type: 'numeric', dice: [6,6,6] },
  { id: 'r9',  name: 'Postupka 1\u20136', description: 'Šesť kociek za sebou: 1\xb72\xb73\xb74\xb75\xb76',   points: 2000,  type: 'numeric', dice: [1,2,3,4,5,6] },
  { id: 'r10', name: 'Tri páry',         description: 'Tri rôzne páry kociek',                                points: 1000,  type: 'numeric', dice: [2,2,4,4,6,6] },
  { id: 'r11', name: 'Štyri rovnaké',    description: 'Štyri rovnaké kocky',                                  points: 0,     type: 'select', options: ['Dvojnásobok trojice', 'Pevná hodnota'],    selected: 'Dvojnásobok trojice', dice: [3,3,3,3] },
  { id: 'r12', name: 'Päť rovnakých',    description: 'Päť rovnakých kociek',                                 points: 0,     type: 'select', options: ['Štvornásobok trojice', 'Pevná hodnota'],   selected: 'Štvornásobok trojice', dice: [4,4,4,4,4] },
  { id: 'r13', name: 'Šesť rovnakých',   description: 'Všetkých šesť kociek rovnakých',                       points: 0,     type: 'select', options: ['Automatická výhra', 'Pevná hodnota 3000'], selected: 'Automatická výhra', dice: [5,5,5,5,5,5] },
  { id: 'r14', name: 'Minimálny odpis (prvý zápis)', description: 'Prvý zápis hráča v turnaji musí byť aspoň 300 bodov. Hru sa dá začať aj čiarkou (\u2014) bez bodov.', points: 300, type: 'numeric', dice: [] },
  { id: 'r15', name: 'Cieľové skóre',    description: 'Body potrebné na výhru turnaja. Klasická hra do 10 000 alebo krátka hra do 5 000.', points: 10000, type: 'numeric', dice: [] },
  { id: 'r16', name: 'Nič nehodené',     description: 'Hod, pri ktorom nepadla žiadna bodujúca kombinácia \u2013 ani jednotka, ani päťka, ani trojica, ani postupka. Z aktuálneho skóre sa odpočíta 1 000 bodov.', points: -1000, type: 'numeric', dice: [2,3,4,6] },
  { id: 'r17', name: 'Prekročenie cieľa', description: 'Ak by hod prekročil cieľové skóre, body sa nezapíšu a zapíše sa automaticky čiarka (\u2014).', points: 0, type: 'select', options: ['Automatická čiarka', 'Hod sa neuznáva'], selected: 'Automatická čiarka', dice: [] },
  { id: 'r18', name: 'Režim potvrdenia víťazstva', description: 'Určuje, či sa po presnom dosiahnutí cieľa ešte vyžaduje overenie víťazstva v ďalšom ťahu ničnehodením (čiarkou), alebo sa výhra uzná okamžite po dokončení kola.', points: 0, type: 'select', options: ['Áno', 'Nie'], selected: 'Áno', dice: [] },
];

export const PLAYER_COLORS = ['#d4b86a', '#e08854', '#7ba88a', '#c47880', '#80a8c4', '#b89580'];

export function formatDateTime(iso) {
  if (!iso) return '\u2014';
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
