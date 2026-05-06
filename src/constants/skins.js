// ─── Skin presets — vizuálne témy aplikácie ──────────────────────────────
// Každý skin obsahuje:
//   id:   unikátny kľúč (string)
//   name: zobrazené meno v UI
//   bg:   CSS hodnota pre background vlastnosť wrappera
//   vars: objekt CSS premenných aplikovaných cez :root { ... }
//
// POZOR NA IMPORT CYKLY:
//   Tento modul neimportuje nič z App.jsx ani iných lokálnych modulov.
//   Môžu ho bezpečne importovať: App.jsx, atoms/*, screens/*.

export const SKIN_PRESETS = {
  classic: {
    id: 'classic', name: 'Klasik',
    bg: 'radial-gradient(circle at top, rgba(120,76,24,0.10), transparent 38%), linear-gradient(180deg,#120f0c 0%,#0d0a08 100%)',
    vars: { '--ks-bg-main': '#0e0c0a', '--ks-bg-soft': 'rgba(28,22,16,0.85)', '--ks-bg-soft-2': 'rgba(18,14,10,0.92)', '--ks-card-sub': 'rgba(20,16,12,0.6)', '--ks-border': 'rgba(201,168,92,0.18)', '--ks-border-strong': 'rgba(212,184,106,0.55)', '--ks-text': '#f3ead4', '--ks-text-muted': '#a89679', '--ks-accent': '#d4b86a', '--ks-accent-2': '#b8954a', '--ks-button-text': '#1a1410', '--ks-danger': '#efb0b0' },
  },
  forest: {
    id: 'forest', name: 'Les',
    bg: 'radial-gradient(circle at top, rgba(40,110,70,0.18), transparent 42%), linear-gradient(180deg,#0b1611 0%,#0a0d0b 100%)',
    vars: { '--ks-bg-main': '#09110d', '--ks-bg-soft': 'rgba(17,34,24,0.84)', '--ks-bg-soft-2': 'rgba(10,21,14,0.94)', '--ks-card-sub': 'rgba(12,23,16,0.62)', '--ks-border': 'rgba(175,160,95,0.22)', '--ks-border-strong': 'rgba(200,188,116,0.52)', '--ks-text': '#eef0d8', '--ks-text-muted': '#aeb495', '--ks-accent': '#d7c56d', '--ks-accent-2': '#7e9e56', '--ks-button-text': '#152013', '--ks-danger': '#f0b3b3' },
  },
  royal: {
    id: 'royal', name: 'Royal',
    bg: 'radial-gradient(circle at top, rgba(74,52,148,0.18), transparent 42%), linear-gradient(180deg,#0d0b17 0%,#09080d 100%)',
    vars: { '--ks-bg-main': '#0d0918', '--ks-bg-soft': 'rgba(24,18,45,0.86)', '--ks-bg-soft-2': 'rgba(14,10,28,0.95)', '--ks-card-sub': 'rgba(22,16,40,0.62)', '--ks-border': 'rgba(196,167,255,0.24)', '--ks-border-strong': 'rgba(214,183,106,0.46)', '--ks-text': '#f2eaff', '--ks-text-muted': '#b6a6d8', '--ks-accent': '#d4b86a', '--ks-accent-2': '#8e66d9', '--ks-button-text': '#170f25', '--ks-danger': '#ffc0d9' },
  },
  parchment: {
    id: 'parchment', name: 'Pergamen',
    bg: 'linear-gradient(180deg,#f3ead7 0%,#eadfcb 100%)',
    vars: { '--ks-bg-main': '#f7f0e0', '--ks-bg-soft': 'rgba(255,252,246,0.98)', '--ks-bg-soft-2': 'rgba(251,245,235,1.0)', '--ks-card-sub': 'rgba(244,236,223,0.98)', '--ks-border': 'rgba(174,140,88,0.34)', '--ks-border-strong': 'rgba(160,120,60,0.72)', '--ks-text': '#6b5235', '--ks-text-muted': '#8e7150', '--ks-accent': '#7a4f1f', '--ks-accent-2': '#d8b684', '--ks-button-text': '#f9f2e6', '--ks-danger': '#8f3a3a', '--ks-sticky-bg': 'rgba(247,240,224,0.97)', '--ks-sticky-bg2': 'rgba(241,233,216,0.98)' },
  },
  walnut: {
    id: 'walnut', name: 'Orech',
    bg: 'linear-gradient(180deg,#24150c 0%,#140d09 100%)',
    vars: { '--ks-bg-main': '#1a100b', '--ks-bg-soft': 'rgba(45,25,14,0.85)', '--ks-bg-soft-2': 'rgba(26,15,9,0.95)', '--ks-card-sub': 'rgba(33,19,12,0.66)', '--ks-border': 'rgba(205,155,94,0.23)', '--ks-border-strong': 'rgba(224,184,123,0.55)', '--ks-text': '#f4e2c8', '--ks-text-muted': '#be9f78', '--ks-accent': '#dfb06b', '--ks-accent-2': '#8c4f21', '--ks-button-text': '#24150c', '--ks-danger': '#f0b9a2', '--ks-sticky-bg': 'rgba(14,12,10,0.97)', '--ks-sticky-bg2': 'rgba(10,8,6,0.98)' },
  },
  rosered: {
    id: 'rosered', name: 'Rose Red',
    bg: 'radial-gradient(circle at top, rgba(180,40,72,0.22), transparent 42%), linear-gradient(180deg,#2a0812 0%,#12060b 100%)',
    vars: { '--ks-bg-main': '#1a0710', '--ks-bg-soft': 'rgba(46,12,24,0.86)', '--ks-bg-soft-2': 'rgba(28,10,18,0.95)', '--ks-card-sub': 'rgba(36,11,20,0.64)', '--ks-border': 'rgba(236,128,152,0.26)', '--ks-border-strong': 'rgba(255,170,191,0.56)', '--ks-text': '#ffe7ec', '--ks-text-muted': '#d2a2af', '--ks-accent': '#f2a0b3', '--ks-accent-2': '#c24569', '--ks-button-text': '#2b0b15', '--ks-danger': '#ffb4c2', '--ks-sticky-bg': 'rgba(24,8,14,0.97)', '--ks-sticky-bg2': 'rgba(18,6,10,0.98)' },
  },
  ruby: {
    id: 'ruby', name: 'Rubín',
    bg: 'radial-gradient(circle at top, rgba(220,30,60,0.18), transparent 42%), linear-gradient(180deg,#22070d 0%,#10050a 100%)',
    vars: { '--ks-bg-main': '#15060b', '--ks-bg-soft': 'rgba(44,10,18,0.86)', '--ks-bg-soft-2': 'rgba(24,8,14,0.95)', '--ks-card-sub': 'rgba(34,10,17,0.66)', '--ks-border': 'rgba(234,115,132,0.26)', '--ks-border-strong': 'rgba(255,166,180,0.58)', '--ks-text': '#ffe9ec', '--ks-text-muted': '#d7aab2', '--ks-accent': '#ff6f86', '--ks-accent-2': '#b92e4a', '--ks-button-text': '#2a0810', '--ks-danger': '#ffb4c2', '--ks-sticky-bg': 'rgba(24,8,14,0.97)', '--ks-sticky-bg2': 'rgba(18,6,10,0.98)' },
  },
  blackwhite: {
    id: 'blackwhite', name: 'Čierno-biely',
    bg: '#000000',
    vars: { '--ks-bg-main': '#000000', '--ks-bg-soft': 'rgba(18,18,18,0.98)', '--ks-bg-soft-2': 'rgba(24,24,24,1.0)', '--ks-card-sub': 'rgba(28,28,28,0.98)', '--ks-border': 'rgba(255,255,255,0.22)', '--ks-border-strong': 'rgba(255,255,255,0.55)', '--ks-text': '#ffffff', '--ks-text-muted': '#aaaaaa', '--ks-accent': '#ffffff', '--ks-accent-2': '#444444', '--ks-button-text': '#000000', '--ks-danger': '#ff4444', '--ks-sticky-bg': 'rgba(6,6,6,0.99)', '--ks-sticky-bg2': 'rgba(0,0,0,1.0)' },
  },
  whiteblack: {
    id: 'whiteblack', name: 'Bielo-čierny',
    bg: 'linear-gradient(180deg,#f0f0f0 0%,#e4e4e4 100%)',
    vars: { '--ks-bg-main': '#f5f5f5', '--ks-bg-soft': 'rgba(255,255,255,0.98)', '--ks-bg-soft-2': 'rgba(250,250,250,1.0)', '--ks-card-sub': 'rgba(245,245,245,0.98)', '--ks-border': 'rgba(0,0,0,0.15)', '--ks-border-strong': 'rgba(0,0,0,0.40)', '--ks-text': '#111111', '--ks-text-muted': '#555555', '--ks-accent': '#111111', '--ks-accent-2': '#cccccc', '--ks-button-text': '#ffffff', '--ks-danger': '#cc0000', '--ks-sticky-bg': 'rgba(240,240,240,0.99)', '--ks-sticky-bg2': 'rgba(230,230,230,1.0)' },
  },
};

// Generuje CSS string s :root premennými pre zvolený skin.
// Zahŕňa aj špeciálne override triedy pre blackwhite, parchment, whiteblack.
export function skinVarsCss(selectedSkin) {
  const skin = SKIN_PRESETS[selectedSkin] || SKIN_PRESETS.classic;
  const vars = skin.vars;
  let css = ':root{' + Object.entries(vars).map(([k, v]) => `${k}:${v}`).join(';') + '}';
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
