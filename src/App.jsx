import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import {
  Dice1, Dice2, Dice3, Dice4, Dice5, Dice6,
  Plus, Minus, Trash2, Save, X, ChevronLeft,
  BookOpen, Archive as ArchiveIcon, Settings, Trophy, Users,
  AlertCircle, AlertTriangle, Check, Play, RotateCcw, ScrollText, Crown,
  Calendar, ChevronRight, ListPlus, Pencil, Zap, Skull, Target,
  Download, Upload, Edit3, Clock, FileSpreadsheet, ChevronDown, TrendingUp,
  Sigma, Layers, Monitor, Bell, Wifi, Info, Shield, ScanLine
} from 'lucide-react';
// XLSX sa načíta lazy pri prvom použití
import { Capacitor } from '@capacitor/core';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';
import { App as CapacitorApp } from '@capacitor/app';
import { useBackHandler, triggerBack } from './hooks/useBackHandler.js';
import { useDpadNavigation } from './hooks/useDpadNavigation.js';
import { useInputModality } from './hooks/useInputModality.js';
import ScoreTable from './components/ScoreTable.jsx';
import { ProgressChart } from './components/ProgressChart.jsx';
import { BigScoreDisplay } from './components/BigScoreDisplay.jsx';
import { MainMenu, MenuButton } from './screens/MainMenu.jsx';
import { NewTournament } from './screens/NewTournament.jsx';
import { GameViewModesScreen } from './screens/GameViewModesScreen.jsx';
import { VisualAndSkinScreen } from './screens/VisualAndSkinScreen.jsx';
import { OnlineScreen } from './screens/OnlineScreen.jsx';
import { AdminScreen, AdminPinDialog, DEFAULT_ADMIN_SETTINGS } from './screens/AdminScreen.jsx';
import { PlayerStatsScreen } from './screens/PlayerStatsScreen.jsx';
import { ScanImportScreen } from './screens/ScanImportScreen.jsx';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { createRoom } from './online/createRoom.ts';
import { useOnlineStore } from './online/onlineStore.ts';
import { useRoomSubscription } from './online/useRoomSubscription.ts';
import { computeWinners, computePlayerTotals as computeTotals } from './lib/tournamentEngine.js';
import { sounds } from './lib/sounds.js';
import { DEFAULT_EXTENSIONS, hapticFeedback, MILESTONE_VALUES } from './lib/extensions.js';
import { LangContext, useT } from './lib/i18n.js';
import { Confetti } from './components/Confetti.jsx';
import { BrawlBackground } from './components/BrawlBackground.jsx';
import { version as APP_VERSION } from '../package.json';
import './app.css';

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
    id:'brawlstars', name:'Brawl Stars',
    bg:'radial-gradient(ellipse at 50% 35%, #6030a0 0%, #38155a 48%, #1a0830 100%)',
    vars: { '--ks-bg-main':'#1a0830','--ks-bg-soft':'rgba(52,18,80,0.92)','--ks-bg-soft-2':'rgba(28,10,45,0.96)','--ks-card-sub':'rgba(40,14,62,0.74)','--ks-border':'rgba(200,80,220,0.28)','--ks-border-strong':'rgba(230,120,255,0.62)','--ks-text':'#f8e8ff','--ks-text-muted':'#c0a0d8','--ks-accent':'#e070d0','--ks-accent-2':'#8030b0','--ks-button-text':'#280a3a','--ks-danger':'#ff6090','--ks-sticky-bg':'rgba(20,6,34,0.97)','--ks-sticky-bg2':'rgba(14,4,24,0.98)' }
  },
  brawlblue: {
    id:'brawlblue', name:'Brawl Blue',
    bg:'radial-gradient(ellipse at 50% 40%, #1a96d8 0%, #0e62ac 46%, #061e54 100%)',
    vars: { '--ks-bg-main':'#061e54','--ks-bg-soft':'rgba(10,48,110,0.92)','--ks-bg-soft-2':'rgba(6,26,65,0.96)','--ks-card-sub':'rgba(8,36,88,0.74)','--ks-border':'rgba(40,180,240,0.28)','--ks-border-strong':'rgba(80,210,255,0.62)','--ks-text':'#e8f4ff','--ks-text-muted':'#90b8d8','--ks-accent':'#40d8f0','--ks-accent-2':'#2878c8','--ks-button-text':'#030e28','--ks-danger':'#ff6090','--ks-sticky-bg':'rgba(4,14,44,0.97)','--ks-sticky-bg2':'rgba(3,10,32,0.98)' }
  },
  harrypotter: {
    id:'harrypotter', name:'Harry Potter',
    bg:'radial-gradient(ellipse at 25% 45%, rgba(160,110,40,0.22), transparent 55%), linear-gradient(160deg,#f8ecd4 0%,#efe0b8 40%,#e8d6a4 70%,#f2e8c8 100%)',
    vars: { '--ks-bg-main':'#f0e2c0','--ks-bg-soft':'rgba(252,244,226,0.97)','--ks-bg-soft-2':'rgba(248,238,215,1.0)','--ks-card-sub':'rgba(244,232,206,0.98)','--ks-border':'rgba(140,88,18,0.30)','--ks-border-strong':'rgba(160,100,20,0.62)','--ks-text':'#271608','--ks-text-muted':'#7a5030','--ks-accent':'#8b5814','--ks-accent-2':'#740001','--ks-button-text':'#f8f0de','--ks-danger':'#aa2020','--ks-sticky-bg':'rgba(244,232,202,0.97)','--ks-sticky-bg2':'rgba(238,224,192,0.98)' }
  },
};

const FONT_PRESETS = {
  default:   { id: 'default',   name: 'Default',        stack: "'Cormorant Garamond', 'Crimson Pro', Georgia, serif",   monoStack: "'Bebas Neue', sans-serif" },
  calibri:   { id: 'calibri',   name: 'Calibri',         stack: "'Calibri', 'Segoe UI', sans-serif",                    monoStack: "'Bebas Neue', sans-serif" },
  arial:     { id: 'arial',     name: 'Arial',           stack: "Arial, 'Helvetica Neue', sans-serif",                  monoStack: "'Bebas Neue', sans-serif" },
  crimson:   { id: 'crimson',   name: 'Crimson Pro',     stack: "'Crimson Pro', Georgia, serif",                        monoStack: "'Bebas Neue', sans-serif" },
  comicsans: { id: 'comicsans', name: 'Comic Sans MS',   stack: "'Comic Sans MS', 'Comic Sans', cursive",               monoStack: "'Bebas Neue', sans-serif" },
  inkfree:   { id: 'inkfree',   name: 'Ink Free',        stack: "'Ink Free', 'Segoe Script', cursive",                  monoStack: "'Bebas Neue', sans-serif" },
  caveatbrush: { id: 'caveatbrush', name: 'Caveat Brush', stack: "'Caveat Brush', 'Segoe Script', cursive",             monoStack: "'Bebas Neue', sans-serif" },
};

function skinVarsCss(selectedSkin, selectedFont) {
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
:root{
--ks-overlay-dark:radial-gradient(circle at center,rgba(80,20,120,0.96),rgba(10,4,28,0.98));
--ks-overlay-doubt:radial-gradient(circle at center,rgba(60,15,100,0.96),rgba(10,4,28,0.97));
--ks-overlay-fight:radial-gradient(circle at center,rgba(100,20,140,0.96),rgba(15,5,35,0.97));
--ks-overlay-doom:radial-gradient(circle at center,rgba(30,8,70,0.97),rgba(5,2,15,0.99));
--ks-modal-overlay:rgba(20,6,40,0.82);
--ks-modal-dark-overlay:rgba(10,4,28,0.94);
--ks-popup-accent:#e070d0;
--ks-glow-orb:rgba(180,80,220,0.50);
--ks-toast-info-bg:rgba(44,10,68,0.92);
--ks-toast-warn-bg:rgba(60,12,88,0.88);
--ks-toast-info-border:rgba(200,80,220,0.70);
--ks-toast-warn-border:rgba(230,120,255,0.60);
}
.ks-gold{color:#e070d0!important}
.ks-gold-bg{background:linear-gradient(135deg,#b030b0,#6010a0)!important;box-shadow:0 0 18px rgba(200,80,230,0.65)!important}
.ks-card{background:rgba(44,16,68,0.90)!important;border-color:rgba(200,80,220,0.32)!important;box-shadow:0 0 12px rgba(160,60,200,0.30)!important}
.ks-border-sub{border-color:rgba(200,80,220,0.20)!important}
.ks-live-row td,.ks-live-table th{border-color:rgba(200,80,220,0.18)!important}
.ks-live-row:hover td{background:rgba(80,20,110,0.35)!important}
`;
  }
  if (selectedSkin === 'brawlblue') {
    css += `
:root{
--ks-overlay-dark:radial-gradient(circle at center,rgba(10,50,130,0.96),rgba(3,10,42,0.98));
--ks-overlay-doubt:radial-gradient(circle at center,rgba(8,40,110,0.96),rgba(3,10,42,0.97));
--ks-overlay-fight:radial-gradient(circle at center,rgba(10,70,160,0.96),rgba(3,14,54,0.97));
--ks-overlay-doom:radial-gradient(circle at center,rgba(5,25,70,0.97),rgba(2,6,24,0.99));
--ks-modal-overlay:rgba(3,12,42,0.82);
--ks-modal-dark-overlay:rgba(3,10,42,0.94);
--ks-popup-accent:#40d8f0;
--ks-glow-orb:rgba(40,180,240,0.50);
--ks-toast-info-bg:rgba(6,28,80,0.92);
--ks-toast-warn-bg:rgba(8,36,100,0.88);
--ks-toast-info-border:rgba(40,180,240,0.70);
--ks-toast-warn-border:rgba(80,210,255,0.60);
}
.ks-gold{color:#40d8f0!important}
.ks-gold-bg{background:linear-gradient(135deg,#1a96d8,#0e5cac)!important;box-shadow:0 0 18px rgba(40,180,240,0.65)!important}
.ks-card{background:rgba(8,38,90,0.90)!important;border-color:rgba(40,180,240,0.30)!important;box-shadow:0 0 12px rgba(30,140,200,0.28)!important}
.ks-border-sub{border-color:rgba(40,180,240,0.18)!important}
.ks-live-row td,.ks-live-table th{border-color:rgba(40,180,240,0.14)!important}
.ks-live-row:hover td{background:rgba(10,60,130,0.40)!important}
`;
  }
  if (selectedSkin === 'harrypotter') {
    css += `
.ks-gold{color:#6b3e0c!important}
.ks-cream{color:#271608!important}
.ks-muted{color:#7a5030!important}
.ks-gold-bg{background:linear-gradient(135deg,#8b5814,#740001)!important;color:#f8f0de!important}
.ks-card{background:rgba(252,244,226,0.96)!important;border-color:rgba(150,95,22,0.30)!important}
.ks-card:hover{border-color:rgba(150,95,22,0.55)!important}
.ks-card-prom{background:rgba(248,238,210,0.97)!important;border-color:rgba(160,100,20,0.55)!important}
.ks-border-sub{border-color:rgba(150,95,22,0.22)!important}
.ks-live-row td,.ks-live-table th{border-color:rgba(150,95,22,0.20)!important}
.ks-live-row:hover td{background:rgba(238,220,188,0.55)!important}
.ks-live-pos-1{color:#6b3e0c!important;border-color:rgba(140,88,18,0.55)!important}
.ks-live-pos-2{color:#7a5030!important}
.ks-live-pos-3{color:#8a6040!important}
.ks-divider{background:linear-gradient(90deg,transparent,rgba(140,88,18,0.38),transparent)!important}
:root{
--ks-overlay-dark:radial-gradient(circle at center,rgba(120,80,15,0.94),rgba(30,18,5,0.97));
--ks-overlay-doubt:radial-gradient(circle at center,rgba(100,60,10,0.94),rgba(28,16,4,0.97));
--ks-overlay-fight:radial-gradient(circle at center,rgba(140,60,10,0.95),rgba(35,18,4,0.97));
--ks-overlay-doom:radial-gradient(circle at center,rgba(80,15,10,0.97),rgba(20,6,4,0.99));
--ks-modal-overlay:rgba(30,18,5,0.78);
--ks-modal-dark-overlay:rgba(25,15,4,0.94);
--ks-popup-accent:#c49a28;
--ks-glow-orb:rgba(196,154,40,0.45);
--ks-toast-info-bg:rgba(44,28,6,0.94);
--ks-toast-warn-bg:rgba(55,30,4,0.90);
--ks-toast-info-border:rgba(160,100,20,0.70);
--ks-toast-warn-border:rgba(200,140,30,0.60);
}
`;
  }
  return css;
}

const DEFAULT_QUICK_VALUES = [50, 100, 300, 400, 500, 600, 1000, 1500, 2000];

const VIEW_MODE_LABELS = {
  basic: 'Klasický',
  basicSimplified: 'Klasický zjednodušený',
  observer: 'Pozorovateľ',
  observerSimplified: 'Pozorovateľ zjednodušený',
  recorder: 'Zapisovateľ',
};
const PENALTY_VALUE = -1000;

const TARGET_OPTIONS = [
  { value: 5000,  label: 'Krátka hra',   sub: 'do 5 000 bodov' },
  { value: 10000, label: 'Klasická hra', sub: 'do 10 000 bodov' },
];

// Funny hlášky — { msg, emoji, variant }
const FUNNY_MESSAGES = [
  { msg: 'Čo ti to rieši?!',         emoji: '🤨', variant: 'doubt' },
  { msg: 'Čo ti to rieši?!',         emoji: '🤨', variant: 'doubt' },
  { msg: 'Tak bojuj nééé?!?',        emoji: '😄', variant: 'doubt' },
  { msg: 'Tak bojuj nééé?!?',        emoji: '😄', variant: 'fight' },
  { msg: 'Také mrviny? Vážne?',      emoji: '😀', variant: 'doubt' },
  { msg: 'Toto ťa nezachráni…',      emoji: '💀', variant: 'doom' },
  { msg: 'Tak takto sa hra nevyhráva!', emoji: '🎭', variant: 'fight' },
  { msg: 'Hej majster… si si istý?', emoji: '😆', variant: 'doubt' },
  { msg: 'Riskni to konečne!',       emoji: '🎲', variant: 'fight' },
];

// Kategórie pravidiel
const RULE_CATEGORIES = [
  { id: 'cat-basic',   title: 'Bodové hodnoty kociek', subtitle: 'Samostatné kocky',         ruleIds: ['r1', 'r2'] },
  { id: 'cat-trio',    title: 'Trojice rovnakých',     subtitle: 'Tri rovnaké kocky',        ruleIds: ['r3', 'r4', 'r5', 'r6', 'r7', 'r8'] },
  { id: 'cat-special', title: 'Špeciálne kombinácie',  subtitle: 'Postupka a tri páry',      ruleIds: ['r9', 'r10'] },
  { id: 'cat-multi',   title: 'Násobky kociek',        subtitle: 'Štyri, päť, šesť rovnakých', ruleIds: ['r11', 'r12', 'r13'] },
];

const SETTING_RULE_IDS = ['r14', 'r15', 'r16', 'r17', 'r18'];

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

const POPUP_CONFIG = {
  POPUP_DISPLAY_DURATION: 2000,
  QUEUE_SIZE: 1,
  VERTICAL_OFFSET: '0px',
  OPACITY: 0.92,
};

const DEFAULT_RULES = [
  { id: 'r1',  name: 'Jednotka',         description: 'Samostatná kocka s hodnotou 1',                         points: 100,   type: 'numeric', dice: [1] },
  { id: 'r2',  name: 'Päťka',            description: 'Samostatná kocka s hodnotou 5',                         points: 50,    type: 'numeric', dice: [5] },
  { id: 'r3',  name: 'Tri jednotky',     description: 'Trojica jednotiek',                                     points: 1000,  type: 'numeric', dice: [1,1,1] },
  { id: 'r4',  name: 'Tri dvojky',       description: 'Trojica dvojok',                                        points: 200,   type: 'numeric', dice: [2,2,2] },
  { id: 'r5',  name: 'Tri trojky',       description: 'Trojica trojok',                                        points: 300,   type: 'numeric', dice: [3,3,3] },
  { id: 'r6',  name: 'Tri štvorky',      description: 'Trojica štvoriek',                                      points: 400,   type: 'numeric', dice: [4,4,4] },
  { id: 'r7',  name: 'Tri päťky',        description: 'Trojica päťok',                                         points: 500,   type: 'numeric', dice: [5,5,5] },
  { id: 'r8',  name: 'Tri šestky',       description: 'Trojica šestiek',                                       points: 600,   type: 'numeric', dice: [6,6,6] },
  { id: 'r9',  name: 'Postupka 1–6',     description: 'Šesť kociek za sebou: 1·2·3·4·5·6',                     points: 2000,  type: 'numeric', dice: [1,2,3,4,5,6] },
  { id: 'r10', name: 'Tri páry',         description: 'Tri rôzne páry kociek',                                 points: 1000,  type: 'numeric', dice: [2,2,4,4,6,6] },
  { id: 'r11', name: 'Štyri rovnaké',    description: 'Štyri rovnaké kocky',                                   points: 0,     type: 'select', options: ['Dvojnásobok trojice', 'Pevná hodnota'], selected: 'Dvojnásobok trojice', dice: [3,3,3,3] },
  { id: 'r12', name: 'Päť rovnakých',    description: 'Päť rovnakých kociek',                                  points: 0,     type: 'select', options: ['Štvornásobok trojice', 'Pevná hodnota'], selected: 'Štvornásobok trojice', dice: [4,4,4,4,4] },
  { id: 'r13', name: 'Šesť rovnakých',   description: 'Všetkých šesť kociek rovnakých',                        points: 0,     type: 'select', options: ['Automatická výhra', 'Pevná hodnota 3000'], selected: 'Automatická výhra', dice: [5,5,5,5,5,5] },
  { id: 'r14', name: 'Minimálny odpis (prvý zápis)', description: 'Prvý zápis hráča v turnaji musí byť aspoň 300 bodov. Hru sa dá začať aj čiarkou (—) bez bodov.', points: 300, type: 'numeric', dice: [] },
  { id: 'r15', name: 'Cieľové skóre',    description: 'Body potrebné na výhru turnaja. Klasická hra do 10 000 alebo krátka hra do 5 000.', points: 10000, type: 'numeric', dice: [] },
  { id: 'r16', name: 'Nič nehodené',     description: 'Hod, pri ktorom nepadla žiadna bodujúca kombinácia – ani jednotka, ani päťka, ani trojica, ani postupka. Z aktuálneho skóre sa odpočíta 1 000 bodov.', points: -1000, type: 'numeric', dice: [2,3,4,6] },
  { id: 'r17', name: 'Prekročenie cieľa', description: 'Ak by hod prekročil cieľové skóre, body sa nezapíšu a zapíše sa automaticky čiarka (—).', points: 0, type: 'select', options: ['Automatická čiarka', 'Hod sa neuznáva'], selected: 'Automatická čiarka', dice: [] },
  { id: 'r18', name: 'Režim potvrdenia víťazstva', description: 'Určuje, či sa po presnom dosiahnutí cieľa ešte vyžaduje overenie víťazstva v ďalšom ťahu ničnehodením (čiarkou), alebo sa výhra uzná okamžite po dokončení kola.', points: 0, type: 'select', options: ['Áno', 'Nie'], selected: 'Áno', dice: [] },
];

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
    gold:    'ks-gold-bg hover:brightness-110 disabled:opacity-30 disabled:cursor-not-allowed ks-text-on-accent',
    outline: 'border ks-border-accent ks-gold hover:bg-amber-900/20 disabled:opacity-30 disabled:cursor-not-allowed',
    ghost:   'ks-cream hover:bg-stone-800/50 disabled:opacity-30',
    danger:  'border border-red-900/60 ks-text-accent hover:bg-red-950/40 disabled:opacity-30',
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
    <div className="flex items-center justify-between px-5 py-4 border-b ks-border-sub">
      {onBack ? (
        <button onClick={onBack} className="ks-press ks-cream flex items-center gap-1 -ml-2 px-2 py-1">
          <ChevronLeft size={20} />
          <span className="ks-body">Späť</span>
        </button>
      ) : <div className="w-16" />}
      <h2 className="ks-display ks-gold text-xl font-semibold text-center">{title}</h2>
      <div className="min-w-16 flex justify-end">{right}</div>
    </div>
  );
}

function Toast({ msg, kind, onClose }) {
  const colorMap = {
    info:      'ks-border-accent bg-amber-950/90 ks-cream',
    warn:      'border-amber-600/70 bg-amber-900/80 ks-text-accent',
    overshoot: 'border-red-600/70 bg-gradient-to-b from-red-900 to-red-950 text-red-50',
  };
  const Icon = kind === 'overshoot' ? AlertTriangle : kind === 'warn' ? AlertCircle : Check;
  return (
    <div className="fixed top-2 left-3 right-3 z-50 ks-slide-down ks-popup-anchor" style={{ pointerEvents: 'none' }}>
      <div className={`max-w-md mx-auto p-3 rounded-sm border ${colorMap[kind] || colorMap.info} flex items-start gap-2 shadow-2xl`} style={{ pointerEvents: 'auto', opacity: 'var(--ks-popup-opacity, 0.92)' }}>
        <Icon size={20} className="shrink-0 mt-0.5" />
        <div className="ks-body flex-1 text-sm font-medium">{msg}</div>
        <button aria-label="Zatvoriť" onClick={onClose} className="opacity-70 hover:opacity-100"><X size={16} /></button>
      </div>
    </div>
  );
}

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
      <path d="M 16 36 L 24 60 L 72 60 L 80 36 L 66 48 L 48 24 L 30 48 Z"
            fill="url(#crownGold)" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <rect x="22" y="60" width="52" height="8" fill={color} stroke={color} strokeWidth="1" rx="1" />
      <circle cx="48" cy="32" r="3.5" fill="#fff" stroke={color} strokeWidth="1" />
      <circle cx="20" cy="42" r="2.5" fill="#fff" stroke={color} strokeWidth="1" />
      <circle cx="76" cy="42" r="2.5" fill="#fff" stroke={color} strokeWidth="1" />
      <line x1="10" y1="78" x2="86" y2="18" stroke="#000" strokeWidth="7" strokeLinecap="round" opacity="0.5" />
      <line x1="10" y1="78" x2="86" y2="18" stroke={strikeColor} strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function SimplifiedResult({ kind, title, subtitle, onClose, actionLabel }) {
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
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full ks-funny-orb"
             style={{ background: `radial-gradient(circle, ${style.glow}, transparent 70%)` }} />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full ks-funny-orb"
             style={{ background: `radial-gradient(circle, ${style.glow}, transparent 70%)`, animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-10 w-32 h-32 rounded-full ks-funny-orb"
             style={{ background: `radial-gradient(circle, ${style.glow}, transparent 70%)`, animationDelay: '0.5s' }} />
      </div>

      <div className="ks-funny relative z-10 text-center max-w-sm" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="h-px flex-1 max-w-[60px]" style={{ background: `linear-gradient(90deg, transparent, ${style.labelColor})` }} />
          <span style={{ color: style.labelColor }} className="text-xs">✦</span>
          <div className="h-px flex-1 max-w-[60px]" style={{ background: `linear-gradient(90deg, ${style.labelColor}, transparent)` }} />
        </div>

        <div className="mb-3 ks-funny-emoji flex justify-center" style={{ filter: `drop-shadow(0 4px 16px ${style.glow})` }}>
          {emoji === 'strikethrough-crown'
            ? <StrikethroughCrown size={112} color="#d4b86a" strikeColor="#c44848" />
            : <span className="text-7xl">{emoji}</span>}
        </div>

        <div className="ks-mono text-xs mb-3 tracking-widest" style={{ color: style.labelColor }}>
          {style.label}
        </div>

        <div className="ks-display text-5xl font-bold ks-cream leading-tight px-4"
             style={{ textShadow: `0 4px 24px ${style.glow}, 0 0 40px ${style.glow}` }}>
          {msg}
        </div>

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
    info: 'border-amber-800/30 bg-amber-950/30 ks-text-accent/90',
    warn: 'border-red-800/40 bg-red-950/30 ks-text-accent',
    gold: 'border-amber-600/60 bg-amber-900/30 ks-text-accent',
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
  const [selectedFont, setSelectedFont] = useState('default');
  const [soundsEnabled, setSoundsEnabled] = useState(true);
  const [hapticEnabled, setHapticEnabled] = useState(true);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [quickValues, setQuickValues] = useState(DEFAULT_QUICK_VALUES);
  const [knownPlayers, setKnownPlayers] = useState(['Marcel', 'Robo', 'Tomáš', 'Jiří', 'Olino', 'Viki', 'Dedko', 'Jarka']);
  const [extensions, setExtensions] = useState(DEFAULT_EXTENSIONS);
  const [lang, setLang] = useState('sk');

  const [scoreDisplayMode, setScoreDisplayMode] = useState('delta');
  const [tournamentViewMode, setTournamentViewMode] = useState('basic');
  const [funnyWindowsDisplayMode, setFunnyWindowsDisplayMode] = useState('standard');
  const [adminSettings, setAdminSettings] = useState(DEFAULT_ADMIN_SETTINGS);
  const [showAdminPin, setShowAdminPin] = useState(false);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  // ─── Android TV / diaľkový ovládač ────────────────────────────────────
  // Šípky presúvajú focus naprieč celou obrazovkou (funguje globálne, bez
  // potreby upravovať jednotlivé screens); po zmene `view` sa focus resetuje
  // na prvý dostupný prvok danej obrazovky.
  useDpadNavigation(true, view);
  // Rozlíši TV/klávesnicové ovládanie od dotyku/myši — riadi viditeľnosť
  // focus ringu v app.css (nesmie rušiť bežných mobilných používateľov).
  useInputModality();

  // Hardware/diaľkové "Späť" — Android back button (Capacitor), Android TV
  // remote, Escape na klávesnici. Vždy posúva presne o 1 úroveň vyššie,
  // rovnako ako klik na on-screen "Späť" tlačidlo danej obrazovky.
  useEffect(() => {
    let removeCapListener;
    CapacitorApp.addListener('backButton', () => { triggerBack(); })
      .then(sub => { removeCapListener = () => sub.remove(); })
      .catch(() => {});

    function onKeyDown(e) {
      const el = document.activeElement;
      const isEditable = !!el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable);
      const isBackKey = e.key === 'Escape' || e.key === 'GoBack' || e.key === 'BrowserBack'
        || (e.key === 'Backspace' && !isEditable);
      if (!isBackKey) return;
      e.preventDefault();
      triggerBack();
    }
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      removeCapListener?.();
    };
  }, []);

  useBackHandler(() => {
    if (showAdminPin) { setShowAdminPin(false); return; }
    if (showEasterEgg) { setShowEasterEgg(false); return; }
    switch (view) {
      case 'settings':
        setView('menu');
        return;
      case 'admin':
      case 'viewModes':
      case 'visual':
      case 'rulesEditor':
        setView('settings');
        return;
      case 'archive':
        setView(archiveReturnTo);
        return;
      case 'scan':
      case 'archiveDetail':
        setView('archive');
        return;
      case 'menu':
        if (Capacitor.isNativePlatform()) CapacitorApp.exitApp();
        return;
      default:
        // newTournament, tournament, rules, online, playerStats
        setView('menu');
    }
  }, true);

  const { setRoomId: setOnlineRoomId, setUid: setOnlineUid, setStatus: setOnlineStatus, setRoomState: setOnlineRoomState, roomId: onlineRoomId, uid: onlineUid, roomState: onlineRoomState } = useOnlineStore();

  // ─── Persistent Firestore listener — must live in App, not OnlineScreen,
  //     so it survives navigation away from the OnlineScreen component.
  //     Rule 5: permission-denied means the recorder deleted the room while
  //     the observer was watching. Silently leave — don't show the error icon.
  useRoomSubscription(onlineRoomId, setOnlineRoomState, (err) => {
    if (err.code === 'permission-denied') {
      useOnlineStore.getState().reset();
      setActive(null);
      setView('menu');
    } else {
      setOnlineStatus('error');
    }
  });

  // Note: we intentionally do NOT clear `active` when leaving a room.
  // The inactivity timer calls store.reset() after 12 h of idle, which
  // disconnects the listener — but the local game data should survive so
  // the user can reconnect and continue without losing their scoreboard.

  // ─── Presence heartbeat ───────────────────────────────────────────────────
  // Updates lastSeen every 15 s so other devices can show accurate online state.
  // Fires immediately on connect so observers see us as online without waiting.
  useEffect(() => {
    if (!onlineRoomId || !onlineUid) return;
    let cancelled = false;
    const beat = () => {
      if (cancelled) return;
      import('./online/updatePresence.ts').then(({ updatePresence }) => {
        updatePresence(onlineRoomId, onlineUid).catch(() => {});
      });
    };
    beat();
    const id = setInterval(beat, 15_000);
    return () => {
      cancelled = true;
      clearInterval(id);
      // Best-effort offline mark on disconnect
      import('./online/updatePresence.ts').then(({ markOffline }) => {
        markOffline(onlineRoomId, onlineUid).catch(() => {});
      });
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onlineRoomId, onlineUid]);

  // ─── Screen Wake Lock ─────────────────────────────────────────────────────
  // Keeps the display on while the app is in the foreground — same behaviour
  // as video players. Released automatically when the page becomes hidden,
  // re-acquired when it becomes visible again.
  useEffect(() => {
    if (!('wakeLock' in navigator)) return;
    let lock = null;
    let released = false;

    const acquire = async () => {
      if (released || document.visibilityState !== 'visible') return;
      try {
        lock = await navigator.wakeLock.request('screen');
        lock.addEventListener('release', () => { lock = null; });
      } catch {}
    };

    const onVisibility = () => {
      if (document.visibilityState === 'visible') acquire();
    };

    acquire();
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      released = true;
      document.removeEventListener('visibilitychange', onVisibility);
      lock?.release().catch(() => {});
    };
  }, []);

  useEffect(() => {
    (async () => {
      try { const r = await window.storage.get('rules');       if (r?.value) setrules(JSON.parse(r.value)); }        catch {}
      try { const dm = await window.storage.get('scoreDisplayMode'); if (dm?.value) setScoreDisplayMode(JSON.parse(dm.value)); } catch {}
      try { const tvm = await window.storage.get('tournamentViewMode'); if (tvm?.value) setTournamentViewMode(JSON.parse(tvm.value)); } catch {}
      try { const fwdm = await window.storage.get('funnyWindowsDisplayMode'); if (fwdm?.value) setFunnyWindowsDisplayMode(JSON.parse(fwdm.value)); } catch {}
      try { const f = await window.storage.get('selectedFont'); if (f?.value) { const fv = JSON.parse(f.value); setSelectedFont(FONT_PRESETS[fv] ? fv : 'default'); } } catch {}
      try { const skin = await window.storage.get('selectedSkin'); if (skin?.value) { const s = JSON.parse(skin.value); setSelectedSkin(SKIN_PRESETS[s] ? s : 'classic'); } } catch {
        try { const legacySkin = localStorage.getItem('ks-skin'); if (legacySkin) setSelectedSkin(legacySkin); } catch {}
      }
      try { const se = await window.storage.get('soundsEnabled'); if (se?.value) setSoundsEnabled(JSON.parse(se.value)); } catch {}
      try { const he = await window.storage.get('hapticEnabled'); if (he?.value) setHapticEnabled(JSON.parse(he.value)); } catch {}
      try { const ae = await window.storage.get('animationsEnabled'); if (ae?.value) setAnimationsEnabled(JSON.parse(ae.value)); } catch {}
      try { const qv = await window.storage.get('quickValues'); if (qv?.value) { const parsed = JSON.parse(qv.value); if (Array.isArray(parsed) && parsed.length > 0) setQuickValues(parsed); } } catch {}
      try { const kp = await window.storage.get('knownPlayers'); if (kp?.value) { const parsed = JSON.parse(kp.value); if (Array.isArray(parsed) && parsed.length > 0) setKnownPlayers(parsed); } } catch {}
      try { const ex = await window.storage.get('extensions'); if (ex?.value) setExtensions(prev => ({ ...prev, ...JSON.parse(ex.value) })); } catch {}
      try { const lg = await window.storage.get('lang'); if (lg?.value) setLang(JSON.parse(lg.value)); } catch {}
      try { const t = await window.storage.get('tournaments'); if (t?.value) setTournaments(JSON.parse(t.value)); } catch {}
      try { const a = await window.storage.get('active');      if (a?.value) setActive(JSON.parse(a.value)); }       catch {}
      try { const as = await window.storage.get('adminSettings'); if (as?.value) setAdminSettings(JSON.parse(as.value)); } catch {}
      setLoaded(true);
    })();
  }, []);

  useEffect(() => { if (loaded) window.storage.set('scoreDisplayMode', JSON.stringify(scoreDisplayMode)).catch(() => {}); }, [scoreDisplayMode, loaded]);
  useEffect(() => { if (loaded) window.storage.set('tournamentViewMode', JSON.stringify(tournamentViewMode)).catch(() => {}); }, [tournamentViewMode, loaded]);
  useEffect(() => { if (loaded) window.storage.set('funnyWindowsDisplayMode', JSON.stringify(funnyWindowsDisplayMode)).catch(() => {}); }, [funnyWindowsDisplayMode, loaded]);
  useEffect(() => { if (loaded) window.storage.set('selectedFont', JSON.stringify(selectedFont)).catch(() => {}); }, [selectedFont, loaded]);
  useEffect(() => {
    if (!loaded) return;
    window.storage.set('selectedSkin', JSON.stringify(selectedSkin)).catch(() => {});
    try { localStorage.setItem('ks-skin', selectedSkin); } catch {}
  }, [selectedSkin, loaded]);
  useEffect(() => { if (loaded) window.storage.set('soundsEnabled', JSON.stringify(soundsEnabled)).catch(() => {}); }, [soundsEnabled, loaded]);
  useEffect(() => { if (loaded) window.storage.set('hapticEnabled', JSON.stringify(hapticEnabled)).catch(() => {}); }, [hapticEnabled, loaded]);
  useEffect(() => { if (loaded) window.storage.set('quickValues', JSON.stringify(quickValues)).catch(() => {}); }, [quickValues, loaded]);
  useEffect(() => { if (loaded) window.storage.set('knownPlayers', JSON.stringify(knownPlayers)).catch(() => {}); }, [knownPlayers, loaded]);
  useEffect(() => { if (loaded) window.storage.set('extensions', JSON.stringify(extensions)).catch(() => {}); }, [extensions, loaded]);
  useEffect(() => { if (loaded) window.storage.set('lang', JSON.stringify(lang)).catch(() => {}); }, [lang, loaded]);
  useEffect(() => { if (loaded) window.storage.set('animationsEnabled', JSON.stringify(animationsEnabled)).catch(() => {}); }, [animationsEnabled, loaded]);
  useEffect(() => { sounds.setEnabled(soundsEnabled); }, [soundsEnabled]);

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
  useEffect(() => { if (loaded) window.storage.set('adminSettings', JSON.stringify(adminSettings)).catch(() => {}); }, [adminSettings, loaded]);

  // ─── Inactivity auto-disconnect (12 h) ───────────────────────────────────
  const INACTIVITY_LIMIT   = 12 * 60 * 60 * 1000; // 12 hodín
  const INACTIVITY_WARNING =  2 * 60 * 1000;       // varovanie 2 min pred odpojením
  const [inactivityWarning, setInactivityWarning] = useState(false);

  const lastActivityRef = useRef(Date.now());
  useEffect(() => {
    const touch = () => {
      lastActivityRef.current = Date.now();
      setInactivityWarning(false); // user is active → dismiss warning
    };
    window.addEventListener('mousemove', touch, { passive: true });
    window.addEventListener('keydown', touch, { passive: true });
    window.addEventListener('click', touch, { passive: true });
    window.addEventListener('touchstart', touch, { passive: true });
    return () => {
      window.removeEventListener('mousemove', touch);
      window.removeEventListener('keydown', touch);
      window.removeEventListener('click', touch);
      window.removeEventListener('touchstart', touch);
    };
  }, []);
  useEffect(() => {
    if (!onlineRoomId) { setInactivityWarning(false); return; }
    const id = setInterval(() => {
      const inactive = Date.now() - lastActivityRef.current;
      if (inactive >= INACTIVITY_LIMIT) {
        setInactivityWarning(false);
        useOnlineStore.getState().reset();
      } else if (inactive >= INACTIVITY_LIMIT - INACTIVITY_WARNING) {
        setInactivityWarning(true);
      }
    }, 30_000);
    return () => clearInterval(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onlineRoomId]);

  // ─── Online real-time sync ────────────────────────────────────────────────
  //
  //  Architecture (6 rules):
  //
  //  1. GLOBAL SUBSCRIPTION — useRoomSubscription lives here (App), never in a
  //     screen component, so the listener survives navigation.
  //
  //  2. SHARED SCOREBOARD — every device may write. Kocky is a scoreboard for
  //     a physical dice game: either device legitimately records a score for
  //     whichever player is rolling, so there is no single "recorder". Writes
  //     don't collide because only one person enters a score at a time, and
  //     last-write-wins at the server resolves any overlap.
  //
  //  3. ECHO + STARTUP PROTECTION — hasPendingWrites snapshots are discarded in
  //     useRoomSubscription so onlineRoomState is always server-confirmed.
  //     hasSeenSnapshotRef blocks a device from writing before it has seen the
  //     room's state (prevents stomping on join). lastWritten*Ref is updated
  //     BEFORE the Firestore call so dedup works immediately, not only after
  //     the round-trip response. remote→local sets lastWritten*Ref too, so a
  //     device never echoes back what it just received from the peer.
  //
  //  4. DEBOUNCING — 300 ms for game state (activeTournament), 500 ms for
  //     archive and skin. Timer is cancelled (clearTimeout in return) on every
  //     re-run so rapid changes collapse into one write.
  //
  //  5. SMART ERROR HANDLING — permission-denied from onSnapshot means the room
  //     was deleted while a peer was watching. It is handled silently: reset
  //     store, clear local state, return to menu. All other errors set
  //     status='error' (shows the error icon).
  //
  //  6. CLEANUP ON LEAVE — unsubscribe is handled by useRoomSubscription's
  //     effect cleanup (roomId → null). Local game data is intentionally kept
  //     so the user doesn't lose their scoreboard on an inactivity disconnect.

  const syncTournamentsRef = useRef(tournaments);
  const syncSkinRef        = useRef(selectedSkin);

  // Assign in render body — debounced timers see current values at fire time.
  syncTournamentsRef.current = tournaments;
  syncSkinRef.current        = selectedSkin;

  // Track last value written to / received from Firestore (per field).
  // remote→local sets these so a device never echoes back what it received.
  const lastWrittenActiveJson       = useRef(null);
  const lastWrittenTournamentsJson  = useRef(null);
  const lastWrittenSkinRef          = useRef(null);

  // Counts activeTournament writes currently in-flight to Firestore.
  // remote→local is suppressed while this is > 0 — prevents any Firestore
  // snapshot (presence update, intermediate echo) from reverting local state
  // while our write hasn't been confirmed yet.
  const pendingWriteCountRef = useRef(0);

  // Reset "last written" bookmarks whenever we join a different room.
  useEffect(() => {
    lastWrittenActiveJson.current      = null;
    lastWrittenTournamentsJson.current = null;
    lastWrittenSkinRef.current         = null;
    pendingWriteCountRef.current       = 0;
    // Eagerly load the write module so syncActiveNow never has an async gap
    // between setting lastWrittenActiveJson and actually calling updateDoc.
    if (onlineRoomId) import('./online/updateGameState.ts').catch(() => {});
  }, [onlineRoomId]);

  // Flag: has at least one confirmed snapshot arrived?
  // Guards against writing before we've seen the room's current state on join.
  const hasSeenSnapshotRef = useRef(false);
  useEffect(() => {
    if (onlineRoomState) hasSeenSnapshotRef.current = true;
  }, [onlineRoomState]);
  useEffect(() => { hasSeenSnapshotRef.current = false; }, [onlineRoomId]);

  // Stable ref for the current room ID — readable inside callbacks without
  // capturing stale closure values across renders.
  const onlineRoomIdRef = useRef(onlineRoomId);
  onlineRoomIdRef.current = onlineRoomId;

  // ── syncWriteError — viditeľný indikátor zlyhania Firestore write ──────────
  const [syncWriteError, setSyncWriteError] = useState(null);

  // ── syncActiveNow — action-triggered write ────────────────────────────────
  //
  // Writes activeTournament to Firestore IMMEDIATELY when called.
  // pendingWriteCountRef is incremented before the write starts and
  // decremented when it finishes (success or failure). The remote→local
  // effect checks this counter and skips processing while > 0, preventing
  // any Firestore snapshot (presence updates, echoes) from reverting local
  // state while our write is in-flight.
  const syncActiveNow = useCallback((newState) => {
    const roomId = onlineRoomIdRef.current;
    if (!roomId || !hasSeenSnapshotRef.current) return;
    const newJson = JSON.stringify(newState ?? null);
    if (newJson === lastWrittenActiveJson.current) return; // no-op if unchanged
    pendingWriteCountRef.current += 1;
    lastWrittenActiveJson.current = newJson;
    import('./online/updateGameState.ts').then(({ updateGameState }) => {
      // Store as a JSON STRING — the tournament object has nested arrays
      // (rounds[] of score arrays) and Firestore rejects raw nested arrays.
      updateGameState(roomId, { activeTournament: newJson })
        .then(() => {
          pendingWriteCountRef.current = Math.max(0, pendingWriteCountRef.current - 1);
          if ((window).__ksVerboseFirebase) console.log('[sync] write OK, pending:', pendingWriteCountRef.current);
        })
        .catch((e) => {
          pendingWriteCountRef.current = Math.max(0, pendingWriteCountRef.current - 1);
          console.error('[sync] activeTournament write FAILED:', e.code, e.message);
          lastWrittenActiveJson.current = null; // allow revert to Firestore truth
          setSyncWriteError(e.code || 'write-failed');
        });
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // stable — reads only refs

  // ── activeTournament ─────────────────────────────────────────────────────

  // Remote → local: ALL devices, fires on every confirmed snapshot.
  // Guards:
  //  1. pendingWriteCountRef > 0  — our write is in-flight; any snapshot that
  //     arrives now carries the pre-write Firestore state. Skip it entirely.
  //  2. JSON comparison vs lastWrittenActiveJson — skip echoes of our own writes.
  useEffect(() => {
    if (!onlineRoomId || !onlineRoomState) return;
    if (pendingWriteCountRef.current > 0) {
      if ((window).__ksVerboseFirebase) console.log('[sync] remote→local SKIP — write in-flight, pending:', pendingWriteCountRef.current);
      return;
    }
    const remoteRaw = onlineRoomState.activeTournament;
    if (remoteRaw === undefined) return; // field not set yet (fresh room)
    // remoteRaw is a JSON string (new format) or a raw object/null (legacy).
    const remoteJson = typeof remoteRaw === 'string'
      ? remoteRaw
      : JSON.stringify(remoteRaw ?? null);
    if (remoteJson === lastWrittenActiveJson.current) return; // already in sync
    if ((window).__ksVerboseFirebase) console.log('[sync] remote→local APPLY — prev len:', lastWrittenActiveJson.current?.length, '→ new len:', remoteJson.length);
    lastWrittenActiveJson.current = remoteJson;
    let parsed = null;
    try { parsed = remoteJson ? JSON.parse(remoteJson) : null; } catch { parsed = null; }
    setActive(parsed);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onlineRoomId, onlineRoomState]);

  // ── tournaments (archive) ────────────────────────────────────────────────

  useEffect(() => {
    if (!onlineRoomId || !onlineRoomState) return;
    const remoteRaw = onlineRoomState.syncedTournaments;
    if (remoteRaw === undefined) return;
    // remoteRaw is a JSON string (new format) or a raw array (legacy).
    const remoteJson = typeof remoteRaw === 'string'
      ? remoteRaw
      : JSON.stringify(remoteRaw ?? []);
    if (remoteJson === lastWrittenTournamentsJson.current) return;
    lastWrittenTournamentsJson.current = remoteJson;
    let parsed = [];
    try { parsed = remoteJson ? JSON.parse(remoteJson) : []; } catch { parsed = []; }
    setTournaments(Array.isArray(parsed) ? parsed : []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onlineRoomId, onlineRoomState]);

  useEffect(() => {
    if (!loaded || !onlineRoomId) return;
    if (!hasSeenSnapshotRef.current) return;
    const myJson = JSON.stringify(tournaments ?? []);
    if (myJson === lastWrittenTournamentsJson.current) return;
    const timer = setTimeout(() => {
      const cur = syncTournamentsRef.current ?? [];
      const curJson = JSON.stringify(cur);
      if (curJson === lastWrittenTournamentsJson.current) return;
      lastWrittenTournamentsJson.current = curJson;
      import('./online/updateGameState.ts').then(({ updateGameState }) => {
        // Store as a JSON STRING — archived tournaments contain nested arrays.
        updateGameState(onlineRoomId, { syncedTournaments: curJson }).catch((e) => {
          console.error('[sync] tournaments write failed:', e);
          lastWrittenTournamentsJson.current = null;
        });
      });
    }, 500);
    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tournaments, onlineRoomId, loaded]);

  // ── selectedSkin ─────────────────────────────────────────────────────────

  useEffect(() => {
    if (!onlineRoomId || !onlineRoomState) return;
    const remote = onlineRoomState.selectedSkin;
    if (!remote || remote === lastWrittenSkinRef.current) return;
    if (SKIN_PRESETS[remote]) {
      lastWrittenSkinRef.current = remote;
      setSelectedSkin(remote);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onlineRoomId, onlineRoomState]);

  useEffect(() => {
    if (!loaded || !onlineRoomId) return;
    if (!hasSeenSnapshotRef.current) return;
    if (selectedSkin === lastWrittenSkinRef.current) return;
    const timer = setTimeout(() => {
      const cur = syncSkinRef.current;
      if (cur === lastWrittenSkinRef.current) return;
      lastWrittenSkinRef.current = cur;
      import('./online/updateGameState.ts').then(({ updateGameState }) => {
        updateGameState(onlineRoomId, { selectedSkin: cur }).catch((e) => {
          console.error('[sync] selectedSkin write failed:', e);
          lastWrittenSkinRef.current = null;
        });
      });
    }, 500);
    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSkin, onlineRoomId, loaded]);

  // ── knownPlayers ↔ Firestore room sync ───────────────────────────────────
  const lastWrittenKnownPlayersRef = useRef(null);
  const syncKnownPlayersRef = useRef(knownPlayers);
  useEffect(() => { syncKnownPlayersRef.current = knownPlayers; }, [knownPlayers]);

  // Read from room
  useEffect(() => {
    if (!onlineRoomId || !onlineRoomState) return;
    const remoteRaw = onlineRoomState.knownPlayers;
    if (!remoteRaw || remoteRaw === lastWrittenKnownPlayersRef.current) return;
    try {
      const parsed = JSON.parse(remoteRaw);
      if (Array.isArray(parsed)) {
        lastWrittenKnownPlayersRef.current = remoteRaw;
        setKnownPlayers(parsed);
      }
    } catch {}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onlineRoomId, onlineRoomState]);

  // Write to room
  useEffect(() => {
    if (!loaded || !onlineRoomId) return;
    if (!hasSeenSnapshotRef.current) return;
    const newJson = JSON.stringify(knownPlayers);
    if (newJson === lastWrittenKnownPlayersRef.current) return;
    const timer = setTimeout(() => {
      const cur = syncKnownPlayersRef.current;
      const curJson = JSON.stringify(cur);
      if (curJson === lastWrittenKnownPlayersRef.current) return;
      lastWrittenKnownPlayersRef.current = curJson;
      import('./online/updateGameState.ts').then(({ updateGameState }) => {
        updateGameState(onlineRoomId, { knownPlayers: curJson }).catch((e) => {
          console.error('[sync] knownPlayers write failed:', e);
          lastWrittenKnownPlayersRef.current = null;
        });
      });
    }, 500);
    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [knownPlayers, onlineRoomId, loaded]);

  const minWriteOff = useMemo(() => {
    const r = rules.find(x => x.id === 'r14');
    return r ? Number(r.points) || 300 : 300;
  }, [rules]);

  const effectiveMinWriteOff = adminSettings.minWriteOffOverride ?? minWriteOff;

  useEffect(() => {
    window.__ksVerboseFirebase = !!adminSettings.verboseFirebase;
  }, [adminSettings.verboseFirebase]);

  
  // === Stable callbacks (prevent infinite loops) ===
  const handleMenuClick = useCallback(() => setView('menu'), []);
  
  const handleToggleScoreMode = useCallback(() => {
    setScoreDisplayMode(m => m === 'delta' ? 'cumulative' : 'delta');
  }, []);

  // ─── Undo stack (max 5 krokov) ───────────────────────────────────────────
  const [undoStack, setUndoStack] = useState([]);
  const activeRef = useRef(null);
  useEffect(() => { activeRef.current = active; }, [active]);

  const handleUpdateActive = useCallback((updater) => {
    const snapshot = activeRef.current;
    if (snapshot) setUndoStack(s => [...s.slice(-4), snapshot]);
    // Compute new state synchronously so we can write it to Firestore immediately.
    const newState = typeof updater === 'function' ? updater(snapshot) : updater;
    setActive(newState);
    syncActiveNow(newState);
  }, [syncActiveNow]);

  const handleUndo = useCallback(() => {
    setUndoStack(s => {
      if (!s.length) return s;
      const prevState = s[s.length - 1];
      setActive(prevState);
      syncActiveNow(prevState);
      return s.slice(0, -1);
    });
  }, [syncActiveNow]);

  // Refs hold the latest function so stable callbacks never go stale
  const finishTournamentRef = useRef(null);
  const abortTournamentRef = useRef(null);
  finishTournamentRef.current = finishTournament;
  abortTournamentRef.current = abortTournament;

  const handleFinishTournament = useCallback((winner) => {
    finishTournamentRef.current(winner);
  }, []);

  const handleAbortTournament = useCallback(() => {
    abortTournamentRef.current();
  }, []);

  const handleSimulateTurn = useCallback(() => {
    if (!active) { window.alert('Žiadna aktívna hra.'); return; }
    const randomScore = (Math.floor(Math.random() * 20) + 1) * 50;
    handleUpdateActive(prev => {
      if (!prev) return prev;
      const newRounds = prev.rounds.slice();
      while (newRounds.length <= prev.currentRound) newRounds.push(new Array(prev.players.length).fill(null));
      newRounds[prev.currentRound] = [...(newRounds[prev.currentRound] || new Array(prev.players.length).fill(null))];
      newRounds[prev.currentRound][prev.currentPlayer] = randomScore;
      const nextPlayer = (prev.currentPlayer + 1) % prev.players.length;
      const roundEnded = nextPlayer === 0;
      return {
        ...prev,
        rounds: newRounds,
        currentPlayer: nextPlayer,
        currentRound: prev.currentRound + (roundEnded ? 1 : 0),
      };
    });
  }, [active, handleUpdateActive]);

  const handleExportState = useCallback(() => {
    const state = { tournaments, active, adminSettings };
    navigator.clipboard.writeText(JSON.stringify(state, null, 2)).catch(() => {});
  }, [tournaments, active, adminSettings]);

  const handleAdminCreateRoom = useCallback(async () => {
    const customId = adminSettings.roomName?.toUpperCase().trim();
    if (!customId) { window.alert('Zadaj názov miestnosti.'); return; }
    try {
      const auth = getAuth();
      await auth.authStateReady();
      if (!auth.currentUser) await signInAnonymously(auth);
      const uid = auth.currentUser.uid;
      const { roomId: rid } = await createRoom({
        hostName: 'hráč',
        selectedSkin: selectedSkin || 'classic',
        rules: rules || [],
        customRoomId: customId,
        knownPlayers,
      });
      setOnlineRoomId(rid);
      setOnlineUid(uid);
      setOnlineStatus('connected');
      setView('online');
    } catch (e) {
      window.alert(`Chyba: ${e?.message || e}`);
    }
  }, [adminSettings.roomName, rules, selectedSkin, setOnlineRoomId, setOnlineUid, setOnlineStatus]);

function startTournament(players, targetScore) {
    sounds.playStart();
    setUndoStack([]);
    const newTournament = {
      id: Date.now(),
      date: new Date().toISOString(),
      players, rounds: [],
      currentPlayer: 0, currentRound: 0,
      status: 'active',
      winner: null,
      confirmationPendingPlayer: null,
      confirmationQueue: [],
      confirmationRoundComplete: false,
      pendingDecision: null,
      targetScore, minWriteOff,
    };
    setActive(newTournament);
    syncActiveNow(newTournament);
    setView('tournament');
  }

  function updateActive(updater) {
    setActive(prev => prev ? (typeof updater === 'function' ? updater(prev) : updater) : prev);
  }

  function finishTournament(winnerIdxOrArray) {
    if (!active) return;

    const validation = computeWinners({
      ...active,
    });

    if (!validation.valid) {
      const msg = 'Turnaj nemôže byť uzatvorený — nájdené nezhody:\n\n' +
        validation.errors.join('\n') +
        '\n\nReason: ' + validation.reason;
      window.alert(msg);
      console.error('[finishTournament] Validation failed:', validation);
      return;
    }

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
      _validatedTotals: validation.totals,
    };
    sounds.playWin();
    setTournaments(prev => [finished, ...prev]);
    setActive(null);
    syncActiveNow(null);
    setViewingTournament(finished);
    setView('archiveDetail');
  }

  function abortTournament() {
    if (!active) return;
    if (!window.confirm('Naozaj chceš zrušiť rozohraný turnaj? Bude uložený do archívu ako nedokončený.')) return;
    setTournaments(prev => [{ ...active, status: 'aborted', finishedAt: new Date().toISOString() }, ...prev]);
    setActive(null);
    syncActiveNow(null);
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
    const XLSX = (await import('xlsx')).default || await import('xlsx');

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

    const mimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    const blob = new Blob([XLSX.write(wb, { bookType: 'xlsx', type: 'array' })], { type: mimeType });

    // Web Share API (súbory) — na Android/iOS v mobilnom prehliadači otvorí
    // natívny "zdieľať/uložiť do" dialóg (Súbory, Disk, WhatsApp…), rovnako
    // ako natívna appka vyššie.
    try {
      const file = new File([blob], fileName, { type: mimeType });
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: 'Export Kocky sveta',
          text: 'Exportované dáta z aplikácie Kocky sveta',
        });
        return;
      }
    } catch (e) {
      if (e?.name === 'AbortError') return; // používateľ zrušil dialóg
      console.error('Web Share export failed, skúšam ďalší spôsob:', e);
    }

    // File System Access API — desktop Chrome/Edge: skutočný "Uložiť ako"
    // dialóg s výberom priečinka.
    try {
      if (typeof window.showSaveFilePicker === 'function') {
        const handle = await window.showSaveFilePicker({
          suggestedName: fileName,
          types: [{ description: 'Excel súbor', accept: { [mimeType]: ['.xlsx'] } }],
        });
        const writable = await handle.createWritable();
        await writable.write(blob);
        await writable.close();
        return;
      }
    } catch (e) {
      if (e?.name === 'AbortError') return; // používateľ zrušil dialóg
      console.error('File System Access export failed, skúšam ďalší spôsob:', e);
    }

    // Fallback — tichý download do predvoleného priečinka prehliadača.
    try {
      XLSX.writeFile(wb, fileName);
    } catch (e) {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      setTimeout(() => URL.revokeObjectURL(url), 4000);
    }
  }

  async function importFromExcel(file) {
    try {
      const XLSX = (await import('xlsx')).default || await import('xlsx');
      const data = await file.arrayBuffer();
      const wb = XLSX.read(data, { type: 'array' });

      const imported = [];
      const skipped = [];

      for (const sheetName of wb.SheetNames) {
        if (/prehľad|prehlad|summary/i.test(sheetName)) continue;

        const ws = wb.Sheets[sheetName];
        const aoa = XLSX.utils.sheet_to_json(ws, { header: 1, defval: null, raw: true });
        if (!aoa || aoa.length < 4) {
          skipped.push(`${sheetName}: príliš krátky list`);
          continue;
        }

        const headerRow = aoa[0];
        const headerText = (headerRow && headerRow[0] ? String(headerRow[0]) : '').trim();

        const dateMatch = headerText.match(/(\d{1,2})\.\s*(\d{1,2})\.\s*(\d{4})/);
        const timeMatch = headerText.match(/(\d{1,2}):(\d{2})(?:\s*[-–—]\s*(\d{1,2}):(\d{2}))?/);
        const namesMatch = headerText.match(/[—–-]\s*(.+)$/);

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

        const cumulativeRows = [];
        for (let i = columnsRowIdx + 1; i < aoa.length; i++) {
          const row = aoa[i] || [];
          if (!row[0]) break; 
          const firstCell = String(row[0]).trim();
          if (/^max$/i.test(firstCell) || /^¤â$/i.test(firstCell) || /^suma$/i.test(firstCell)) break;
          if (/víťaz|vitaz|🏆/i.test(firstCell)) break;
          const roundNum = parseInt(firstCell, 10);
          if (!Number.isFinite(roundNum)) break;
          cumulativeRows.push(row.slice(1, 1 + players.length));
        }
        if (cumulativeRows.length === 0) {
          skipped.push(`${sheetName}: žiadne dátové riadky`);
          continue;
        }

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
                const delta = prevWasNumber ? (n - prevCum) : n;
                rounds[rIdx][pIdx] = delta;
                prevCum = n;
                prevWasNumber = true;
              }
            }
          }
        }

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

        if (winner === null) {
          const totals = players.map((_, pIdx) =>
            rounds.reduce((s, r) => s + (typeof r[pIdx] === 'number' ? r[pIdx] : 0), 0)
          );
          const maxIdx = totals.indexOf(Math.max(...totals));
          if (totals[maxIdx] >= 5000) winner = maxIdx;
        }

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
          confirmationPendingPlayer: null,
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
    setSelectedFont('default');

    await window.storage.delete('tournaments').catch(() => {});
    await window.storage.delete('selectedFont').catch(() => {});
    await window.storage.delete('active').catch(() => {});
    await window.storage.set('rules', JSON.stringify(DEFAULT_RULES)).catch(() => {});
    await window.storage.set('selectedSkin', JSON.stringify('classic')).catch(() => {});

    window.alert('Všetky dáta boli vymazané.');
  }

  return (
    <LangContext.Provider value={lang}>
    <div className="ks-bg min-h-screen ks-cream ks-body" data-skin={selectedSkin} data-animations={animationsEnabled ? 'on' : 'off'} style={{ overflowY: 'auto', WebkitOverflowScrolling: 'touch', touchAction: 'pan-y' }}>
      <style>{skinVarsCss(selectedSkin, selectedFont)}</style>
      <style>{`:root { --ks-popup-offset: ${POPUP_CONFIG.VERTICAL_OFFSET}; --ks-popup-opacity: ${POPUP_CONFIG.OPACITY}; }`}</style>
      {(selectedSkin === 'brawlstars' || selectedSkin === 'brawlblue' || selectedSkin === 'harrypotter') && animationsEnabled && <BrawlBackground skin={selectedSkin} />}

      {view === 'menu' && (
        <MainMenu
          onNew={() => setView('newTournament')}
          onArchive={() => { setArchiveReturnTo('menu'); setView('archive'); }}
          onStats={() => setView('playerStats')}
          onrules={() => setView('rules')}
          onSettings={() => setView('settings')}
          onOnline={() => setView('online')}
          onResume={active ? () => setView('tournament') : null}
          active={active}
          tournamentCount={tournaments.length}
        />
      )}
      {view === 'settings' && (
        <SettingsMenu
          onBack={() => setView('menu')}
          onOnline={() => setView('online')}
          onRulesEditor={() => setView('rulesEditor')}
          onExport={exportToExcel}
          onImport={importFromExcel}
          onClearAll={clearAllData}
          onArchive={() => { setArchiveReturnTo('settings'); setView('archive'); }}
          onScan={() => setView('scan')}
          tournamentCount={tournaments.length}
          selectedSkin={selectedSkin}
          onSkinChange={setSelectedSkin}
          selectedFont={selectedFont}
          onFontChange={setSelectedFont}
          tournamentViewMode={tournamentViewMode}
          onTournamentViewModeChange={setTournamentViewMode}
          onViewModes={() => setView('viewModes')}
          onVisualAndSkins={() => setView('visual')}
          funnyWindowsDisplayMode={funnyWindowsDisplayMode}
          onFunnyWindowsDisplayModeChange={setFunnyWindowsDisplayMode}
          onAdmin={() => setShowAdminPin(true)}
          onShowEgg={() => setShowEasterEgg(true)}
        />
      )}
      {view === 'admin' && (
        <AdminScreen
          onBack={() => setView('settings')}
          adminSettings={adminSettings}
          onAdminChange={setAdminSettings}
          tournaments={tournaments}
          active={active}
          appVersion={APP_VERSION}
          onSimulateTurn={handleSimulateTurn}
          onExportState={handleExportState}
          onCreateRoom={handleAdminCreateRoom}
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
      {view === 'visual' && (
        <VisualAndSkinScreen
          onBack={() => setView('settings')}
          selectedSkin={selectedSkin}
          onSkinChange={setSelectedSkin}
          selectedFont={selectedFont}
          onFontChange={setSelectedFont}
          tournamentViewMode={tournamentViewMode}
          onTournamentViewModeChange={setTournamentViewMode}
          onViewModes={() => setView('viewModes')}
          soundsEnabled={soundsEnabled}
          onSoundsToggle={() => setSoundsEnabled(v => !v)}
          hapticEnabled={hapticEnabled}
          onHapticToggle={() => setHapticEnabled(v => !v)}
          animationsEnabled={animationsEnabled}
          onAnimationsToggle={() => setAnimationsEnabled(v => !v)}
          extensions={extensions}
          onExtensionsChange={setExtensions}
          lang={lang}
          onLangChange={setLang}
        />
      )}
      {view === 'newTournament' && <NewTournament onBack={() => setView('menu')} onStart={startTournament} knownPlayers={knownPlayers} onKnownPlayersChange={setKnownPlayers} />}
      {view === 'tournament' && (active ? (
         <TournamentScreen
            tournament={active} rules={rules}
            onUpdate={handleUpdateActive}
            onFinish={handleFinishTournament}
            onAbort={handleAbortTournament}
            onMenu={handleMenuClick}
            scoreDisplayMode={scoreDisplayMode}
            onToggleScoreMode={handleToggleScoreMode}
            selectedSkin={selectedSkin}
            onSkinChange={setSelectedSkin}
            tournamentViewMode={tournamentViewMode}
            funnyWindowsDisplayMode={funnyWindowsDisplayMode}
            debugMode={adminSettings.debugMode}
            minWriteOffOverride={adminSettings.minWriteOffOverride}
            canUndo={undoStack.length > 0}
            onUndo={handleUndo}
            isOnline={!!onlineRoomId}
            quickValues={quickValues}
            onQuickValuesChange={setQuickValues}
            extensions={extensions}
            hapticEnabled={hapticEnabled}
          />
        ) : (
          <SafeTournamentFallback title="Turnaj sa nepodarilo načítať" />
       ))}
      {view === 'archive' && (
        <ArchiveScreen tournaments={Array.isArray(tournaments) ? tournaments : []}
          onBack={() => setView(archiveReturnTo)}
          onView={(t) => { setViewingTournament(t); setView('archiveDetail'); }}
          onDelete={(id) => { if (window.confirm('Vymazať tento turnaj z archívu?')) setTournaments(prev => prev.filter(x => x.id !== id)); }}
          onScan={() => setView('scan')}
          readOnly={archiveReturnTo === 'menu'}
        />
      )}
      {view === 'scan' && (
        <ScanImportScreen
          onBack={() => setView('archive')}
          onImport={(tournament) => {
            setTournaments(prev => [tournament, ...(Array.isArray(prev) ? prev : [])]);
            setView('archive');
          }}
        />
      )}
      {view === 'archiveDetail' && (viewingTournament ? (
        <ArchiveDetail
          tournament={viewingTournament}
          onBack={() => setView('archive')}
          onUpdate={(patch) => updateTournamentInArchive(viewingTournament.id, patch)}
          readOnly={archiveReturnTo === 'menu'}
          scoreDisplayMode={scoreDisplayMode}
          onToggleScoreMode={handleToggleScoreMode}
          selectedSkin={selectedSkin}
        />
      ) : (
        <SafeTournamentFallback title="Dáta turnaja sa nepodarilo načítať" />
      ))}
      {view === 'rules' && <RulesView rules={rules} onBack={() => setView('menu')} />}
      {view === 'online' && <OnlineScreen onBack={() => setView('menu')} activeSkin={selectedSkin} activeRules={rules} defaultRoomName={adminSettings.roomName} />
      }
      {view === 'playerStats' && (
        <PlayerStatsScreen tournaments={tournaments} onBack={() => setView('menu')} />
      )}
      {view === 'rulesEditor' && (
        <RulesEditor rules={rules} onSave={setrules} onBack={() => setView('settings')}
          onReset={() => { if (window.confirm('Obnoviť všetky pravidlá na pôvodné nastavenia?')) setrules(DEFAULT_RULES); }}
          selectedSkin={selectedSkin}
        />
      )}
      {showAdminPin && (
        <AdminPinDialog
          onSuccess={() => { setShowAdminPin(false); setView('admin'); }}
          onCancel={() => setShowAdminPin(false)}
        />
      )}
      {syncWriteError && onlineRoomId && (
        <div className="fixed bottom-0 left-0 right-0 z-[9991] px-4 pb-[max(16px,env(safe-area-inset-bottom))]">
          <div className="max-w-md mx-auto ks-card border-2 border-red-700/70 rounded-sm px-4 py-3 flex items-center gap-3 shadow-2xl">
            <AlertCircle size={18} className="text-red-400 shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="ks-cream text-sm font-semibold ks-display">Zápis zlyhal: {syncWriteError}</div>
              <div className="ks-muted text-xs">Zmeny neboli uložené online. Skús znova alebo skontroluj sieť.</div>
            </div>
            <button
              onClick={() => setSyncWriteError(null)}
              className="ks-gold-bg ks-press px-3 py-1.5 rounded-sm ks-mono text-xs font-bold shrink-0"
            >
              OK
            </button>
          </div>
        </div>
      )}
      {inactivityWarning && onlineRoomId && (
        <div className="fixed bottom-0 left-0 right-0 z-[9990] px-4 pb-[max(16px,env(safe-area-inset-bottom))]">
          <div className="max-w-md mx-auto ks-card border-2 border-amber-700/60 rounded-sm px-4 py-3 flex items-center gap-3 shadow-2xl">
            <AlertTriangle size={18} className="ks-gold shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="ks-cream text-sm font-semibold ks-display">Neaktivita — čoskoro sa odpojíš</div>
              <div className="ks-muted text-xs">Miestnosť sa odpojí za menej ako 2 minúty.</div>
            </div>
            <button
              onClick={() => { lastActivityRef.current = Date.now(); setInactivityWarning(false); }}
              className="ks-gold-bg ks-press px-3 py-1.5 rounded-sm ks-mono text-xs font-bold shrink-0"
            >
              ZOSTAŤ
            </button>
          </div>
        </div>
      )}
      {showEasterEgg && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95"
          onClick={() => setShowEasterEgg(false)}
        >
          <img
            src="/Easteregg.jpg"
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }}
            alt=""
            draggable={false}
          />
        </div>
      )}
    </div>
    </LangContext.Provider>
  );
}

// ─── Hlavné menu ──────────────────────────────────────────────────────────

function SafeTournamentFallback({ title = 'Dáta sa nepodarilo načítať' }) {
  return <div className="min-h-screen flex items-center justify-center p-6 ks-cream"><div className="ks-card rounded-sm p-5 text-center max-w-md"><div className="ks-display text-2xl ks-gold mb-2">{title}</div><div className="ks-muted text-sm">Skús sa vrátiť späť alebo otvoriť turnaj znova.</div></div></div>;
}

// ─── Vizuál, Zvuky a Skiny submenu ───────────────────────────────────────────────

function SettingsMenu({ onBack, onOnline, onRulesEditor, onExport, onImport, onClearAll, onArchive, onScan, tournamentCount, selectedSkin, onSkinChange, selectedFont, onFontChange, tournamentViewMode, onTournamentViewModeChange, onViewModes, onVisualAndSkins, funnyWindowsDisplayMode, onFunnyWindowsDisplayModeChange, onAdmin, onShowEgg }) {
  const t = useT();
  const fileInputRef = useRef(null);
  const [eggClicks, setEggClicks] = useState(0);

  function handleEggClick() {
    const next = eggClicks + 1;
    setEggClicks(next);
    if (next >= 5) { onShowEgg?.(); setEggClicks(0); }
  }

  function handleFilePick(e) {
    const file = e.target.files?.[0];
    if (file && onImport) onImport(file);
    if (fileInputRef.current) fileInputRef.current.value = '';
  }

  return (
    <div className="min-h-screen ks-fade pb-8">
      <Header title={t('settings.title')} onBack={onBack} />
      <div className="p-4 max-w-2xl mx-auto space-y-3">

        <div className="ks-mono ks-gold text-xs px-1 pt-3">ONLINE</div>
        <button onClick={onOnline}
          className="ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left">
          <div className="w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center">
            <Wifi size={22} className="ks-gold" />
          </div>
          <div className="flex-1">
            <div className="ks-display ks-cream text-xl font-semibold">{t('settings.online')}</div>
            <div className="ks-muted text-sm">{t('settings.online.sub')}</div>
          </div>
          <ChevronRight className="ks-muted" size={20} />
        </button>

        <div className="ks-mono ks-gold text-xs px-1 pt-3">{t('settings.rules.section')}</div>
        <button onClick={onRulesEditor}
          className="ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left">
          <div className="w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center">
            <Settings size={22} className="ks-gold" />
          </div>
          <div className="flex-1">
            <div className="ks-display ks-cream text-xl font-semibold">{t('settings.rules')}</div>
            <div className="ks-muted text-sm">Bodové kombinácie · cieľ · prvý zápis · koncovka · potvrdenie výhry · penalizácia</div>
          </div>
          <ChevronRight className="ks-muted" size={20} />
        </button>

        <div className="ks-mono ks-gold text-xs px-1 pt-3">{t('settings.visual.section')}</div>
        <button onClick={onViewModes}
          className="ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left">
          <div className="w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center">
            <Monitor size={22} className="ks-gold" />
          </div>
          <div className="flex-1">
            <div className="ks-display ks-cream text-xl font-semibold">{t('settings.viewmode')}</div>
            <div className="ks-muted text-sm">{VIEW_MODE_LABELS[tournamentViewMode] || VIEW_MODE_LABELS.basic}</div>
          </div>
          <ChevronRight className="ks-muted" size={20} />
        </button>

        <div className="ks-card w-full p-4 rounded-sm">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center">
              <Bell size={22} className="ks-gold" />
            </div>
            <div className="flex-1">
              <div className="ks-display ks-cream text-xl font-semibold">{t('settings.funnymode')}</div>
              <div className="ks-muted text-sm">{t('settings.funnymode.sub')}</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              ['standard', t('settings.funnymode.standard')],
              ['simplified', t('settings.funnymode.simplified')],
              ['suppressed', t('settings.funnymode.suppressed')]
            ].map(([value,label]) => (
              <button key={value} onClick={() => onFunnyWindowsDisplayModeChange(value)}
                className={`ks-press px-3 py-2 rounded-sm text-sm ${funnyWindowsDisplayMode === value ? 'ks-gold-bg' : 'border ks-border-sub ks-card ks-cream'}`}>
                {label}
              </button>
            ))}
          </div>
        </div>

        <button onClick={onVisualAndSkins}
          className="ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left">
          <div className="w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center">
            <Layers size={22} className="ks-gold" />
          </div>
          <div className="flex-1">
            <div className="ks-display ks-cream text-xl font-semibold">{t('settings.visual')}</div>
            <div className="ks-muted text-sm">{t('settings.visual.sub')}</div>
          </div>
          <ChevronRight className="ks-muted" size={20} />
        </button>

        <div className="ks-mono ks-gold text-xs px-1 pt-3">{t('settings.archive.section')}</div>

        <button onClick={onExport} disabled={!tournamentCount}
          className={`ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left ${!tournamentCount ? 'opacity-40 cursor-not-allowed' : ''}`}>
          <div className="w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center">
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
          <div className="w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center">
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
          <div className="w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center">
            <Edit3 size={22} className="ks-gold" />
          </div>
          <div className="flex-1">
            <div className="ks-display ks-cream text-xl font-semibold">{t('settings.edit.archive')}</div>
            <div className="ks-muted text-sm">{t('settings.edit.archive.sub')}</div>
          </div>
          <ChevronRight className="ks-muted" size={20} />
        </button>

        <button onClick={onScan}
          className="ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left">
          <div className="w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center">
            <ScanLine size={22} className="ks-gold" />
          </div>
          <div className="flex-1">
            <div className="ks-display ks-cream text-xl font-semibold">{t('settings.scan')}</div>
            <div className="ks-muted text-sm">{t('settings.scan.sub')}</div>
          </div>
          <ChevronRight className="ks-muted" size={20} />
        </button>

        <button onClick={onAdmin}
          className="ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left">
          <div className="w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center">
            <Shield size={22} className="ks-gold" />
          </div>
          <div className="flex-1">
            <div className="ks-display ks-cream text-xl font-semibold">{t('settings.admin')}</div>
            <div className="ks-muted text-sm">{t('settings.admin.sub')}</div>
          </div>
          <ChevronRight className="ks-muted" size={20} />
        </button>

        <div className="ks-mono ks-text-accent text-xs px-1 pt-4 flex items-center gap-1.5">
          <AlertTriangle size={11} /> {t('settings.danger')}
        </div>

        <button onClick={onClearAll}
          className="ks-press w-full p-4 rounded-sm flex items-center gap-4 text-left border-2 border-red-900/50 bg-gradient-to-b from-red-950/40 to-stone-950/60 hover:brightness-125">
          <div className="w-12 h-12 rounded-sm border border-red-700/60 bg-red-950/50 flex items-center justify-center">
            <Trash2 size={22} className="ks-text-accent" />
          </div>
          <div className="flex-1">
            <div className="ks-display ks-text-accent text-xl font-semibold">{t('settings.clear')}</div>
            <div className="ks-text-accent/70 text-sm">Archív, rozohraná hra, pravidlá — nenávratná akcia</div>
          </div>
          <ChevronRight className="ks-text-accent" size={20} />
        </button>

        <div className="ks-card rounded-sm p-3 ks-body text-xs ks-muted italic mt-2 flex items-start gap-2">
          <AlertCircle size={14} className="ks-gold shrink-0 mt-0.5" />
          <div>
            Pred vymazaním dát si <strong className="ks-gold">vytvor zálohu</strong> cez Export do Excelu.
            Súbor neskôr môžeš obnoviť cez Import. Každý dohraný turnaj si pamätá dátum a čas začiatku aj konca.
          </div>
        </div>

        <div className="ks-mono ks-gold text-xs px-1 pt-4">O APLIKÁCII</div>
        <div className="ks-card w-full p-4 rounded-sm space-y-3">
          <div className="flex items-center gap-4">
            <button onClick={handleEggClick} className="w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center ks-press select-none">
              <Info size={22} className="ks-gold" />
            </button>
            <div className="flex-1">
              <div className="ks-display ks-cream text-xl font-semibold">Kocky sveta</div>
              <div className="ks-muted text-sm">React + Vite + Firebase + Capacitor</div>
            </div>
          </div>
          <div className="space-y-2 text-xs ks-muted leading-relaxed border-t ks-border-sub pt-3">
            <p><span className="ks-cream font-semibold">Verzia:</span> {APP_VERSION}</p>
            <p><span className="ks-cream font-semibold">Technológie:</span> React 18, Vite, Tailwind CSS, Firebase Firestore, Capacitor (Android/iOS)</p>
            <p><span className="ks-cream font-semibold">Dáta:</span> Ukladané lokálne. Online sync cez Firebase Firestore v reálnom čase.</p>
            <p><span className="ks-cream font-semibold">Exporty:</span> XLSX (SheetJS) — každý turnaj ako list + súhrnný prehľad.</p>
            <p><span className="ks-cream font-semibold">Vývoj:</span> Marcel, 2026. Herná logika a pravidlá sú autorské.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

function PendingChips({ pending, removePending }) {
  return (
    <div className="flex flex-wrap gap-2">
      {pending.map((p, i) => (
        <button key={i} onClick={() => removePending(i)} className={`px-3 py-2 rounded-sm border ks-press ${p === 'dash' ? 'ks-border-accent ks-gold' : p < 0 ? 'border-red-800/60 ks-text-accent' : 'ks-border-sub ks-cream'}`}>
          {p === 'dash' ? '— Čiarka' : `${p > 0 ? '+' : ''}${Number(p).toLocaleString('sk-SK')}`}
        </button>
      ))}
    </div>
  );
}

function isStrictMode(rules) {
  const r18 = (rules || []).find(r => r.id === 'r18');
  return !r18 || r18.selected !== 'Áno';
}

function useFunnyQueue() {
  const [active, setActive] = useState(null);
  const queueRef = useRef([]);             
  const lockUntilRef = useRef(0);          
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
      lockUntilRef.current = Date.now() + minDuration;
      setActive(data);
      clearTimer();
      timerRef.current = setTimeout(popNext, data.duration ?? minDuration);
      return;
    }
    if (queueRef.current.length >= maxQueue) {
      queueRef.current[queueRef.current.length - 1] = data;
    } else {
      queueRef.current.push(data);
    }
  }

  function dismiss() {
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

  useEffect(() => clearTimer, []);

  return { active, enqueue, dismiss, clear };
}

function TournamentScreen({
  tournament, rules, onUpdate, onFinish, onAbort, onMenu,
  scoreDisplayMode, onToggleScoreMode, selectedSkin, onSkinChange,
  tournamentViewMode, funnyWindowsDisplayMode, debugMode, minWriteOffOverride,
  isOnline, quickValues, onQuickValuesChange, extensions = {}, hapticEnabled = true
}) {
  // Early null guard — before destructuring to prevent crash
  if (!tournament) return <SafeTournamentFallback />;
  const target = tournament.targetScore || 10000;
  const minWO = minWriteOffOverride ?? tournament.minWriteOff ?? 300;
  const players = Array.isArray(tournament.players) ? tournament.players : [];
  const rounds = Array.isArray(tournament.rounds) ? tournament.rounds : [];
  const { currentPlayer = 0, currentRound = 0 } = tournament;

  const [pending, setPending] = useState([]);
  const [customInput, setCustomInput] = useState('');
  const [showrules, setShowrules] = useState(false);
  const [showStandings, setShowStandings] = useState(false);
  const [showQVEditor, setShowQVEditor] = useState(false);
  const [qvInput, setQVInput] = useState('');
  const qv = Array.isArray(quickValues) && quickValues.length > 0 ? quickValues : DEFAULT_QUICK_VALUES;
  const [toast, setToast] = useState(null);
  const funnyQueue = useFunnyQueue();
  const funny = funnyQueue.active;
  const [showTemporaryKingPopup, setShowTemporaryKingPopup] = useState(false);
  const [temporaryKingToken, setTemporaryKingToken] = useState(null);
  const [deferTemporaryKingUntilWinPopupCloses, setDeferTemporaryKingUntilWinPopupCloses] = useState(false);
  const [winnerCelebration, setWinnerCelebration] = useState(null);
  const t = useT();
  const funnyCountRef = useRef(players.map(() => 0));
  const endgameNoticedRef = useRef(new Set());
  const prevPlayerRef = useRef(currentPlayer);
  const prevTotalsRef = useRef(players.map(() => 0));
  const [milestoneFlash, setMilestoneFlash] = useState(null);

  useEffect(() => {
    if (!isOnline) { prevPlayerRef.current = currentPlayer; return; }
    if (currentPlayer !== prevPlayerRef.current) {
      prevPlayerRef.current = currentPlayer;
      const name = players[currentPlayer] || `Hráč ${currentPlayer + 1}`;
      if (extensions.turnNotification) {
        setToast({ msg: `Na rade: ${name}`, kind: 'info' });
        const t = setTimeout(() => setToast(null), 3500);
        sounds.playTurn();
        return () => clearTimeout(t);
      } else {
        sounds.playTurn();
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPlayer, isOnline]);

  const totals = useMemo(
    () => computeTotals(rounds, players.length),
    [rounds, players.length]);

  const hasFirstWrite = useMemo(() =>
    players.map((_, pIdx) => rounds.some(r => typeof r[pIdx] === 'number' && r[pIdx] >= 0)),
    [players, rounds]);

  const total = totals[currentPlayer];
  const isFirstWrite = !hasFirstWrite[currentPlayer];
  // Koncovka (nutnosť presného zásahu) platí až keď hráč PREKROČIL prah (napr. > 9700 pri minWO 300),
  // nie už na hranici (9700 presne) — tam je zvyšok (300) rovný minimálnemu zápisu, takže ide o bežné kolo.
  const isEndgame = total > target - minWO && total < target;
  const strictMode = isStrictMode(rules);
  const confirmationPlayer = strictMode ? null : tournament.confirmationPendingPlayer;
  const isConfirmationTurn = confirmationPlayer === currentPlayer && confirmationPlayer !== null;
  const exactNeeded = target - total;
  const isLastPlayerInRound = currentPlayer === players.length - 1;
  // showDecisionPopup je odvodený z domain stavu – nie useState.
  // Zobrazí sa keď: (a) prebieha exact-hit-verification alebo (b) je confirmation kolo.
  const showDecisionPopup = !!tournament.pendingDecision || isConfirmationTurn;

  const pendingSum = pending.reduce((a, b) => a + (typeof b === 'number' ? b : 0), 0);
  const newTotal = total + pendingSum;

  function showToast(msg, kind = 'info') {
    setToast({ msg, kind });
    setTimeout(() => setToast(null), 3500);
  }

  function showFunny(customMsg, opts = {}) {
    const data = customMsg
      ? (typeof customMsg === 'string' ? { msg: customMsg, emoji: '🎭', variant: 'fight' } : customMsg)
      : FUNNY_MESSAGES[Math.floor(Math.random() * FUNNY_MESSAGES.length)];

    if (funnyWindowsDisplayMode === 'suppressed' && !opts.forceFullscreen) return;

    if (funnyWindowsDisplayMode === 'simplified' && !opts.forceFullscreen) {
      const dur = opts.duration ?? Math.max(POPUP_CONFIG.POPUP_DISPLAY_DURATION, 2600);
      setToast({ msg: data.msg, kind: 'info' });
      setTimeout(() => setToast(null), dur);
      return;
    }

    funnyQueue.enqueue({ ...data, duration: opts.duration ?? 3500 });
  }

  function maybeFunny() {
    if (pendingSum <= 0 || pendingSum >= 500) return;
    if (funnyCountRef.current[currentPlayer] >= 3) return;

    const max = Math.max(...totals);
    const min = Math.min(...totals);
    const isFarBehind = total < max - 1500;
    const isLastWithGap = total === min && totals.some(t => t > total + 800);

    if ((isFarBehind || isLastWithGap) && Math.random() < 0.55) {
      funnyCountRef.current[currentPlayer]++;
      showFunny();
    }
  }

  function addPoints(v) {
    if (!Number.isFinite(v) || v === 0) return;
    if (isConfirmationTurn) {
      showToast('Musíš potvrdiť ničnehodením (čiarka)!', 'warn');
      return;
    }
    if (pending.some(p => p === 'dash' || p === PENALTY_VALUE)) {
      setPending([v]);
      return;
    }
    setPending(prev => [...prev, v]);
  }

  function addDash() {
    if (pending.length === 1 && pending[0] === 'dash') return; 
    setPending(['dash']);
  }

  function addPenalty() {
    if (isConfirmationTurn) {
      showToast('Musíš potvrdiť ničnehodením (čiarka)!', 'warn');
      return;
    }
    if (pending.length === 1 && pending[0] === PENALTY_VALUE) return; 
    setPending([PENALTY_VALUE]);
  }

  function removePending(idx) { setPending(prev => prev.filter((_, i) => i !== idx)); }
  function clearPending() { setPending([]); }

  function commitPoints() {
    if (pending.length === 0) return;

    if (pending[0] === 'dash') {
      if (isConfirmationTurn) {
        // confirmation kolo: potvrdenie ničnehodením → zapisujeme čiarku s confirmWin
        advance('dash', { confirmWin: true, confirmedRound: currentRound, confirmedPlayer: currentPlayer });
        return;
      }
      advance('dash');
      return;
    }

    if (isConfirmationTurn) {
      // V confirmation kole smie hráč len čiarkovať (ničnehodenie)
      showToast('Musíš potvrdiť ničnehodením (čiarka)!', 'warn');
      return;
    }

    if (pending.some(p => p < 0)) {
      if (pending.length > 1 || pending[0] !== PENALTY_VALUE) {
        showToast('Penalizácia −1 000 sa nedá kombinovať s inými bodmi.', 'warn');
        return;
      }
      advance(PENALTY_VALUE);
      return;
    }

    if (isEndgame) {
      if (pendingSum === exactNeeded) {
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
        // Klasický mód: zakladáme pendingDecision namiesto priameho popup stavu.
        // advance() sa volá až po resolvePendingDecision() – teraz NIČ nezapisujeme.
        const baseTotal = totals[currentPlayer];
        onUpdate(prev => ({
          ...prev,
          pendingDecision: {
            id: `${prev.currentPlayer}-${prev.currentRound}-${pendingSum}`,
            type: 'exact-hit-verification',
            player: prev.currentPlayer,
            round: prev.currentRound,
            score: pendingSum,
            baseTotal,
            target: prev.targetScore,
            status: 'pending',
          },
        }));
        if (!isLastPlayerInRound) {
          setTemporaryKingToken(`${currentPlayer}-${currentRound}-${pendingSum}-endgame`);
          setDeferTemporaryKingUntilWinPopupCloses(true);
        }
        return;
      }
      showToast(`Koncovka — treba presne ${exactNeeded} bodov. Automatická čiarka!`, 'overshoot');
      advance('dash');
      return;
    }

    if (pendingSum > 0 && pendingSum < minWO) {
      showToast(`Každý zápis musí byť aspoň ${minWO} bodov, alebo daj čiarku.`, 'warn');
      return;
    }

    if (newTotal > target) {
      showToast(`Prekročenie ${target.toLocaleString('sk-SK')} – automatická čiarka!`, 'overshoot');
      advance('dash');
      return;
    }

    if (newTotal === target) {
      maybeFunny();
      if (strictMode) {
        if (!isLastPlayerInRound) {
          showToast(`${players[currentPlayer]} dosiahol cieľ ... Kolo sa dohrá a hra skončí.`);
        }
        advance(pendingSum, {
          addCandidate: currentPlayer,
          autoConfirm: true,
          confirmedRound: currentRound,
          confirmedPlayer: currentPlayer,
        });
        return;
      }
      if (isLastPlayerInRound) {
        maybeFunny();
        advance(pendingSum, {
          addCandidate: currentPlayer,
          autoConfirm: true,
          confirmedRound: currentRound,
          confirmedPlayer: currentPlayer,
        });
        return;
      }
      setTemporaryKingToken(`${currentPlayer}-${currentRound}-${pendingSum}`);
      setShowTemporaryKingPopup(true);
      advance(pendingSum, { addCandidate: currentPlayer });
      return;
    }

    maybeFunny();
    advance(pendingSum);
  }

  // ─── resolvePendingDecision ───────────────────────────────────────────────
  // Jediný autoritatívny vstup pre rozhodnutie skupiny o presnom zásahu.
  // outcome: 'confirm' → zapíše presné skóre a potvrdí výhru
  //          'reject'  → zapíše čiarku, hráč zostáva na pôvodnom skóre
  function resolvePendingDecision(decisionId, outcome) {
    const decision = tournament.pendingDecision;
    if (!decision || decision.id !== decisionId) return;

    if (outcome === 'confirm') {
      advance(decision.score, {
        confirmWin: true,
        confirmedRound: decision.round,
        confirmedPlayer: decision.player,
      });
    } else {
      // reject: zapisujeme čiarku (advance vymaže pendingDecision cez pendingDecision: null)
      advance('dash');
    }
  }

  function advance(value, opts = {}) {
    onUpdate(prev => {
      const newRounds = prev.rounds.slice(); newRounds[prev.currentRound] = [...(prev.rounds[prev.currentRound] || [])];
      while (newRounds.length <= prev.currentRound) {
        newRounds.push(new Array(prev.players.length).fill(null));
      }
      newRounds[prev.currentRound][prev.currentPlayer] = value;

      let winner = prev.winner;
      let confirmationPendingPlayer = prev.confirmationPendingPlayer;
      let confirmationQueue = [...(prev.confirmationQueue || [])];
      let confirmationRoundComplete = prev.confirmationRoundComplete;

      if (opts.addCandidate !== undefined) {
        if (!confirmationQueue.includes(opts.addCandidate)) {
          confirmationQueue.push(opts.addCandidate);
        }
      }

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

      if (opts.confirmWin) {
        const confirmedEntry = {
          player: opts.confirmedPlayer ?? prev.currentPlayer,
          round: opts.confirmedRound ?? prev.currentRound,
          confirmedAt: Date.now(),
        };
        const confirmedSoFar = Array.isArray(prev._confirmedDetailed)
          ? [...prev._confirmedDetailed.filter(x => !(x.player === confirmedEntry.player && x.round === confirmedEntry.round)), confirmedEntry]
          : [confirmedEntry];
        const nextPlayer = (prev.currentPlayer + 1) % prev.players.length;
        const roundEnded = nextPlayer === 0;
        const nextRound = prev.currentRound + (roundEnded ? 1 : 0);
        confirmationPendingPlayer = null;

        if (roundEnded) {
          const provisional = {
            ...prev,
            rounds: newRounds,
            _confirmedDetailed: confirmedSoFar,
            confirmationQueue,
            rules: prev.rules,
            pendingDecision: null,
          };
          const result = computeWinners(provisional);
          winner = result.valid && result.winners.length > 0 ? (result.winners.length === 1 ? result.winners[0] : result.winners) : null;
          return {
            ...prev,
            rounds: newRounds,
            currentPlayer: nextPlayer,
            currentRound: nextRound,
            winner,
            confirmationPendingPlayer,
            confirmationQueue,
            confirmationRoundComplete: winner !== null,
            _confirmedDetailed: confirmedSoFar,
            pendingDecision: null,
          };
        }

        return {
          ...prev,
          rounds: newRounds,
          currentPlayer: nextPlayer,
          currentRound: nextRound,
          winner,
          confirmationPendingPlayer,
          confirmationQueue,
          confirmationRoundComplete,
          _confirmedDetailed: confirmedSoFar,
          pendingDecision: null,
        };
      }

      const nextPlayer = (prev.currentPlayer + 1) % prev.players.length;
      const roundEnded = nextPlayer === 0;
      const nextRound = prev.currentRound + (roundEnded ? 1 : 0);

      if (roundEnded) {
        const provisional = {
          ...prev,
          rounds: newRounds,
          _confirmedDetailed: autoConfirmedDetailed,
          confirmationQueue,
          rules: prev.rules,
          pendingDecision: null,
        };
        const result = computeWinners(provisional);

        if (!result.valid && result.achievers.length > 0) {
          const unconfirmedAchievers = result.achievers.filter(
            a => !((autoConfirmedDetailed || []).some(c => c.player === a && c.round === prev.currentRound))
          );
          if (unconfirmedAchievers.length > 0) {
            confirmationPendingPlayer = unconfirmedAchievers[0];
            confirmationRoundComplete = true;
            return {
              ...prev,
              rounds: newRounds,
              currentPlayer: confirmationPendingPlayer,
              currentRound: nextRound,
              winner: null,
              confirmationPendingPlayer,
              confirmationQueue,
              confirmationRoundComplete,
              _confirmedDetailed: autoConfirmedDetailed,
              pendingDecision: null,
            };
          }
        }

        if (result.winners.length > 0) {
          winner = result.winners.length === 1 ? result.winners[0] : result.winners;
          confirmationRoundComplete = true;
          return {
            ...prev,
            rounds: newRounds,
            currentPlayer: nextPlayer,
            currentRound: prev.currentRound,
            winner,
            confirmationPendingPlayer: null,
            confirmationQueue,
            confirmationRoundComplete,
            _confirmedDetailed: autoConfirmedDetailed,
            pendingDecision: null,
          };
        }
      }

      return {
        ...prev,
        rounds: newRounds,
        currentPlayer: nextPlayer,
        currentRound: nextRound,
        winner,
        confirmationPendingPlayer: roundEnded ? null : confirmationPendingPlayer,
        confirmationQueue,
        confirmationRoundComplete,
        _confirmedDetailed: autoConfirmedDetailed,
        pendingDecision: null,
      };
    });
    if (hapticEnabled) hapticFeedback();
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

  useEffect(() => {
    if (!isEndgame) return;
    const key = `${currentPlayer}_${currentRound}`;
    if (endgameNoticedRef.current.has(key)) return;
    endgameNoticedRef.current.add(key);

    const t = setTimeout(() => {
      showFunny({
        msg: `Hoď presne ${exactNeeded}! V koncovke potom treba potvrdenie. 😤`,
        emoji: '🤙',
        variant: 'fight',
      }, { duration: 4500 });
    }, 400);
    return () => clearTimeout(t);
  }, [currentPlayer, currentRound, isEndgame, isConfirmationTurn, exactNeeded]);

  useEffect(() => {
    if (!extensions.milestoneFlash) { prevTotalsRef.current = [...totals]; return; }
    let flashed = false;
    for (let p = 0; p < players.length; p++) {
      const prev = prevTotalsRef.current[p] ?? 0;
      const curr = totals[p] ?? 0;
      if (curr > prev) {
        const crossed = MILESTONE_VALUES.filter(m => prev < m && curr >= m);
        if (crossed.length > 0 && !flashed) {
          flashed = true;
          const val = crossed[crossed.length - 1];
          setMilestoneFlash({ player: players[p], value: val });
          setTimeout(() => setMilestoneFlash(null), 1800);
        }
      }
    }
    prevTotalsRef.current = [...totals];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totals]);

const isObserverMode = tournamentViewMode === 'observer';
const isObserverSimplified = tournamentViewMode === 'observerSimplified';
const isBasicSimplified = tournamentViewMode === 'basicSimplified';
const isRecorderMode = tournamentViewMode === 'recorder';
// Pozorovateľské režimy: žiadny zapisovací panel dole → nemizne im spodná rezerva,
// obsah musí presne zaplniť výšku obrazovky (dôležité najmä na Android TV).
const isViewerMode = isObserverMode || isObserverSimplified;
const blockFollowupPopups = showTemporaryKingPopup && temporaryKingToken !== null;

// showDecisionPopup je teraz odvodený (derived) – useEffect na setShowWinPendingPopup
// nie je potrebný. Popup sa zobrazí automaticky keď pendingDecision !== null alebo isConfirmationTurn.

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
    <div className={`min-h-screen ks-fade ks-bg ${isRecorderMode ? 'pb-6' : isViewerMode ? 'pb-0' : 'pb-32'}`}>
      {!isRecorderMode && (
        <Header
          title={`Turnaj · do ${target.toLocaleString('sk-SK')}`}
          onBack={onMenu}
          right={
            <div className="flex items-center gap-2">
              {isObserverSimplified && (
                <button
                  onClick={() => setShowStandings(true)}
                  className="ks-press ks-gold p-1.5 rounded-sm border border-amber-700/40 hover:bg-amber-900/20"
                  title="Graf priebehu hry — celá obrazovka"
                  aria-label="Graf priebehu hry — celá obrazovka"
                >
                  <TrendingUp size={16} />
                </button>
              )}
              <button
                onClick={onToggleScoreMode}
                className="ks-press ks-gold p-1.5 rounded-sm border border-amber-700/40 hover:bg-amber-900/20"
                title={scoreDisplayMode === 'delta' ? 'Prepnúť na kumulatívne' : 'Prepnúť na prípisy'}
                aria-label={scoreDisplayMode === 'delta' ? 'Prepnúť na kumulatívne' : 'Prepnúť na prípisy'}
              >
                {scoreDisplayMode === 'delta'
                  ? <Sigma size={16} />
                  : <Layers size={16} />}
              </button>
              <button onClick={onAbort} className="ks-press ks-text-accent px-2 py-1 text-xs ks-mono">{t('game.abort')}</button>
            </div>
          }
        />
      )}

      {isObserverMode ? (
        <div className="px-2 pt-1 pb-3 h-[calc(100dvh-64px)] flex flex-col">
          <div className="flex-1 min-h-0 ks-card rounded-sm p-1 overflow-hidden">
            <div className="h-full overflow-auto [font-size:clamp(18px,2.3vw,34px)]">
              <ScoreTable tournament={tournament} totals={totals} highlightPlayer={currentPlayer}
                          pendingPreview={pendingSum > 0 ? pendingSum : 0} target={target}
                          displayMode={scoreDisplayMode} onToggleMode={onToggleScoreMode} hideModeToolbar={false} hideModeToggle={true} compactObserver={true}
                          extensions={extensions} />
            </div>
          </div>
        </div>
      ) : isObserverSimplified ? (
        // Pozorovateľ zjednodušený: iba veľké karty skóre na celú obrazovku.
        // Graf priebehu nie je súčasťou layoutu — otvára sa ako dočasné
        // celoobrazovkové prekrytie tlačidlom v hornej lište (FullscreenProgressView).
        <div className="px-3 pt-2 pb-3 h-[calc(100dvh-64px)] flex flex-col overflow-hidden">
          <div className="flex-1 min-h-0">
            <BigScoreDisplay players={players} totals={totals} highlightPlayer={currentPlayer}
                              target={target} extensions={extensions} size="xl" showRank />
          </div>
        </div>
      ) : isRecorderMode ? (
        <div className="min-h-[100dvh] flex flex-col px-3 pt-[max(10px,env(safe-area-inset-top))] pb-[max(10px,env(safe-area-inset-bottom))]">
          <div className="flex items-center justify-between gap-2 mb-2">
            <button onClick={onMenu} className="ks-press ks-cream flex items-center gap-1 px-2 py-1"><ChevronLeft size={20} /><span className="ks-body">Späť</span></button>
            <div className="ks-display ks-gold text-lg text-center">{players[currentPlayer]}</div>
            <button onClick={onAbort} className="ks-press ks-card px-3 py-2 rounded-sm ks-mono text-xs ks-text-accent">{t('game.abort')}</button>
          </div>
          <div className="ks-card-prom rounded-sm p-4 mb-2">
            <div className="flex items-baseline justify-between mb-2">
              <div className="ks-mono ks-gold text-xs">{t('game.turn')} · {t('game.round')} {currentRound + 1}</div>
              <div className="ks-mono ks-muted text-xs">{t('game.target')} {target.toLocaleString('sk-SK')}</div>
            </div>
            <div className="flex items-end justify-between gap-3 mb-1">
              <div className="flex-1 min-w-0">
                <div className="ks-mono ks-muted text-[10px] mb-0.5">{t('game.player')}</div>
                <div className="ks-display text-4xl ks-cream font-bold leading-tight truncate">{players[currentPlayer]}</div>
              </div>
              <div className="text-right shrink-0">
                <div className="ks-mono ks-muted text-[10px] mb-0.5">{t('game.score')}</div>
                <div className={`ks-display text-5xl font-bold leading-none ${total < 0 ? 'ks-text-accent' : 'ks-gold'}`} style={{ textShadow: total >= 0 ? '0 2px 12px rgba(212,184,106,0.3)' : 'none' }}>
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
                  <div className={`ks-display text-6xl font-bold ${pendingSum < 0 ? 'ks-text-accent' : 'ks-gold'}`}>
                    {pendingSum > 0 ? '+' : ''}{pendingSum.toLocaleString('sk-SK')}
                  </div>
                )}
              </div>
            </div>
            {pending.length > 0 ? (
              <div className="flex flex-wrap gap-2 mb-3">
                {pending.map((p, i) => (
                  <button key={i} onClick={() => removePending(i)} className={`ks-press group flex items-center gap-1.5 px-3 py-1.5 rounded-sm border ${p === 'dash' ? 'border-stone-600/60 bg-stone-800/40 ks-muted' : p < 0 ? 'border-red-800/60 bg-red-950/40 ks-text-accent' : 'ks-border-accent bg-stone-900/70 ks-cream'}`}>
                    <span className="ks-display font-semibold">{p === 'dash' ? '— čiarka' : (p > 0 ? `+${p}` : p)}</span>
                    <X size={14} className="opacity-60 group-hover:opacity-100" />
                  </button>
                ))}
              </div>
            ) : (
              <div className="ks-muted text-sm italic mb-3 py-2 text-center border border-dashed ks-border-sub rounded-sm">Pridaj body alebo čiarku z hodu nižšie…</div>
            )}
            <GoldButton onClick={commitPoints} disabled={pending.length === 0} icon={Check} className="w-full text-lg">Zapísať</GoldButton>
          </div>
          <div className="ks-card-sub rounded-sm p-4 flex-1">
            <div className="flex items-center justify-between mb-3">
              <div className="ks-mono ks-muted text-xs">PRIDAJ BODY Z HODU</div>
              <button aria-label="Upraviť rýchle hodnoty" onClick={() => setShowQVEditor(v => !v)} className="ks-press ks-muted hover:ks-cream p-0.5"><Edit3 size={13} /></button>
            </div>
            {showQVEditor && onQuickValuesChange && (
              <div className="mb-3 p-2.5 border ks-border-sub rounded-sm bg-stone-950/60 space-y-2">
                <div className="ks-mono ks-muted text-xs">UPRAVIŤ TLAČIDLÁ</div>
                <div className="flex flex-wrap gap-1.5">
                  {qv.map(v => (
                    <button key={v} onClick={() => onQuickValuesChange(qv.filter(x => x !== v))}
                      className="ks-press px-2 py-0.5 rounded-sm border ks-border-sub ks-cream text-xs flex items-center gap-1">
                      {v} <X size={10} className="ks-muted" />
                    </button>
                  ))}
                </div>
                <div className="flex gap-1.5">
                  <input type="number" value={qvInput} onChange={e => setQVInput(e.target.value)}
                    onKeyDown={e => { if (e.key === 'Enter') { const n = parseInt(qvInput, 10); if (n > 0 && !qv.includes(n)) { onQuickValuesChange([...qv, n].sort((a,b) => a-b)); setQVInput(''); } } }}
                    placeholder="Pridaj hodnotu…" min="1" max="9999"
                    className="flex-1 bg-transparent border ks-border-sub rounded-sm px-2 py-1 ks-cream text-xs outline-none" />
                  <button onClick={() => { const n = parseInt(qvInput, 10); if (n > 0 && !qv.includes(n)) { onQuickValuesChange([...qv, n].sort((a,b) => a-b)); setQVInput(''); } }}
                    className="ks-press ks-gold-bg px-2 py-1 rounded-sm text-black text-xs font-semibold">+</button>
                  <button onClick={() => onQuickValuesChange(DEFAULT_QUICK_VALUES)}
                    className="ks-press border ks-border-sub px-2 py-1 rounded-sm ks-muted text-xs">Reset</button>
                </div>
              </div>
            )}
            <div className="grid grid-cols-3 gap-2 mb-3">
              {qv.map(v => (
                <button key={v} onClick={() => addPoints(v)} className="ks-press border ks-border-sub bg-stone-950/40 hover:bg-stone-900/60 py-2.5 rounded-sm ks-display ks-cream text-lg font-semibold">+{v}</button>
              ))}
            </div>
            <div className="flex gap-2 mb-3">
              <input type="number" value={customInput} onChange={(e) => setCustomInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && addCustom()} placeholder="Vlastná hodnota" className="flex-1 bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700" />
              <GoldButton onClick={addCustom} icon={Plus} variant="outline">Pridaj</GoldButton>
            </div>
            <div className="ks-divider my-3" />
            <div className="grid grid-cols-2 gap-2">
              <button onClick={addDash} className="ks-press p-3 rounded-sm border-2 border-stone-600/50 bg-gradient-to-b from-stone-900/60 to-stone-950/80 hover:brightness-125 flex items-center justify-center gap-2"><Minus size={20} className="ks-muted" /><span className="ks-mono ks-cream font-semibold">ČIARKA</span></button>
              <button onClick={addPenalty} className="ks-press p-3 rounded-sm border-2 border-red-900/60 bg-gradient-to-b from-red-950/60 to-stone-950/60 hover:brightness-125 flex items-center justify-center gap-2"><Skull size={20} className="ks-text-accent" /><span className="ks-mono ks-text-accent font-semibold">−1 000</span></button>
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
        {isBasicSimplified ? (
          <BigScoreDisplay players={players} totals={totals} highlightPlayer={currentPlayer}
                            target={target} extensions={extensions} size="lg" />
        ) : (
          <ScoreTable tournament={tournament} totals={totals} highlightPlayer={currentPlayer}
                      pendingPreview={pendingSum > 0 ? pendingSum : 0} target={target}
                      displayMode={scoreDisplayMode} onToggleMode={onToggleScoreMode} hideModeToolbar={true}
                      extensions={extensions} />
        )}
      </div>

      <div className="px-4 mt-4">
        <div className="ks-card-prom rounded-sm p-4">
          <div className="flex items-baseline justify-between mb-2">
            <div className="ks-mono ks-gold text-xs">{t('game.turn')} · {t('game.round')} {currentRound + 1}</div>
            <div className="ks-mono ks-muted text-xs">{t('game.target')} {target.toLocaleString('sk-SK')}</div>
          </div>
          <div className="flex items-end justify-between gap-3 mb-1">
            <div className="flex-1 min-w-0">
              <div className="ks-mono ks-muted text-[10px] mb-0.5">{t('game.player')}</div>
              <div className="ks-display text-4xl ks-cream font-bold leading-tight truncate">
                {players[currentPlayer]}
              </div>
            </div>
            <div className="text-right shrink-0">
              <div className="ks-mono ks-muted text-[10px] mb-0.5">{t('game.score')}</div>
              <div className={`ks-display text-5xl font-bold leading-none ${total < 0 ? 'ks-text-accent' : 'ks-gold'}`}
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
                    <div className={`ks-display text-6xl font-bold ${pendingSum < 0 ? 'ks-text-accent' : 'ks-gold'}`}>
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
                          p < 0 ? 'border-red-800/60 bg-red-950/40 ks-text-accent' :
                          'ks-border-accent bg-stone-900/70 ks-cream'}`}>
                      <span className="ks-display font-semibold">
                        {p === 'dash' ? '— čiarka' : (p > 0 ? `+${p}` : p)}
                      </span>
                      <X size={14} className="opacity-60 group-hover:opacity-100" />
                    </button>
                  ))}
                  {pending.length > 1 && (
                    <button onClick={clearPending} className="ks-press px-3 py-1.5 rounded-sm ks-text-accent text-xs ks-mono">
                      VYMAZAŤ VŠETKO
                    </button>
                  )}
                </div>
              ) : (
                <div className="ks-muted text-sm italic mb-3 py-2 text-center border border-dashed ks-border-sub rounded-sm">
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
                {qv.map(v => (
                  <button key={v} onClick={() => addPoints(v)}
                    className="ks-press border ks-border-sub bg-stone-950/40 hover:bg-stone-900/60 py-2.5 rounded-sm ks-display ks-cream text-lg font-semibold">
                    +{v}
                  </button>
                ))}
              </div>

              <div className="flex gap-2 mb-3">
                <input type="number" value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && addCustom()}
                  placeholder="Vlastná hodnota"
                  className="flex-1 bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700"
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
                  <Skull size={20} className="ks-text-accent" />
                  <span className="ks-mono ks-text-accent font-semibold">−1 000</span>
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
      {!blockFollowupPopups && funny && !showDecisionPopup && funnyWindowsDisplayMode === 'standard' && (
        <FunnyOverlay data={funny} onClose={funnyQueue.dismiss} />
      )}

      {showStandings && (
        <FullscreenProgressView onClose={() => setShowStandings(false)} tournament={tournament} totals={totals} target={target} />
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

      {/* Konfety */}
      <Confetti active={!!(winnerCelebration && extensions.confetti)} />

      {/* Míľnik flash */}
      {milestoneFlash && (
        <div className="fixed inset-0 z-[80] pointer-events-none flex items-center justify-center">
          <div className="ks-milestone-in absolute text-center px-6 py-4 rounded-lg"
               style={{ left: '50%', top: '38%', background: 'rgba(14,12,10,0.92)', border: '2px solid var(--ks-accent,#d4b86a)' }}>
            <div className="text-4xl mb-1">⚡</div>
            <div className="ks-mono ks-gold text-xs tracking-widest mb-1">{t('milestone.label')}</div>
            <div className="ks-display text-2xl font-bold ks-cream">{milestoneFlash.player}</div>
            <div className="ks-display ks-gold text-3xl font-bold">{milestoneFlash.value.toLocaleString('sk-SK')}</div>
          </div>
        </div>
      )}

      {/* VÍŤAZSTVO / REMÍZA — celoobrazovkové, nezávisle na queue */}
      {winnerCelebration && funnyWindowsDisplayMode === 'standard' && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-6 ks-overlay-bg" style={{ background: 'var(--ks-overlay-dark, radial-gradient(circle at center, rgba(120,80,40,0.95), rgba(14,12,10,0.98)))' }}>
          {extensions.dramaticWinner ? (
            <div className="relative z-10 text-center max-w-md">
              <div className="ks-dramatic-win text-8xl mb-4" style={{ display: 'inline-block' }}>
                {winnerCelebration.isDraw ? '👑👑' : '🏆'}
              </div>
              <div className="ks-mono ks-gold text-sm mb-2 tracking-[0.3em]">
                {winnerCelebration.isDraw ? `REMÍZA · ${winnerCelebration.winnerArr.length} VÍŤAZI` : '· VÍŤAZ ·'}
              </div>
              <div className="ks-dramatic-name ks-display font-bold ks-cream leading-tight px-2"
                   style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)', textShadow: '0 4px 32px rgba(212,184,106,0.6), 0 0 60px rgba(212,184,106,0.3)' }}>
                {winnerCelebration.winnerArr.map(idx => players[idx]).join(' & ')}
              </div>
              <div className="ks-mono ks-gold text-base mt-3 opacity-80">
                {winnerCelebration.winnerArr.map(idx => (totals[idx] || 0).toLocaleString('sk-SK')).join(' / ')} b.
              </div>
            </div>
          ) : (
            <div className="ks-funny relative z-10 text-center max-w-md">
              <div className="text-7xl mb-3 ks-funny-emoji">{winnerCelebration.isDraw ? '👑👑' : '👑'}</div>
              <div className="ks-mono ks-gold text-xs mb-3 tracking-widest">
                {winnerCelebration.isDraw ? `REMÍZA — ${winnerCelebration.winnerArr.length} VÍŤAZI` : 'VÍŤAZ'}
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
          )}
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

      {/* WIN-PENDING POPUP — všetky vizuálne varianty cez DecisionPresenter */}
      {!blockFollowupPopups && showDecisionPopup && (
        <DecisionPresenter
          playerName={players[currentPlayer]}
          target={target}
          displayMode={funnyWindowsDisplayMode}
          onConfirm={() => {
            const shouldShowDeferredKing = deferTemporaryKingUntilWinPopupCloses && temporaryKingToken !== null;
            if (shouldShowDeferredKing) setShowTemporaryKingPopup(true);
            if (tournament.pendingDecision) {
              resolvePendingDecision(tournament.pendingDecision.id, 'confirm');
            } else {
              advance('dash', { confirmWin: true, confirmedRound: currentRound, confirmedPlayer: currentPlayer });
            }
          }}
          onReject={() => {
            setDeferTemporaryKingUntilWinPopupCloses(false);
            setTemporaryKingToken(null);
            if (tournament.pendingDecision) {
              resolvePendingDecision(tournament.pendingDecision.id, 'reject');
            } else {
              advance('dash');
            }
          }}
        />
      )}
      {debugMode && (
        <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-black/85 text-green-400 font-mono text-[10px] px-3 py-2 space-y-0.5 pointer-events-none">
          <div>🐛 DEBUG · currentPlayer: {currentPlayer} ({players[currentPlayer]}) · round: {currentRound}</div>
          <div>minWO: {minWO}{minWriteOffOverride != null ? ' (override)' : ''} · winner: {JSON.stringify(tournament.winner)} · pendingDecision: {tournament.pendingDecision ? tournament.pendingDecision.type : 'null'}</div>
          <div>confirmQueue: [{(tournament.confirmationQueue || []).join(', ')}] · pending: [{pending.join(', ')}]</div>
        </div>
      )}
    </div>
  );
}

// ─── DecisionPresenter ────────────────────────────────────────────────────
// Zobrazuje rozhodovací popup v troch vizuálnych variantoch podľa displayMode.
// Volá tie isté callbacky onConfirm/onReject – herná logika sa nemení.
function DecisionPresenter({ playerName, target, displayMode, onConfirm, onReject }) {
  if (displayMode === 'standard') {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center px-6 ks-overlay-bg"
           style={{ background: 'var(--ks-overlay-dark, radial-gradient(circle at center, rgba(120,80,40,0.95), rgba(14,12,10,0.98)))' }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full ks-funny-orb"
               style={{ background: 'radial-gradient(circle, var(--ks-glow-orb, rgba(212,184,106,0.5)), transparent 70%)' }} />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full ks-funny-orb"
               style={{ background: 'radial-gradient(circle, var(--ks-glow-orb, rgba(212,184,106,0.5)), transparent 70%)', animationDelay: '1s' }} />
        </div>
        <div className="ks-funny relative z-10 text-center max-w-sm">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="h-px flex-1 max-w-[60px]" style={{ background: 'linear-gradient(90deg, transparent, var(--ks-popup-accent, #d4b86a))' }} />
            <Crown size={16} className="ks-gold" />
            <div className="h-px flex-1 max-w-[60px]" style={{ background: 'linear-gradient(90deg, var(--ks-popup-accent, #d4b86a), transparent)' }} />
          </div>
          <div className="text-7xl mb-3 ks-funny-emoji" style={{ filter: 'drop-shadow(0 4px 16px var(--ks-glow-orb, rgba(212,184,106,0.6)))' }}>😤</div>
          <div className="ks-mono ks-gold text-xs mb-3 tracking-widest">🏁 DOSIAHOL {target.toLocaleString('sk-SK')} — POTVRD VÝHRU</div>
          <div className="ks-display text-4xl font-bold ks-cream leading-tight px-2 mb-2"
               style={{ textShadow: '0 4px 24px var(--ks-glow-orb, rgba(212,184,106,0.4)), 0 0 40px var(--ks-glow-orb, rgba(212,184,106,0.4))' }}>
            {playerName}
          </div>
          <div className="ks-body ks-cream text-base mb-5 leading-snug">
            Hráč <em className="ks-gold">{playerName}</em> dosiahol cieľ!<br/>Skupina potvrdzuje výhru — bola hra čistá?
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button onClick={onConfirm}
              className="ks-press py-4 px-3 rounded-sm border-2 ks-border-accent ks-bg-confirm hover:brightness-125">
              <Crown size={20} className="ks-gold mx-auto mb-1" />
              <div className="ks-display ks-gold text-base font-bold">✓ Potvrdil</div>
              <div className="ks-muted text-[10px] ks-mono mt-0.5">VÝHRA POTVRDENÁ</div>
            </button>
            <button onClick={onReject}
              className="ks-press py-4 px-3 rounded-sm border-2 border-red-900/50 ks-bg-reject hover:brightness-125">
              <X size={20} className="ks-text-accent mx-auto mb-1" />
              <div className="ks-display ks-text-accent text-base font-bold">Nepotvrdil</div>
              <div className="ks-text-accent/60 text-[10px] ks-mono mt-0.5">VÝHRA NEPOTVRDENÁ</div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // simplified & suppressed: kompaktná karta bez click-outside
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4"
         style={{ background: 'var(--ks-modal-dark-overlay, rgba(10,8,6,0.92))' }}>
      <div className="ks-card max-w-sm w-full rounded-sm border-2 p-5 text-center shadow-2xl"
           style={{ borderColor: 'var(--ks-popup-accent, #d4b86a)' }}>
        <div className="flex justify-center mb-3">
          <Crown size={48} className="ks-gold" style={{ filter: 'drop-shadow(0 4px 16px var(--ks-glow-orb, rgba(212,184,106,0.5)))' }} />
        </div>
        <div className="ks-mono ks-gold text-xs tracking-widest mb-2">POTVRD VÝHRU</div>
        <div className="ks-display text-2xl font-bold ks-cream leading-tight px-2 mb-1">{playerName}</div>
        <div className="ks-body ks-cream text-sm opacity-90 leading-snug mb-5">
          Hráč <em className="ks-gold">{playerName}</em> dosiahol <strong>{target.toLocaleString('sk-SK')}</strong>.<br/>
          Potvrďte, že v overovom hode nič nepadlo.
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button onClick={onConfirm}
            className="ks-press py-3 px-2 rounded-sm border-2 ks-border-accent ks-bg-confirm hover:brightness-125">
            <div className="ks-display ks-gold text-base font-bold">✓ Potvrdil</div>
          </button>
          <button onClick={onReject}
            className="ks-press py-3 px-2 rounded-sm border-2 border-red-900/50 ks-bg-reject hover:brightness-125">
            <div className="ks-display ks-text-accent text-base font-bold">✗ Nepotvrdil</div>
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Fullscreen Priebeh hry ────────────────────────────────────────────────

function FullscreenProgressView({ onClose, tournament, totals, target }) {
  useBackHandler(() => onClose(), true);
  return (
    <div className="fixed inset-0 z-40 ks-bg ks-fade flex flex-col p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4 shrink-0">
        <h2 className="ks-display ks-gold text-3xl sm:text-4xl font-bold">Priebeh hry</h2>
        <button aria-label="Zatvoriť" onClick={onClose} className="ks-press ks-cream p-2 border ks-border-sub rounded-sm">
          <X size={28} />
        </button>
      </div>
      <div className="flex-1 min-h-0 overflow-y-auto" style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-y' }}>
        <ProgressChart tournament={tournament} totals={totals} target={target} fullscreen />
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
        <div className="flex items-center justify-between p-4 border-b ks-border-sub">
          <h3 className="ks-display ks-gold text-xl font-semibold">{title}</h3>
          <button aria-label="Zatvoriť" onClick={onClose} className="ks-press ks-cream p-1"><X size={22} /></button>
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
          <div key={p.i} className="flex items-center gap-3 p-3 rounded-sm border ks-border-sub">
            <div className={`w-10 h-10 rounded-sm flex items-center justify-center ks-display text-xl font-bold
              ${idx === 0 ? 'ks-gold-bg' : 'border ks-border-sub ks-gold'}`}>
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
            <div className={`ks-display text-2xl font-bold ${p.total < 0 ? 'ks-text-accent' : 'ks-gold'}`}>
              {p.total.toLocaleString('sk-SK')}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Pravidlá ─────────────────────────────────────────────────────────────

function RulesView({ rules, onBack }) {
  const minWO     = Number(rules.find(r => r.id === 'r14')?.points) || 300;
  const target    = Number(rules.find(r => r.id === 'r15')?.points) || 10000;
  const penalty   = Number(rules.find(r => r.id === 'r16')?.points) || -1000;

  const combinationrules = RULE_CATEGORIES
    .flatMap(cat => cat.ruleIds)
    .map(id => rules.find(r => r.id === id))
    .filter(Boolean);

  return (
    <div className="min-h-screen ks-fade pb-8">
      <Header title="Pravidlá hry" onBack={onBack} />
      <div className="p-4 max-w-2xl mx-auto space-y-3">
        <div className="ks-card rounded-sm p-5">
          <p className="ks-body ks-cream leading-relaxed">
            Cieľom hry <em className="ks-gold">Kocky</em> je byť prvým hráčom, ktorý dosiahne cieľové skóre —
            <strong className="ks-gold"> {target.toLocaleString('sk-SK')}</strong> v klasickej hre alebo
            <strong className="ks-gold"> 5 000</strong> v skrátenej. Hráči sa striedajú v hodoch šesťkociek.
          </p>
          <p className="ks-body ks-cream leading-relaxed mt-2">
            Každý zápis musí byť aspoň <strong className="ks-gold">{minWO} bodov</strong> (minimálny odpis) — alebo daj <em>čiarku</em>.
            Hru sa dá začať aj čiarkou bez bodov. Ak v hode nepadla žiadna bodujúca kocka,
            z aktuálneho skóre sa odpočíta <strong className="ks-text-accent">−{Math.abs(penalty).toLocaleString('sk-SK')} bodov</strong>.
            Od <strong className="ks-gold">{(target - minWO).toLocaleString('sk-SK')} bodov</strong> nastáva <em className="ks-gold">koncovka</em> —
            treba dohodiť presne do cieľa, inak sa automaticky zapíše čiarka.
          </p>
          <p className="ks-body ks-cream leading-relaxed mt-2">
            Ak hod prekročí cieľ, body sa nezapočítajú a zapíše sa čiarka. Po presnom zásahu cieľa, ak sa zapne
            potvrdenie víťazstva, nasleduje ešte overovací ťah, v ktorom musí padnúť <em>niečohodnenie</em>.
          </p>
          <p className="ks-muted ks-body text-xs italic mt-3">
            Hodnoty cieľa, minimálneho odpisu a penalizácie sa dajú upraviť v <em>Nastavenia → Úprava pravidiel</em>.
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
              <div className={`ks-display text-xl font-bold whitespace-nowrap ${Number(rule.points) < 0 ? 'ks-text-accent' : 'ks-gold'}`}>
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

  function rulesInCategory(catId) {
    const cat = RULE_CATEGORIES.find(c => c.id === catId);
    if (!cat) return [];
    return cat.ruleIds.map(id => draft.find(r => r.id === id)).filter(Boolean);
  }

  const settingrules = useMemo(() =>
    SETTING_RULE_IDS.map(id => draft.find(r => r.id === id)).filter(Boolean),
    [draft]);

  const customrules = useMemo(() => {
    const knownIds = new Set([...RULE_CATEGORIES.flatMap(c => c.ruleIds), ...SETTING_RULE_IDS]);
    return draft.filter(r => !knownIds.has(r.id));
  }, [draft]);

  if (activeCategory === 'cat-settings') {
    return (
      <div className="min-h-screen ks-fade ks-bg pb-32">
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

        <div className="fixed bottom-0 left-0 right-0 p-3 border-t ks-border-sub backdrop-blur"
             style={{ background: 'rgba(14,12,10,0.95)' }}>
          <div className="max-w-2xl mx-auto grid grid-cols-2 gap-2">
            <GoldButton onClick={() => setActiveCategory(null)} variant="outline" icon={ChevronLeft}>Späť</GoldButton>
            <GoldButton onClick={save} icon={Save}>Uložiť všetko</GoldButton>
          </div>
        </div>
      </div>
    );
  }

  if (activeCategory) {
    const cat = activeCategory === 'cat-custom'
      ? { id: 'cat-custom', title: 'Vlastné pravidlá', subtitle: 'Tebou pridané pravidlá' }
      : RULE_CATEGORIES.find(c => c.id === activeCategory);

    const categoryrules = activeCategory === 'cat-custom' ? customrules : rulesInCategory(activeCategory);

    return (
      <div className="min-h-screen ks-fade ks-bg pb-32">
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

        <div className="fixed bottom-0 left-0 right-0 p-3 border-t ks-border-sub backdrop-blur"
             style={{ background: 'rgba(14,12,10,0.95)' }}>
          <div className="max-w-2xl mx-auto grid grid-cols-2 gap-2">
            <GoldButton onClick={() => { setActiveCategory(null); setEditingId(null); }} variant="outline" icon={ChevronLeft}>Späť</GoldButton>
            <GoldButton onClick={save} icon={Save}>Uložiť všetko</GoldButton>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen ks-fade ks-bg pb-32">
      <Header title="Úprava pravidiel" onBack={onBack} />

      <div className="p-4 max-w-2xl mx-auto space-y-2">
        <div className="ks-mono ks-gold text-xs px-1 pt-2">BODOVÉ KOMBINÁCIE</div>

        {RULE_CATEGORIES.map(cat => {
          const catrules = rulesInCategory(cat.id);
          return (
            <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
              className="ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left">
              <div className="w-10 h-10 rounded-sm border ks-border-accent ks-gold ks-display flex items-center justify-center text-lg font-bold">
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
          <div className="w-10 h-10 rounded-sm border ks-border-accent ks-gold flex items-center justify-center">
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

      <div className="fixed bottom-0 left-0 right-0 p-3 border-t ks-border-sub backdrop-blur"
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
            className={`flex-1 bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-display text-2xl font-semibold outline-none focus:border-amber-700 ${isNeg ? 'ks-text-accent' : 'ks-gold'}`}
          />
          <div className="ks-mono ks-muted text-xs">BODOV</div>
        </div>
      ) : (
        <select
          value={rule.selected}
          onChange={(e) => onUpdate({ selected: e.target.value })}
          className="w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body text-base outline-none focus:border-amber-700"
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
          <div className={`text-xs italic ${isNeg ? 'ks-text-accent' : 'ks-muted'}`}>
            {rule.type === 'select' ? rule.selected : `${rule.points} bodov`}
          </div>
        </div>
        <DiceRow dice={rule.dice?.slice(0, 6)} size={18} />
        <button aria-label="Upraviť" onClick={(e) => { e.stopPropagation(); onEdit(); }} className="ks-press ks-gold p-1">
          <Pencil size={16} />
        </button>
      </div>

      {isEditing && (
        <div className="border-t ks-border-sub p-3 space-y-3 ks-fade">
          <Field label="Názov">
            <input value={rule.name} onChange={(e) => onUpdate({ name: e.target.value })}
              className="w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700" />
          </Field>
          <Field label="Popis">
            <textarea value={rule.description} onChange={(e) => onUpdate({ description: e.target.value })} rows={2}
              className="w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700 resize-none" />
          </Field>

          <Field label="Typ pravidla">
            <select value={rule.type}
              onChange={(e) => {
                const newType = e.target.value;
                if (newType === 'select') {
                  onUpdate({ type: 'select', options: rule.options || ['Možnosť 1', 'Možnosť 2'], selected: rule.selected || (rule.options?.[0] || 'Možnosť 1') });
                } else onUpdate({ type: 'numeric' });
              }}
              className="w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700">
              <option value="numeric">Číselné (pevný počet bodov)</option>
              <option value="select">Výber zo zoznamu</option>
            </select>
          </Field>

          {rule.type === 'numeric' ? (
            <Field label="Body (môže byť aj záporné)">
              <input type="number" value={rule.points}
                onChange={(e) => onUpdate({ points: parseInt(e.target.value, 10) || 0 })}
                className={`w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-display text-xl font-semibold outline-none focus:border-amber-700 ${isNeg ? 'ks-text-accent' : 'ks-gold'}`} />
            </Field>
          ) : (
            <>
              <Field label="Aktívna možnosť">
                <select value={rule.selected} onChange={(e) => onUpdate({ selected: e.target.value })}
                  className="w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700">
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
                  className="w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700" />
              </Field>
            </>
          )}

          <Field label="Kocky (piktogramy)">
            <DicePicker dice={rule.dice || []} onChange={(d) => onUpdate({ dice: d })} />
          </Field>

          <button onClick={onRemove} className="ks-press ks-text-accent ks-mono text-xs flex items-center gap-1">
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
      <div className="flex flex-wrap items-center gap-2 min-h-[36px] p-2 rounded-sm border ks-border-sub bg-stone-950/40">
        {dice.length === 0 && <span className="ks-muted text-sm italic">Žiadne kocky</span>}
        {dice.map((d, i) => (
          <button key={i} aria-label={`Odstrániť kocku ${d}`} onClick={() => onChange(dice.filter((_, idx) => idx !== i))}
            className="ks-press ks-gold relative">
            <DiceIcon value={d} size={26} />
          </button>
        ))}
      </div>
      <div className="flex gap-1.5">
        {[1,2,3,4,5,6].map(v => (
          <button key={v} aria-label={`Pridať kocku ${v}`} onClick={() => dice.length < 6 && onChange([...dice, v])}
            className="ks-press ks-cream hover:text-amber-300 p-1.5 border ks-border-sub rounded-sm">
            <DiceIcon value={v} size={22} />
          </button>
        ))}
        {dice.length > 0 && (
          <button onClick={() => onChange([])}
            className="ks-press ml-auto ks-text-accent ks-mono text-xs px-2">
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
          ${t.status === 'finished' ? 'ks-gold-bg' : 'border ks-border-sub ks-muted'}`}>
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
          <button onClick={onDelete} className="ks-press ks-text-accent text-xs ks-mono flex items-center gap-1">
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
    const totals = draft.players.map((_, pIdx) =>
      draft.rounds.reduce((s, r) => s + (typeof r[pIdx] === 'number' ? r[pIdx] : 0), 0)
    );
    let newWinner = draft.winner;
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
      const arr = cur === null || cur === undefined
        ? []
        : (Array.isArray(cur) ? [...cur] : [cur]);
      const idx = arr.indexOf(playerIdx);
      if (idx >= 0) arr.splice(idx, 1);
      else arr.push(playerIdx);
      const newWinner = arr.length === 0 ? null : (arr.length === 1 ? arr[0] : arr.sort((a,b)=>a-b));
      return { ...prev, winner: newWinner };
    });
  }

  const display = editing && draft ? draft : tournament;
  const totals = computeTotals(display.rounds, display.players.length);
  const target = display.targetScore || 10000;
  const duration = formatDuration(tournament.date, tournament.finishedAt);

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
    <div className="min-h-screen ks-fade ks-bg pb-32">
      <Header title="Detail turnaja" onBack={editing ? cancelEdit : onBack}
        right={
          <div className="flex items-center gap-2">
            {!editing && (
              <button
                onClick={onToggleScoreMode}
                className="ks-press ks-gold p-1.5 rounded-sm border border-amber-700/40 hover:bg-amber-900/20"
                title={scoreDisplayMode === 'delta' ? 'Prepnúť na kumulatívne' : 'Prepnúť na prípisy'}
                aria-label={scoreDisplayMode === 'delta' ? 'Prepnúť na kumulatívne' : 'Prepnúť na prípisy'}
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

          <div className="mt-4 pt-4 border-t ks-border-sub grid grid-cols-2 gap-3 text-left">
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

        {hasDiscrepancy && winnerComputation && (
          <div className="ks-card rounded-sm p-3 border-2 border-red-700/60 bg-red-950/30">
            <div className="flex items-start gap-2">
              <AlertTriangle size={20} className="ks-text-accent shrink-0 mt-0.5" />
              <div className="flex-1">
                <div className="ks-mono ks-text-accent text-xs tracking-widest mb-1">⚠ NEZHODA V URČENÍ VÍŤAZA</div>
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
                  <div className="ks-body ks-text-accent text-xs mt-2">
                    {winnerComputation.errors.join(' · ')}
                  </div>
                )}
                {!readOnly && (
                  <div className="ks-body ks-text-accent text-xs mt-2 italic">
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
        <div className="fixed bottom-0 left-0 right-0 p-3 border-t ks-border-sub backdrop-blur"
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
            <tr className="border-b ks-border-sub">
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
                        className={`w-full bg-stone-950/40 border ks-border-sub rounded-sm px-2 py-1 ks-display text-center text-sm outline-none focus:border-amber-700 ${
                          v === 'dash' ? 'ks-muted' : (typeof v === 'number' && v < 0 ? 'ks-text-accent' : 'ks-cream')
                        }`}
                      />
                    </td>
                  );
                })}
                <td className="text-center">
                  <button aria-label="Vymazať kolo" onClick={() => onRemoveRound(rIdx)}
                    className="ks-press ks-text-accent hover:ks-text-accent p-1">
                    <Trash2 size={12} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t-2 ks-border-accent">
              <td className="ks-mono ks-gold text-xs py-2 px-2 text-center sticky left-0" style={{ background: 'var(--ks-sticky-bg2, rgba(10,8,6,0.98))' }}>∑</td>
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
                        : t < 0 ? 'ks-text-accent' : 'ks-cream'
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