import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from 'lucide-react';

// SVG background patterns (URL-encoded for CSS data URIs)
// Brawl Stars: star/badge shape with lightning bolt
const _LIGHTNING = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cpath d='M80 20 L93 45 L120 38 L122 65 L148 74 L136 98 L152 118 L126 122 L122 148 L95 138 L80 158 L65 138 L38 148 L34 122 L8 118 L24 98 L12 74 L38 65 L40 38 L67 45 Z' fill='rgba(110%2C55%2C170%2C0.28)'/%3E%3Cpath d='M87 48 L65 87 L82 87 L72 113 L103 72 L86 72 Z' fill='rgba(185%2C135%2C255%2C0.48)'/%3E%3C/svg%3E\") repeat";
// Brawl Blue: cartoon skull with angry eyes and teeth
const _SKULL    = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Ccircle cx='80' cy='66' r='48' fill='rgba(205%2C232%2C255%2C0.30)'/%3E%3Ccircle cx='63' cy='64' r='13' fill='rgba(10%2C52%2C130%2C0.55)'/%3E%3Ccircle cx='97' cy='64' r='13' fill='rgba(10%2C52%2C130%2C0.55)'/%3E%3Cline x1='50' y1='48' x2='72' y2='54' stroke='rgba(10%2C52%2C130%2C0.60)' stroke-width='5' stroke-linecap='round'/%3E%3Cline x1='110' y1='48' x2='88' y2='54' stroke='rgba(10%2C52%2C130%2C0.60)' stroke-width='5' stroke-linecap='round'/%3E%3Cpath d='M75 82 L80 74 L85 82Z' fill='rgba(10%2C52%2C130%2C0.45)'/%3E%3Crect x='52' y='102' width='56' height='20' rx='6' fill='rgba(205%2C232%2C255%2C0.22)'/%3E%3Crect x='59' y='108' width='10' height='16' rx='3' fill='rgba(10%2C52%2C130%2C0.50)'/%3E%3Crect x='75' y='108' width='10' height='16' rx='3' fill='rgba(10%2C52%2C130%2C0.50)'/%3E%3Crect x='91' y='108' width='10' height='16' rx='3' fill='rgba(10%2C52%2C130%2C0.50)'/%3E%3C/svg%3E\") repeat";
// Harry Potter: Deathly Hallows symbol + lightning bolt + star
const _HP       = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cg stroke='rgba(100%2C62%2C12%2C0.28)' fill='none' stroke-width='2.5'%3E%3Cpolygon points='100 18 145 95 55 95'/%3E%3Ccircle cx='100' cy='68' r='27'/%3E%3Cline x1='100' y1='18' x2='100' y2='95'/%3E%3C/g%3E%3Cpath d='M164 30 L153 54 L163 54 L150 80' stroke='rgba(100%2C62%2C12%2C0.22)' stroke-width='3' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M35 152 L38 141 L41 152 L52 155 L41 158 L38 169 L35 158 L24 155Z' fill='rgba(100%2C62%2C12%2C0.20)'/%3E%3Ccircle cx='172' cy='164' r='3.5' fill='rgba(100%2C62%2C12%2C0.16)'/%3E%3Ccircle cx='20' cy='128' r='2.5' fill='rgba(100%2C62%2C12%2C0.13)'/%3E%3C/svg%3E\") repeat";

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


// Generuje CSS string s :root premennými pre zvolený skin.
// Zahŕňa aj špeciálne override triedy pre blackwhite, parchment, whiteblack.

export const FONT_PRESETS = {
  default:   { id: 'default',   name: 'Default',        stack: "'Cormorant Garamond', 'Crimson Pro', Georgia, serif",   monoStack: "'Bebas Neue', sans-serif" },
  calibri:   { id: 'calibri',   name: 'Calibri',         stack: "'Calibri', 'Segoe UI', sans-serif",                    monoStack: "'Bebas Neue', sans-serif" },
  arial:     { id: 'arial',     name: 'Arial',           stack: "Arial, 'Helvetica Neue', sans-serif",                  monoStack: "'Bebas Neue', sans-serif" },
  crimson:   { id: 'crimson',   name: 'Crimson Pro',     stack: "'Crimson Pro', Georgia, serif",                        monoStack: "'Bebas Neue', sans-serif" },
  comicsans: { id: 'comicsans', name: 'Comic Sans MS',   stack: "'Comic Sans MS', 'Comic Sans', cursive",               monoStack: "'Bebas Neue', sans-serif" },
  caveatbrush: { id: 'caveatbrush', name: 'Caveat Brush', stack: "'Caveat Brush', 'Segoe Script', cursive", monoStack: "'Bebas Neue', sans-serif" },
};

export const DICE_ICONS = { 1: Dice1, 2: Dice2, 3: Dice3, 4: Dice4, 5: Dice5, 6: Dice6 };
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
      bg:'linear-gradient(180deg,#f3ead7 0%,#eadfcb 100%)',
      vars: { '--ks-bg-main':'#f7f0e0','--ks-bg-soft':'rgba(255,252,246,0.98)','--ks-bg-soft-2':'rgba(251,245,235,1.0)','--ks-card-sub':'rgba(244,236,223,0.98)','--ks-border':'rgba(174,140,88,0.34)','--ks-border-strong':'rgba(160,120,60,0.72)','--ks-text':'#6b5235','--ks-text-muted':'#8e7150','--ks-accent':'#7a4f1f','--ks-accent-2':'#d8b684','--ks-button-text':'#f9f2e6','--ks-danger':'#8f3a3a','--ks-sticky-bg':'rgba(247,240,224,0.97)','--ks-sticky-bg2':'rgba(241,233,216,0.98)' }
  },
  walnut: {
    id:'walnut', name:'Orech',
    bg:'linear-gradient(180deg,#24150c 0%,#140d09 100%)',
    vars: { '--ks-bg-main':'#1a100b','--ks-bg-soft':'rgba(45,25,14,0.85)','--ks-bg-soft-2':'rgba(26,15,9,0.95)','--ks-card-sub':'rgba(33,19,12,0.66)','--ks-border':'rgba(205,155,94,0.23)','--ks-border-strong':'rgba(224,184,123,0.55)','--ks-text':'#f4e2c8','--ks-text-muted':'#be9f78','--ks-accent':'#dfb06b','--ks-accent-2':'#8c4f21','--ks-button-text':'#24150c','--ks-danger':'#f0b9a2' ,'--ks-sticky-bg':'rgba(14,12,10,0.97)','--ks-sticky-bg2':'rgba(10,8,6,0.98)'}
  },
  rosered: {
    id:'rosered', name:'Rose Red',
    bg:'radial-gradient(circle at top, rgba(180,40,72,0.22), transparent 42%), linear-gradient(180deg,#2a0812 0%,#12060b 100%)',
    vars: { '--ks-bg-main':'#1a0710','--ks-bg-soft':'rgba(46,12,24,0.86)','--ks-bg-soft-2':'rgba(28,10,18,0.95)','--ks-card-sub':'rgba(36,11,20,0.64)','--ks-border':'rgba(236,128,152,0.26)','--ks-border-strong':'rgba(255,170,191,0.56)','--ks-text':'#ffe7ec','--ks-text-muted':'#d2a2af','--ks-accent':'#f2a0b3','--ks-accent-2':'#c24569','--ks-button-text':'#2b0b15','--ks-danger':'#ffb4c2','--ks-sticky-bg':'rgba(24,8,14,0.97)','--ks-sticky-bg2':'rgba(18,6,10,0.98)' }
  },
  ruby: {
    id:'ruby', name:'Rubín',
    bg:'radial-gradient(circle at top, rgba(220,30,60,0.18), transparent 42%), linear-gradient(180deg,#22070d 0%,#10050a 100%)',
    vars: { '--ks-bg-main':'#15060b','--ks-bg-soft':'rgba(44,10,18,0.86)','--ks-bg-soft-2':'rgba(24,8,14,0.95)','--ks-card-sub':'rgba(34,10,17,0.66)','--ks-border':'rgba(234,115,132,0.26)','--ks-border-strong':'rgba(255,166,180,0.58)','--ks-text':'#ffe9ec','--ks-text-muted':'#d7aab2','--ks-accent':'#ff6f86','--ks-accent-2':'#b92e4a','--ks-button-text':'#2a0810','--ks-danger':'#ffb4c2','--ks-sticky-bg':'rgba(24,8,14,0.97)','--ks-sticky-bg2':'rgba(18,6,10,0.98)' }
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
  brawlstars: {
    id: 'brawlstars', name: 'Brawl Stars',
    bg: `${_LIGHTNING}, radial-gradient(ellipse at 50% 35%, #6030a0 0%, #38155a 48%, #1a0830 100%)`,
    vars: {
      '--ks-bg-main': `${_LIGHTNING}, #1a0830`,
      '--ks-bg-soft': 'rgba(52,18,80,0.92)',
      '--ks-bg-soft-2': 'rgba(28,10,45,0.96)',
      '--ks-card-sub': 'rgba(40,14,62,0.74)',
      '--ks-border': 'rgba(200,80,220,0.28)',
      '--ks-border-strong': 'rgba(230,120,255,0.62)',
      '--ks-text': '#f8e8ff',
      '--ks-text-muted': '#c0a0d8',
      '--ks-accent': '#e070d0',
      '--ks-accent-2': '#8030b0',
      '--ks-button-text': '#280a3a',
      '--ks-danger': '#ff6090',
      '--ks-sticky-bg': 'rgba(20,6,34,0.97)',
      '--ks-sticky-bg2': 'rgba(14,4,24,0.98)',
    },
  },
  brawlblue: {
    id: 'brawlblue', name: 'Brawl Blue',
    bg: `${_SKULL}, radial-gradient(ellipse at 50% 40%, #1a96d8 0%, #0e62ac 46%, #061e54 100%)`,
    vars: {
      '--ks-bg-main': `${_SKULL}, #061e54`,
      '--ks-bg-soft': 'rgba(10,48,110,0.92)',
      '--ks-bg-soft-2': 'rgba(6,26,65,0.96)',
      '--ks-card-sub': 'rgba(8,36,88,0.74)',
      '--ks-border': 'rgba(40,180,240,0.28)',
      '--ks-border-strong': 'rgba(80,210,255,0.62)',
      '--ks-text': '#e8f4ff',
      '--ks-text-muted': '#90b8d8',
      '--ks-accent': '#40d8f0',
      '--ks-accent-2': '#2878c8',
      '--ks-button-text': '#030e28',
      '--ks-danger': '#ff6090',
      '--ks-sticky-bg': 'rgba(4,14,44,0.97)',
      '--ks-sticky-bg2': 'rgba(3,10,32,0.98)',
    },
  },
  harrypotter: {
    id: 'harrypotter', name: 'Harry Potter',
    bg: `${_HP}, radial-gradient(ellipse at 25% 45%, rgba(160,110,40,0.22), transparent 55%), linear-gradient(160deg, #f8ecd4 0%, #efe0b8 40%, #e8d6a4 70%, #f2e8c8 100%)`,
    vars: {
      '--ks-bg-main': '#f0e2c0',
      '--ks-bg-soft': 'rgba(252,244,226,0.97)',
      '--ks-bg-soft-2': 'rgba(248,238,215,1.0)',
      '--ks-card-sub': 'rgba(244,232,206,0.98)',
      '--ks-border': 'rgba(140,88,18,0.30)',
      '--ks-border-strong': 'rgba(160,100,20,0.62)',
      '--ks-text': '#271608',
      '--ks-text-muted': '#7a5030',
      '--ks-accent': '#8b5814',
      '--ks-accent-2': '#740001',
      '--ks-button-text': '#f8f0de',
      '--ks-danger': '#aa2020',
      '--ks-sticky-bg': 'rgba(244,232,202,0.97)',
      '--ks-sticky-bg2': 'rgba(238,224,192,0.98)',
    },
  },
};


export function skinVarsCss(selectedSkin, selectedFont) {
  const font = FONT_PRESETS[selectedFont] || FONT_PRESETS.default;
  const skin = SKIN_PRESETS[selectedSkin] || SKIN_PRESETS.classic;
  const vars = skin.vars;
  let css = ':root{' + Object.entries(vars).map(([k,v]) => `${k}:${v}`).join(';')
    + `;--ks-font-display:${font.stack};--ks-font-body:${font.stack};--ks-font-mono:${font.monoStack}}`;
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
  if (selectedSkin === 'brawlstars') {
    css += `
.ks-gold{color:#e070d0!important}
.ks-gold-bg{background:linear-gradient(135deg,#b030b0,#6010a0)!important;box-shadow:0 0 18px rgba(200,80,230,0.65)!important}
.ks-card{background:rgba(44,16,68,0.90)!important;border-color:rgba(200,80,220,0.32)!important;box-shadow:0 0 12px rgba(160,60,200,0.30)!important}
.ks-border-sub{border-color:rgba(200,80,220,0.20)!important}
`;
  }
  if (selectedSkin === 'brawlblue') {
    css += `
.ks-gold{color:#40d8f0!important}
.ks-gold-bg{background:linear-gradient(135deg,#1a96d8,#0e5cac)!important;box-shadow:0 0 18px rgba(40,180,240,0.65)!important}
.ks-card{background:rgba(8,38,90,0.90)!important;border-color:rgba(40,180,240,0.30)!important;box-shadow:0 0 12px rgba(30,140,200,0.28)!important}
.ks-border-sub{border-color:rgba(40,180,240,0.18)!important}
`;
  }
  return css;
}



