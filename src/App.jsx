import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Dice1, Dice2, Dice3, Dice4, Dice5, Dice6,
  Plus, Minus, Trash2, Save, X, ChevronLeft,
  BookOpen, Archive as ArchiveIcon, Settings, Trophy, Users,
  AlertCircle, AlertTriangle, Check, Play, RotateCcw, ScrollText, Crown,
  Calendar, ChevronRight, ListPlus, Pencil, Zap, Skull, Target,
  Download, Upload, Edit3, Clock, FileSpreadsheet, ChevronDown, TrendingUp,
  Sigma, Layers, Monitor, Bell
} from 'lucide-react';
import * as XLSX from 'xlsx';
import { Capacitor } from '@capacitor/core';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import ScoreTable from './components/ScoreTable.jsx';

// ─── Konštanty ────────────────────────────────────────────────────────────

const DICE_ICONS = { 1: Dice1, 2: Dice2, 3: Dice3, 4: Dice4, 5: Dice5, 6: Dice6 };
const SKIN_PRESETS = {
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
    vars: { '--ks-bg-main':'#1a100b','--ks-bg-soft':'rgba(45,25,14,0.85)','--ks-bg-soft-2':'rgba(26,15,9,0.95)','--ks-card-sub':'rgba(33,19,12,0.66)','--ks-border':'rgba(205,155,94,0.23)','--ks-border-strong':'rgba(224,184,123,0.55)','--ks-text':'#f4e2c8','--ks-text-muted':'#be9f78','--ks-accent':'#dfb06b','--ks-accent-2':'#8c4f21','--ks-button-text':'#24150c','--ks-danger':'#f0b9a2' ,'--ks-sticky-bg':'rgba(14,12,10,0.97)','--ks-sticky-bg2':'rgba(10,8,6,0.98)'}
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

function skinVarsCss(selectedSkin) {
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



const QUICK_VALUES = [50, 100, 300, 400, 500, 600, 1000, 1500, 2000];
const PENALTY_VALUE = -1000;

const TARGET_OPTIONS = [
  { value: 5000,  label: 'Krátka hra',   sub: 'do 5 000 bodov' },
  { value: 10000, label: 'Klasická hra', sub: 'do 10 000 bodov' },
];

// Funny hlášky — { msg, emoji, variant }
const FUNNY_MESSAGES = [
  { msg: 'Čo ti to rieši?!',         emoji: '🤨', variant: 'doubt' },
  { msg: 'Čo ti to rieši?!',         emoji: '🤨', variant: 'doubt' },
  { msg: 'Tak bojuj nééé?!?',        emoji: '😤', variant: 'doubt' },
  { msg: 'Tak bojuj nééé?!?',        emoji: '😤', variant: 'fight' },
  { msg: 'Také mrviny? Vážne?',      emoji: '🙄', variant: 'doubt' },
  { msg: 'Toto ťa nezachráni…',      emoji: '💀', variant: 'doom' },
  { msg: 'Tak takto sa hra nevyhráva!', emoji: '🎲', variant: 'fight' },
  { msg: 'Hej majster… si si istý?', emoji: '😏', variant: 'doubt' },
  { msg: 'Riskni to konečne!',       emoji: '🔥', variant: 'fight' },
];

// Kategórie pravidiel — len bodovanie kociek (flow & penalizácie sú v úvode + Nastaveniach)
const RULE_CATEGORIES = [
  { id: 'cat-basic',   title: 'Bodové hodnoty kociek', subtitle: 'Samostatné kocky',         ruleIds: ['r1', 'r2'] },
  { id: 'cat-trio',    title: 'Trojice rovnakých',     subtitle: 'Tri rovnaké kocky',        ruleIds: ['r3', 'r4', 'r5', 'r6', 'r7', 'r8'] },
  { id: 'cat-special', title: 'Špeciálne kombinácie',  subtitle: 'Postupka a tri páry',      ruleIds: ['r9', 'r10'] },
  { id: 'cat-multi',   title: 'Násobky kociek',        subtitle: 'Štyri, päť, šesť rovnakých', ruleIds: ['r11', 'r12', 'r13'] },
];

// ID pravidiel ktoré sú v skutočnosti nastavenia hry (nie bodové kombinácie)
const SETTING_RULE_IDS = ['r14', 'r15', 'r16', 'r17', 'r18'];

// Formátovanie dátumu/času
function formatDateTime(iso) {
  if (!iso) return '—';
  const d = new Date(iso);
  return d.toLocaleString('sk-SK', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}
function formatDuration(startIso, endIso) {
  if (!startIso || !endIso) return null;
  const ms = new Date(endIso) - new Date(startIso);
  if (ms < 0) return null;
  const min = Math.floor(ms / 60000);
  if (min < 60) return `${min} min`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return `${h} h ${m} min`;
}

// ─── Popup / notifikačný systém — globálna konfigurácia ───────────────────
// Centralizované konštanty pre časovanie, vizuál a layout popupov.
// Zmenou týchto hodnôt sa správanie popupov zmení v celej appke naraz.
const POPUP_CONFIG = {
  // Minimálny čas zobrazenia jedného funny popupu, kým môže prísť ďalší (ms).
  // Týka sa LEN nepriebehových popupov; interaktívne dialógy (Confirm/Cancel)
  // a fullscreen výsledky (Víťaz/Remíza) tento limit obchádzajú.
  POPUP_DISPLAY_DURATION: 2000,
  // Maximálna veľkosť fronty čakajúcich funny popupov (okrem aktívneho).
  // Pri prekročení sa najnovší prepíše posledný čakajúci (newer-wins).
  QUEUE_SIZE: 1,
  // Vertikálny posun všetkých neoverlay popupov (toast-y, simplified karty).
  // Fullscreen popupy (winner celebration, win-pending, full FunnyOverlay)
  // sú riešené cez `inset-0 flex items-center justify-center` a tento offset
  // ich neovplyvní. Hodnotu možno prepísať CSS premennou --ks-popup-offset.
  // Default 0 zachováva pôvodné umiestnenie.
  VERTICAL_OFFSET: '0px',
  // Globálna opacity pre pozadie/karty popupov (0..1). Default 0.92
  // odráža súčasný "mierne priesvitný" stav.
  OPACITY: 0.92,
};

const DEFAULT_RULES = [
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

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Crimson+Pro:wght@300;400;500;600&family=Bebas+Neue&display=swap');

  /* ─── Popup / notifikačný systém — globálne premenné ─────────────────
     Tieto hodnoty driví aj POPUP_CONFIG v JS, ale CSS premenné umožňujú
     override z konkrétneho komponentu alebo skinu, ak by bolo treba.    */
  :root {
    --ks-popup-offset: 0px;       /* vertikálny posun pre toast-y a simplified karty */
    --ks-popup-opacity: 0.92;     /* default opacity pozadia popupov */
    --ks-popup-safe-bottom: env(safe-area-inset-bottom, 0px);
  }
  /* Pomocná trieda pre nepriebehové popupy (toast, simplified result).
     Posúva ich smerom dolu o --ks-popup-offset + safe-area-inset-bottom.
     Fullscreen popupy ju NEPOUŽÍVAJÚ — zostávajú vystredené cez inset-0. */
  .ks-popup-anchor {
    transform: translateY(calc(var(--ks-popup-offset) + var(--ks-popup-safe-bottom)));
  }

  .ks-display { font-family: 'Cormorant Garamond', serif; letter-spacing: 0.02em; }
  .ks-mono    { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.08em; }
  .ks-body    { font-family: 'Crimson Pro', serif; }
  .ks-bg      { background:
                  radial-gradient(ellipse at top, color-mix(in srgb, var(--ks-accent) 12%, transparent), transparent 60%),
                  radial-gradient(ellipse at bottom, color-mix(in srgb, var(--ks-accent-2) 18%, transparent), transparent 60%),
                  var(--ks-bg-main); }
  .ks-card    { background: linear-gradient(180deg, var(--ks-bg-soft), var(--ks-bg-soft-2));
                border: 1px solid var(--ks-border); }
  .ks-card-prom { background: linear-gradient(180deg, color-mix(in srgb, var(--ks-accent) 10%, var(--ks-bg-soft)), var(--ks-bg-soft-2));
                  border: 2px solid var(--ks-border-strong);
                  box-shadow: 0 4px 24px rgba(0,0,0,0.35), inset 0 1px 0 color-mix(in srgb, var(--ks-accent) 20%, transparent); }
  .ks-card-sub  { background: var(--ks-card-sub);
                  border: 1px solid color-mix(in srgb, var(--ks-border) 72%, transparent); }
  .ks-gold      { color: var(--ks-accent); }
  .ks-gold-bg   { background: linear-gradient(180deg, color-mix(in srgb, var(--ks-accent) 70%, white), var(--ks-accent-2)); color: var(--ks-button-text); }
  .ks-cream     { color: var(--ks-text); }
  .ks-muted     { color: var(--ks-text-muted); }
  .ks-divider   { background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--ks-accent) 40%, transparent), transparent); height: 1px; }
  .ks-press     { transition: all 0.15s ease; }
  .ks-press:active { transform: scale(0.97); }
  .ks-scroll{-ms-overflow-style:none;scrollbar-width:none;scrollbar-gutter:stable both-edges;}
  .ks-scroll::-webkit-scrollbar { width: 0; height: 0; display:none; }
  @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
  .ks-fade { animation: fadeIn 0.3s ease-out; }
  @keyframes pulseGold { 0%,100% { box-shadow: 0 0 0 0 rgba(212,184,106,0.4); } 50% { box-shadow: 0 0 0 8px rgba(212,184,106,0); } }
  .ks-pulse { animation: pulseGold 2s ease-in-out infinite; }
  @keyframes slideDown { from { opacity: 0; transform: translateY(-100%); } to { opacity: 1; transform: translateY(0); } }
  .ks-slide-down { animation: slideDown 0.3s ease-out; }
  @keyframes funnyIn {
    0%   { opacity: 0; transform: scale(0.5) rotate(-8deg); }
    60%  { opacity: 1; transform: scale(1.08) rotate(2deg); }
    100% { opacity: 1; transform: scale(1) rotate(-2deg); }
  }
  .ks-funny { animation: funnyIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
  @keyframes funnyOrbPulse {
    0%, 100% { opacity: 0.4; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.2); }
  }
  .ks-funny-orb { animation: funnyOrbPulse 3s ease-in-out infinite; }
  @keyframes funnyEmojiBob {
    0%, 100% { transform: translateY(0) rotate(-3deg); }
    50% { transform: translateY(-8px) rotate(3deg); }
  }
  .ks-funny-emoji { animation: funnyEmojiBob 2s ease-in-out infinite; }
  @keyframes overlayFadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .ks-overlay-bg { animation: overlayFadeIn 0.3s ease-out forwards; }

  /* ── FIX5 Responsive ────────────────────────── */
  html,body,#root{width:100%;max-width:100vw;overflow-x:hidden;}
  body{padding-top:0;padding-bottom:env(safe-area-inset-bottom,0);}
  @media(min-width:900px){.ks-game-container{max-width:860px;margin:0 auto}}
  @media(min-width:1400px){.ks-game-container{max-width:1180px}}
  @media(max-height:520px) and (orientation:landscape){.ks-score-table-wrap{max-height:40vh;overflow-y:auto}}
  .ks-quick-btn,button{min-height:44px}
  input,select,textarea{font-size:16px!important}
  table{display:block;overflow-x:auto;width:100%}
  .ks-app-scroll{min-height:100vh;overflow-y:auto;-webkit-overflow-scrolling:touch;touch-action:pan-y;overscroll-behavior-y:auto;}

`;

// ─── Pomocné komponenty ───────────────────────────────────────────────────

function DiceIcon({ value, size = 28 }) {
  const Icon = DICE_ICONS[value];
  if (!Icon) return null;
  return <Icon size={size} strokeWidth={1.5} />;
}

function DiceRow({ dice, size = 24 }) {
  if (!dice || dice.length === 0) return <span className="ks-muted text-sm italic">—</span>;
  return (
    <div className="flex flex-wrap gap-1 items-center">
      {dice.map((d, i) => (
        <div key={i} className="ks-gold" style={{ display: 'inline-flex' }}>
          <DiceIcon value={d} size={size} />
        </div>
      ))}
    </div>
  );
}

function GoldButton({ children, onClick, disabled, className = '', icon: Icon, variant = 'gold' }) {
  const base = 'ks-press ks-mono px-5 py-3 rounded-sm flex items-center justify-center gap-2 font-semibold tracking-wider';
  const styles = {
    gold:    'ks-gold-bg hover:brightness-110 disabled:opacity-30 disabled:cursor-not-allowed',
    outline: 'border border-amber-700/60 ks-gold hover:bg-amber-900/20 disabled:opacity-30 disabled:cursor-not-allowed',
    ghost:   'ks-cream hover:bg-stone-800/50 disabled:opacity-30',
    danger:  'border border-red-900/60 text-red-300 hover:bg-red-950/40 disabled:opacity-30',
  };
  return (
    <button onClick={onClick} disabled={disabled} className={`${base} ${styles[variant]} ${className}`}>
      {Icon && <Icon size={18} strokeWidth={2} />}
      {children}
    </button>
  );
}

function Ornament() {
  return (
    <div className="flex items-center justify-center gap-3 my-3">
      <div className="ks-divider flex-1" />
      <div className="ks-gold text-xs">✦</div>
      <div className="ks-divider flex-1" />
    </div>
  );
}

function Header({ title, onBack, right }) {
  return (
    <div className="flex items-center justify-between px-5 py-4 border-b border-amber-900/30">
      {onBack ? (
        <button onClick={onBack} className="ks-press ks-cream flex items-center gap-1 -ml-2 px-2 py-1">
          <ChevronLeft size={20} />
          <span className="ks-body">Späť</span>
        </button>
      ) : <div className="w-16" />}
      <h2 className="ks-display ks-gold text-xl font-semibold text-center">{title}</h2>
      <div className="w-16 flex justify-end">{right}</div>
    </div>
  );
}

function Toast({ msg, kind, onClose }) {
  const colorMap = {
    info:      'border-amber-700/60 bg-amber-950/90 ks-cream',
    warn:      'border-amber-600/70 bg-amber-900/80 text-amber-100',
    overshoot: 'border-red-600/70 bg-gradient-to-b from-red-900 to-red-950 text-red-50',
  };
  const Icon = kind === 'overshoot' ? AlertTriangle : kind === 'warn' ? AlertCircle : Check;
  return (
    <div className="fixed top-2 left-3 right-3 z-50 ks-slide-down ks-popup-anchor" style={{ pointerEvents: 'none' }}>
      <div className={`max-w-md mx-auto p-3 rounded-sm border ${colorMap[kind] || colorMap.info} flex items-start gap-2 shadow-2xl`} style={{ pointerEvents: 'auto', opacity: 'var(--ks-popup-opacity, 0.92)' }}>
        <Icon size={20} className="shrink-0 mt-0.5" />
        <div className="ks-body flex-1 text-sm font-medium">{msg}</div>
        <button onClick={onClose} className="opacity-70 hover:opacity-100"><X size={16} /></button>
      </div>
    </div>
  );
}

// ─── StrikethroughCrown ──────────────────────────────────────────────────
// Vylepšená SVG verzia "prečiarknutej koruny" pre dočasného kráľa.
// Nahrádza pôvodný emoji '👑̸' (combining strikethrough), ktorý sa na
// Androide/Windowse vykresľoval rôzne — niekde vôbec.
function StrikethroughCrown({ size = 96, color = '#d4b86a', strikeColor = '#c44848' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
         style={{ filter: 'drop-shadow(0 4px 16px rgba(212,184,106,0.5))' }}>
      <defs>
        <linearGradient id="crownGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor={color} stopOpacity="0.7" />
        </linearGradient>
      </defs>
      {/* Korunové telo */}
      <path d="M 16 36 L 24 60 L 72 60 L 80 36 L 66 48 L 48 24 L 30 48 Z"
            fill="url(#crownGold)" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      {/* Spodná páska */}
      <rect x="22" y="60" width="52" height="8" fill={color} stroke={color} strokeWidth="1" rx="1" />
      {/* Drahokamy */}
      <circle cx="48" cy="32" r="3.5" fill="#fff" stroke={color} strokeWidth="1" />
      <circle cx="20" cy="42" r="2.5" fill="#fff" stroke={color} strokeWidth="1" />
      <circle cx="76" cy="42" r="2.5" fill="#fff" stroke={color} strokeWidth="1" />
      {/* Prečiarknutie — dve čiary pre kontrast (tmavá podkladová + farebná) */}
      <line x1="10" y1="78" x2="86" y2="18" stroke="#000" strokeWidth="7" strokeLinecap="round" opacity="0.5" />
      <line x1="10" y1="78" x2="86" y2="18" stroke={strikeColor} strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

// ─── SimplifiedResult ────────────────────────────────────────────────────
// Minimalistický výsledok pre režim "Zjednodušený". Karta v strede s
// jasnou ikonkou, krátkym popisom a (voliteľne) action tlačidlom.
function SimplifiedResult({ kind, title, subtitle, onClose, actionLabel }) {
  // kind: 'victory' | 'draw' | 'temporary-king' | 'win-pending'
  const palette = {
    victory:        { accent: '#d4b86a', label: 'VÍŤAZ' },
    draw:           { accent: '#d4b86a', label: 'REMÍZA' },
    'temporary-king': { accent: '#c44848', label: 'DOČASNÝ KRÁĽ' },
    'win-pending':  { accent: '#d4b86a', label: 'POTVRD VÝHRU' },
  }[kind] || { accent: '#d4b86a', label: '' };

  const Icon = ({ size = 56 }) => {
    if (kind === 'temporary-king') return <StrikethroughCrown size={size} />;
    return <Crown size={size} className="ks-gold" style={{ filter: 'drop-shadow(0 4px 16px rgba(212,184,106,0.5))' }} />;
  };

  return (
    <div className="fixed inset-x-3 top-1/3 z-50 ks-fade ks-popup-anchor flex justify-center"
         onClick={onClose}>
      <div className="ks-card max-w-sm w-full rounded-sm border-2 p-5 text-center shadow-2xl"
           style={{ borderColor: palette.accent, opacity: 'var(--ks-popup-opacity, 0.92)', cursor: 'pointer' }}>
        <div className="flex justify-center mb-3"><Icon /></div>
        <div className="ks-mono text-xs tracking-widest mb-2" style={{ color: palette.accent }}>
          {palette.label}
        </div>
        {title && (
          <div className="ks-display text-2xl font-bold ks-cream leading-tight px-2 mb-1">{title}</div>
        )}
        {subtitle && (
          <div className="ks-body ks-cream text-sm opacity-90 leading-snug">{subtitle}</div>
        )}
        {actionLabel && (
          <div className="ks-mono text-[10px] ks-muted mt-3 tracking-widest">{actionLabel}</div>
        )}
      </div>
    </div>
  );
}

function FunnyOverlay({ data, onClose }) {
  const msg = typeof data === 'string' ? data : data?.msg;
  const emoji = typeof data === 'string' ? '🤨' : (data?.emoji || '🤨');
  const variant = typeof data === 'string' ? 'doubt' : (data?.variant || 'doubt');

  const VARIANT_STYLES = {
    doubt: {
      bg: 'radial-gradient(circle at center, rgba(80,30,30,0.95), rgba(0,0,0,0.95))',
      label: 'DOTAZ Z PUBLIKA',
      glow: 'rgba(212,184,106,0.4)',
      labelColor: '#d4b86a',
    },
    fight: {
      bg: 'radial-gradient(circle at center, rgba(120,40,30,0.95), rgba(20,10,5,0.97))',
      label: 'POVZBUDENIE',
      glow: 'rgba(231,128,82,0.5)',
      labelColor: '#e08854',
    },
    doom: {
      bg: 'radial-gradient(circle at center, rgba(60,20,20,0.97), rgba(0,0,0,0.98))',
      label: 'PROROCTVO',
      glow: 'rgba(196,72,72,0.5)',
      labelColor: '#c44848',
    },
  };
  const style = VARIANT_STYLES[variant] || VARIANT_STYLES.doubt;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-6 ks-overlay-bg"
         style={{ background: style.bg }}
         onClick={onClose}>
      {/* Dekoratívne kruhy v pozadí */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full ks-funny-orb"
             style={{ background: `radial-gradient(circle, ${style.glow}, transparent 70%)` }} />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full ks-funny-orb"
             style={{ background: `radial-gradient(circle, ${style.glow}, transparent 70%)`, animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-10 w-32 h-32 rounded-full ks-funny-orb"
             style={{ background: `radial-gradient(circle, ${style.glow}, transparent 70%)`, animationDelay: '0.5s' }} />
      </div>

      <div className="ks-funny relative z-10 text-center max-w-sm" onClick={(e) => e.stopPropagation()}>
        {/* Ornament hore */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="h-px flex-1 max-w-[60px]" style={{ background: `linear-gradient(90deg, transparent, ${style.labelColor})` }} />
          <span style={{ color: style.labelColor }} className="text-xs">✦</span>
          <div className="h-px flex-1 max-w-[60px]" style={{ background: `linear-gradient(90deg, ${style.labelColor}, transparent)` }} />
        </div>

        {/* Ikona — buď SVG strikethrough crown alebo veľké unicode emoji */}
        <div className="mb-3 ks-funny-emoji flex justify-center" style={{ filter: `drop-shadow(0 4px 16px ${style.glow})` }}>
          {emoji === 'strikethrough-crown'
            ? <StrikethroughCrown size={112} color="#d4b86a" strikeColor="#c44848" />
            : <span className="text-7xl">{emoji}</span>}
        </div>

        {/* Label */}
        <div className="ks-mono text-xs mb-3 tracking-widest" style={{ color: style.labelColor }}>
          {style.label}
        </div>

        {/* Hlavná hláška */}
        <div className="ks-display text-5xl font-bold ks-cream leading-tight px-4"
             style={{ textShadow: `0 4px 24px ${style.glow}, 0 0 40px ${style.glow}` }}>
          {msg}
        </div>

        {/* Ornament dole */}
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="h-px flex-1 max-w-[60px]" style={{ background: `linear-gradient(90deg, transparent, ${style.labelColor})` }} />
          <span style={{ color: style.labelColor }} className="text-xs">✦</span>
          <div className="h-px flex-1 max-w-[60px]" style={{ background: `linear-gradient(90deg, ${style.labelColor}, transparent)` }} />
        </div>

        <button onClick={onClose} className="ks-press mt-5 ks-mono ks-muted text-xs tracking-widest">
          ZATVORIŤ
        </button>
      </div>
    </div>
  );
}

function StatusBanner({ kind, icon: Icon, children }) {
  const colors = {
    info: 'border-amber-800/30 bg-amber-950/30 text-amber-100/90',
    warn: 'border-red-800/40 bg-red-950/30 text-amber-100',
    gold: 'border-amber-600/60 bg-amber-900/30 text-amber-100',
  };
  return (
    <div className={`flex items-start gap-2 text-sm border rounded-sm p-2 ${colors[kind]}`}>
      <Icon size={16} className="mt-0.5 shrink-0 ks-gold" />
      <div className="ks-body">{children}</div>
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────

export default function App() {
  const [view, setView] = useState('menu');
  const [tournaments, setTournaments] = useState([]);
  const [active, setActive] = useState(null);
  const [rules, setrules] = useState(DEFAULT_RULES);
  const [viewingTournament, setViewingTournament] = useState(null);
  const [archiveReturnTo, setArchiveReturnTo] = useState('menu');
  const [loaded, setLoaded] = useState(false);
  const [selectedSkin, setSelectedSkin] = useState('classic');

  // Display mode pre tabuľky: 'delta' (prípis) alebo 'cumulative' (kumulatívne skóre)
  const [scoreDisplayMode, setScoreDisplayMode] = useState('delta');
  const [tournamentViewMode, setTournamentViewMode] = useState('basic');
  const [funnyWindowsDisplayMode, setFunnyWindowsDisplayMode] = useState('standard');

  useEffect(() => {
    (async () => {
      try { const r = await window.storage.get('rules');       if (r?.value) setrules(JSON.parse(r.value)); }       catch {}
      try { const dm = await window.storage.get('scoreDisplayMode'); if (dm?.value) setScoreDisplayMode(JSON.parse(dm.value)); } catch {}
      try { const tvm = await window.storage.get('tournamentViewMode'); if (tvm?.value) setTournamentViewMode(JSON.parse(tvm.value)); } catch {}
      try { const fwdm = await window.storage.get('funnyWindowsDisplayMode'); if (fwdm?.value) setFunnyWindowsDisplayMode(JSON.parse(fwdm.value)); } catch {}
      try { const skin = await window.storage.get('selectedSkin'); if (skin?.value) { const s = JSON.parse(skin.value); setSelectedSkin(SKIN_PRESETS[s] ? s : 'classic'); } } catch {
        try { const legacySkin = localStorage.getItem('ks-skin'); if (legacySkin) setSelectedSkin(legacySkin); } catch {}
      }
      try { const t = await window.storage.get('tournaments'); if (t?.value) setTournaments(JSON.parse(t.value)); } catch {}
      try { const a = await window.storage.get('active');      if (a?.value) setActive(JSON.parse(a.value)); }      catch {}
      setLoaded(true);
    })();
  }, []);

  useEffect(() => { if (loaded) window.storage.set('scoreDisplayMode', JSON.stringify(scoreDisplayMode)).catch(() => {}); }, [scoreDisplayMode, loaded]);
  useEffect(() => { if (loaded) window.storage.set('tournamentViewMode', JSON.stringify(tournamentViewMode)).catch(() => {}); }, [tournamentViewMode, loaded]);
  useEffect(() => { if (loaded) window.storage.set('funnyWindowsDisplayMode', JSON.stringify(funnyWindowsDisplayMode)).catch(() => {}); }, [funnyWindowsDisplayMode, loaded]);
  useEffect(() => {
    if (!loaded) return;
    window.storage.set('selectedSkin', JSON.stringify(selectedSkin)).catch(() => {});
    try { localStorage.setItem('ks-skin', selectedSkin); } catch {}
  }, [selectedSkin, loaded]);

  useEffect(() => { if (loaded) window.storage.set('rules', JSON.stringify(rules)).catch(() => {}); }, [rules, loaded]);
  useEffect(() => {
    if (!loaded) return;
    window.storage.set('tournaments', JSON.stringify(tournaments)).catch(() => {});
  }, [tournaments, loaded]);
  useEffect(() => {
    if (!loaded) return;
    if (active) window.storage.set('active', JSON.stringify(active)).catch(() => {});
    else window.storage.delete('active').catch(() => {});
  }, [active, loaded]);

  const minWriteOff = useMemo(() => {
    const r = rules.find(x => x.id === 'r14');
    return r ? Number(r.points) || 300 : 300;
  }, [rules]);

  function startTournament(players, targetScore) {
    setActive({
      id: Date.now(),
      date: new Date().toISOString(),
      players, rounds: [],
      currentPlayer: 0, currentRound: 0,
      status: 'active',
      winner: null,                  // null | number | number[] (array pri remíze)
      winPending: null,              // null | number — ktorý hráč musí teraz potvrdiť (popup pri ďalšom ťahu)
      winCandidates: [],             // array indexov ktorí dosiahli cieľ v aktuálnom kole
      winRoundComplete: false,       // true keď posledný hráč v kole odohral a treba vyhodnotiť kandidátov
      targetScore, minWriteOff,
    });
    setView('tournament');
  }

  function updateActive(updater) {
    setActive(prev => prev ? (typeof updater === 'function' ? updater(prev) : updater) : prev);
  }

  function finishTournament(winnerIdxOrArray) {
    if (!active) return;

    // ─── Checksum validácia pred uzatvorením ────────────────────────────
    // Overí konzistenciu: víťaz určený v hlavičke (winnerIdxOrArray) musí
    // byť skutočne hráč ktorý dosiahol cieľ podľa súčtov v kolách.
    // Ak je rozpor, nezatvoríme turnaj a zobrazíme chybu — používateľ uvidí
    // diskrepanciu skôr než sa turnaj presunie do archívu.
    const validation = computeWinners({
      ...active,
      // _confirmedDetailed je už v active state, computeWinners ho prečíta
    });

    if (!validation.valid) {
      const msg = 'Turnaj nemôže byť uzatvorený — nájdené nezhody:\n\n' +
        validation.errors.join('\n') +
        '\n\nReason: ' + validation.reason;
      window.alert(msg);
      console.error('[finishTournament] Validation failed:', validation);
      return;
    }

    // Sanity check: víťaz z parameter sa musí zhodovať s computeWinners.
    const declaredWinners = Array.isArray(winnerIdxOrArray) ? [...winnerIdxOrArray] : [winnerIdxOrArray];
    const computedWinners = [...validation.winners];
    declaredWinners.sort();
    computedWinners.sort();
    const match = declaredWinners.length === computedWinners.length
      && declaredWinners.every((v, i) => v === computedWinners[i]);
    if (!match) {
      const msg = 'Diskrepancia v určení víťaza:\n\n' +
        `Hra deklaruje víťazov: ${declaredWinners.map(i => active.players[i]).join(', ')}\n` +
        `Validácia podľa súčtov: ${computedWinners.map(i => active.players[i]).join(', ')}\n\n` +
        'Turnaj sa neuzatvorí — kontaktuj vývojára (alebo skús presný stav v archíve).';
      window.alert(msg);
      console.error('[finishTournament] Winner mismatch:', { declaredWinners, computedWinners, totals: validation.totals });
      return;
    }

    const finished = {
      ...active,
      status: 'finished',
      winner: computedWinners.length === 1 ? computedWinners[0] : computedWinners,
      finishedAt: new Date().toISOString(),
      // Uložíme aj snapshot validovaných totals pre audit
      _validatedTotals: validation.totals,
    };
    setTournaments(prev => [finished, ...prev]);
    setActive(null);
    setViewingTournament(finished);
    setView('archiveDetail');
  }

  function abortTournament() {
    if (!active) return;
    if (!window.confirm('Naozaj chceš zrušiť rozohraný turnaj? Bude uložený do archívu ako nedokončený.')) return;
    setTournaments(prev => [{ ...active, status: 'aborted', finishedAt: new Date().toISOString() }, ...prev]);
    setActive(null);
    setView('menu');
  }

  function updateTournamentInArchive(id, patch) {
    setTournaments(prev => prev.map(t => t.id === id ? { ...t, ...patch } : t));
    if (viewingTournament?.id === id) {
      setViewingTournament(prev => ({ ...prev, ...patch }));
    }
  }

  async function exportToExcel() {
    if (tournaments.length === 0) {
      window.alert('Archív je prázdny — nie je čo exportovať.');
      return;
    }

    function getWinnerNames(t) {
      if (t.winner === null || t.winner === undefined) return [];
      const arr = Array.isArray(t.winner) ? t.winner : [t.winner];
      return arr.map(i => t.players[i]);
    }
    function winnerDisplay(t) {
      const names = getWinnerNames(t);
      if (names.length === 0) return '—';
      if (names.length === 1) return names[0];
      return `Remíza: ${names.join(', ')}`;
    }

    const wb = XLSX.utils.book_new();
    const summaryRows = tournaments.map((t, idx) => ({
      '#': idx + 1,
      'Začiatok': formatDateTime(t.date),
      'Koniec': t.finishedAt ? formatDateTime(t.finishedAt) : '—',
      'Cieľ': t.targetScore || 10000,
      'Počet hráčov': t.players.length,
      'Hráči': t.players.join(', '),
      'Víťaz': winnerDisplay(t),
      'Stav': t.status === 'finished' ? 'Dokončený' : t.status === 'aborted' ? 'Nedokončený' : 'Aktívny'
    }));
    const summaryWs = XLSX.utils.json_to_sheet(summaryRows);
    summaryWs['!cols'] = [{ wch: 5 }, { wch: 20 }, { wch: 20 }, { wch: 8 }, { wch: 12 }, { wch: 30 }, { wch: 20 }, { wch: 14 }];
    XLSX.utils.book_append_sheet(wb, summaryWs, 'Prehľad');

    tournaments.forEach((t, i) => {
      const aoa = [];
      const startedAt = new Date(t.date);
      const finishedAt = t.finishedAt ? new Date(t.finishedAt) : null;
      const datePart = startedAt.toLocaleDateString('sk-SK', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\s/g, '');
      const startTime = startedAt.toLocaleTimeString('sk-SK', { hour: '2-digit', minute: '2-digit' });
      const endTime = finishedAt ? finishedAt.toLocaleTimeString('sk-SK', { hour: '2-digit', minute: '2-digit' }) : '';
      const timePart = endTime ? `${startTime}-${endTime}` : startTime;
      aoa.push([`Hra ${datePart} ${timePart} — ${t.players.join(', ')}`]);
      aoa.push([]);
      aoa.push(['Kolo', ...t.players]);

      const cumulative = new Array(t.players.length).fill(0);
      (t.rounds || []).forEach((round, roundIndex) => {
        const row = [roundIndex + 1];
        for (let p = 0; p < t.players.length; p++) {
          const val = round[p];
          if (typeof val === 'number') {
            cumulative[p] += val;
            row.push(cumulative[p]);
          } else if (val === 'dash') {
            row.push('—');
          } else {
            row.push(null);
          }
        }
        aoa.push(row);
      });

      aoa.push(['MAX', ...cumulative]);
      let winnerLine = '— Nedokončený turnaj';
      const winnerNames = getWinnerNames(t);
      if (winnerNames.length === 1) {
        const idx = Array.isArray(t.winner) ? t.winner[0] : t.winner;
        winnerLine = `🏆 Víťaz: ${winnerNames[0]} (${cumulative[idx]})`;
      } else if (winnerNames.length > 1) {
        const winnerArr = Array.isArray(t.winner) ? t.winner : [t.winner];
        const parts = winnerArr.map(idx => `${t.players[idx]} (${cumulative[idx]})`);
        winnerLine = `🏆 Remíza: ${parts.join(', ')}`;
      }
      aoa.push([winnerLine]);
      const ws = XLSX.utils.aoa_to_sheet(aoa);
      ws['!cols'] = [{ wch: 6 }, ...t.players.map(() => ({ wch: 14 }))];
      XLSX.utils.book_append_sheet(wb, ws, `Hra ${i + 1}`.substring(0, 31));
    });

    const fileName = `kocky-sveta-${new Date().toISOString().slice(0, 10)}.xlsx`;
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'base64' });

    try {
      if (Capacitor.isNativePlatform()) {
        const result = await Filesystem.writeFile({
          path: fileName,
          data: wbout,
          directory: Directory.Documents,
          recursive: true
        });
        const canShare = await Share.canShare();
        if (canShare?.value) {
          await Share.share({
            title: 'Export Kocky sveta',
            text: 'Exportované dáta z aplikácie Kocky sveta',
            url: result.uri,
            dialogTitle: 'Uložiť alebo zdieľať export'
          });
        } else {
          window.alert('Export uložený do Documents: ' + fileName);
        }
        return;
      }
    } catch (e) {
      console.error('Native Android export failed:', e);
      window.alert('Natívny export zlyhal: ' + (e?.message || 'neznáma chyba') + '\n\nSkontroluj, či si po npm install spustil aj npx cap sync android.');
    }

    try {
      XLSX.writeFile(wb, fileName);
    } catch (e) {
      const blob = new Blob([XLSX.write(wb, { bookType: 'xlsx', type: 'array' })], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 4000);
    }
  }

  async function importFromExcel(file) {
    try {
      const data = await file.arrayBuffer();
      const wb = XLSX.read(data, { type: 'array' });

      const imported = [];
      const skipped = [];

      for (const sheetName of wb.SheetNames) {
        // Preskoč list "Prehľad"
        if (/prehľad|prehlad|summary/i.test(sheetName)) continue;

        const ws = wb.Sheets[sheetName];
        const aoa = XLSX.utils.sheet_to_json(ws, { header: 1, defval: null, raw: true });
        if (!aoa || aoa.length < 4) {
          skipped.push(`${sheetName}: príliš krátky list`);
          continue;
        }

        // Hľadať hlavičkový riadok s dátumom — formát: "Hra DD.MM.YYYY HH:MM-HH:MM — Meno1, Meno2, ..."
        // Akceptuj aj iné varianty — extrahuj dátum/čas/mená pomocou regexu
        const headerRow = aoa[0];
        const headerText = (headerRow && headerRow[0] ? String(headerRow[0]) : '').trim();

        // Regex: dátum DD.MM.YYYY (alebo D.M.YYYY), voliteľný čas HH:MM[-HH:MM], voliteľne za pomlčkou mená
        const dateMatch = headerText.match(/(\d{1,2})\.\s*(\d{1,2})\.\s*(\d{4})/);
        const timeMatch = headerText.match(/(\d{1,2}):(\d{2})(?:\s*[-–—]\s*(\d{1,2}):(\d{2}))?/);
        const namesMatch = headerText.match(/[—–-]\s*(.+)$/);

        // Nájsť riadok 'Kolo' + mená hráčov (môže byť na inej pozícii)
        let columnsRowIdx = -1;
        for (let i = 0; i < Math.min(aoa.length, 6); i++) {
          const row = aoa[i] || [];
          if (row[0] && /^kolo$/i.test(String(row[0]).trim())) {
            columnsRowIdx = i;
            break;
          }
        }
        if (columnsRowIdx < 0) {
          skipped.push(`${sheetName}: nenájdený riadok "Kolo"`);
          continue;
        }

        const columnsRow = aoa[columnsRowIdx];
        const players = [];
        for (let c = 1; c < columnsRow.length; c++) {
          const v = columnsRow[c];
          if (v && String(v).trim()) players.push(String(v).trim());
          else break;
        }
        if (players.length < 2) {
          skipped.push(`${sheetName}: nenájdené mená hráčov`);
          continue;
        }

        // Načítať dátové riadky (kolá) — od columnsRowIdx+1 až do prázdneho riadku alebo MAX/víťaz
        const cumulativeRows = [];
        for (let i = columnsRowIdx + 1; i < aoa.length; i++) {
          const row = aoa[i] || [];
          if (!row[0]) break; // prázdny riadok
          const firstCell = String(row[0]).trim();
          if (/^max$/i.test(firstCell) || /^σ$/i.test(firstCell) || /^suma$/i.test(firstCell)) break;
          if (/víťaz|vitaz|🏆/i.test(firstCell)) break;
          // Skontroluj či je prvý stĺpec číselný (číslo kola)
          const roundNum = parseInt(firstCell, 10);
          if (!Number.isFinite(roundNum)) break;
          cumulativeRows.push(row.slice(1, 1 + players.length));
        }
        if (cumulativeRows.length === 0) {
          skipped.push(`${sheetName}: žiadne dátové riadky`);
          continue;
        }

        // Konverzia kumulatívnych skóre na rounds (diferencie)
        // Pre každého hráča: prejsť cez stĺpec, vypočítať rozdiel medzi po sebe idúcimi číslami
        // 'dash' (—) = čiarka, prázdne = null (nehralo sa)
        function isDash(v) {
          if (v === null || v === undefined) return false;
          const s = String(v).trim();
          return s === '—' || s === '-' || s === '–' || s === '−';
        }
        function isEmpty(v) {
          if (v === null || v === undefined) return true;
          const s = String(v).trim();
          return s === '';
        }
        function asNumber(v) {
          if (typeof v === 'number') return v;
          if (typeof v === 'string') {
            const s = v.replace(/\s/g, '').replace(',', '.');
            const n = parseFloat(s);
            return Number.isFinite(n) ? n : null;
          }
          return null;
        }

        const rounds = cumulativeRows.map(() => new Array(players.length).fill(null));

        for (let pIdx = 0; pIdx < players.length; pIdx++) {
          let prevCum = 0;
          let prevWasNumber = false;
          for (let rIdx = 0; rIdx < cumulativeRows.length; rIdx++) {
            const cell = cumulativeRows[rIdx][pIdx];
            if (isDash(cell)) {
              rounds[rIdx][pIdx] = 'dash';
            } else if (isEmpty(cell)) {
              rounds[rIdx][pIdx] = null;
            } else {
              const n = asNumber(cell);
              if (n === null) {
                rounds[rIdx][pIdx] = null;
              } else {
                // Diferencia voči predošlému číselnému stavu
                const delta = prevWasNumber ? (n - prevCum) : n;
                rounds[rIdx][pIdx] = delta;
                prevCum = n;
                prevWasNumber = true;
              }
            }
          }
        }

        // Detekcia víťaza — hľadať riadok začínajúci 🏆 alebo "Víťaz"
        let winner = null;
        for (let i = 0; i < aoa.length; i++) {
          const row = aoa[i] || [];
          const cell = row[0] ? String(row[0]) : '';
          const m = cell.match(/(?:🏆|víťaz|vitaz)[^:]*:\s*([^\s(]+)/i);
          if (m) {
            const winnerName = m[1].trim();
            const idx = players.findIndex(p => p.toLowerCase() === winnerName.toLowerCase());
            if (idx >= 0) winner = idx;
            break;
          }
        }

        // Ak nie je víťaz nájdený explicitne, určiť podľa najvyššieho totálu (ak dosiahol cieľ)
        if (winner === null) {
          const totals = players.map((_, pIdx) =>
            rounds.reduce((s, r) => s + (typeof r[pIdx] === 'number' ? r[pIdx] : 0), 0)
          );
          const maxIdx = totals.indexOf(Math.max(...totals));
          if (totals[maxIdx] >= 5000) winner = maxIdx;
        }

        // Zostaviť dátum/čas
        let startDate = new Date();
        let endDate = null;
        if (dateMatch) {
          const day = parseInt(dateMatch[1], 10);
          const month = parseInt(dateMatch[2], 10) - 1;
          const year = parseInt(dateMatch[3], 10);
          let startH = 12, startM = 0, endH = null, endM = null;
          if (timeMatch) {
            startH = parseInt(timeMatch[1], 10);
            startM = parseInt(timeMatch[2], 10);
            if (timeMatch[3]) {
              endH = parseInt(timeMatch[3], 10);
              endM = parseInt(timeMatch[4], 10);
            }
          }
          startDate = new Date(year, month, day, startH, startM);
          if (endH !== null) endDate = new Date(year, month, day, endH, endM);
        }

        // Určiť cieľ — z najvyššieho dosiahnutého totálu
        const totals = players.map((_, pIdx) =>
          rounds.reduce((s, r) => s + (typeof r[pIdx] === 'number' ? r[pIdx] : 0), 0)
        );
        const maxTotal = Math.max(...totals);
        const targetScore = maxTotal >= 7500 ? 10000 : (maxTotal >= 3500 ? 5000 : 10000);

        const tournament = {
          id: Date.now() + Math.floor(Math.random() * 1000) + imported.length,
          date: startDate.toISOString(),
          finishedAt: endDate ? endDate.toISOString() : startDate.toISOString(),
          players,
          rounds,
          currentPlayer: 0,
          currentRound: rounds.length,
          status: winner !== null ? 'finished' : 'aborted',
          winner,
          winPending: null,
          targetScore,
          minWriteOff: 300,
          imported: true,
          importedFrom: sheetName,
        };
        imported.push(tournament);
      }

      if (imported.length === 0) {
        window.alert(`Žiadne turnaje neboli importované.${skipped.length ? '\n\nPreskočené listy:\n' + skipped.join('\n') : ''}`);
        return;
      }

      // Pridať do existujúcich turnajov (najnovšie navrch)
      const nextTournaments = [...imported, ...tournaments];
      setTournaments(nextTournaments);

      let msg = `Úspešne importované: ${imported.length} ${imported.length === 1 ? 'turnaj' : (imported.length < 5 ? 'turnaje' : 'turnajov')}.`;
      if (skipped.length) msg += `\n\nPreskočené:\n${skipped.join('\n')}`;
      window.alert(msg);
    } catch (err) {
      console.error(err);
      window.alert('Chyba pri importe: ' + (err.message || 'neznáma chyba'));
    }
  }

  async function clearAllData() {
    // Dvojstupňové potvrdenie
    const step1 = window.confirm(
      '⚠️ POZOR: Toto vymaže VŠETKY turnaje z archívu, rozohranú hru aj uložené pravidlá z tohto zariadenia.\n\n' +
      'Odporúčame najprv vytvoriť zálohu cez Export do Excelu.\n\n' +
      'Chceš pokračovať?'
    );
    if (!step1) return;

    const step2 = window.prompt(
      'Pre potvrdenie napíš slovo VYMAZAŤ (veľkými písmenami).'
    );
    if (step2 !== 'VYMAZAŤ') {
      window.alert('Vymazanie zrušené.');
      return;
    }

    setTournaments([]);
    setActive(null);
    setViewingTournament(null);
    setrules(DEFAULT_RULES);
    setSelectedSkin('classic');

    await window.storage.delete('tournaments').catch(() => {});
    await window.storage.delete('active').catch(() => {});
    await window.storage.set('rules', JSON.stringify(DEFAULT_RULES)).catch(() => {});
    await window.storage.set('selectedSkin', JSON.stringify('classic')).catch(() => {});

    window.alert('Všetky dáta boli vymazané.');
  }

  return (
    <div className="ks-bg min-h-screen ks-cream ks-body" style={{ overflowY: 'auto', WebkitOverflowScrolling: 'touch', touchAction: 'pan-y' }}>
      <style>{skinVarsCss(selectedSkin)}</style>
      <style>{STYLES}</style>
      <style>{`:root { --ks-popup-offset: ${POPUP_CONFIG.VERTICAL_OFFSET}; --ks-popup-opacity: ${POPUP_CONFIG.OPACITY}; }`}</style>

      {view === 'menu' && (
        <MainMenu
          onNew={() => setView('newTournament')}
          onArchive={() => { setArchiveReturnTo('menu'); setView('archive'); }}
          onrules={() => setView('rules')}
          onSettings={() => setView('settings')}
          onResume={active ? () => setView('tournament') : null}
          active={active}
          tournamentCount={tournaments.length}
        />
      )}
      {view === 'settings' && (
        <SettingsMenu
          onBack={() => setView('menu')}
          onRulesEditor={() => setView('rulesEditor')}
          onExport={exportToExcel}
          onImport={importFromExcel}
          onClearAll={clearAllData}
          onArchive={() => { setArchiveReturnTo('settings'); setView('archive'); }}
          tournamentCount={tournaments.length}
          selectedSkin={selectedSkin}
          onSkinChange={setSelectedSkin}
          tournamentViewMode={tournamentViewMode}
          onTournamentViewModeChange={setTournamentViewMode}
          onViewModes={() => setView('viewModes')}
          funnyWindowsDisplayMode={funnyWindowsDisplayMode}
          onFunnyWindowsDisplayModeChange={setFunnyWindowsDisplayMode}
        />
      )}
      {view === 'viewModes' && (
        <GameViewModesScreen
          onBack={() => setView('settings')}
          selectedMode={tournamentViewMode}
          onChangeMode={setTournamentViewMode}
          selectedSkin={selectedSkin}
        />
      )}
      {view === 'newTournament' && <NewTournament onBack={() => setView('menu')} onStart={startTournament} />}
      {view === 'tournament' && (active ? (
        <TournamentScreen
          tournament={active} rules={rules}
          onUpdate={updateActive}
          onFinish={finishTournament}
          onAbort={abortTournament}
          onMenu={() => setView('menu')}
          scoreDisplayMode={scoreDisplayMode}
          onToggleScoreMode={() => setScoreDisplayMode(m => m === 'delta' ? 'cumulative' : 'delta')}
          selectedSkin={selectedSkin}
          onSkinChange={setSelectedSkin}
          tournamentViewMode={tournamentViewMode}
          funnyWindowsDisplayMode={funnyWindowsDisplayMode}
        />
      ) : (
        <SafeTournamentFallback title="Turnaj sa nepodarilo načítať" />
      ))}
      {view === 'archive' && (
        <ArchiveScreen tournaments={Array.isArray(tournaments) ? tournaments : []}
          onBack={() => setView(archiveReturnTo)}
          onView={(t) => { setViewingTournament(t); setView('archiveDetail'); }}
          onDelete={(id) => { if (window.confirm('Vymazať tento turnaj z archívu?')) setTournaments(prev => prev.filter(x => x.id !== id)); }}
          readOnly={archiveReturnTo === 'menu'}
        />
      )}
      {view === 'archiveDetail' && (viewingTournament ? (
        <ArchiveDetail
          tournament={viewingTournament}
          onBack={() => setView('archive')}
          onUpdate={(patch) => updateTournamentInArchive(viewingTournament.id, patch)}
          readOnly={archiveReturnTo === 'menu'}
          scoreDisplayMode={scoreDisplayMode}
          onToggleScoreMode={() => setScoreDisplayMode(m => m === 'delta' ? 'cumulative' : 'delta')}
          selectedSkin={selectedSkin}
        />
      ) : (
        <SafeTournamentFallback title="Dáta turnaja sa nepodarilo načítať" />
      ))}
      {view === 'rules' && <RulesView rules={rules} onBack={() => setView('menu')} />}
      {view === 'rulesEditor' && (
        <RulesEditor rules={rules} onSave={setrules} onBack={() => setView('settings')}
          onReset={() => { if (window.confirm('Obnoviť všetky pravidlá na pôvodné nastavenia?')) setrules(DEFAULT_RULES); }}
          selectedSkin={selectedSkin}
        />
      )}
    </div>
  );
}

// ─── Hlavné menu ──────────────────────────────────────────────────────────

function MainMenu({ onNew, onArchive, onrules, onSettings, onResume, active, tournamentCount }) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 pt-[max(14px,env(safe-area-inset-top))] pb-4 text-center ks-fade">
        <div className="ks-gold text-xs ks-mono mb-2">★ ZALOŽENÉ 2026 by Marcel ★</div>
        <h1 className="ks-display ks-gold text-5xl sm:text-6xl font-bold leading-none">
          Kocky<br/><span className="italic font-medium">sveta</span>
        </h1>
        <Ornament />
      </div>

      <div className="flex-1 px-5 pb-8 max-w-md w-full mx-auto space-y-3 -mt-1">
        {onResume && (
          <button onClick={onResume}
            className="ks-card ks-pulse w-full p-4 rounded-sm flex items-center gap-3 ks-press border-l-4"
            style={{ borderLeftColor: '#d4b86a' }}>
            <Play className="ks-gold" size={24} />
            <div className="text-left flex-1">
              <div className="ks-mono ks-gold text-sm">POKRAČOVAŤ V TURNAJI</div>
              <div className="ks-body ks-cream text-sm opacity-80">
                {active.players.length} hráčov · do {(active.targetScore || 10000).toLocaleString('sk-SK')} · kolo {active.currentRound + 1}
              </div>
            </div>
            <ChevronRight className="ks-gold" size={20} />
          </button>
        )}

        <MenuButton icon={Play}        title="Nový turnaj"     subtitle="Začať novú hru až pre šesť hráčov"   onClick={onNew} primary />
        <MenuButton icon={ArchiveIcon} title="Archív turnajov" subtitle={`${tournamentCount || 0} uložených turnajov`} onClick={onArchive} />
        <MenuButton icon={ScrollText}  title="Pravidlá hry"    subtitle="Bodovanie a kombinácie kociek"       onClick={onrules} />
        <MenuButton icon={Settings}    title="Nastavenia"      subtitle="Pravidlá, export, editácia archívu"  onClick={onSettings} />
      </div>

      <div className="text-center ks-muted text-xs pb-6 ks-mono">
        <Ornament />
        KOCKY · SVETA · KOCKY
      </div>
    </div>
  );
}

function MenuButton({ icon: Icon, title, subtitle, onClick, primary, disabled }) {
  return (
    <button onClick={onClick} disabled={disabled}
      className={`ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left ${primary ? 'border-amber-700/40' : ''} ${disabled ? 'opacity-40 cursor-not-allowed' : ''}`}>
      <div className={`w-12 h-12 rounded-sm flex items-center justify-center ${primary ? 'ks-gold-bg' : 'border border-amber-900/40'}`}>
        <Icon size={22} className={primary ? '' : 'ks-gold'} />
      </div>
      <div className="flex-1">
        <div className="ks-display ks-cream text-xl font-semibold">{title}</div>
        <div className="ks-muted text-sm">{subtitle}</div>
      </div>
      <ChevronRight className="ks-muted" size={20} />
    </button>
  );
}

// ─── Nastavenia (podmenu hlavného menu) ───────────────────────────────────

function SafeTournamentFallback({ title = 'Dáta sa nepodarilo načítať' }) {
  return <div className="min-h-screen flex items-center justify-center p-6 ks-cream"><div className="ks-card rounded-sm p-5 text-center max-w-md"><div className="ks-display text-2xl ks-gold mb-2">{title}</div><div className="ks-muted text-sm">Skús sa vrátiť späť alebo otvoriť turnaj znova.</div></div></div>;
}

function SettingsMenu({ onBack, onRulesEditor, onExport, onImport, onClearAll, onArchive, tournamentCount, selectedSkin, onSkinChange, tournamentViewMode, onTournamentViewModeChange, onViewModes, funnyWindowsDisplayMode, onFunnyWindowsDisplayModeChange }) {
  const fileInputRef = useRef(null);

  function handleFilePick(e) {
    const file = e.target.files?.[0];
    if (file && onImport) onImport(file);
    // Reset input aby sa dal vybrať ten istý súbor znova
    if (fileInputRef.current) fileInputRef.current.value = '';
  }

  return (
    <div className="min-h-screen ks-fade pb-8">
      <Header title="Nastavenia" onBack={onBack} />
      <div className="p-4 max-w-2xl mx-auto space-y-3">

        <div className="ks-mono ks-gold text-xs px-1 pt-3">PRAVIDLÁ A HODNOTY HRY</div>
        <button onClick={onViewModes}
          className="ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left">
          <div className="w-12 h-12 rounded-sm border border-amber-900/40 flex items-center justify-center">
            <Monitor size={22} className="ks-gold" />
          </div>
          <div className="flex-1">
            <div className="ks-display ks-cream text-xl font-semibold">Režim zobrazenia hry</div>
            <div className="ks-muted text-sm">{tournamentViewMode === 'observer' ? 'Pozorovateľ' : tournamentViewMode === 'recorder' ? 'Zapisovateľ' : 'Klasický'}</div>
          </div>
          <ChevronRight className="ks-muted" size={20} />
        </button>

        <div className="ks-card w-full p-4 rounded-sm">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 rounded-sm border border-amber-900/40 flex items-center justify-center">
              <Bell size={22} className="ks-gold" />
            </div>
            <div className="flex-1">
              <div className="ks-display ks-cream text-xl font-semibold">Štýl oznámení</div>
              <div className="ks-muted text-sm">Fullscreen funny okná, malé popupy alebo potlačený režim</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              ['standard','Štandardný'],
              ['simplified','Zjednodušený'],
              ['suppressed','Potlačený']
            ].map(([value,label]) => (
              <button key={value} onClick={() => onFunnyWindowsDisplayModeChange(value)}
                className={`ks-press px-3 py-2 rounded-sm text-sm ${funnyWindowsDisplayMode === value ? 'ks-gold-bg' : 'border border-amber-900/40 ks-card ks-cream'}`}>
                {label}
              </button>
            ))}
          </div>
        </div>

        <button onClick={onRulesEditor}
          className="ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left">
          <div className="w-12 h-12 rounded-sm border border-amber-900/40 flex items-center justify-center">
            <Settings size={22} className="ks-gold" />
          </div>
          <div className="flex-1">
            <div className="ks-display ks-cream text-xl font-semibold">Úprava pravidiel</div>
            <div className="ks-muted text-sm">Bodové kombinácie · cieľ · prvý zápis · koncovka · potvrdenie výhry · penalizácia</div>
          </div>
          <ChevronRight className="ks-muted" size={20} />
        </button>

        <div className="ks-mono ks-gold text-xs px-1 pt-3">SPRÁVA TURNAJOV</div>

        <button onClick={onExport} disabled={!tournamentCount}
          className={`ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left ${!tournamentCount ? 'opacity-40 cursor-not-allowed' : ''}`}>
          <div className="w-12 h-12 rounded-sm border border-amber-900/40 flex items-center justify-center">
            <FileSpreadsheet size={22} className="ks-gold" />
          </div>
          <div className="flex-1">
            <div className="ks-display ks-cream text-xl font-semibold">Export do Excelu</div>
            <div className="ks-muted text-sm">
              {tournamentCount > 0
                ? `${tournamentCount} turnajov · súbor .xlsx s listami`
                : 'Žiadne turnaje na export'}
            </div>
          </div>
          <Download className="ks-muted" size={20} />
        </button>

        <button onClick={() => fileInputRef.current?.click()}
          className="ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left">
          <div className="w-12 h-12 rounded-sm border border-amber-900/40 flex items-center justify-center">
            <Upload size={22} className="ks-gold" />
          </div>
          <div className="flex-1">
            <div className="ks-display ks-cream text-xl font-semibold">Import z Excelu</div>
            <div className="ks-muted text-sm">Pridá turnaje z .xlsx súboru do archívu</div>
          </div>
          <ChevronRight className="ks-muted" size={20} />
        </button>
        <input ref={fileInputRef} type="file"
          accept=".xlsx,.xls,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
          onChange={handleFilePick} className="hidden" />

        <button onClick={onArchive}
          className="ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left">
          <div className="w-12 h-12 rounded-sm border border-amber-900/40 flex items-center justify-center">
            <Edit3 size={22} className="ks-gold" />
          </div>
          <div className="flex-1">
            <div className="ks-display ks-cream text-xl font-semibold">Editácia archívu</div>
            <div className="ks-muted text-sm">Otvor turnaj a klepni „Upraviť" — body, víťaza, kolá</div>
          </div>
          <ChevronRight className="ks-muted" size={20} />
        </button>

        <div className="ks-mono text-red-400 text-xs px-1 pt-4 flex items-center gap-1.5">
          <AlertTriangle size={11} /> NEBEZPEČNÁ ZÓNA
        </div>

        <button onClick={onClearAll}
          className="ks-press w-full p-4 rounded-sm flex items-center gap-4 text-left border-2 border-red-900/50 bg-gradient-to-b from-red-950/40 to-stone-950/60 hover:brightness-125">
          <div className="w-12 h-12 rounded-sm border border-red-700/60 bg-red-950/50 flex items-center justify-center">
            <Trash2 size={22} className="text-red-300" />
          </div>
          <div className="flex-1">
            <div className="ks-display text-red-100 text-xl font-semibold">Vymazať všetky dáta</div>
            <div className="text-red-300/70 text-sm">Archív, rozohraná hra, pravidlá — nenávratná akcia</div>
          </div>
          <ChevronRight className="text-red-400" size={20} />
        </button>

        <div className="ks-card rounded-sm p-3 ks-body text-xs ks-muted italic mt-2 flex items-start gap-2">
          <AlertCircle size={14} className="ks-gold shrink-0 mt-0.5" />
          <div>
            Pred vymazaním dát si <strong className="ks-gold">vytvor zálohu</strong> cez Export do Excelu.
            Súbor neskôr môžeš obnoviť cez Import. Každý dohraný turnaj si pamätá dátum a čas začiatku aj konca.
          </div>
        </div>
      </div>
    </div>
  );
}

function GameViewModesScreen({ onBack, selectedMode, onChangeMode, selectedSkin }) {
  const options = [
    { id: 'basic', title: 'Klasický', desc: 'Tabuľka hore a zapisovanie bodov pod ňou.' },
    { id: 'observer', title: 'Pozorovateľ', desc: 'Veľký živý prehľad skóre pre obrazovku alebo TV.' },
    { id: 'recorder', title: 'Zapisovateľ', desc: 'Jednoduché veľké ovládanie pre rýchly zápis bodov.' },
  ];
  const skin = SKIN_PRESETS[selectedSkin] || SKIN_PRESETS.classic;

  return (
    <div className="min-h-screen ks-fade pb-8" style={{ background: skin.bg }}>
      <Header title="Zobrazenie hry" onBack={onBack} />
      <div className="p-4 max-w-2xl mx-auto space-y-3">
        {options.map((opt) => (
          <button key={opt.id} onClick={() => onChangeMode(opt.id)} className={`ks-card w-full p-4 rounded-sm text-left ks-press border ${selectedMode === opt.id ? 'border-amber-500/70 bg-amber-900/10' : 'border-amber-900/30'}`}>
            <div className="flex items-center gap-4">
              <div className="flex-1 min-w-0">
                <div className="ks-display ks-cream text-xl font-semibold">{opt.title}</div>
                <div className="ks-muted text-sm mt-1">{opt.desc}</div>
              </div>
              <div className="shrink-0 w-[62px]">
                <div className="h-[92px] rounded-sm border border-amber-900/25 overflow-hidden" style={{ background: skin.bg }}>
                  {opt.id === 'basic' ? (
                    <div style={{height:'100%', display:'grid', gridTemplateRows:'18px 28px 1fr', gap:'4px', padding:'5px'}}>
                      <div style={{borderRadius:'2px', background:'rgba(255,255,255,0.05)', border:'1px solid rgba(212,184,106,0.24)'}} />
                      <div style={{borderRadius:'2px', background:'rgba(212,184,106,0.18)', border:'1px solid rgba(212,184,106,0.22)'}} />
                      <div style={{display:'grid', gridTemplateRows:'1fr 1fr', gap:'4px'}}>
                        <div style={{borderRadius:'2px', background:'rgba(255,255,255,0.04)'}} />
                        <div style={{borderRadius:'2px', background:'rgba(212,184,106,0.78)'}} />
                      </div>
                    </div>
                  ) : opt.id === 'observer' ? (
                    <div style={{height:'100%', display:'grid', gridTemplateRows:'14px 1fr', gap:'4px', padding:'5px'}}>
                      <div style={{borderRadius:'2px', background:'rgba(212,184,106,0.18)', border:'1px solid rgba(212,184,106,0.2)'}} />
                      <div style={{display:'grid', gridTemplateColumns:'8px 1fr 1fr 1fr', gap:'3px'}}>
                        <div style={{display:'grid', gridTemplateRows:'repeat(4, 1fr)', gap:'3px'}}><div style={{borderRadius:'2px', background:'rgba(255,255,255,0.08)'}} /><div style={{borderRadius:'2px', background:'rgba(255,255,255,0.08)'}} /><div style={{borderRadius:'2px', background:'rgba(255,255,255,0.08)'}} /><div style={{borderRadius:'2px', background:'rgba(255,255,255,0.08)'}} /></div>
                        <div style={{display:'grid', gridTemplateRows:'repeat(4, 1fr)', gap:'3px'}}><div style={{borderRadius:'2px', background:'rgba(255,255,255,0.05)'}} /><div style={{borderRadius:'2px', background:'rgba(255,255,255,0.05)'}} /><div style={{borderRadius:'2px', background:'rgba(255,255,255,0.05)'}} /><div style={{borderRadius:'2px', background:'rgba(212,184,106,0.14)'}} /></div>
                        <div style={{display:'grid', gridTemplateRows:'repeat(4, 1fr)', gap:'3px'}}><div style={{borderRadius:'2px', background:'rgba(255,255,255,0.05)'}} /><div style={{borderRadius:'2px', background:'rgba(255,255,255,0.05)'}} /><div style={{borderRadius:'2px', background:'rgba(255,255,255,0.05)'}} /><div style={{borderRadius:'2px', background:'rgba(255,255,255,0.05)'}} /></div>
                        <div style={{display:'grid', gridTemplateRows:'repeat(4, 1fr)', gap:'3px'}}><div style={{borderRadius:'2px', background:'rgba(255,255,255,0.05)'}} /><div style={{borderRadius:'2px', background:'rgba(255,255,255,0.05)'}} /><div style={{borderRadius:'2px', background:'rgba(255,255,255,0.05)'}} /><div style={{borderRadius:'2px', background:'rgba(255,255,255,0.05)'}} /></div>
                      </div>
                    </div>
                  ) : (
                    <div style={{height:'100%', display:'grid', gridTemplateRows:'14px 22px 1fr 12px', gap:'4px', padding:'5px'}}>
                      <div style={{display:'grid', gridTemplateColumns:'1fr 18px', gap:'3px'}}>
                        <div style={{borderRadius:'2px', background:'rgba(255,255,255,0.05)'}} />
                        <div style={{borderRadius:'2px', background:'rgba(255,255,255,0.05)'}} />
                      </div>
                      <div style={{borderRadius:'2px', background:'rgba(212,184,106,0.18)', border:'1px solid rgba(212,184,106,0.22)'}} />
                      <div style={{display:'grid', gridTemplateRows:'1fr 1fr', gap:'4px'}}>
                        <div style={{borderRadius:'2px', background:'rgba(255,255,255,0.04)'}} />
                        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4px'}}><div style={{borderRadius:'2px', background:'rgba(255,255,255,0.04)'}} /><div style={{borderRadius:'2px', background:'rgba(212,184,106,0.78)'}} /></div>
                      </div>
                      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4px'}}>
                        <div style={{borderRadius:'2px', background:'rgba(255,255,255,0.06)'}} />
                        <div style={{borderRadius:'2px', background:'rgba(255,255,255,0.06)'}} />
                      </div>
                    </div>
                  )}
                </div>
                {selectedMode === opt.id ? <div className="ks-gold ks-mono text-[10px] text-right mt-1">AKTÍVNE</div> : <div className="h-[14px] mt-1" />}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Nový turnaj (s voľbou cieľa) ─────────────────────────────────────────

function NewTournament({ onBack, onStart }) {
  const [count, setCount] = useState(3);
  const [target, setTarget] = useState(10000);
  const [names, setNames] = useState(['', '', '', '', '', '']);

  const set = (i, v) => setNames(prev => prev.map((n, idx) => idx === i ? v : n));

  function handleStart() {
    const playerNames = names.slice(0, count).map((n, i) => n.trim() || `Hráč ${i + 1}`);
    onStart(playerNames, target);
  }

  return (
    <div className="min-h-screen ks-fade pb-8">
      <Header title="Nový turnaj" onBack={onBack} />

      <div className="p-5 max-w-md mx-auto space-y-6">
        <div>
          <div className="ks-mono ks-gold text-xs mb-3 flex items-center gap-2"><Target size={12} /> CIEĽ HRY</div>
          <div className="grid grid-cols-2 gap-2">
            {TARGET_OPTIONS.map(opt => (
              <button key={opt.value} onClick={() => setTarget(opt.value)}
                className={`ks-press py-3 px-3 rounded-sm text-left ${target === opt.value ? 'ks-gold-bg' : 'ks-card ks-cream'}`}>
                <div className="ks-display text-2xl font-semibold leading-tight">{opt.value.toLocaleString('sk-SK')}</div>
                <div className={`text-xs ${target === opt.value ? 'opacity-80' : 'ks-muted'}`}>{opt.label}</div>
              </button>
            ))}
          </div>
        </div>

        <Ornament />

        <div>
          <div className="ks-mono ks-gold text-xs mb-3">POČET HRÁČOV</div>
          <div className="grid grid-cols-5 gap-2">
            {[2,3,4,5,6].map(n => (
              <button key={n} onClick={() => setCount(n)}
                className={`ks-press py-3 rounded-sm ks-display text-2xl font-semibold ${count === n ? 'ks-gold-bg' : 'ks-card ks-cream'}`}>
                {n}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="ks-mono ks-gold text-xs mb-3">MENÁ HRÁČOV</div>
          <div className="space-y-2">
            {Array.from({ length: count }).map((_, i) => (
              <div key={i} className="ks-card flex items-center gap-3 p-2 rounded-sm">
                <div className="w-9 h-9 rounded-sm border border-amber-700/50 ks-gold ks-display flex items-center justify-center text-lg font-semibold">
                  {i + 1}
                </div>
                <input
                  value={names[i]}
                  onChange={(e) => set(i, e.target.value)}
                  placeholder={`Hráč ${i + 1}`}
                  maxLength={18}
                  className="flex-1 bg-transparent ks-cream ks-body text-lg outline-none placeholder:text-stone-600"
                />
              </div>
            ))}
          </div>
        </div>

        <GoldButton onClick={handleStart} icon={Play} className="w-full text-lg">
          Začať turnaj
        </GoldButton>
      </div>
    </div>
  );
}

// ─── Aktívny turnaj ───────────────────────────────────────────────────────

function PendingChips({ pending, removePending }) {
  return (
    <div className="flex flex-wrap gap-2">
      {pending.map((p, i) => (
        <button key={i} onClick={() => removePending(i)} className={`px-3 py-2 rounded-sm border ks-press ${p === 'dash' ? 'border-amber-700/50 ks-gold' : p < 0 ? 'border-red-800/60 text-red-300' : 'border-amber-900/40 ks-cream'}`}>
          {p === 'dash' ? '— Čiarka' : `${p > 0 ? '+' : ''}${Number(p).toLocaleString('sk-SK')}`}
        </button>
      ))}
    </div>
  );
}

// ─── isStrictMode — pravidlo r18 ako prepínač chovania ───────────────────
// Strict mode (r18 = "Nie", default):
//   • Akonáhle sa skončí kolo a aspoň jeden hráč má skóre >= target,
//     turnaj OKAMŽITE skončí. Žiadne ďalšie kolo, žiadny win-pending dialog.
//   • Pri viacerých achievers v rovnakom kole = remíza so všetkými.
// Klasický mode (r18 = "Áno"):
//   • Hráč ktorý dosiahol cieľ musí svoju výhru POTVRDIŤ ničnehodením (čiarkou)
//     v ďalšom ťahu. Ak nepotvrdí, môže ho niekto iný "zosadiť z trónu".
//   • Toto je tradičná pravidlo Kocky.
function isStrictMode(rules) {
  const r18 = (rules || []).find(r => r.id === 'r18');
  // Default = Nie (strict). r18 = "Áno" znamená klasický flow s potvrdzovaním.
  return !r18 || r18.selected !== 'Áno';
}

// ─── computeTotals — single source of truth pre súčty ────────────────────
// Súčet bodov pre každého hráča naprieč všetkými kolami. Null/'dash'/string
// hodnoty sa rátajú ako 0 (nie ako "neukončené kolo"). Penalizácie (záporné
// čísla) sa odpočítavajú normálne.
function computeTotals(rounds, playersCount) {
  return new Array(playersCount).fill(0).map((_, pIdx) => {
    let sum = 0;
    for (const round of (Array.isArray(rounds) ? rounds : [])) {
      const v = round?.[pIdx];
      if (typeof v === 'number' && Number.isFinite(v)) sum += v;
    }
    return sum;
  });
}

// ─── computeWinners — autoritatívne určenie víťazov ──────────────────────
// Používa sa AKO single source of truth pre:
//   • hlavičku VÍŤAZI (winnerCelebration)
//   • finálnu tabuľku v archíve
//   • finishTournament checksum validáciu
//
// Logika (v poradí priority):
//   1) Identifikuj všetkých hráčov ktorí dosiahli >= target (achievers).
//   2) Ak r18 (Režim potvrdenia víťazstva) === 'Áno':
//        → kandidáti na víťazstvo sú confirmed achievers v _confirmedDetailed
//        → vyber tých s najskorším confirmedRound (kolom)
//        → v rámci toho istého kola: VŠETCI sú víťazmi (= remíza)
//          (timestamp confirmedAt sa NEpoužíva ako tiebreak — kolo je
//           dostatočná granularita, hra nie je tak detailná aby
//           ms-presné timestampy mali zmysel ako rozhodca)
//        → ak ostali achievers ktorí ešte nepotvrdili → valid=false,
//          turnaj sa nemá uzatvoriť (treba im dať šancu potvrdiť v ďalšom kole)
//      Ak r18 === 'Nie':
//        → víťazom je každý achiever ktorý dosiahol cieľ v najskoršom kole
//   3) Validácia: každý víťaz musí mať totals[idx] >= target.
//      Ak nie → vyhodí error so zoznamom diskrepancií.
//
// Vstup:
//   tournament: { players, rounds, targetScore, _confirmedDetailed?, winCandidates?, rules? }
// Návrat:
//   { winners: number[], totals: number[], achievers: number[],
//     isDraw: boolean, valid: boolean, errors: string[], reason: string,
//     pendingAchievers: number[] }
function computeWinners(tournament) {
  const players = tournament?.players || [];
  const rounds = tournament?.rounds || [];
  const target = tournament?.targetScore || 10000;
  const totals = computeTotals(rounds, players.length);

  // 1) Všetci hráči ktorí dosiahli alebo prekročili cieľ
  const achievers = totals
    .map((t, idx) => ({ idx, total: t }))
    .filter(x => x.total >= target)
    .map(x => x.idx);

  // 2) Vyhodnotenie potvrdenia
  const r18 = (tournament.rules || []).find(r => r.id === 'r18');
  const requiresConfirmation = !r18 || r18.selected !== 'Nie'; // default Áno
  const confirmed = Array.isArray(tournament._confirmedDetailed) ? tournament._confirmedDetailed : [];

  // Fallback pre importované/archívne turnaje (status='finished') bez _confirmedDetailed:
  // Ak klasický mód vyžaduje potvrdenie ale žiadne nie je uložené, vyhodnoť
  // víťaza podľa totals (strict-mode detekcia). Zabraňuje NEZHODA banneru
  // pri legitimných importovaných výsledkoch.
  const isFinishedWithoutConfirm =
    tournament.status === 'finished' &&
    requiresConfirmation &&
    confirmed.length === 0 &&
    achievers.length > 0;
  const useStrictDetection = !requiresConfirmation || isFinishedWithoutConfirm;

  if (achievers.length === 0) {
    return {
      winners: [],
      totals,
      achievers: [],
      pendingAchievers: [],
      isDraw: false,
      valid: true,
      errors: [],
      reason: 'Žiadny hráč ešte nedosiahol cieľ.',
    };
  }

  let winners = [];
  let reason = '';
  let pendingAchievers = [];

  if (useStrictDetection) {
    // r18 = Nie (alebo fallback pre finished bez confirm): víťazom je prvý achiever
    // kole. V rámci toho istého kola = remíza so všetkými.
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
    // r18 = Áno: vyhodnocujeme z _confirmedDetailed.
    const confirmedAchievers = confirmed.filter(c => achievers.includes(c.player));
    pendingAchievers = achievers.filter(a => !confirmedAchievers.some(c => c.player === a));

    if (confirmedAchievers.length === 0) {
      // Achievers existujú ale nikto nebol potvrdený → turnaj nie je hotový.
      return {
        winners: [],
        totals,
        achievers,
        pendingAchievers,
        isDraw: false,
        valid: false,
        errors: [`Turnaj sa nedá uzatvoriť — ${achievers.length} hráč(ov) dosiahlo cieľ, no žiadny ešte nepotvrdil výhru.`],
        reason: `${achievers.length} hráč(ov) dosiahlo cieľ, ale ešte nepotvrdil(i) výhru.`,
      };
    }

    // Prvotne identifikujme víťazov z confirmed v najskoršom kole.
    const minRound = Math.min(...confirmedAchievers.map(c => c.round));
    const earliest = confirmedAchievers.filter(c => c.round === minRound);
    winners = earliest.map(c => c.player);

    // Ak ostali nepotvrdení achievers, turnaj NIE JE pripravený na uzatvorenie.
    // Aj keď máme nejakých confirmed víťazov, nepotvrdení musia ešte dostať šancu.
    if (pendingAchievers.length > 0) {
      return {
        winners: [],  // zatiaľ žiadny — čaká sa
        totals,
        achievers,
        pendingAchievers,
        isDraw: false,
        valid: false,
        errors: [`Turnaj sa nedá uzatvoriť — ${pendingAchievers.length} hráč(ov) ešte nepotvrdil(i) výhru.`],
        reason: `${pendingAchievers.length} hráč(ov) má dosiahnutý cieľ ale ešte nepotvrdil(i) výhru.`,
      };
    }

    reason = winners.length === 1
      ? `Víťazstvo potvrdené najskôr v kole ${minRound + 1}.`
      : `${winners.length} hráči potvrdili víťazstvo v rovnakom kole (${minRound + 1}). Remíza.`;
  }

  // 3) Validácia: každý víťaz musí mať totals[idx] >= target
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
  // Ak validácia zlyhá, považujeme winners za neplatných.
  const valid = errors.length === 0;

  return {
    winners: valid ? winners : [],
    totals,
    achievers,
    pendingAchievers,
    isDraw: valid && winners.length > 1,
    valid,
    errors,
    reason,
  };
}

// ─── useFunnyQueue ────────────────────────────────────────────────────────
// Queue pre funny popupy s nasledujúcou logikou:
//   • aktívny popup vidí používateľ aspoň POPUP_CONFIG.POPUP_DISPLAY_DURATION ms
//     pred tým, než ho môže vystriedať ďalší — ochrana proti "preblikávaniu",
//     ktoré bolo pôvodný bug (každý nový setFunny() prepísal predchádzajúci).
//   • čakajúca pozícia má kapacitu POPUP_CONFIG.QUEUE_SIZE (default 1).
//     Newer-wins: ak príde ďalší kým niečo už čaká, nový prepíše čakajúceho.
//   • dismiss() ukončí aktívny popup okamžite (klik kdekoľvek na overlay).
//   • clear() zhodí všetko (volá sa pri odchode z turnaja, modal blokoch).
function useFunnyQueue() {
  const [active, setActive] = useState(null);
  const queueRef = useRef([]);             // čakajúce položky (max QUEUE_SIZE)
  const lockUntilRef = useRef(0);          // timestamp kedy môže prísť ďalší
  const timerRef = useRef(null);
  const minDuration = POPUP_CONFIG.POPUP_DISPLAY_DURATION;
  const maxQueue = POPUP_CONFIG.QUEUE_SIZE;

  function clearTimer() {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }

  function popNext() {
    clearTimer();
    if (queueRef.current.length === 0) {
      setActive(null);
      return;
    }
    const next = queueRef.current.shift();
    lockUntilRef.current = Date.now() + minDuration;
    setActive(next);
    timerRef.current = setTimeout(popNext, next.duration ?? minDuration);
  }

  function enqueue(data) {
    if (!data) return;
    if (!active) {
      // Nikto nečaká — zobraz hneď.
      lockUntilRef.current = Date.now() + minDuration;
      setActive(data);
      clearTimer();
      timerRef.current = setTimeout(popNext, data.duration ?? minDuration);
      return;
    }
    // Aktívny existuje — zaraď do queue (newer-wins ak je plná).
    if (queueRef.current.length >= maxQueue) {
      queueRef.current[queueRef.current.length - 1] = data;
    } else {
      queueRef.current.push(data);
    }
  }

  function dismiss() {
    // Klik na popup — ukonči aktívny popup okamžite, ale rešpektuj minDuration
    // tak, že ďalší v queue čaká kým neuplynie min čas. V praxi (>2s lock):
    //   - ak používateľ klikol PO uplynutí 2s → ďalší sa zobrazí hneď
    //   - ak klikol PRED 2s → aktívny zmizne, ale next čaká do uplynutia
    clearTimer();
    const now = Date.now();
    const remaining = Math.max(0, lockUntilRef.current - now);
    setActive(null);
    if (queueRef.current.length > 0) {
      timerRef.current = setTimeout(popNext, remaining);
    }
  }

  function clear() {
    queueRef.current = [];
    clearTimer();
    setActive(null);
    lockUntilRef.current = 0;
  }

  // Cleanup pri unmounte
  useEffect(() => clearTimer, []);

  return { active, enqueue, dismiss, clear };
}

function TournamentScreen({ tournament, rules, onUpdate, onFinish, onAbort, onMenu, scoreDisplayMode, onToggleScoreMode, selectedSkin, onSkinChange, tournamentViewMode = 'basic', funnyWindowsDisplayMode = 'standard' }) {
  const target = tournament.targetScore || 10000;
  const minWO = tournament.minWriteOff || 300;
  const { players, rounds, currentPlayer, currentRound } = tournament;

  const [pending, setPending] = useState([]);
  const [customInput, setCustomInput] = useState('');
  const [showrules, setShowrules] = useState(false);
  const [showStandings, setShowStandings] = useState(false);
  const [toast, setToast] = useState(null);
  const funnyQueue = useFunnyQueue();
  const funny = funnyQueue.active;
  const [showWinPendingPopup, setShowWinPendingPopup] = useState(false);
  const [pendingWinScore, setPendingWinScore] = useState(null);
  const [pendingWinMeta, setPendingWinMeta] = useState(null);
  const [showTemporaryKingPopup, setShowTemporaryKingPopup] = useState(false);
  const [temporaryKingToken, setTemporaryKingToken] = useState(null);
  const [deferTemporaryKingUntilWinPopupCloses, setDeferTemporaryKingUntilWinPopupCloses] = useState(false);
  const [winnerCelebration, setWinnerCelebration] = useState(null);
  // Počítadlo funny hlášok per hráč (max 3 za turnaj). Index = playerIdx, hodnota = count.
  const funnyCountRef = useRef(players.map(() => 0));
  // Sledovanie ktorému hráčovi sa už pri nástupe do koncovky ukázalo "veľké" oznámenie
  const endgameNoticedRef = useRef(new Set());
  // Popup pre potvrdenie víťazstva už ukázaný (kľúč = playerIdx, aby sa neukazoval opakovane v rovnakom ťahu)
  const winPopupShownRef = useRef(new Set());

  const totals = useMemo(
    () => computeTotals(rounds, players.length),
    [rounds, players.length]);

  const hasFirstWrite = useMemo(() =>
    players.map((_, pIdx) => rounds.some(r => typeof r[pIdx] === 'number' && r[pIdx] >= 0)),
    [players, rounds]);

  const total = totals[currentPlayer];
  const isFirstWrite = !hasFirstWrite[currentPlayer];
  const isEndgame = total >= target - minWO && total < target;
  // V strict režime sa winPending ignoruje aj keby ho mal turnaj z archívu nastavený
  // (napr. z predchádzajúcej hry v klasickom režime). Tým sa zabráni „zaseknutiu"
  // pri pokračovaní v starom rozohranom turnaji po prepnutí r18 na "Nie".
  const strictMode = isStrictMode(rules);
  const winPendingPlayer = strictMode ? null : tournament.winPending;
  const isWinPendingTurn = winPendingPlayer === currentPlayer && winPendingPlayer !== null;
  const exactNeeded = target - total;
  const isLastPlayerInRound = currentPlayer === players.length - 1;

  const pendingSum = pending.reduce((a, b) => a + (typeof b === 'number' ? b : 0), 0);
  const newTotal = total + pendingSum;

  function showToast(msg, kind = 'info') {
    setToast({ msg, kind });
    setTimeout(() => setToast(null), 3500);
  }

  function showFunny(customMsg, opts = {}) {
    const data = customMsg
      ? (typeof customMsg === 'string' ? { msg: customMsg, emoji: '🎲', variant: 'fight' } : customMsg)
      : FUNNY_MESSAGES[Math.floor(Math.random() * FUNNY_MESSAGES.length)];

    // Suppressed režim: žiadne funny windows. Iba ak je explicitne forceFullscreen
    // (víťazstvo, win-pending) prejdeme ďalej.
    if (funnyWindowsDisplayMode === 'suppressed' && !opts.forceFullscreen) return;

    // Simplified režim: namiesto fullscreen FunnyOverlay-ov ukážeme krátky toast.
    // Stále rešpektujeme min 2s zobrazenie cez vlastný setTimeout — toast má
    // jednoduchšiu logiku ako queue, ale aspoň nepreblikne pod ďalším.
    if (funnyWindowsDisplayMode === 'simplified' && !opts.forceFullscreen) {
      const dur = opts.duration ?? Math.max(POPUP_CONFIG.POPUP_DISPLAY_DURATION, 2600);
      setToast({ msg: data.msg, kind: 'info' });
      setTimeout(() => setToast(null), dur);
      return;
    }

    // Standard režim: cez queue. Duration môže byť explicitne dlhší ako default;
    // queue garantuje, že prvý zostane aspoň POPUP_DISPLAY_DURATION ms.
    funnyQueue.enqueue({ ...data, duration: opts.duration ?? 3500 });
  }

  // Náhodné funny popupy (max 3 za turnaj na hráča)
  function maybeFunny() {
    if (pendingSum <= 0 || pendingSum >= 500) return;
    if (funnyCountRef.current[currentPlayer] >= 3) return; // limit dosiahnutý

    const max = Math.max(...totals);
    const min = Math.min(...totals);
    // Hráč zaostáva o aspoň 1500 oproti najlepšiemu (alebo je posledný a aspoň jeden má 1000+)
    const isFarBehind = total < max - 1500;
    const isLastWithGap = total === min && totals.some(t => t > total + 800);

    if ((isFarBehind || isLastWithGap) && Math.random() < 0.55) {
      funnyCountRef.current[currentPlayer]++;
      showFunny();
    }
  }

  function addPoints(v) {
    if (!Number.isFinite(v) || v === 0) return;
    if (isWinPendingTurn) {
      // Pri win-pending stavu len čiarka, žiadne body ani penalizácia
      showToast('Musíš potvrdiť ničnehodením (čiarka)!', 'warn');
      return;
    }
    // Ak je v pendingu čiarka alebo penalizácia, vymaž ich (špeciálne sa nedajú miešať)
    if (pending.some(p => p === 'dash' || p === PENALTY_VALUE)) {
      setPending([v]);
      return;
    }
    setPending(prev => [...prev, v]);
  }

  function addDash() {
    // Čiarka vždy nahradí celý pending
    if (pending.length === 1 && pending[0] === 'dash') return; // už tam je
    setPending(['dash']);
  }

  function addPenalty() {
    if (isWinPendingTurn) {
      showToast('Musíš potvrdiť ničnehodením (čiarka)!', 'warn');
      return;
    }
    // Penalizácia vždy nahradí celý pending
    if (pending.length === 1 && pending[0] === PENALTY_VALUE) return; // už tam je
    setPending([PENALTY_VALUE]);
  }

  function removePending(idx) { setPending(prev => prev.filter((_, i) => i !== idx)); }
  function clearPending() { setPending([]); }

  function commitPoints() {
    if (pending.length === 0) return;

    // Čiarka v pendingu
    if (pending[0] === 'dash') {
      if (isWinPendingTurn) {
        if (pendingWinScore !== null && pendingWinMeta?.player === currentPlayer) {
          advance(pendingWinScore, { confirmWin: true, confirmedRound: pendingWinMeta?.round ?? currentRound, confirmedPlayer: currentPlayer });
          setPendingWinScore(null);
          setPendingWinMeta(null);
          return;
        }
        advance('dash', { confirmWin: true, confirmedRound: currentRound, confirmedPlayer: currentPlayer });
        return;
      }
      advance('dash');
      return;
    }

    if (isWinPendingTurn) {
      if (pendingSum === 0 && pendingWinScore !== null && pendingWinMeta?.player === currentPlayer) {
        advance(pendingWinScore, { confirmWin: true, confirmedRound: pendingWinMeta?.round ?? currentRound, confirmedPlayer: currentPlayer });
        setPendingWinScore(null);
        setPendingWinMeta(null);
        return;
      }
      showToast('Musíš potvrdiť ničnehodením (čiarka)!', 'warn');
      return;
    }

    // Penalizácia (-1000) sama, alebo s nulovým súčtom
    if (pending.some(p => p < 0)) {
      if (pending.length > 1 || pending[0] !== PENALTY_VALUE) {
        showToast('Penalizácia −1 000 sa nedá kombinovať s inými bodmi.', 'warn');
        return;
      }
      advance(PENALTY_VALUE);
      return;
    }

    // ─── KONCOVKA: hráč už je nad target-minWO, musí trafiť presný zostatok ──
    // Toto je jediný prípad kedy je povolený zápis pod minWO (300) — keď
    // chýba do cieľa menej ako 300 bodov. Hráč musí trafiť presne `exactNeeded`.
    if (isEndgame) {
      if (pendingSum === exactNeeded) {
        // Strict mode (r18=Nie): okamžitý zápis bez potvrdenia. Hráč sa pridá
        // do _confirmedDetailed automaticky, na konci kola sa hra uzavrie.
        if (strictMode) {
          maybeFunny();
          if (!isLastPlayerInRound) {
            showToast(`${players[currentPlayer]} dosiahol cieľ ${target.toLocaleString('sk-SK')}! Kolo sa dohrá a hra skončí.`, 'info');
          }
          advance(pendingSum, {
            addCandidate: currentPlayer,
            autoConfirm: true,
            confirmedRound: currentRound,
            confirmedPlayer: currentPlayer,
          });
          return;
        }
        // Klasický mode (r18=Áno): win-pending popup
        setPendingWinScore(pendingSum);
        setPendingWinMeta({ player: currentPlayer, round: currentRound });
        setShowWinPendingPopup(true);
        if (!isLastPlayerInRound) {
          setTemporaryKingToken(`${currentPlayer}-${currentRound}-${pendingSum}-endgame`);
          setDeferTemporaryKingUntilWinPopupCloses(true);
        }
        return;
      }
      // Čokoľvek iné v koncovke = automatická čiarka
      showToast(`Koncovka — treba presne ${exactNeeded} bodov. Automatická čiarka!`, 'overshoot');
      advance('dash');
      return;
    }

    // Mimo koncovky: každý zápis musí byť aspoň minimálny odpis (300)
    if (pendingSum > 0 && pendingSum < minWO) {
      showToast(`Každý zápis musí byť aspoň ${minWO} bodov, alebo daj čiarku.`, 'warn');
      return;
    }

    // Prekročenie cieľa = automatická čiarka
    if (newTotal > target) {
      showToast(`Prekročenie ${target.toLocaleString('sk-SK')} – automatická čiarka!`, 'overshoot');
      advance('dash');
      return;
    }

    // Presný zásah cieľa mimo koncovky
    if (newTotal === target) {
      maybeFunny();
      // Strict mode: žiadny "dočasný kráľ" popup, žiadne potvrdzovanie.
      // Pridá hráča do _confirmedDetailed cez autoConfirm flag.
      if (strictMode) {
        if (!isLastPlayerInRound) {
          showToast(`${players[currentPlayer]} dosiahol cieľ ${target.toLocaleString('sk-SK')}! Kolo sa dohrá a hra skončí.`, 'info');
        }
        advance(pendingSum, {
          addCandidate: currentPlayer,
          autoConfirm: true,
          confirmedRound: currentRound,
          confirmedPlayer: currentPlayer,
        });
        return;
      }
      // Klasický mode: pôvodný flow s "dočasným kráľom"
      if (isLastPlayerInRound) {
        // Posledný v kole → vyhráva automaticky, žiadny popup (nie je kto zosadiť)
        maybeFunny();
        advance(pendingSum, {
          addCandidate: currentPlayer,
          autoConfirm: true,
          confirmedRound: currentRound,
          confirmedPlayer: currentPlayer,
        });
        return;
      }
      // Nie je posledný → Dočasný kráľ, čaká na koniec kola
      setTemporaryKingToken(`${currentPlayer}-${currentRound}-${pendingSum}`);
      setShowTemporaryKingPopup(true);
      advance(pendingSum, { addCandidate: currentPlayer });
      return;
    }

    // Zápis vstupuje do koncovky (newTotal medzi target-minWO a target):
    // POVOLENÝ ako bežný zápis, koncovka sa rieši v ďalšom ťahu
    maybeFunny();
    advance(pendingSum);
  }

  function commitDash() {
    if (isWinPendingTurn) {
      if (pendingWinScore !== null && pendingWinMeta?.player === currentPlayer) {
        advance(pendingWinScore, { confirmWin: true, confirmedRound: pendingWinMeta?.round ?? currentRound, confirmedPlayer: currentPlayer });
        setPendingWinScore(null);
        setPendingWinMeta(null);
        return;
      }
      advance('dash', { confirmWin: true, confirmedRound: currentRound, confirmedPlayer: currentPlayer });
      return;
    }
    advance('dash');
  }

  function advance(value, opts = {}) {
    onUpdate(prev => {
      const newRounds = prev.rounds.map(r => [...r]);
      while (newRounds.length <= prev.currentRound) {
        newRounds.push(new Array(prev.players.length).fill(null));
      }
      newRounds[prev.currentRound][prev.currentPlayer] = value;

      let winner = prev.winner;
      let winPending = prev.winPending;
      let winCandidates = [...(prev.winCandidates || [])];
      let winRoundComplete = prev.winRoundComplete;

      // Kandidát na potvrdenie ničnehodením len pri zásahu z koncovky 9700+
      if (opts.confirmCandidate !== undefined) {
        if (!winCandidates.includes(opts.confirmCandidate)) {
          winCandidates.push(opts.confirmCandidate);
        }
        winPending = opts.confirmCandidate;
      }

      // Pridanie kandidáta ktorý práve dosiahol cieľ
      if (opts.addCandidate !== undefined) {
        if (!winCandidates.includes(opts.addCandidate)) {
          winCandidates.push(opts.addCandidate);
        }
      }

      // STRICT MODE — autoConfirm: zapíš hráča do _confirmedDetailed bez
      // toho aby musel prejsť cez win-pending flow. Spája sa s addCandidate
      // pri presnom zásahu cieľa (mimo aj v koncovke). Pokračuje normálnym
      // advance flow — víťaz sa určí na konci kola cez computeWinners.
      let autoConfirmedDetailed = prev._confirmedDetailed;
      if (opts.autoConfirm) {
        const entry = {
          player: opts.confirmedPlayer ?? prev.currentPlayer,
          round: opts.confirmedRound ?? prev.currentRound,
          confirmedAt: Date.now(),
        };
        autoConfirmedDetailed = Array.isArray(prev._confirmedDetailed)
          ? [...prev._confirmedDetailed.filter(x => !(x.player === entry.player && x.round === entry.round)), entry]
          : [entry];
      }

      // Hráč potvrdil víťazstvo (dokončenie winPending flowu)
      if (opts.confirmWin) {
        const confirmedEntry = {
          player: opts.confirmedPlayer ?? prev.currentPlayer,
          round: opts.confirmedRound ?? prev.currentRound,
          // Timestamp pre tiebreak — ak viacero hráčov potvrdí v rovnakom kole,
          // skorší confirmedAt vyhráva. Pri rovnakom timestamp = skutočná remíza.
          confirmedAt: Date.now(),
        };
        const confirmedSoFar = Array.isArray(prev._confirmedDetailed)
          ? [...prev._confirmedDetailed.filter(x => !(x.player === confirmedEntry.player && x.round === confirmedEntry.round)), confirmedEntry]
          : [confirmedEntry];
        const nextPlayer = (prev.currentPlayer + 1) % prev.players.length;
        const roundEnded = nextPlayer === 0;
        const nextRound = prev.currentRound + (roundEnded ? 1 : 0);
        winPending = null;

        if (roundEnded) {
          // Použijeme single-source-of-truth helper. Ten zahrnie aj kandidátov
          // ktorí dosiahli cieľ ale ešte nepotvrdili — podľa r18 mode.
          const provisional = {
            ...prev,
            rounds: newRounds,
            _confirmedDetailed: confirmedSoFar,
            winCandidates,
            rules: prev.rules,
          };
          const result = computeWinners(provisional);
          // valid=false znamená že ostali pending kandidáti — neuzatvárame turnaj.
          // Ale keďže sme práve dokončili kolo a ďalší kandidáti by sa mali
          // potvrdiť v ďalšom kole, ponecháme winner=null a winPending zostane null.
          winner = result.valid && result.winners.length > 0 ? (result.winners.length === 1 ? result.winners[0] : result.winners) : null;
          return {
            ...prev,
            rounds: newRounds,
            currentPlayer: nextPlayer,
            currentRound: nextRound,
            winner,
            winPending,
            winCandidates,
            winRoundComplete: winner !== null,
            _confirmedDetailed: confirmedSoFar,
          };
        }

        return {
          ...prev,
          rounds: newRounds,
          currentPlayer: nextPlayer,
          currentRound: nextRound,
          winner,
          winPending,
          winCandidates,
          winRoundComplete,
          _confirmedDetailed: confirmedSoFar,
        };
      }

      // Hráč potvrdenie odmietol (vyskočil popup s "Nepotvrdil")
      if (opts.retryWin || opts.declineWin) {
        // Hráč zlyhal — dostane čiarku, zostáva kandidátom, skúsi znova
        const _np = (prev.currentPlayer + 1) % prev.players.length;
        const _re = _np === 0;
        winPending = prev.currentPlayer;
        return {
          ...prev,
          rounds: newRounds,
          currentPlayer: _re ? winPending : _np,
          currentRound: prev.currentRound + (_re ? 1 : 0),
          winner,
          winPending,
          winCandidates,
          winRoundComplete,
        };
      }
      if (opts.__declineWin_removed) {
        winCandidates = winCandidates.filter(c => c !== prev.currentPlayer);
        // Ak ostali iní kandidáti, ďalší v poradí potvrdzuje
        winPending = winCandidates.length > 0 ? winCandidates[0] : null;
        // Ak nezostal nikto a hra skončila — žiadny víťaz, hra pokračuje normálne
        return {
          ...prev,
          rounds: newRounds,
          ...(winPending !== null ? { currentPlayer: winPending } : {}),
          winner,
          winPending,
          winCandidates,
        };
      }

      // Bežný advance: prejdeme na ďalšieho hráča
      const nextPlayer = (prev.currentPlayer + 1) % prev.players.length;
      const roundEnded = nextPlayer === 0;
      const nextRound = prev.currentRound + (roundEnded ? 1 : 0);

      // ─── Vyhodnotenie kandidátov na konci kola — cez computeWinners ───
      if (roundEnded) {
        const provisional = {
          ...prev,
          rounds: newRounds,
          _confirmedDetailed: autoConfirmedDetailed,
          winCandidates,
          rules: prev.rules,
        };
        const result = computeWinners(provisional);

        // Pri r18=Áno: ak ostali achievers ktorí ešte nepotvrdili → result.valid=false.
        // V tom prípade NEVYBERAME víťaza, ale presunieme winPending na prvého
        // nepotvrdeného achievera, aby dostal šancu potvrdiť v ďalšom kole.
        if (!result.valid && result.achievers.length > 0) {
          const unconfirmedAchievers = result.achievers.filter(
            a => !((autoConfirmedDetailed || []).some(c => c.player === a))
          );
          if (unconfirmedAchievers.length > 0) {
            winPending = unconfirmedAchievers[0];
            winRoundComplete = true;
            return {
              ...prev,
              rounds: newRounds,
              currentPlayer: winPending,
              currentRound: nextRound,
              winner: null,
              winPending,
              winCandidates,
              winRoundComplete,
              _confirmedDetailed: autoConfirmedDetailed,
            };
          }
        }

        if (result.winners.length > 0) {
          winner = result.winners.length === 1 ? result.winners[0] : result.winners;
          winRoundComplete = true;
          return {
            ...prev,
            rounds: newRounds,
            // Strict mode: hra OKAMŽITE končí, žiadne ďalšie kolo. currentRound
            // ponecháme na aktuálnom (lebo nextRound by ukazoval na neexistujúce
            // 8. kolo). UI sa cez winner !== null prepne do finished režimu.
            currentPlayer: nextPlayer,
            currentRound: prev.currentRound,
            winner,
            winPending: null,
            winCandidates,
            winRoundComplete,
            _confirmedDetailed: autoConfirmedDetailed,
          };
        }
      }

      return {
        ...prev,
        rounds: newRounds,
        currentPlayer: (roundEnded && winPending !== null) ? winPending : nextPlayer,
        currentRound: nextRound,
        winner,
        winPending,
        winCandidates,
        winRoundComplete,
        _confirmedDetailed: autoConfirmedDetailed,
      };
    });
    setPending([]);
    setCustomInput('');
  }

  useEffect(() => {
    if (tournament.winner !== null && tournament.winner !== undefined) {
      funnyQueue.clear();
      setToast(null);
      const winnerArr = Array.isArray(tournament.winner) ? tournament.winner : [tournament.winner];
      setWinnerCelebration({ winnerArr, isDraw: winnerArr.length > 1 });
      const id = setTimeout(() => {
        setWinnerCelebration(null);
        onFinish(tournament.winner);
      }, 2200);
      return () => clearTimeout(id);
    }
  }, [tournament.winner]);

  // ─── Auto-popup pri nástupe hráča do koncovky ───────────────────────
  // Ak hráč príde na ťah a už je v zóne nad target-minWO (ale ešte nedosiahol cieľ),
  // a ešte mu túto správu túto hru neukázalo, zobraz veľkú hlášku.
  useEffect(() => {
    if (!isEndgame) return;
    const key = `${currentPlayer}_${currentRound}`;
    if (endgameNoticedRef.current.has(key)) return;
    endgameNoticedRef.current.add(key);

    // Krátka pauza aby sa najprv dokreslila obrazovka
    const t = setTimeout(() => {
      showFunny({
        msg: `Hoď presne ${exactNeeded}! V koncovke potom treba potvrdenie. 😝`,
        emoji: '👀',
        variant: 'fight',
      }, { duration: 4500 });
    }, 400);
    return () => clearTimeout(t);
  }, [currentPlayer, currentRound, isEndgame, isWinPendingTurn, exactNeeded]);

  // Popup sa spúšťa priamo z commitPoints keď hráč dosiahne cieľ — žiadny ďalší useEffect.

  const isObserverMode = tournamentViewMode === 'observer';
  const isRecorderMode = tournamentViewMode === 'recorder';
  const blockFollowupPopups = showTemporaryKingPopup && temporaryKingToken !== null;

  useEffect(() => {
    if (!(showTemporaryKingPopup && temporaryKingToken !== null)) return;
    const t = setTimeout(() => {
      setShowTemporaryKingPopup(false);
      setTemporaryKingToken(null);
      setDeferTemporaryKingUntilWinPopupCloses(false);
    }, 1700);
    return () => clearTimeout(t);
  }, [showTemporaryKingPopup, temporaryKingToken]);

  function addCustom() {
    const n = parseInt(customInput, 10);
    if (!Number.isFinite(n) || n === 0) return;
    if (n % 50 !== 0) {
      showToast('Hodnota musí byť násobok 50 (50, 100, 150…)', 'warn');
      return;
    }
    addPoints(n);
    setCustomInput('');
  }

  if (!tournament || !Array.isArray(tournament.players) || !Array.isArray(tournament.rounds)) return <SafeTournamentFallback />;
  return (
    <div className={`min-h-screen ks-fade ${isRecorderMode ? 'pb-6' : 'pb-32'}`} style={{ background: (SKIN_PRESETS[selectedSkin] || SKIN_PRESETS.classic).bg }}>
      {!isRecorderMode && (
        <Header
          title={`Turnaj · do ${target.toLocaleString('sk-SK')}`}
          onBack={onMenu}
          right={
            <div className="flex items-center gap-2">
              <button
                onClick={onToggleScoreMode}
                className="ks-press ks-gold p-1.5 rounded-sm border border-amber-700/40 hover:bg-amber-900/20"
                title={scoreDisplayMode === 'delta' ? 'Prepnúť na kumulatívne' : 'Prepnúť na prípisy'}
              >
                {scoreDisplayMode === 'delta'
                  ? <Sigma size={16} />
                  : <Layers size={16} />}
              </button>
              <button onClick={onAbort} className="ks-press text-red-300 px-2 py-1 text-xs ks-mono">ZRUŠIŤ</button>
            </div>
          }
        />
      )}

      {isObserverMode ? (
        <div className="px-2 pt-1 pb-3 h-[100dvh] flex flex-col">
          <div className="flex-1 min-h-0 ks-card rounded-sm p-1 overflow-hidden">
            <div className="h-full overflow-auto [font-size:clamp(18px,2.3vw,34px)]">
              <ScoreTable tournament={tournament} totals={totals} highlightPlayer={currentPlayer}
                          pendingPreview={pendingSum > 0 ? pendingSum : 0} target={target}
                          displayMode={scoreDisplayMode} onToggleMode={onToggleScoreMode} hideModeToolbar={false} compactObserver={true} />
            </div>
          </div>
        </div>
      ) : isRecorderMode ? (
        <div className="min-h-[100dvh] flex flex-col px-3 pt-[max(10px,env(safe-area-inset-top))] pb-[max(10px,env(safe-area-inset-bottom))]">
          <div className="flex items-center justify-between gap-2 mb-2">
            <button onClick={onMenu} className="ks-press ks-cream flex items-center gap-1 px-2 py-1"><ChevronLeft size={20} /><span className="ks-body">Späť</span></button>
            <div className="ks-display ks-gold text-lg text-center">{players[currentPlayer]}</div>
            <button onClick={onAbort} className="ks-press ks-card px-3 py-2 rounded-sm ks-mono text-xs text-red-300">ZRUŠIŤ</button>
          </div>
          <div className="ks-card-prom rounded-sm p-4 mb-2">
            <div className="flex items-baseline justify-between mb-2">
              <div className="ks-mono ks-gold text-xs">NA ŤAHU · KOLO {currentRound + 1}</div>
              <div className="ks-mono ks-muted text-xs">CIEĽ {target.toLocaleString('sk-SK')}</div>
            </div>
            <div className="flex items-end justify-between gap-3 mb-1">
              <div className="flex-1 min-w-0">
                <div className="ks-mono ks-muted text-[10px] mb-0.5">HRÁČ</div>
                <div className="ks-display text-4xl ks-cream font-bold leading-tight truncate">{players[currentPlayer]}</div>
              </div>
              <div className="text-right shrink-0">
                <div className="ks-mono ks-muted text-[10px] mb-0.5">AKTUÁLNE SKÓRE</div>
                <div className={`ks-display text-5xl font-bold leading-none ${total < 0 ? 'text-red-300' : 'ks-gold'}`} style={{ textShadow: total >= 0 ? '0 2px 12px rgba(212,184,106,0.3)' : 'none' }}>
                  {total.toLocaleString('sk-SK')}
                </div>
              </div>
            </div>
          </div>
          <div className="ks-card-prom rounded-sm p-4 mb-2">
            <div className="flex items-center justify-between mb-3">
              <div className="ks-mono ks-gold text-xs">PRÁVE PRIPISUJEŠ</div>
              <div className="flex items-baseline gap-2">
                {pending.length > 0 && pending[0] !== 'dash' && Number.isFinite(newTotal) && (
                  <span className="ks-muted text-xl ks-mono leading-none">→ {newTotal.toLocaleString('sk-SK')}</span>
                )}
                {pending[0] === 'dash' ? (
                  <div className="ks-display text-6xl font-bold ks-muted">—</div>
                ) : (
                  <div className={`ks-display text-6xl font-bold ${pendingSum < 0 ? 'text-red-300' : 'ks-gold'}`}>
                    {pendingSum > 0 ? '+' : ''}{pendingSum.toLocaleString('sk-SK')}
                  </div>
                )}
              </div>
            </div>
            {pending.length > 0 ? (
              <div className="flex flex-wrap gap-2 mb-3">
                {pending.map((p, i) => (
                  <button key={i} onClick={() => removePending(i)} className={`ks-press group flex items-center gap-1.5 px-3 py-1.5 rounded-sm border ${p === 'dash' ? 'border-stone-600/60 bg-stone-800/40 ks-muted' : p < 0 ? 'border-red-800/60 bg-red-950/40 text-red-200' : 'border-amber-700/50 bg-stone-900/70 ks-cream'}`}>
                    <span className="ks-display font-semibold">{p === 'dash' ? '— čiarka' : (p > 0 ? `+${p}` : p)}</span>
                    <X size={14} className="opacity-60 group-hover:opacity-100" />
                  </button>
                ))}
              </div>
            ) : (
              <div className="ks-muted text-sm italic mb-3 py-2 text-center border border-dashed border-amber-900/30 rounded-sm">Pridaj body alebo čiarku z hodu nižšie…</div>
            )}
            <GoldButton onClick={commitPoints} disabled={pending.length === 0} icon={Check} className="w-full text-lg">Zapísať</GoldButton>
          </div>
          <div className="ks-card-sub rounded-sm p-4 flex-1">
            <div className="ks-mono ks-muted text-xs mb-3">PRIDAJ BODY Z HODU</div>
            <div className="grid grid-cols-3 gap-2 mb-3">
              {QUICK_VALUES.map(v => (
                <button key={v} onClick={() => addPoints(v)} className="ks-press border border-amber-900/30 bg-stone-950/40 hover:bg-stone-900/60 py-2.5 rounded-sm ks-display ks-cream text-lg font-semibold">+{v}</button>
              ))}
            </div>
            <div className="flex gap-2 mb-3">
              <input type="number" value={customInput} onChange={(e) => setCustomInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && addCustom()} placeholder="Vlastná hodnota" className="flex-1 bg-stone-950/60 border border-amber-900/40 rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700" />
              <GoldButton onClick={addCustom} icon={Plus} variant="outline">Pridaj</GoldButton>
            </div>
            <div className="ks-divider my-3" />
            <div className="grid grid-cols-2 gap-2">
              <button onClick={addDash} className="ks-press p-3 rounded-sm border-2 border-stone-600/50 bg-gradient-to-b from-stone-900/60 to-stone-950/80 hover:brightness-125 flex items-center justify-center gap-2"><Minus size={20} className="ks-muted" /><span className="ks-mono ks-cream font-semibold">ČIARKA</span></button>
              <button onClick={addPenalty} className="ks-press p-3 rounded-sm border-2 border-red-900/60 bg-gradient-to-b from-red-950/60 to-stone-950/60 hover:brightness-125 flex items-center justify-center gap-2"><Skull size={20} className="text-red-300" /><span className="ks-mono text-red-200 font-semibold">−1 000</span></button>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              <GoldButton onClick={() => setShowStandings(true)} icon={TrendingUp} variant="ghost">Priebeh hry</GoldButton>
              <GoldButton onClick={() => setShowrules(true)} icon={ScrollText} variant="ghost">Pravidlá</GoldButton>
            </div>
          </div>
        </div>
      ) : (
      <>
      <div className="px-3 pt-3">
        <ScoreTable tournament={tournament} totals={totals} highlightPlayer={currentPlayer}
                    pendingPreview={pendingSum > 0 ? pendingSum : 0} target={target}
                    displayMode={scoreDisplayMode} onToggleMode={onToggleScoreMode} hideModeToolbar={true} />
      </div>

      <div className="px-4 mt-4">
        <div className="ks-card-prom rounded-sm p-4">
          <div className="flex items-baseline justify-between mb-2">
            <div className="ks-mono ks-gold text-xs">NA ŤAHU · KOLO {currentRound + 1}</div>
            <div className="ks-mono ks-muted text-xs">CIEĽ {target.toLocaleString('sk-SK')}</div>
          </div>
          <div className="flex items-end justify-between gap-3 mb-1">
            <div className="flex-1 min-w-0">
              <div className="ks-mono ks-muted text-[10px] mb-0.5">HRÁČ</div>
              <div className="ks-display text-4xl ks-cream font-bold leading-tight truncate">
                {players[currentPlayer]}
              </div>
            </div>
            <div className="text-right shrink-0">
              <div className="ks-mono ks-muted text-[10px] mb-0.5">AKTUÁLNE SKÓRE</div>
              <div className={`ks-display text-5xl font-bold leading-none ${total < 0 ? 'text-red-300' : 'ks-gold'}`}
                   style={{ textShadow: total >= 0 ? '0 2px 12px rgba(212,184,106,0.3)' : 'none' }}>
                {total.toLocaleString('sk-SK')}
              </div>
            </div>
          </div>

          <div className="mt-3 space-y-1.5">
            {isEndgame && (
              <StatusBanner kind="warn" icon={Target}>
                <strong>Koncovka!</strong> Treba presne <strong>{exactNeeded}</strong> bodov.
              </StatusBanner>
            )}
          </div>
        </div>
      </div>

      {/* PROMINENTNÁ KARTA — pripisované body + commit */}
      <div className="px-4 mt-4">
            <div className="ks-card-prom rounded-sm p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="ks-mono ks-gold text-xs">PRÁVE PRIPISUJEŠ</div>
                <div className="flex items-baseline gap-2">
                  {pending.length > 0 && pending[0] !== 'dash' && Number.isFinite(newTotal) && (
                    <span className="ks-muted text-xl ks-mono leading-none">→ {newTotal.toLocaleString('sk-SK')}</span>
                  )}
                  {pending[0] === 'dash' ? (
                    <div className="ks-display text-6xl font-bold ks-muted">—</div>
                  ) : (
                    <div className={`ks-display text-6xl font-bold ${pendingSum < 0 ? 'text-red-300' : 'ks-gold'}`}>
                      {pendingSum > 0 ? '+' : ''}{pendingSum.toLocaleString('sk-SK')}
                    </div>
                  )}
                </div>
              </div>

              {pending.length > 0 ? (
                <div className="flex flex-wrap gap-2 mb-3">
                  {pending.map((p, i) => (
                    <button key={i} onClick={() => removePending(i)}
                      className={`ks-press group flex items-center gap-1.5 px-3 py-1.5 rounded-sm border
                        ${p === 'dash' ? 'border-stone-600/60 bg-stone-800/40 ks-muted' :
                          p < 0 ? 'border-red-800/60 bg-red-950/40 text-red-200' :
                          'border-amber-700/50 bg-stone-900/70 ks-cream'}`}>
                      <span className="ks-display font-semibold">
                        {p === 'dash' ? '— čiarka' : (p > 0 ? `+${p}` : p)}
                      </span>
                      <X size={14} className="opacity-60 group-hover:opacity-100" />
                    </button>
                  ))}
                  {pending.length > 1 && (
                    <button onClick={clearPending} className="ks-press px-3 py-1.5 rounded-sm text-red-300 text-xs ks-mono">
                      VYMAZAŤ VŠETKO
                    </button>
                  )}
                </div>
              ) : (
                <div className="ks-muted text-sm italic mb-3 py-2 text-center border border-dashed border-amber-900/30 rounded-sm">
                  Pridaj body alebo čiarku z hodu nižšie…
                </div>
              )}

              <GoldButton onClick={commitPoints} disabled={pending.length === 0} icon={Check} className="w-full text-lg">
                Zapísať
              </GoldButton>
            </div>
          </div>

          {/* SUBTÍLNA KARTA — predvolené hodnoty */}
          <div className="px-4 mt-4">
            <div className="ks-card-sub rounded-sm p-4">
              <div className="ks-mono ks-muted text-xs mb-3">PRIDAJ BODY Z HODU</div>

              <div className="grid grid-cols-3 gap-2 mb-3">
                {QUICK_VALUES.map(v => (
                  <button key={v} onClick={() => addPoints(v)}
                    className="ks-press border border-amber-900/30 bg-stone-950/40 hover:bg-stone-900/60 py-2.5 rounded-sm ks-display ks-cream text-lg font-semibold">
                    +{v}
                  </button>
                ))}
              </div>

              <div className="flex gap-2 mb-3">
                <input type="number" value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && addCustom()}
                  placeholder="Vlastná hodnota"
                  className="flex-1 bg-stone-950/60 border border-amber-900/40 rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700"
                />
                <GoldButton onClick={addCustom} icon={Plus} variant="outline">Pridaj</GoldButton>
              </div>

              <div className="ks-divider my-3" />

              {/* Špeciálne tlačidlá: Čiarka + Penalizácia */}
              <div className="grid grid-cols-2 gap-2">
                <button onClick={addDash}
                  className="ks-press p-3 rounded-sm border-2 border-stone-600/50 bg-gradient-to-b from-stone-900/60 to-stone-950/80 hover:brightness-125 flex items-center justify-center gap-2">
                  <Minus size={20} className="ks-muted" />
                  <span className="ks-mono ks-cream font-semibold">ČIARKA</span>
                </button>
                <button onClick={addPenalty}
                  className="ks-press p-3 rounded-sm border-2 border-red-900/60 bg-gradient-to-b from-red-950/60 to-stone-950/60 hover:brightness-125 flex items-center justify-center gap-2">
                  <Skull size={20} className="text-red-300" />
                  <span className="ks-mono text-red-200 font-semibold">−1 000</span>
                </button>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-1">
                <div className="ks-muted text-[10px] italic text-center">Hod bez zápisu (— pomlčka)</div>
                <div className="ks-muted text-[10px] italic text-center">Nič nehodené (penalizácia)</div>
              </div>
            </div>
          </div>

      <div className="px-4 mt-4 grid grid-cols-2 gap-2">
        <GoldButton onClick={() => setShowStandings(true)} icon={TrendingUp} variant="ghost">Priebeh hry</GoldButton>
        <GoldButton onClick={() => setShowrules(true)} icon={ScrollText} variant="ghost">Pravidlá</GoldButton>
      </div>
      </>
      )}

      {toast && <Toast {...toast} onClose={() => setToast(null)} />}
      {!blockFollowupPopups && funny && funnyWindowsDisplayMode === 'standard' && (
        <FunnyOverlay data={funny} onClose={funnyQueue.dismiss} />
      )}

      {showStandings && (
        <Modal onClose={() => setShowStandings(false)} title="Priebeh hry">
          <ProgressChart tournament={tournament} totals={totals} target={target} />
        </Modal>
      )}
      {showrules && (
        <Modal onClose={() => setShowrules(false)} title="Pravidlá hry">
          <RulesContent rules={rules} compact />
        </Modal>
      )}

      {/* DOČASNÝ KRÁĽ — varianta podľa režimu */}
      {blockFollowupPopups && funnyWindowsDisplayMode === 'standard' && (
        <FunnyOverlay
          data={{
            // emoji nahradíme špeciálnym placeholderom; FunnyOverlay vie že
            // 'strikethrough-crown' znamená SVG namiesto unicode emoji.
            msg: 'Dočasný kráľ! Neteš sa predčasne, ešte ťa môžu zosadiť z trónu.',
            emoji: 'strikethrough-crown',
            variant: 'fight'
          }}
          onClose={() => {
            setShowTemporaryKingPopup(false);
            setTemporaryKingToken(null);
            setDeferTemporaryKingUntilWinPopupCloses(false);
          }}
        />
      )}
      {blockFollowupPopups && funnyWindowsDisplayMode === 'simplified' && (
        <SimplifiedResult
          kind="temporary-king"
          title="Dočasný kráľ"
          subtitle="Neteš sa predčasne, ešte ťa môžu zosadiť z trónu."
          actionLabel="KLIKNI PRE ZATVORENIE"
          onClose={() => {
            setShowTemporaryKingPopup(false);
            setTemporaryKingToken(null);
            setDeferTemporaryKingUntilWinPopupCloses(false);
          }}
        />
      )}
      {blockFollowupPopups && funnyWindowsDisplayMode === 'suppressed' && (
        <SimplifiedResult
          kind="temporary-king"
          title="Dočasný kráľ"
          subtitle="Neteš sa predčasne, ešte ťa môžu zosadiť z trónu."
          actionLabel="KLIKNI PRE ZATVORENIE"
          onClose={() => {
            setShowTemporaryKingPopup(false);
            setTemporaryKingToken(null);
            setDeferTemporaryKingUntilWinPopupCloses(false);
          }}
        />
      )}

      {/* VÍŤAZSTVO / REMÍZA — celoobrazovkové, nezávisle na queue */}
      {winnerCelebration && funnyWindowsDisplayMode === 'standard' && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-6 ks-overlay-bg" style={{ background: 'radial-gradient(circle at center, rgba(120,80,40,0.95), rgba(14,12,10,0.98))' }}>
          <div className="ks-funny relative z-10 text-center max-w-md">
            <div className="text-7xl mb-3 ks-funny-emoji">{winnerCelebration.isDraw ? '👑👑' : '👑'}</div>
            <div className="ks-mono ks-gold text-xs mb-3 tracking-widest">
              {winnerCelebration.isDraw
                ? `REMÍZA — ${winnerCelebration.winnerArr.length} VÍŤAZI`
                : 'VÍŤAZ'}
            </div>
            <div className="ks-display text-4xl font-bold ks-cream leading-tight px-2 mb-2">
              {winnerCelebration.isDraw ? 'Víťazi' : 'Víťaz'}
            </div>
            <div className="ks-body ks-cream text-base mb-1 leading-snug">
              {winnerCelebration.winnerArr.map(idx =>
                `${players[idx]} (${(totals[idx] || 0).toLocaleString('sk-SK')})`
              ).join(', ')}
            </div>
          </div>
        </div>
      )}
      {winnerCelebration && funnyWindowsDisplayMode === 'simplified' && (
        <SimplifiedResult
          kind={winnerCelebration.isDraw ? 'draw' : 'victory'}
          title={winnerCelebration.isDraw
            ? `Víťazi (${winnerCelebration.winnerArr.length})`
            : 'Víťaz'}
          subtitle={winnerCelebration.winnerArr.map(idx =>
            `${players[idx]} (${(totals[idx] || 0).toLocaleString('sk-SK')})`
          ).join(', ')}
          onClose={() => {}}
        />
      )}
      {winnerCelebration && funnyWindowsDisplayMode === 'suppressed' && (
        <SimplifiedResult
          kind={winnerCelebration.isDraw ? 'draw' : 'victory'}
          title={winnerCelebration.isDraw
            ? `Víťazi (${winnerCelebration.winnerArr.length})`
            : 'Víťaz'}
          subtitle={winnerCelebration.winnerArr.map(idx =>
            `${players[idx]} (${(totals[idx] || 0).toLocaleString('sk-SK')})`
          ).join(', ')}
          onClose={() => {}}
        />
      )}

      {/* WIN-PENDING POPUP */}
      {!blockFollowupPopups && showWinPendingPopup && funnyWindowsDisplayMode === 'standard' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-6 ks-overlay-bg"
             style={{ background: 'radial-gradient(circle at center, rgba(120,80,40,0.95), rgba(14,12,10,0.98))' }}>
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full ks-funny-orb"
                 style={{ background: 'radial-gradient(circle, rgba(212,184,106,0.5), transparent 70%)' }} />
            <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full ks-funny-orb"
                 style={{ background: 'radial-gradient(circle, rgba(212,184,106,0.5), transparent 70%)', animationDelay: '1s' }} />
          </div>
          <div className="ks-funny relative z-10 text-center max-w-sm">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="h-px flex-1 max-w-[60px]" style={{ background: 'linear-gradient(90deg, transparent, #d4b86a)' }} />
              <Crown size={16} className="ks-gold" />
              <div className="h-px flex-1 max-w-[60px]" style={{ background: 'linear-gradient(90deg, #d4b86a, transparent)' }} />
            </div>
            <div className="text-7xl mb-3 ks-funny-emoji" style={{ filter: 'drop-shadow(0 4px 16px rgba(212,184,106,0.6))' }}>
              😝
            </div>
            <div className="ks-mono ks-gold text-xs mb-3 tracking-widest">🎯 DOSIAHOL {target.toLocaleString('sk-SK')} — POTVRD VÝHRU</div>
            <div className="ks-display text-4xl font-bold ks-cream leading-tight px-2 mb-2"
                 style={{ textShadow: '0 4px 24px rgba(212,184,106,0.4), 0 0 40px rgba(212,184,106,0.4)' }}>
              {players[currentPlayer]}
            </div>
            <div className="ks-body ks-cream text-base mb-5 leading-snug">
              Hráč <em className="ks-gold">{players[currentPlayer]}</em> dosiahol cieľ!<br/>Skupina potvrdzuje výhru — bola hra čistá?
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  const shouldShowDeferredKing = deferTemporaryKingUntilWinPopupCloses && temporaryKingToken !== null;
                  setShowWinPendingPopup(false);
                  if (shouldShowDeferredKing) setShowTemporaryKingPopup(true);
                  if (pendingWinScore !== null && pendingWinMeta?.player === currentPlayer) {
                    advance(pendingWinScore, { confirmWin: true, confirmedRound: pendingWinMeta?.round ?? currentRound, confirmedPlayer: currentPlayer });
                    setPendingWinScore(null);
                    setPendingWinMeta(null);
                  } else {
                    advance('dash', { confirmWin: true, confirmedRound: currentRound, confirmedPlayer: currentPlayer });
                  }
                }}
                className="ks-press py-4 px-3 rounded-sm border-2 border-amber-700/60 bg-gradient-to-b from-amber-900/40 to-amber-950/40 hover:brightness-125">
                <Crown size={20} className="ks-gold mx-auto mb-1" />
                <div className="ks-display ks-gold text-base font-bold">✓ Potvrdil</div>
                <div className="ks-muted text-[10px] ks-mono mt-0.5">VÝHRA POTVRDENÁ</div>
              </button>
              <button
                onClick={() => {
                  setPendingWinScore(null);
                  setPendingWinMeta(null);
                  setShowWinPendingPopup(false);
                  setDeferTemporaryKingUntilWinPopupCloses(false);
                  setTemporaryKingToken(null);
                  advance('dash');
                }}
                className="ks-press py-4 px-3 rounded-sm border-2 border-red-900/50 bg-gradient-to-b from-red-950/40 to-stone-950/40 hover:brightness-125">
                <X size={20} className="text-red-300 mx-auto mb-1" />
                <div className="ks-display text-red-200 text-base font-bold">Nepotvrdil</div>
                <div className="text-red-300/60 text-[10px] ks-mono mt-0.5">VÝHRA NEPOTVRDENÁ</div>
              </button>
            </div>
          </div>
        </div>
      )}
      {/* WIN-PENDING POPUP — zjednodušený / potlačený: karta bez click-outside */}
      {!blockFollowupPopups && showWinPendingPopup && (funnyWindowsDisplayMode === 'simplified' || funnyWindowsDisplayMode === 'suppressed') && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4"
             style={{ background: 'rgba(10,8,6,0.92)' }}>
          {/* intentionally NO onClick on backdrop — user must click a button */}
          <div className="ks-card max-w-sm w-full rounded-sm border-2 p-5 text-center shadow-2xl"
               style={{ borderColor: '#d4b86a' }}>
            <div className="flex justify-center mb-3">
              <Crown size={48} className="ks-gold" style={{ filter: 'drop-shadow(0 4px 16px rgba(212,184,106,0.5))' }} />
            </div>
            <div className="ks-mono ks-gold text-xs tracking-widest mb-2">POTVRD VÝHRU</div>
            <div className="ks-display text-2xl font-bold ks-cream leading-tight px-2 mb-1">
              {players[currentPlayer]}
            </div>
            <div className="ks-body ks-cream text-sm opacity-90 leading-snug mb-5">
              Hráč <em className="ks-gold">{players[currentPlayer]}</em> dosiahol <strong>{target.toLocaleString('sk-SK')}</strong>.<br/>
              Potvrďte, že v overovom hode nič nepadlo.
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  const shouldShowDeferredKing = deferTemporaryKingUntilWinPopupCloses && temporaryKingToken !== null;
                  setShowWinPendingPopup(false);
                  if (shouldShowDeferredKing) setShowTemporaryKingPopup(true);
                  if (pendingWinScore !== null && pendingWinMeta?.player === currentPlayer) {
                    advance(pendingWinScore, { confirmWin: true, confirmedRound: pendingWinMeta?.round ?? currentRound, confirmedPlayer: currentPlayer });
                    setPendingWinScore(null);
                    setPendingWinMeta(null);
                  } else {
                    advance('dash', { confirmWin: true, confirmedRound: currentRound, confirmedPlayer: currentPlayer });
                  }
                }}
                className="ks-press py-3 px-2 rounded-sm border-2 border-amber-700/60 bg-gradient-to-b from-amber-900/40 to-amber-950/40 hover:brightness-125">
                <div className="ks-display ks-gold text-base font-bold">✓ Potvrdil</div>
              </button>
              <button
                onClick={() => {
                  setPendingWinScore(null);
                  setPendingWinMeta(null);
                  setShowWinPendingPopup(false);
                  setDeferTemporaryKingUntilWinPopupCloses(false);
                  setTemporaryKingToken(null);
                  advance('dash');
                }}
                className="ks-press py-3 px-2 rounded-sm border-2 border-red-900/50 bg-gradient-to-b from-red-950/40 to-stone-950/40 hover:brightness-125">
                <div className="ks-display text-red-200 text-base font-bold">✗ Nepotvrdil</div>
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Toolbar s prepínačom módu — skrytý ak je tlačidlo už v Headeri */}
      {onToggleMode && !hideModeToolbar && (
        <div className={`flex items-center justify-between border-b border-amber-900/30 bg-stone-950/60 ${compactObserver ? 'px-3 py-1' : 'px-3 py-1.5'}`}>
          <div className={`ks-display ks-gold text-center flex-1 ${compactObserver ? 'text-xs' : 'text-sm'}`}>POZOROVATEĽ · ŽIVÝ PREHĽAD SKÓRE</div>
          <button onClick={onToggleMode} className={`ks-press ks-mono ks-gold flex items-center gap-1 rounded-sm hover:bg-amber-900/20 ${compactObserver ? 'text-[10px] px-2 py-0.5' : 'text-[10px] px-2 py-0.5'}`}>
            <RotateCcw size={10} />
            {displayMode === 'delta' ? 'Σ' : 'Δ'}
          </button>
        </div>
      )}
      <div className="overflow-x-auto ks-live-table-wrap">
        <table className="w-full border-collapse ks-live-table" style={{ tableLayout: 'fixed', minWidth: `${36 + Math.max(players.length, 1) * Math.max(80, 300 / Math.max(players.length, 1))}px` }}>
          <colgroup>
            <col style={{ width: 36 }} />
            {players.map((_, i) => (
              <col key={i} style={{ width: `${100 / (players.length + 0.15)}%`, minWidth: `${Math.max(80, 300 / Math.max(players.length, 1))}px` }} />
            ))}
          </colgroup>
          <thead>
            <tr className="border-b border-amber-900/40">
              <th className="ks-mono ks-muted text-xs font-normal py-3 px-2 text-center sticky left-0 backdrop-blur" style={{ width: 36, background: 'var(--ks-sticky-bg, rgba(14,12,10,0.97))' }}>K</th>
              {players.map((p, i) => (
                <th key={i}
                    className={`ks-display py-2 px-1 text-sm font-semibold text-center whitespace-nowrap overflow-hidden text-ellipsis ${i === highlightPlayer ? 'ks-gold' : 'ks-cream'}`}>
                  {p}
                </th>
              ))}
            </tr>
          </thead>
          <tbody ref={tableRef}>
            {Array.from({ length: numRounds }).map((_, rIdx) => (
              <tr key={rIdx} className="border-b border-amber-900/15 ks-live-row">
                <td className="ks-mono ks-muted text-xs py-1.5 px-2 text-center sticky left-0" style={{ background: 'var(--ks-sticky-bg, rgba(14,12,10,0.97))' }}>{rIdx + 1}</td>
                {players.map((_, pIdx) => {
                  const raw = rounds[rIdx]?.[pIdx];
                  const cum = cumulative[rIdx]?.[pIdx];
                  const value = displayMode === 'cumulative' ? cum : raw;
                  const isCurrent = pIdx === highlightPlayer && rIdx === tournament.currentRound;
                  return (
                    <td key={pIdx}
                        className={`text-center py-1.5 px-1 ks-display text-base align-middle ${isCurrent ? 'bg-amber-900/20' : ''}`}>
                      {value === 'dash' && <span className="ks-muted">—</span>}
                      {typeof value === 'number' && (
                        <span className={`font-medium ${value < 0 ? 'text-red-300' : 'ks-cream'}`}>
                          {value.toLocaleString('sk-SK')}
                        </span>
                      )}
                      {(value === null || value === undefined) && (
                        isCurrent && pendingPreview > 0
                          ? <span className="ks-gold italic opacity-70">+{pendingPreview}</span>
                          : <span className="ks-muted">·</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t-2 border-amber-700/50">
              <td className="ks-mono ks-gold text-xs py-2 px-2 text-center sticky left-0" style={{ background: 'var(--ks-sticky-bg2, rgba(10,8,6,0.98))' }}>Σ</td>
              {totals.map((t, i) => {
                const reached = target && t >= target;
                return (
                  <td key={i}
                      className={`text-center py-2 px-2 ks-display text-lg font-bold ${
                        t < 0 ? 'text-red-300' : reached ? 'ks-gold' : i === highlightPlayer ? 'ks-gold' : 'ks-cream'
                      }`}>
                    {t.toLocaleString('sk-SK')}
                  </td>
                );
              })}
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

// ─── Modal + tabuľka poradia ──────────────────────────────────────────────

function Modal({ children, onClose, title }) {
  return (
    <div className="fixed inset-0 z-40 flex items-end sm:items-center justify-center p-0 sm:p-4"
         style={{ background: 'rgba(0,0,0,0.7)' }} onClick={onClose}>
      <div className="ks-card w-full max-w-lg max-h-[85vh] flex flex-col rounded-t-lg sm:rounded-sm ks-fade"
           onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between p-4 border-b border-amber-900/30">
          <h3 className="ks-display ks-gold text-xl font-semibold">{title}</h3>
          <button onClick={onClose} className="ks-press ks-cream p-1"><X size={22} /></button>
        </div>
        <div className="flex-1 overflow-y-auto p-4" style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-y" }}>{children}</div>
      </div>
    </div>
  );
}

function Standings({ players, totals, target }) {
  const ranked = players
    .map((name, i) => ({ name, total: totals[i], i }))
    .sort((a, b) => b.total - a.total);

  return (
    <div className="space-y-2">
      {ranked.map((p, idx) => {
        const pct = target ? Math.min(100, Math.max(0, (p.total / target) * 100)) : 0;
        return (
          <div key={p.i} className="flex items-center gap-3 p-3 rounded-sm border border-amber-900/30">
            <div className={`w-10 h-10 rounded-sm flex items-center justify-center ks-display text-xl font-bold
              ${idx === 0 ? 'ks-gold-bg' : 'border border-amber-900/40 ks-gold'}`}>
              {idx + 1}
            </div>
            <div className="flex-1 min-w-0">
              <div className="ks-display ks-cream text-lg font-semibold truncate">{p.name}</div>
              {target && (
                <div className="h-1 bg-stone-900 rounded-full overflow-hidden mt-1">
                  <div className="h-full ks-gold-bg" style={{ width: `${pct}%` }} />
                </div>
              )}
            </div>
            <div className={`ks-display text-2xl font-bold ${p.total < 0 ? 'text-red-300' : 'ks-gold'}`}>
              {p.total.toLocaleString('sk-SK')}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Pravidlá ─────────────────────────────────────────────────────────────

// ─── Graf priebehu hry ────────────────────────────────────────────────────

const PLAYER_COLORS = ['#d4b86a', '#e08854', '#7ba88a', '#c47880', '#80a8c4', '#b89580'];

function ProgressChart({ tournament, totals, target }) {
  const { players, rounds } = tournament;

  // Dáta pre graf — kumulatívne skóre po každom kole, vrátane 0 na začiatku
  const data = useMemo(() => {
    const series = [];
    const cumulative = players.map(() => 0);
    series.push({ kolo: 0, ...players.reduce((acc, p, i) => ({ ...acc, [`p${i}`]: 0 }), {}) });
    rounds.forEach((round, rIdx) => {
      round.forEach((v, pIdx) => {
        if (typeof v === 'number') cumulative[pIdx] += v;
        // 'dash' alebo null = nezmena
      });
      const point = { kolo: rIdx + 1 };
      players.forEach((_, i) => { point[`p${i}`] = cumulative[i]; });
      series.push(point);
    });
    return series;
  }, [players, rounds]);

  // Aktuálne poradie pre legendu (zoradené podľa skóre)
  const ranked = players
    .map((name, i) => ({ name, total: totals[i], i, color: PLAYER_COLORS[i % PLAYER_COLORS.length] }))
    .sort((a, b) => b.total - a.total);

  const yMax = Math.max(target, ...totals) + 200;
  const yMin = Math.min(0, ...totals) - 100;

  // Zaobaľený tooltip v štýle aplikácie
  const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload || !payload.length) return null;
    return (
      <div className="ks-card rounded-sm p-2.5" style={{ background: 'rgba(20,16,12,0.97)' }}>
        <div className="ks-mono ks-gold text-xs mb-1.5">KOLO {label}</div>
        <div className="space-y-0.5">
          {payload
            .slice()
            .sort((a, b) => b.value - a.value)
            .map((entry) => {
              const idx = parseInt(entry.dataKey.slice(1), 10);
              return (
                <div key={entry.dataKey} className="flex items-center gap-2 text-xs ks-body">
                  <span style={{ width: 10, height: 2, background: entry.color, display: 'inline-block' }} />
                  <span className="ks-cream flex-1">{players[idx]}</span>
                  <span className="ks-display ks-gold font-semibold">{entry.value.toLocaleString('sk-SK')}</span>
                </div>
              );
            })}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-4">
      {/* Legenda hráčov s aktuálnym skóre */}
      <div className="grid grid-cols-2 gap-1.5">
        {ranked.map((p, idx) => {
          const pct = target ? Math.min(100, Math.max(0, (p.total / target) * 100)) : 0;
          return (
            <div key={p.i} className="flex items-center gap-2 p-2 rounded-sm border border-amber-900/25 bg-stone-950/30">
              <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: p.color }} />
              <div className="ks-display ks-cream text-sm font-semibold truncate flex-1">
                {idx === 0 && p.total > 0 && <Crown size={11} className="ks-gold inline mr-1 -mt-0.5" />}
                {p.name}
              </div>
              <div className={`ks-display text-sm font-bold ${p.total < 0 ? 'text-red-300' : 'ks-gold'}`}>
                {p.total.toLocaleString('sk-SK')}
              </div>
            </div>
          );
        })}
      </div>

      {/* Graf */}
      <div className="ks-card rounded-sm p-3" style={{ height: 320 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 16, right: 12, left: -10, bottom: 4 }}>
            <CartesianGrid strokeDasharray="2 4" stroke="rgba(201,168,92,0.12)" />
            <XAxis
              dataKey="kolo"
              stroke="#a89679"
              tick={{ fontSize: 10, fill: '#a89679' }}
              tickLine={{ stroke: 'rgba(201,168,92,0.3)' }}
              axisLine={{ stroke: 'rgba(201,168,92,0.3)' }}
              label={{ value: 'Kolo', position: 'insideBottom', offset: -2, fill: '#a89679', fontSize: 10 }}
            />
            <YAxis
              stroke="#a89679"
              tick={{ fontSize: 10, fill: '#a89679' }}
              tickLine={{ stroke: 'rgba(201,168,92,0.3)' }}
              axisLine={{ stroke: 'rgba(201,168,92,0.3)' }}
              domain={[yMin, yMax]}
              tickFormatter={(v) => v >= 1000 ? `${(v/1000).toFixed(v % 1000 === 0 ? 0 : 1)}k` : v}
            />
            <Tooltip content={<CustomTooltip />} />
            <ReferenceLine
              y={target}
              stroke="#d4b86a"
              strokeDasharray="4 4"
              strokeWidth={1.5}
              label={{ value: `Cieľ ${target.toLocaleString('sk-SK')}`, fill: '#d4b86a', fontSize: 10, position: 'insideTopRight' }}
            />
            <ReferenceLine y={0} stroke="rgba(201,168,92,0.2)" />
            {players.map((_, i) => (
              <Line
                key={i}
                type="monotone"
                dataKey={`p${i}`}
                stroke={PLAYER_COLORS[i % PLAYER_COLORS.length]}
                strokeWidth={2}
                dot={{ r: 2.5, strokeWidth: 0 }}
                activeDot={{ r: 5, strokeWidth: 2, stroke: '#0e0c0a' }}
                isAnimationActive={false}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>

      {data.length <= 1 && (
        <div className="ks-muted text-xs italic text-center">
          Graf sa naplní po prvom kole.
        </div>
      )}
    </div>
  );
}

function RulesView({ rules, onBack }) {
  // Získať aktuálne hodnoty pre popis
  const minWO     = Number(rules.find(r => r.id === 'r14')?.points) || 300;
  const target    = Number(rules.find(r => r.id === 'r15')?.points) || 10000;
  const penalty   = Number(rules.find(r => r.id === 'r16')?.points) || -1000;
  const koncovka  = minWO;

  // Všetky bodové kombinácie zlúčené (poradie z RULE_CATEGORIES)
  const combinationrules = RULE_CATEGORIES
    .flatMap(cat => cat.ruleIds)
    .map(id => rules.find(r => r.id === id))
    .filter(Boolean);

  return (
    <div className="min-h-screen ks-fade pb-8">
      <Header title="Pravidlá hry" onBack={onBack} />
      <div className="p-4 max-w-2xl mx-auto space-y-3">
        {/* Informačný úvodný popis (nie editovateľný — len text) */}
        <div className="ks-card rounded-sm p-5">
          <p className="ks-body ks-cream leading-relaxed">
            Cieľom hry <em className="ks-gold">Kocky</em> je byť prvým hráčom, ktorý dosiahne cieľové skóre —
            <strong className="ks-gold"> {target.toLocaleString('sk-SK')}</strong> v klasickej hre alebo
            <strong className="ks-gold"> 5 000</strong> v krátkej. Hráči sa striedajú v hodoch šesťkociek.
          </p>
          <p className="ks-body ks-cream leading-relaxed mt-2">
            Každý zápis musí byť aspoň <strong className="ks-gold">{minWO} bodov</strong> (minimálny odpis) — alebo daj <em>čiarku</em>.
            Hru sa dá <em>začať</em> aj čiarkou bez bodov. Ak v hode nepadla žiadna bodujúca kocka,
            z aktuálneho skóre sa odpočíta <strong className="text-red-300">{Math.abs(penalty).toLocaleString('sk-SK')} bodov</strong>.
          </p>
          <p className="ks-body ks-cream leading-relaxed mt-2">
            Ak hod prekročí cieľ, body sa nezapočítajú a podľa nastavenia sa zapíše neplatný ťah, spravidla <em>čiarka</em>.
            V závere hry treba dohrať na <em className="ks-gold">presný cieľ</em>; ak sa zapne potvrdenie víťazstva, po presnom zásahu
            nasleduje ešte overovací ťah, v ktorom musí padnúť ničnehodenie.
          </p>
          <p className="ks-muted ks-body text-xs italic mt-3">
            Hodnoty cieľa, prípisu a penalizácie sa dajú upraviť v <em>Nastavenia → Úprava pravidiel → Hodnoty hry</em>.
          </p>
        </div>

        <div className="ks-mono ks-gold text-xs px-1 pt-2">BODOVÉ KOMBINÁCIE</div>

        <RulesContent rules={combinationrules} />
      </div>
    </div>
  );
}

function RulesContent({ rules, compact = false }) {
  return (
    <div className="space-y-2">
      {rules.map(rule => (
        <div key={rule.id}
             className={`ks-card rounded-sm ${compact ? 'p-3' : 'p-4'} flex items-start gap-3`}>
          <div className="flex-1">
            <div className="flex items-baseline justify-between gap-2 mb-1">
              <h4 className="ks-display ks-cream text-lg font-semibold">{rule.name}</h4>
              <div className={`ks-display text-xl font-bold whitespace-nowrap ${Number(rule.points) < 0 ? 'text-red-300' : 'ks-gold'}`}>
                {rule.type === 'select'
                  ? <span className="text-sm italic">{rule.selected}</span>
                  : `${Number(rule.points).toLocaleString('sk-SK')} b.`}
              </div>
            </div>
            <p className="ks-muted text-sm leading-snug mb-2">{rule.description}</p>
            <DiceRow dice={rule.dice} size={compact ? 20 : 24} />
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Editor pravidiel ─────────────────────────────────────────────────────

function RulesEditor({ rules, onSave, onBack, onReset, selectedSkin }) {
  const [draft, setDraft] = useState(rules);
  const [activeCategory, setActiveCategory] = useState(null);
  const [editingId, setEditingId] = useState(null);

  function update(id, patch) { setDraft(prev => prev.map(r => r.id === id ? { ...r, ...patch } : r)); }
  function remove(id) { if (window.confirm('Vymazať toto pravidlo?')) setDraft(prev => prev.filter(r => r.id !== id)); }
  function add() {
    const id = 'r' + Date.now();
    const newRule = { id, name: 'Nové pravidlo', description: 'Popis pravidla', points: 100, type: 'numeric', dice: [] };
    setDraft(prev => [...prev, newRule]);
    setEditingId(id);
  }
  function save() { onSave(draft); onBack(); }

  // Spočítať pravidlá v kategórii
  function rulesInCategory(catId) {
    const cat = RULE_CATEGORIES.find(c => c.id === catId);
    if (!cat) return [];
    return cat.ruleIds.map(id => draft.find(r => r.id === id)).filter(Boolean);
  }

  // Nastavenia hry (flow rules: r14-r18)
  const settingrules = useMemo(() =>
    SETTING_RULE_IDS.map(id => draft.find(r => r.id === id)).filter(Boolean),
    [draft]);

  // Pravidlá ktoré nepatria do žiadnej kategórie (vlastné pridané)
  const customrules = useMemo(() => {
    const knownIds = new Set([...RULE_CATEGORIES.flatMap(c => c.ruleIds), ...SETTING_RULE_IDS]);
    return draft.filter(r => !knownIds.has(r.id));
  }, [draft]);

  // ─── Detail: Nastavenia hry ──────────────────────────────────────────
  if (activeCategory === 'cat-settings') {
    return (
      <div className="min-h-screen ks-fade pb-32" style={{ background: (SKIN_PRESETS[selectedSkin] || SKIN_PRESETS.classic).bg }}>
        <Header title="Hodnoty hry" onBack={() => setActiveCategory(null)} />

        <div className="p-4 max-w-2xl mx-auto space-y-3">
          <div className="ks-card rounded-sm p-3 ks-body text-sm ks-muted">
            Hodnoty cieľa, prvého zápisu, penalizácie za ničnehodenie, správania pri prekročení cieľa a potvrdenia výhry. Tieto sa premietnu aj do popisu v Pravidlách hry.
          </div>

          {settingrules.map(rule => (
            <SettingEditCard
              key={rule.id}
              rule={rule}
              onUpdate={(patch) => update(rule.id, patch)}
            />
          ))}
        </div>

        <div className="fixed bottom-0 left-0 right-0 p-3 border-t border-amber-900/30 backdrop-blur"
             style={{ background: 'rgba(14,12,10,0.95)' }}>
          <div className="max-w-2xl mx-auto grid grid-cols-2 gap-2">
            <GoldButton onClick={() => setActiveCategory(null)} variant="outline" icon={ChevronLeft}>Späť</GoldButton>
            <GoldButton onClick={save} icon={Save}>Uložiť všetko</GoldButton>
          </div>
        </div>
      </div>
    );
  }

  // ─── Detail kategórie ────────────────────────────────────────────────
  if (activeCategory) {
    const cat = activeCategory === 'cat-custom'
      ? { id: 'cat-custom', title: 'Vlastné pravidlá', subtitle: 'Tebou pridané pravidlá' }
      : RULE_CATEGORIES.find(c => c.id === activeCategory);

    const categoryrules = activeCategory === 'cat-custom' ? customrules : rulesInCategory(activeCategory);

    return (
      <div className="min-h-screen ks-fade pb-32" style={{ background: (SKIN_PRESETS[selectedSkin] || SKIN_PRESETS.classic).bg }}>
        <Header title={cat.title} onBack={() => { setActiveCategory(null); setEditingId(null); }} />

        <div className="p-4 max-w-2xl mx-auto space-y-3">
          <div className="ks-card rounded-sm p-3 ks-body text-sm ks-muted">
            {cat.subtitle}. Klepni na pravidlo pre úpravu hodnôt.
          </div>

          {categoryrules.length === 0 && (
            <div className="ks-card rounded-sm p-6 text-center ks-muted italic ks-body">
              Žiadne pravidlá v tejto kategórii.
            </div>
          )}

          {categoryrules.map(rule => (
            <RuleEditCard
              key={rule.id}
              rule={rule}
              isEditing={editingId === rule.id}
              onEdit={() => setEditingId(editingId === rule.id ? null : rule.id)}
              onUpdate={(patch) => update(rule.id, patch)}
              onRemove={() => remove(rule.id)}
            />
          ))}

          {activeCategory === 'cat-custom' && (
            <button onClick={add}
              className="ks-press ks-card w-full p-3 rounded-sm flex items-center justify-center gap-2 border-dashed">
              <ListPlus size={18} className="ks-gold" />
              <span className="ks-display ks-gold">Pridať vlastné pravidlo</span>
            </button>
          )}
        </div>

        <div className="fixed bottom-0 left-0 right-0 p-3 border-t border-amber-900/30 backdrop-blur"
             style={{ background: 'rgba(14,12,10,0.95)' }}>
          <div className="max-w-2xl mx-auto grid grid-cols-2 gap-2">
            <GoldButton onClick={() => { setActiveCategory(null); setEditingId(null); }} variant="outline" icon={ChevronLeft}>Späť</GoldButton>
            <GoldButton onClick={save} icon={Save}>Uložiť všetko</GoldButton>
          </div>
        </div>
      </div>
    );
  }

  // ─── Hlavné menu kategórií ──────────────────────────────────────────
  return (
    <div className="min-h-screen ks-fade pb-32" style={{ background: (SKIN_PRESETS[selectedSkin] || SKIN_PRESETS.classic).bg }}>
      <Header title="Úprava pravidiel" onBack={onBack} />

      <div className="p-4 max-w-2xl mx-auto space-y-2">
        <div className="ks-mono ks-gold text-xs px-1 pt-2">BODOVÉ KOMBINÁCIE</div>

        {RULE_CATEGORIES.map(cat => {
          const catrules = rulesInCategory(cat.id);
          return (
            <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
              className="ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left">
              <div className="w-10 h-10 rounded-sm border border-amber-700/50 ks-gold ks-display flex items-center justify-center text-lg font-bold">
                {catrules.length}
              </div>
              <div className="flex-1">
                <div className="ks-display ks-cream text-lg font-semibold">{cat.title}</div>
                <div className="ks-muted text-sm">{cat.subtitle}</div>
              </div>
              <ChevronRight className="ks-muted" size={20} />
            </button>
          );
        })}

        <button onClick={() => setActiveCategory('cat-custom')}
          className="ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left border-dashed">
          <div className="w-10 h-10 rounded-sm border border-amber-700/50 ks-gold flex items-center justify-center">
            <ListPlus size={18} />
          </div>
          <div className="flex-1">
            <div className="ks-display ks-cream text-lg font-semibold">Vlastné pravidlá</div>
            <div className="ks-muted text-sm">{customrules.length} pridaných pravidiel</div>
          </div>
          <ChevronRight className="ks-muted" size={20} />
        </button>

        <div className="ks-mono ks-gold text-xs px-1 pt-3">NASTAVENIA HRY</div>

        <button onClick={() => setActiveCategory('cat-settings')}
          className="ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left border-l-4"
          style={{ borderLeftColor: '#d4b86a' }}>
          <div className="w-10 h-10 rounded-sm ks-gold-bg flex items-center justify-center">
            <Settings size={18} />
          </div>
          <div className="flex-1">
            <div className="ks-display ks-cream text-lg font-semibold">Hodnoty hry</div>
            <div className="ks-muted text-sm">Cieľ · prvý zápis · koncovka · potvrdenie výhry · penalizácia</div>
          </div>
          <ChevronRight className="ks-muted" size={20} />
        </button>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-3 border-t border-amber-900/30 backdrop-blur"
           style={{ background: 'rgba(14,12,10,0.95)' }}>
        <div className="max-w-2xl mx-auto grid grid-cols-3 gap-2">
          <GoldButton onClick={onReset} variant="danger" icon={RotateCcw}>Reset</GoldButton>
          <GoldButton onClick={onBack} variant="outline" icon={X}>Zrušiť</GoldButton>
          <GoldButton onClick={save} icon={Save}>Uložiť</GoldButton>
        </div>
      </div>
    </div>
  );
}

// Jednoduchá karta pre úpravu hodnôt nastavení (bez kociek a typu)
function SettingEditCard({ rule, onUpdate }) {
  const isNumeric = rule.type === 'numeric';
  const isNeg = Number(rule.points) < 0;

  return (
    <div className="ks-card rounded-sm p-4">
      <div className="flex items-baseline justify-between gap-3 mb-2">
        <div className="ks-display ks-cream text-lg font-semibold">{rule.name}</div>
      </div>
      <p className="ks-muted text-sm leading-snug mb-3">{rule.description}</p>

      {isNumeric ? (
        <div className="flex items-center gap-2">
          <input
            type="number"
            value={rule.points}
            onChange={(e) => onUpdate({ points: parseInt(e.target.value, 10) || 0 })}
            className={`flex-1 bg-stone-950/60 border border-amber-900/40 rounded-sm px-3 py-2 ks-display text-2xl font-semibold outline-none focus:border-amber-700 ${isNeg ? 'text-red-300' : 'ks-gold'}`}
          />
          <div className="ks-mono ks-muted text-xs">BODOV</div>
        </div>
      ) : (
        <select
          value={rule.selected}
          onChange={(e) => onUpdate({ selected: e.target.value })}
          className="w-full bg-stone-950/60 border border-amber-900/40 rounded-sm px-3 py-2 ks-cream ks-body text-base outline-none focus:border-amber-700"
        >
          {(rule.options || []).map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      )}
    </div>
  );
}

function RuleEditCard({ rule, isEditing, onEdit, onUpdate, onRemove }) {
  const isNeg = Number(rule.points) < 0;
  return (
    <div className="ks-card rounded-sm overflow-hidden">
      <div className="flex items-center gap-3 p-3" onClick={onEdit}>
        <div className="flex-1 cursor-pointer">
          <div className="ks-display ks-cream text-lg font-semibold">{rule.name}</div>
          <div className={`text-xs italic ${isNeg ? 'text-red-300' : 'ks-muted'}`}>
            {rule.type === 'select' ? rule.selected : `${rule.points} bodov`}
          </div>
        </div>
        <DiceRow dice={rule.dice?.slice(0, 6)} size={18} />
        <button onClick={(e) => { e.stopPropagation(); onEdit(); }} className="ks-press ks-gold p-1">
          <Pencil size={16} />
        </button>
      </div>

      {isEditing && (
        <div className="border-t border-amber-900/30 p-3 space-y-3 ks-fade">
          <Field label="Názov">
            <input value={rule.name} onChange={(e) => onUpdate({ name: e.target.value })}
              className="w-full bg-stone-950/60 border border-amber-900/40 rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700" />
          </Field>
          <Field label="Popis">
            <textarea value={rule.description} onChange={(e) => onUpdate({ description: e.target.value })} rows={2}
              className="w-full bg-stone-950/60 border border-amber-900/40 rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700 resize-none" />
          </Field>

          <Field label="Typ pravidla">
            <select value={rule.type}
              onChange={(e) => {
                const newType = e.target.value;
                if (newType === 'select') {
                  onUpdate({ type: 'select', options: rule.options || ['Možnosť 1', 'Možnosť 2'], selected: rule.selected || (rule.options?.[0] || 'Možnosť 1') });
                } else onUpdate({ type: 'numeric' });
              }}
              className="w-full bg-stone-950/60 border border-amber-900/40 rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700">
              <option value="numeric">Číselné (pevný počet bodov)</option>
              <option value="select">Výber zo zoznamu</option>
            </select>
          </Field>

          {rule.type === 'numeric' ? (
            <Field label="Body (môže byť aj záporné)">
              <input type="number" value={rule.points}
                onChange={(e) => onUpdate({ points: parseInt(e.target.value, 10) || 0 })}
                className={`w-full bg-stone-950/60 border border-amber-900/40 rounded-sm px-3 py-2 ks-display text-xl font-semibold outline-none focus:border-amber-700 ${isNeg ? 'text-red-300' : 'ks-gold'}`} />
            </Field>
          ) : (
            <>
              <Field label="Aktívna možnosť">
                <select value={rule.selected} onChange={(e) => onUpdate({ selected: e.target.value })}
                  className="w-full bg-stone-950/60 border border-amber-900/40 rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700">
                  {(rule.options || []).map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </Field>
              <Field label="Možnosti (oddelené čiarkou)">
                <input value={(rule.options || []).join(', ')}
                  onChange={(e) => {
                    const opts = e.target.value.split(',').map(s => s.trim()).filter(Boolean);
                    const sel = opts.includes(rule.selected) ? rule.selected : (opts[0] || '');
                    onUpdate({ options: opts, selected: sel });
                  }}
                  className="w-full bg-stone-950/60 border border-amber-900/40 rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700" />
              </Field>
            </>
          )}

          <Field label="Kocky (piktogramy)">
            <DicePicker dice={rule.dice || []} onChange={(d) => onUpdate({ dice: d })} />
          </Field>

          <button onClick={onRemove} className="ks-press text-red-300 ks-mono text-xs flex items-center gap-1">
            <Trash2 size={14} /> Vymazať pravidlo
          </button>
        </div>
      )}
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <div className="ks-mono ks-gold text-xs mb-1.5">{label.toUpperCase()}</div>
      {children}
    </div>
  );
}

function DicePicker({ dice, onChange }) {
  return (
    <div className="space-y-2">
      <div className="flex flex-wrap items-center gap-2 min-h-[36px] p-2 rounded-sm border border-amber-900/30 bg-stone-950/40">
        {dice.length === 0 && <span className="ks-muted text-sm italic">Žiadne kocky</span>}
        {dice.map((d, i) => (
          <button key={i} onClick={() => onChange(dice.filter((_, idx) => idx !== i))}
            className="ks-press ks-gold relative">
            <DiceIcon value={d} size={26} />
          </button>
        ))}
      </div>
      <div className="flex gap-1.5">
        {[1,2,3,4,5,6].map(v => (
          <button key={v} onClick={() => dice.length < 6 && onChange([...dice, v])}
            className="ks-press ks-cream hover:text-amber-300 p-1.5 border border-amber-900/30 rounded-sm">
            <DiceIcon value={v} size={22} />
          </button>
        ))}
        {dice.length > 0 && (
          <button onClick={() => onChange([])}
            className="ks-press ml-auto text-red-300 ks-mono text-xs px-2">
            VYMAZAŤ
          </button>
        )}
      </div>
    </div>
  );
}

// ─── Archív ───────────────────────────────────────────────────────────────

function ArchiveScreen({ tournaments, onBack, onView, onDelete, readOnly }) {
  return (
    <div className="min-h-screen ks-fade pb-8">
      <Header title={readOnly ? 'Archív turnajov' : 'Editácia archívu'} onBack={onBack} />
      <div className="p-4 max-w-2xl mx-auto">
        {!readOnly && (
          <div className="ks-card rounded-sm p-3 mb-3 ks-body text-xs ks-muted italic flex items-start gap-2">
            <Edit3 size={14} className="ks-gold shrink-0 mt-0.5" />
            <div>Klepni na turnaj pre úpravu skóre, víťaza alebo kôl. Mazanie cez tlačidlo dolu.</div>
          </div>
        )}
        {tournaments.length === 0 ? (
          <div className="ks-card rounded-sm p-8 text-center">
            <ArchiveIcon className="ks-gold mx-auto opacity-40" size={48} />
            <p className="ks-muted ks-body mt-3 italic">Zatiaľ žiadne turnaje v archíve.</p>
          </div>
        ) : (
          <div className="space-y-2">
            {tournaments.map(t => <ArchiveItem key={t.id} t={t} onView={() => onView(t)} onDelete={() => onDelete(t.id)} readOnly={readOnly} />)}
          </div>
        )}
      </div>
    </div>
  );
}

function ArchiveItem({ t, onView, onDelete, readOnly }) {
  const totals = t.players.map((_, pIdx) =>
    (t.rounds || []).reduce((s, r) => s + (typeof r[pIdx] === 'number' ? r[pIdx] : 0), 0)
  );
  // Víťaz môže byť number alebo number[] (remíza)
  if (!t || !Array.isArray(t.players) || !Array.isArray(t.rounds)) return <SafeTournamentFallback title="Poškodený turnaj v archíve" />;
  const winnerArr = t.winner === null || t.winner === undefined
    ? []
    : (Array.isArray(t.winner) ? t.winner : [t.winner]);
  const winnerLabel = winnerArr.length === 0
    ? null
    : (winnerArr.length === 1
        ? t.players[winnerArr[0]]
        : `Remíza: ${winnerArr.map(i => t.players[i]).join(', ')}`);
  const target = t.targetScore || 10000;
  const duration = formatDuration(t.date, t.finishedAt);

  return (
    <div className="ks-card rounded-sm overflow-hidden">
      <button onClick={onView} className="ks-press w-full p-4 text-left flex items-center gap-3">
        <div className={`w-12 h-12 rounded-sm flex items-center justify-center
          ${t.status === 'finished' ? 'ks-gold-bg' : 'border border-amber-900/40 ks-muted'}`}>
          {t.status === 'finished' ? <Trophy size={22} /> : <X size={22} />}
        </div>
        <div className="flex-1 min-w-0">
          <div className="ks-display ks-cream text-lg font-semibold truncate">
            {winnerLabel
              ? <>{winnerArr.length > 1 ? '' : 'Víťaz: '}<span className="ks-gold">{winnerLabel}</span></>
              : <span className="italic ks-muted">Nedokončený turnaj</span>}
          </div>
          <div className="flex items-center gap-1.5 mt-0.5">
            <Calendar size={11} className="ks-muted" />
            <div className="ks-mono ks-muted text-xs truncate">
              {formatDateTime(t.date)}{duration ? ` · ${duration}` : ''}
            </div>
          </div>
          <div className="ks-muted text-xs truncate mt-0.5">
            {t.players.length} hráčov · do {target.toLocaleString('sk-SK')} · {t.players.join(' · ')}
          </div>
        </div>
        <ChevronRight className="ks-muted" size={20} />
      </button>
      <div className="border-t border-amber-900/20 px-4 py-2 flex items-center justify-between">
        <div className="ks-mono ks-gold text-sm">
          {Math.max(...totals).toLocaleString('sk-SK')} bodov
        </div>
        {!readOnly && (
          <button onClick={onDelete} className="ks-press text-red-300 text-xs ks-mono flex items-center gap-1">
            <Trash2 size={12} /> VYMAZAŤ
          </button>
        )}
      </div>
    </div>
  );
}

function ArchiveDetail({ tournament, onBack, onUpdate, readOnly, scoreDisplayMode, onToggleScoreMode, selectedSkin }) {
  if (!tournament || !Array.isArray(tournament.players) || !Array.isArray(tournament.rounds)) return <SafeTournamentFallback title="Poškodený turnaj v archíve" />;
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(null);

  // Pri vstupe do edit mode skopíruj turnaj do draftu
  function startEdit() {
    setDraft({
      players: [...tournament.players],
      rounds: (tournament.rounds || []).map(r => [...r]),
      winner: tournament.winner,
      targetScore: tournament.targetScore || 10000,
    });
    setEditing(true);
  }

  function cancelEdit() {
    setDraft(null);
    setEditing(false);
  }

  function saveEdit() {
    // Prepočítať víťaza ak ešte nikto nedosiahol cieľ alebo bol odobratý
    const totals = draft.players.map((_, pIdx) =>
      draft.rounds.reduce((s, r) => s + (typeof r[pIdx] === 'number' ? r[pIdx] : 0), 0)
    );
    let newWinner = draft.winner;
    // Ak víťaz už nemá najvyššie skóre alebo nedosiahol cieľ, zachovať pôvodného (manuálne sa dá zmeniť)
    onUpdate({
      players: draft.players,
      rounds: draft.rounds,
      winner: newWinner,
    });
    setEditing(false);
    setDraft(null);
  }

  function updateCell(roundIdx, playerIdx, newValue) {
    setDraft(prev => {
      const rounds = prev.rounds.map(r => [...r]);
      while (rounds.length <= roundIdx) {
        rounds.push(new Array(prev.players.length).fill(null));
      }
      rounds[roundIdx][playerIdx] = newValue;
      return { ...prev, rounds };
    });
  }

  function addRound() {
    setDraft(prev => ({
      ...prev,
      rounds: [...prev.rounds, new Array(prev.players.length).fill(null)],
    }));
  }

  function removeRound(idx) {
    if (!window.confirm(`Vymazať kolo ${idx + 1}?`)) return;
    setDraft(prev => ({
      ...prev,
      rounds: prev.rounds.filter((_, i) => i !== idx),
    }));
  }

  function setWinner(playerIdx) {
    setDraft(prev => {
      const cur = prev.winner;
      // Aktuálny stav víťazov ako array indexov
      const arr = cur === null || cur === undefined
        ? []
        : (Array.isArray(cur) ? [...cur] : [cur]);
      // Toggle: ak hráč už je víťaz, vyhoď ho; inak pridaj
      const idx = arr.indexOf(playerIdx);
      if (idx >= 0) arr.splice(idx, 1);
      else arr.push(playerIdx);
      // Zjednoduš na single index ak je len 1 víťaz, null ak žiaden
      const newWinner = arr.length === 0 ? null : (arr.length === 1 ? arr[0] : arr.sort((a,b)=>a-b));
      return { ...prev, winner: newWinner };
    });
  }

  const display = editing && draft ? draft : tournament;
  const totals = computeTotals(display.rounds, display.players.length);
  const target = display.targetScore || 10000;
  const duration = formatDuration(tournament.date, tournament.finishedAt);

  // ─── Validácia konzistencie hlavičky a tabuľky ──────────────────────
  // Spočítame víťazov z dát turnaja (computeWinners) a porovnáme ich
  // s víťazmi uloženými v `winner` poli. Ak je rozpor (napr. starší turnaj
  // uložený s neúplným zoznamom víťazov), zobrazíme varovný banner.
  const winnerComputation = useMemo(() => {
    if (tournament.status !== 'finished') return null;
    return computeWinners({
      ...display,
      _confirmedDetailed: tournament._confirmedDetailed,
      rules: tournament.rules,
    });
  }, [display, tournament]);

  const declaredWinners = display.winner === null || display.winner === undefined
    ? []
    : (Array.isArray(display.winner) ? [...display.winner] : [display.winner]);

  const hasDiscrepancy = winnerComputation && (() => {
    if (winnerComputation.winners.length !== declaredWinners.length) return true;
    const a = [...winnerComputation.winners].sort();
    const b = [...declaredWinners].sort();
    return !a.every((v, i) => v === b[i]);
  })();

  return (
    <div className="min-h-screen ks-fade pb-32" style={{ background: (SKIN_PRESETS[selectedSkin] || SKIN_PRESETS.classic).bg }}>
      <Header title="Detail turnaja" onBack={editing ? cancelEdit : onBack}
        right={
          <div className="flex items-center gap-2">
            {!editing && (
              <button
                onClick={onToggleScoreMode}
                className="ks-press ks-gold p-1.5 rounded-sm border border-amber-700/40 hover:bg-amber-900/20"
                title={scoreDisplayMode === 'delta' ? 'Prepnúť na kumulatívne' : 'Prepnúť na prípisy'}
              >
                {scoreDisplayMode === 'delta'
                  ? <Sigma size={16} />
                  : <Layers size={16} />}
              </button>
            )}
            {editing || readOnly ? null : (
              <button onClick={startEdit} className="ks-press ks-gold flex items-center gap-1 text-xs ks-mono">
                <Edit3 size={14} /> UPRAVIŤ
              </button>
            )}
          </div>
        }
      />
      <div className="p-4 max-w-2xl mx-auto space-y-4">
        {/* Karta s víťazom + časmi */}
        <div className="ks-card rounded-sm p-5 text-center">
          {tournament.status === 'finished' && display.winner !== null && display.winner !== undefined ? (() => {
            const winnerArr = Array.isArray(display.winner) ? display.winner : [display.winner];
            const isDraw = winnerArr.length > 1;
            return (
              <>
                <Crown className="ks-gold mx-auto" size={40} />
                <div className="ks-mono ks-gold text-xs mt-2">{isDraw ? `REMÍZA · ${winnerArr.length} VÍŤAZI` : 'VÍŤAZ'}</div>
                <div className="space-y-1.5 mt-1">
                  {winnerArr.map(idx => (
                    <div key={idx}>
                      <div className="ks-display ks-cream text-2xl font-bold">{display.players[idx]}</div>
                      <div className="ks-display ks-gold text-xl">{totals[idx].toLocaleString('sk-SK')}</div>
                    </div>
                  ))}
                </div>
              </>
            );
          })() : (
            <div className="ks-muted italic">{tournament.status === 'aborted' ? 'Zrušený turnaj' : 'Nedokončený turnaj'}</div>
          )}

          <div className="mt-4 pt-4 border-t border-amber-900/30 grid grid-cols-2 gap-3 text-left">
            <div>
              <div className="ks-mono ks-muted text-xs flex items-center gap-1"><Play size={10} /> ZAČIATOK</div>
              <div className="ks-body ks-cream text-sm mt-0.5">{formatDateTime(tournament.date)}</div>
            </div>
            <div>
              <div className="ks-mono ks-muted text-xs flex items-center gap-1"><Check size={10} /> KONIEC</div>
              <div className="ks-body ks-cream text-sm mt-0.5">
                {tournament.finishedAt ? formatDateTime(tournament.finishedAt) : '—'}
              </div>
            </div>
            {duration && (
              <div className="col-span-2">
                <div className="ks-mono ks-muted text-xs flex items-center gap-1"><Clock size={10} /> TRVANIE</div>
                <div className="ks-body ks-cream text-sm mt-0.5">{duration}</div>
              </div>
            )}
            <div>
              <div className="ks-mono ks-muted text-xs flex items-center gap-1"><Target size={10} /> CIEĽ</div>
              <div className="ks-body ks-cream text-sm mt-0.5">{target.toLocaleString('sk-SK')} b.</div>
            </div>
            <div>
              <div className="ks-mono ks-muted text-xs flex items-center gap-1"><Users size={10} /> HRÁČI</div>
              <div className="ks-body ks-cream text-sm mt-0.5">{display.players.length}</div>
            </div>
          </div>
        </div>

        {/* Banner pri detekcii rozporu medzi víťazom v hlavičke a vypočítanými totals */}
        {hasDiscrepancy && winnerComputation && (
          <div className="ks-card rounded-sm p-3 border-2 border-red-700/60 bg-red-950/30">
            <div className="flex items-start gap-2">
              <AlertTriangle size={20} className="text-red-300 shrink-0 mt-0.5" />
              <div className="flex-1">
                <div className="ks-mono text-red-200 text-xs tracking-widest mb-1">⚠ NEZHODA V URČENÍ VÍŤAZA</div>
                <div className="ks-body ks-cream text-sm leading-snug">
                  Hlavička uvádza:{' '}
                  <strong className="ks-gold">
                    {declaredWinners.length === 0 ? '—' : declaredWinners.map(i => display.players[i]).join(', ')}
                  </strong>
                  <br/>
                  Súčty kôl však dávajú:{' '}
                  <strong className="ks-gold">
                    {winnerComputation.winners.length === 0
                      ? '— (nikto nedosiahol cieľ)'
                      : winnerComputation.winners.map(i => `${display.players[i]} (${(totals[i] || 0).toLocaleString('sk-SK')})`).join(', ')}
                  </strong>
                </div>
                {winnerComputation.errors.length > 0 && (
                  <div className="ks-body text-red-300 text-xs mt-2">
                    {winnerComputation.errors.join(' · ')}
                  </div>
                )}
                {!readOnly && (
                  <div className="ks-body text-red-300 text-xs mt-2 italic">
                    Použi tlačidlo UPRAVIŤ na opravu zoznamu víťazov.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {!editing && (
          <div>
            <div className="ks-mono ks-gold text-xs mb-2">FINÁLNA TABUĽKA</div>
            <Standings players={display.players} totals={totals} target={target} />
          </div>
        )}

        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="ks-mono ks-gold text-xs">{editing ? 'ÚPRAVA TABUĽKY' : 'HISTÓRIA KÔL'}</div>
            {editing && (
              <button onClick={addRound} className="ks-press ks-gold ks-mono text-xs flex items-center gap-1">
                <Plus size={12} /> PRIDAŤ KOLO
              </button>
            )}
          </div>
          {editing ? (
            <EditableScoreTable
              players={draft.players}
              rounds={draft.rounds}
              totals={totals}
              target={target}
              winner={draft.winner}
              onChangeCell={updateCell}
              onRemoveRound={removeRound}
              onSetWinner={setWinner}
            />
          ) : (
            <ScoreTable
              tournament={{ ...display, currentRound: -1 }}
              totals={totals}
              highlightPlayer={display.winner ?? -1}
              target={target}
              displayMode={scoreDisplayMode}
              onToggleMode={onToggleScoreMode}
              hideModeToolbar={true}
            />
          )}
        </div>
      </div>

      {editing && (
        <div className="fixed bottom-0 left-0 right-0 p-3 border-t border-amber-900/30 backdrop-blur"
             style={{ background: 'rgba(14,12,10,0.95)' }}>
          <div className="max-w-2xl mx-auto grid grid-cols-2 gap-2">
            <GoldButton onClick={cancelEdit} variant="outline" icon={X}>Zrušiť</GoldButton>
            <GoldButton onClick={saveEdit} icon={Save}>Uložiť zmeny</GoldButton>
          </div>
        </div>
      )}
    </div>
  );
}

// Editovateľná tabuľka — bunky s číslom / dash / prázdne, plus tlačidlo na vymazanie kola
function EditableScoreTable({ players, rounds, totals, target, winner, onChangeCell, onRemoveRound, onSetWinner }) {
  function parseCellValue(str) {
    const s = (str || '').trim();
    if (s === '' || s === '·') return null;
    if (s === '—' || s === '-' || s.toLowerCase() === 'dash') return 'dash';
    const n = parseInt(s, 10);
    if (Number.isFinite(n)) return n;
    return null;
  }

  return (
    <div className="ks-card rounded-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse" style={{ tableLayout: 'fixed', minWidth: `${36 + Math.max(players.length, 1) * Math.max(80, 300 / Math.max(players.length, 1))}px` }}>
          <colgroup>
            <col style={{ width: 36 }} />
            {players.map((_, i) => (<col key={i} style={{ width: `${100 / (players.length + 0.25)}%`, minWidth: `${Math.max(80, 300 / Math.max(players.length, 1))}px` }} />))}
            <col style={{ width: 36 }} />
          </colgroup>
          <thead>
            <tr className="border-b border-amber-900/40">
              <th className="ks-mono ks-muted text-xs font-normal py-2 px-2 text-center sticky left-0" style={{ width: 36, background: 'var(--ks-sticky-bg, rgba(14,12,10,0.97))' }}>K</th>
              {players.map((p, i) => (
                <th key={i} className="ks-display ks-cream py-2 px-1 text-sm font-semibold text-center whitespace-nowrap overflow-hidden text-ellipsis">{p}</th>
              ))}
              <th style={{ width: 36 }}></th>
            </tr>
          </thead>
          <tbody>
            {rounds.map((round, rIdx) => (
              <tr key={rIdx} className="border-b border-amber-900/15">
                <td className="ks-mono ks-muted text-xs py-1.5 px-2 text-center sticky left-0" style={{ background: 'var(--ks-sticky-bg, rgba(14,12,10,0.97))' }}>{rIdx + 1}</td>
                {players.map((_, pIdx) => {
                  const v = round[pIdx];
                  const display = v === 'dash' ? '—' : (typeof v === 'number' ? String(v) : '');
                  return (
                    <td key={pIdx} className="p-0.5">
                      <input
                        value={display}
                        onChange={(e) => onChangeCell(rIdx, pIdx, parseCellValue(e.target.value))}
                        placeholder="·"
                        className={`w-full bg-stone-950/40 border border-amber-900/30 rounded-sm px-2 py-1 ks-display text-center text-sm outline-none focus:border-amber-700 ${
                          v === 'dash' ? 'ks-muted' : (typeof v === 'number' && v < 0 ? 'text-red-300' : 'ks-cream')
                        }`}
                      />
                    </td>
                  );
                })}
                <td className="text-center">
                  <button onClick={() => onRemoveRound(rIdx)}
                    className="ks-press text-red-400 hover:text-red-300 p-1">
                    <Trash2 size={12} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t-2 border-amber-700/50">
              <td className="ks-mono ks-gold text-xs py-2 px-2 text-center sticky left-0" style={{ background: 'var(--ks-sticky-bg2, rgba(10,8,6,0.98))' }}>Σ</td>
              {totals.map((t, i) => {
                const reached = t >= target;
                const winnerSet = winner === null || winner === undefined
                  ? new Set()
                  : (Array.isArray(winner) ? new Set(winner) : new Set([winner]));
                const isWinner = winnerSet.has(i);
                return (
                  <td key={i} className="text-center py-2 px-2">
                    <button onClick={() => onSetWinner(i)}
                      className={`ks-press w-full ks-display text-base font-bold rounded-sm py-1 px-2 ${
                        isWinner ? 'ks-gold-bg'
                        : reached ? 'ks-gold border border-amber-700/40'
                        : t < 0 ? 'text-red-300' : 'ks-cream'
                      }`}>
                      {isWinner && <Crown size={12} className="inline mr-1" />}
                      {t.toLocaleString('sk-SK')}
                    </button>
                  </td>
                );
              })}
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="p-2 border-t border-amber-900/20 ks-muted text-xs italic text-center ks-body">
        Klepni na bunku pre úpravu · Klepni na súčet pre nastavenie víťaza · Číslo, „—" alebo prázdne pre vymazanie
      </div>
    </div>
  );
}
