import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { Plus, Minus, X, ChevronLeft, AlertCircle, AlertTriangle, Check, RotateCcw, ScrollText, Crown, Skull, Target, Edit3, TrendingUp, Sigma, Layers } from 'lucide-react';
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
import { CurrentPlayerBadge } from './components/CurrentPlayerBadge.jsx';
import { MainMenu } from './screens/MainMenu.jsx';
import { NewTournament } from './screens/NewTournament.jsx';
import { GameViewModesScreen } from './screens/GameViewModesScreen.jsx';
import { VisualAndSkinScreen } from './screens/VisualAndSkinScreen.jsx';
import { PrivacyScreen } from './screens/PrivacyScreen.jsx';
import { DialogHost, showAlert, showConfirm } from './components/Dialogs.jsx';
import { GoldButton, Header, Toast, StatusBanner, SafeTournamentFallback, Modal } from './components/ui.jsx';
import { SettingsMenu } from './screens/SettingsMenu.jsx';
import { RulesView, RulesContent, RulesEditor } from './screens/RulesScreens.jsx';
import { ArchiveScreen, ArchiveDetail } from './screens/ArchiveScreens.jsx';
import { DEFAULT_RULES, mergeRulesWithDefaults, ruleFrom, isStrictMode } from './constants/rules.js';
import { formatDateTime } from './lib/format.js';
// Online obrazovka (a s ňou Firebase, ~450 kB) sa načíta až pri otvorení.
const OnlineScreen = React.lazy(() => import('./screens/OnlineScreen.jsx').then(m => ({ default: m.OnlineScreen })));
import { AdminScreen, AdminPinDialog, DEFAULT_ADMIN_SETTINGS } from './screens/AdminScreen.jsx';
import { PlayerStatsScreen } from './screens/PlayerStatsScreen.jsx';
import { ScanImportScreen } from './screens/ScanImportScreen.jsx';
import { useOnlineStore } from './online/onlineStore.ts';
import { useRoomSubscription } from './online/useRoomSubscription.ts';
import { decideRemoteActive, withNextRev, decideUndo } from './online/syncDecision.js';
import { computeWinners, computePlayerTotals as computeTotals } from './lib/tournamentEngine.js';

import { sounds } from './lib/sounds.js';
import { DEFAULT_EXTENSIONS, hapticFeedback, MILESTONE_VALUES, PLAYER_COLORS } from './lib/extensions.js';
import { LangContext, useT, useLang, numberLocale } from './lib/i18n.js';
import { Confetti } from './components/Confetti.jsx';
import { BrawlBackground } from './components/BrawlBackground.jsx';
import { version as APP_VERSION } from '../package.json';
import { SKIN_PRESETS, FONT_PRESETS, skinVarsCss } from './constants/skins.js';
import { useFocusTrap } from './hooks/useFocusTrap.js';
import { useReducedMotion } from './hooks/useReducedMotion.js';
import './app.css';

// ─── Konštanty ────────────────────────────────────────────────────────────

const DEFAULT_QUICK_VALUES = [50, 100, 300, 400, 500, 600, 1000, 1500, 2000];

const PENALTY_VALUE = -1000;

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

const POPUP_CONFIG = {
  POPUP_DISPLAY_DURATION: 2000,
  QUEUE_SIZE: 1,
  VERTICAL_OFFSET: '0px',
  OPACITY: 0.92,
};

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
  const dialogRef = useRef(null);
  useFocusTrap(dialogRef);
  // Späť (Android/TV/Escape) okno zatvorí; bez onClose ho len pohltí, aby neopustilo hru.
  useBackHandler(() => { onClose?.(); });
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
    <div ref={dialogRef} role="dialog" aria-modal="true" aria-label={palette.label}
         className="fixed inset-x-3 top-1/3 z-50 ks-fade ks-popup-anchor flex justify-center"
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
        {actionLabel && onClose ? (
          <button type="button" onClick={(e) => { e.stopPropagation(); onClose(); }}
                  className="ks-press ks-mono text-[11px] ks-muted mt-3 tracking-widest px-3 py-1.5 rounded-sm border ks-border-sub">
            {actionLabel === 'KLIKNI PRE ZATVORENIE' ? 'ZATVORIŤ' : actionLabel}
          </button>
        ) : actionLabel ? (
          <div className="ks-mono text-[10px] ks-muted mt-3 tracking-widest">{actionLabel}</div>
        ) : null}
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
      labelColor: 'var(--ks-overlay-doom-label, #c44848)',
    },
  };
  const style = VARIANT_STYLES[variant] || VARIANT_STYLES.doubt;
  const dialogRef = useRef(null);
  useFocusTrap(dialogRef);
  useBackHandler(() => { onClose?.(); });

  return (
    <div ref={dialogRef} role="dialog" aria-modal="true" aria-label={style.label}
         className="fixed inset-0 z-50 flex items-center justify-center px-6 ks-overlay-bg ks-dark-overlay"
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

// ─── App ──────────────────────────────────────────────────────────────────

export default function App() {
  const [view, setView] = useState('menu');
  const [tournaments, setTournaments] = useState([]);
  const [active, setActive] = useState(null);
  const [rules, setrules] = useState(DEFAULT_RULES);
  const [viewingTournament, setViewingTournament] = useState(null);
  const [archiveReturnTo, setArchiveReturnTo] = useState('menu');
  const [scanReturnTo, setScanReturnTo] = useState('archive');
  const [loaded, setLoaded] = useState(false);
  const [selectedSkin, setSelectedSkin] = useState('classic');
  const [selectedFont, setSelectedFont] = useState('default');
  const [soundsEnabled, setSoundsEnabled] = useState(true);
  const [hapticEnabled, setHapticEnabled] = useState(true);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const reducedMotion = useReducedMotion();
  const motionEnabled = animationsEnabled && !reducedMotion;
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
      case 'privacy':
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
        setView(scanReturnTo);
        return;
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
  // Updates lastSeen once a minute, only while the app is on screen. Every write
  // sends the whole room document (incl. archive) to all devices, so fewer
  // beats mean far less traffic and Firestore reads. Fires immediately on
  // connect and when the app comes back to the foreground.
  useEffect(() => {
    if (!onlineRoomId || !onlineUid) return;
    let cancelled = false;
    const beat = () => {
      if (cancelled || document.visibilityState !== 'visible') return;
      import('./online/updatePresence.ts').then(({ updatePresence }) => {
        updatePresence(onlineRoomId, onlineUid).catch(() => {});
      });
    };
    beat();
    const id = setInterval(beat, 60_000);
    document.addEventListener('visibilitychange', beat);
    return () => {
      cancelled = true;
      clearInterval(id);
      document.removeEventListener('visibilitychange', beat);
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
      try { const r = await window.storage.get('rules');       if (r?.value) setrules(mergeRulesWithDefaults(JSON.parse(r.value))); }        catch {}
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
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
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
    const local = activeRef.current;
    const decision = decideRemoteActive({
      remoteRaw: onlineRoomState.activeTournament,
      lastWrittenJson: lastWrittenActiveJson.current,
      local,
      pendingWrites: pendingWriteCountRef.current,
    });
    if (decision.action === 'skip') {
      if ((window).__ksVerboseFirebase && decision.reason === 'write-in-flight') console.log('[sync] remote→local SKIP — write in-flight, pending:', pendingWriteCountRef.current);
      return;
    }
    const { json: remoteJson, parsed } = decision;
    // Lokálny stav toho istého turnaja s vyšším rev je novší (zápisy spravené
    // offline alebo pred prvým snapshotom) – odošleme ho namiesto prepísania.
    if (decision.action === 'push') {
      if ((window).__ksVerboseFirebase) console.log('[sync] local newer (rev', local.rev, '>', parsed.rev, ') → push');
      lastWrittenActiveJson.current = remoteJson;
      syncActiveNow(local);
      return;
    }
    if ((window).__ksVerboseFirebase) console.log('[sync] remote→local APPLY — prev len:', lastWrittenActiveJson.current?.length, '→ new len:', remoteJson.length);
    lastWrittenActiveJson.current = remoteJson;
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
  // Každý krok si pamätá stav pred zápisom aj po ňom. Vrátiť sa dá iba vtedy,
  // keď aktuálny stav je presne ten, ktorý sme sami zapísali. Ak medzitým
  // zapisovalo iné zariadenie (online), undo sa odmietne, aby neprepísalo cudzí zápis.
  const [undoStack, setUndoStack] = useState([]);
  const undoStackRef = useRef([]);
  const activeRef = useRef(null);
  useEffect(() => { activeRef.current = active; }, [active]);
  useEffect(() => { undoStackRef.current = undoStack; }, [undoStack]);

  const handleUpdateActive = useCallback((updater) => {
    const snapshot = activeRef.current;
    // Compute new state synchronously so we can write it to Firestore immediately.
    const computed = typeof updater === 'function' ? updater(snapshot) : updater;
    // rev = poradové číslo zmeny; podľa neho online synchronizácia pozná,
    // či je lokálny alebo vzdialený stav novší (napr. po návrate z offline).
    const newState = withNextRev(snapshot, computed);
    if (snapshot && newState) {
      const next = [...undoStackRef.current.slice(-4), { before: snapshot, after: newState }];
      undoStackRef.current = next;
      setUndoStack(next);
    }
    activeRef.current = newState;
    setActive(newState);
    syncActiveNow(newState);
  }, [syncActiveNow]);

  const handleUndo = useCallback(() => {
    const result = decideUndo(undoStackRef.current, activeRef.current);
    if (!result.ok) {
      if (result.clear) {
        undoStackRef.current = [];
        setUndoStack([]);
      }
      return { ok: false, reason: result.reason };
    }
    const { rest, restored } = result;
    undoStackRef.current = rest;
    setUndoStack(rest);
    // vrátený stav je nová zmena – dostane vyššie rev, aby ho ostatné zariadenia prijali
    activeRef.current = restored;
    setActive(restored);
    syncActiveNow(restored);
    return { ok: true };
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
    if (!active) { showAlert('Žiadna aktívna hra.'); return; }
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
    if (!customId) { showAlert('Zadaj názov miestnosti.'); return; }
    try {
      const [{ getAuth, signInAnonymously }, { createRoom }] = await Promise.all([
        import('firebase/auth'),
        import('./online/createRoom.ts'),
      ]);
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
      showAlert(`Miestnosť sa nepodarilo vytvoriť.\n\n${e?.message || e}`);
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
      rev: 1,
      targetScore, minWriteOff,
      // Snímka pravidiel z času štartu: všetky zariadenia (aj online) a archív
      // tak používajú rovnaké nastavenie, aj keď sa globálne pravidlá neskôr zmenia.
      // Úmyselne nie pod kľúčom `rules` – víťaza určuje engine vždy podľa toho,
      // kto prvý dosiahol cieľ; r18 riadi iba overovací popup presného zásahu v koncovke.
      ruleSnapshot: (rules || []).map(r => ({ id: r.id, points: r.points, selected: r.selected })),
      // penalizácia za „nič nehodené“ (r16), vždy záporná
      penalty: -Math.abs(Number(ruleFrom(rules, 'r16')?.points) || 1000),
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
      const msg = 'Turnaj sa nedá uzavrieť, výsledok nesedí:\n\n' +
        validation.errors.join('\n') +
        '\n\nDôvod: ' + validation.reason;
      showAlert(msg, { title: 'Turnaj nie je uzavretý' });
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
        'Turnaj sa neuzavrie. Skontroluj zápisy, prípadne ich oprav cez Vrátiť posledný zápis.';
      showAlert(msg, { title: 'Nezhoda vo víťazovi' });
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

  async function abortTournament() {
    if (!active) return;
    if (!(await showConfirm('Rozohraný turnaj sa uloží do archívu ako nedokončený.', { title: 'Zrušiť turnaj?', confirmLabel: 'Zrušiť turnaj', cancelLabel: 'Hrať ďalej', danger: true }))) return;
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
      showAlert('Archív je prázdny, nie je čo exportovať.');
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
          showAlert('Export je uložený v priečinku Documents ako ' + fileName + '.');
        }
        return;
      }
    } catch (e) {
      console.error('Native Android export failed:', e);
      showAlert('Export sa nepodarilo uložiť do zariadenia. Skúsim ho stiahnuť iným spôsobom.');
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
    // Záloha z aplikácie má desiatky kB; väčší súbor nie je naša záloha.
    if (file && file.size > 5 * 1024 * 1024) {
      showAlert('Súbor je príliš veľký (viac ako 5 MB). Vyber zálohu exportovanú z aplikácie.');
      return;
    }
    try {
      const XLSX = (await import('xlsx')).default || await import('xlsx');
      const data = await file.arrayBuffer();
      const wb = XLSX.read(data, { type: 'array', cellFormula: false, cellHTML: false, sheetRows: 2000 });

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
        showAlert(`Žiadne turnaje neboli importované.${skipped.length ? '\n\nPreskočené listy:\n' + skipped.join('\n') : ''}`);
        return;
      }

      const nextTournaments = [...imported, ...tournaments];
      setTournaments(nextTournaments);

      let msg = `Úspešne importované: ${imported.length} ${imported.length === 1 ? 'turnaj' : (imported.length < 5 ? 'turnaje' : 'turnajov')}.`;
      if (skipped.length) msg += `\n\nPreskočené:\n${skipped.join('\n')}`;
      showAlert(msg, { title: 'Import hotový' });
    } catch (err) {
      console.error(err);
      showAlert('Súbor sa nepodarilo načítať. Vyber zálohu exportovanú z aplikácie (.xlsx).', { title: 'Import zlyhal' });
    }
  }

  async function clearAllData() {
    // Namiesto písania „VYMAZAŤ“ (na TV ovládači takmer nemožné) dvojité potvrdenie.
    const ok = await showConfirm(
      'Vymažú sa VŠETKY turnaje z archívu, rozohraná hra aj uložené pravidlá z tohto zariadenia. Akcia sa nedá vrátiť.\n\n' +
      'Odporúčame najprv vytvoriť zálohu cez Export do Excelu.',
      { title: 'Vymazať všetky dáta?', confirmLabel: 'Vymazať všetko', danger: true, doubleTap: true }
    );
    if (!ok) return;

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

    showAlert('Všetky dáta boli vymazané.');
  }

  return (
    <LangContext.Provider value={lang}>
    <div className={`ks-app-shell ks-bg min-h-screen ks-cream ks-body ${view === 'tournament' && ['observer', 'observerSimplified'].includes(tournamentViewMode) ? 'ks-app-viewer' : ''}`} data-skin={selectedSkin} data-animations={motionEnabled ? 'on' : 'off'} style={{ overflowY: 'auto', WebkitOverflowScrolling: 'touch', touchAction: 'pan-y' }}>
      <style>{skinVarsCss(selectedSkin, selectedFont)}</style>
      <style>{`:root { --ks-popup-offset: ${POPUP_CONFIG.VERTICAL_OFFSET}; --ks-popup-opacity: ${POPUP_CONFIG.OPACITY}; }`}</style>
      {/* vlastné dialógy (showAlert/showConfirm) – vo vnútri skinu, aby dedili jeho farby */}
      <DialogHost />
      {selectedSkin !== 'classic' && motionEnabled && <BrawlBackground skin={selectedSkin} />}
      <div className="ks-app-content">

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
          onPrivacy={() => setView('privacy')}
          onOnline={() => setView('online')}
          onRulesEditor={() => setView('rulesEditor')}
          onExport={exportToExcel}
          onImport={importFromExcel}
          onClearAll={clearAllData}
          onArchive={() => { setArchiveReturnTo('settings'); setView('archive'); }}
          onScan={() => { setScanReturnTo('settings'); setView('scan'); }}
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
      {view === 'newTournament' && <NewTournament onBack={() => setView('menu')} onStart={startTournament} knownPlayers={knownPlayers} onKnownPlayersChange={setKnownPlayers} defaultTarget={ruleFrom(rules, 'r15')?.points} />}
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
            motionEnabled={motionEnabled}
          />
        ) : (
          <SafeTournamentFallback title="Turnaj sa nepodarilo načítať" />
       ))}
      {view === 'archive' && (
        <ArchiveScreen tournaments={Array.isArray(tournaments) ? tournaments : []}
          onBack={() => setView(archiveReturnTo)}
          onView={(t) => { setViewingTournament(t); setView('archiveDetail'); }}
          onDelete={async (id) => { if (await showConfirm('Turnaj sa natrvalo odstráni z archívu.', { title: 'Vymazať turnaj?', confirmLabel: 'Vymazať', danger: true })) setTournaments(prev => prev.filter(x => x.id !== id)); }}
          onScan={() => { setScanReturnTo('archive'); setView('scan'); }}
          readOnly={archiveReturnTo === 'menu'}
        />
      )}
      {view === 'scan' && (
        <ScanImportScreen
          onBack={() => setView(scanReturnTo)}
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
      {view === 'privacy' && <PrivacyScreen onBack={() => setView('settings')} />}
      {view === 'rules' && <RulesView rules={rules} onBack={() => setView('menu')} />}
      {view === 'online' && (
        <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center ks-muted ks-mono text-xs">NAČÍTAVAM ONLINE REŽIM…</div>}>
          <OnlineScreen onBack={() => setView('menu')} activeSkin={selectedSkin} activeRules={rules} defaultRoomName={adminSettings.roomName} />
        </React.Suspense>
      )
      }
      {view === 'playerStats' && (
        <PlayerStatsScreen tournaments={tournaments} onBack={() => setView('menu')} />
      )}
      {view === 'rulesEditor' && (
        <RulesEditor rules={rules} onSave={setrules} onBack={() => setView('settings')}
          onReset={async () => { if (await showConfirm('Všetky pravidlá sa vrátia na pôvodné hodnoty.', { title: 'Obnoviť pravidlá?', confirmLabel: 'Obnoviť' })) setrules(DEFAULT_RULES); }}
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
    </div>
    </LangContext.Provider>
  );
}

// ─── Hlavné menu ──────────────────────────────────────────────────────────

// ─── Vizuál, Zvuky a Skiny submenu ───────────────────────────────────────────────

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

// Odtlačok herného stavu pre kontrolu, či undo nevráti cudzí (online) zápis.
// Uložené pravidlá zladí s aktuálnymi predvolenými: názvy, popisy a možnosti
// berie z kódu (opravené texty sa dostanú aj k existujúcim používateľom),
// hodnoty a voľby nastavené používateľom zachová. Vlastné pravidlá ponechá.

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
  canUndo = false, onUndo,
  isOnline, quickValues, onQuickValuesChange, extensions = {}, hapticEnabled = true, motionEnabled = true
}) {
  // Early null guard — before destructuring to prevent crash
  if (!tournament) return <SafeTournamentFallback />;
  const t = useT();
  const lang = useLang();
  const fmtNum = (n) => Number(n).toLocaleString(numberLocale(lang));
  const target = tournament.targetScore || 10000;
  const minWO = minWriteOffOverride ?? tournament.minWriteOff ?? 300;
  // Pravidlá z času štartu turnaja (staršie turnaje bez snímky použijú aktuálne).
  const turnRules = tournament.ruleSnapshot || rules;
  const penaltyValue = Number.isFinite(tournament.penalty) && tournament.penalty < 0 ? tournament.penalty : PENALTY_VALUE;
  const penaltyLabel = `−${Math.abs(penaltyValue).toLocaleString(numberLocale(lang))}`;
  const overshootRejects = ruleFrom(turnRules, 'r17')?.selected === 'Hod sa neuznáva';
  const sixOfKind = ruleFrom(turnRules, 'r13')?.selected;
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
  // Počas krátkej oslavy víťaza (pred uložením do archívu) Späť nič nerobí.
  useBackHandler(() => {}, !!winnerCelebration);
  const funnyCountRef = useRef(players.map(() => 0));
  const endgameNoticedRef = useRef(new Set());
  const prevPlayerRef = useRef(currentPlayer);
  // null = ešte nič neporovnávať; prvý beh efektu si len zapamätá súčty, aby sa pri
  // otvorení rozohranej hry neukázal falošný míľnik.
  const prevTotalsRef = useRef(null);
  const [milestoneFlash, setMilestoneFlash] = useState(null);

  useEffect(() => {
    if (!isOnline) { prevPlayerRef.current = currentPlayer; return; }
    if (currentPlayer !== prevPlayerRef.current) {
      prevPlayerRef.current = currentPlayer;
      const name = players[currentPlayer] || t('game.playerN', { n: currentPlayer + 1 });
      if (extensions.turnNotification) {
        setToast({ msg: t('toast.turn', { name }), kind: 'info' });
        const timer = setTimeout(() => setToast(null), 3500);
        sounds.playTurn();
        return () => clearTimeout(timer);
      } else {
        sounds.playTurn();
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPlayer, isOnline]);

  const totals = useMemo(
    () => computeTotals(rounds, players.length),
    [rounds, players.length]);

  const total = totals[currentPlayer];
  // Koncovka (nutnosť presného zásahu) platí až keď hráč PREKROČIL prah (napr. > 9700 pri minWO 300),
  // nie už na hranici (9700 presne) — tam je zvyšok (300) rovný minimálnemu zápisu, takže ide o bežné kolo.
  const isEndgame = total > target - minWO && total < target;
  const strictMode = isStrictMode(tournament.ruleSnapshot || rules);
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
      showToast(t('toast.dashRequired'), 'warn');
      return;
    }
    if (pending.some(p => p === 'dash' || p === penaltyValue)) {
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
      showToast(t('toast.dashRequired'), 'warn');
      return;
    }
    if (pending.length === 1 && pending[0] === penaltyValue) return; 
    setPending([penaltyValue]);
  }

  // ─── Vrátenie posledného zápisu ──────────────────────────────────────────
  // Prvé ťuknutie tlačidlo „nabije“, druhé do 4 s zápis vráti (ochrana pred omylom).
  const [undoArmed, setUndoArmed] = useState(false);
  useEffect(() => {
    if (!undoArmed) return;
    const id = setTimeout(() => setUndoArmed(false), 4000);
    return () => clearTimeout(id);
  }, [undoArmed]);

  function undoLastWrite() {
    if (!undoArmed) { setUndoArmed(true); return; }
    setUndoArmed(false);
    const res = onUndo ? onUndo() : { ok: false, reason: 'empty' };
    setPending([]);
    setCustomInput('');
    if (res && res.ok) {
      setShowTemporaryKingPopup(false);
      setTemporaryKingToken(null);
      setDeferTemporaryKingUntilWinPopupCloses(false);
      showToast(t('toast.undone'), 'info');
    } else if (res && res.reason === 'changed') {
      showToast(t('toast.undoConflict'), 'warn');
    }
  }

  const undoButton = canUndo && onUndo ? (
    <button
      type="button"
      onClick={undoLastWrite}
      className={`ks-press w-full mt-2 flex items-center justify-center gap-2 py-2 rounded-sm border text-sm ks-mono ${undoArmed ? 'border-red-700/70 bg-red-950/40 ks-text-accent' : 'ks-border-sub ks-muted'}`}
      aria-label={undoArmed ? t('game.undo.aria.armed') : t('game.undo.aria')}
    >
      <RotateCcw size={14} />
      {undoArmed ? t('game.undo.armed') : t('game.undo')}
    </button>
  ) : null;

  // ─── Šesť rovnakých (pravidlo r13) ───────────────────────────────────────
  // „Automatická výhra“: po potvrdení (druhé ťuknutie) hráč na ťahu vyhráva;
  // do jeho políčka v aktuálnom kole sa zapíšu body chýbajúce do cieľa turnaja.
  // „Pevná hodnota 3000“: pridá 3 000 bodov ako bežný hod.
  const [sixArmed, setSixArmed] = useState(false);
  useEffect(() => {
    if (!sixArmed) return;
    const id = setTimeout(() => setSixArmed(false), 4000);
    return () => clearTimeout(id);
  }, [sixArmed]);

  function sixOfKindWin() {
    if (!sixArmed) { setSixArmed(true); return; }
    setSixArmed(false);
    setPending([]);
    onUpdate(prev => {
      const n = prev.players.length;
      const prevTotals = computeTotals(prev.rounds, n);
      const missing = (prev.targetScore || 10000) - (prevTotals[prev.currentPlayer] || 0);
      const newRounds = prev.rounds.slice();
      while (newRounds.length <= prev.currentRound) newRounds.push(new Array(n).fill(null));
      if (missing > 0) {
        newRounds[prev.currentRound] = [...newRounds[prev.currentRound]];
        newRounds[prev.currentRound][prev.currentPlayer] = missing;
      }
      return {
        ...prev,
        rounds: newRounds,
        _suddenWin: { playerIdx: prev.currentPlayer, round: prev.currentRound },
        winner: prev.currentPlayer,
        pendingDecision: null,
      };
    });
  }

  const sixButton = sixOfKind === 'Automatická výhra' ? (
    <button
      type="button"
      onClick={sixOfKindWin}
      className={`ks-press p-3 rounded-sm border-2 flex items-center justify-center gap-1.5 text-xs ks-mono font-semibold text-center leading-tight ${sixArmed ? 'ks-border-accent ks-gold bg-amber-900/30' : 'ks-border-sub ks-muted bg-stone-950/40'}`}
      aria-label={sixArmed ? t('game.six.aria.armed', { name: players[currentPlayer] }) : t('game.six.aria')}
    >
      <Crown size={16} className="shrink-0" />
      <span>{sixArmed ? t('game.six.armed', { name: String(players[currentPlayer] || '').toUpperCase() }) : t('game.six')}</span>
    </button>
  ) : sixOfKind === 'Pevná hodnota 3000' ? (
    <button
      type="button"
      onClick={() => addPoints(3000)}
      className="ks-press p-3 rounded-sm border-2 ks-border-sub ks-muted bg-stone-950/40 flex items-center justify-center gap-1.5 text-xs ks-mono font-semibold text-center leading-tight"
    >
      <Crown size={16} className="shrink-0" /> <span>{t('game.six.fixed')}</span>
    </button>
  ) : null;

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
      showToast(t('toast.dashRequired'), 'warn');
      return;
    }

    if (pending.some(p => p < 0)) {
      if (pending.length > 1 || pending[0] !== penaltyValue) {
        showToast(t('toast.penaltyAlone', { penalty: penaltyLabel }), 'warn');
        return;
      }
      advance(penaltyValue);
      return;
    }

    if (isEndgame) {
      if (pendingSum === exactNeeded) {
        if (strictMode) {
          maybeFunny();
        if (!isLastPlayerInRound) {
          showToast(t('toast.reachedTarget', { name: players[currentPlayer], target: fmtNum(target) }), 'info');
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
      if (overshootRejects && pendingSum > exactNeeded) {
        showToast(t('toast.exactRethrow', { n: exactNeeded }), 'overshoot');
        setPending([]);
        return;
      }
      showToast(t('toast.exactDash', { n: exactNeeded }), 'overshoot');
      advance('dash');
      return;
    }

    if (pendingSum > 0 && pendingSum < minWO) {
      showToast(t('toast.minEntry', { min: minWO }), 'warn');
      return;
    }

    if (newTotal > target) {
      if (overshootRejects) {
        showToast(t('toast.overRethrow', { target: fmtNum(target) }), 'overshoot');
        setPending([]);
        return;
      }
      showToast(t('toast.overDash', { target: fmtNum(target) }), 'overshoot');
      advance('dash');
      return;
    }

    if (newTotal === target) {
      maybeFunny();
      if (strictMode) {
        if (!isLastPlayerInRound) {
          showToast(t('toast.reachedTarget', { name: players[currentPlayer], target: fmtNum(target) }), 'info');
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
    // Víťaz zrušený (napr. vrátením zápisu) – zavrieť oslavu.
    setWinnerCelebration(null);
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
    if (!extensions.milestoneFlash || prevTotalsRef.current === null) { prevTotalsRef.current = [...totals]; return; }
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
// Kombinovaný: veľké skóre všetkých hráčov (s cieľom) + karta „na ťahu“, bez zapisovania.
const isCombinedMode = tournamentViewMode === 'combined';
// Pozorovateľské režimy: žiadny zapisovací panel dole → nemizne im spodná rezerva,
// obsah musí presne zaplniť výšku obrazovky (dôležité najmä na Android TV).
const isViewerMode = isObserverMode || isObserverSimplified;
const blockFollowupPopups = showTemporaryKingPopup && temporaryKingToken !== null;
const currentPlayerColor = PLAYER_COLORS[currentPlayer % PLAYER_COLORS.length];

// showDecisionPopup je teraz odvodený (derived) – useEffect na setShowWinPendingPopup
// nie je potrebný. Popup sa zobrazí automaticky keď pendingDecision !== null alebo isConfirmationTurn.

  function addCustom() {
    const n = parseInt(customInput, 10);
    if (!Number.isFinite(n) || n === 0) return;
    if (n % 50 !== 0) {
      showToast(t('toast.mult50'), 'warn');
      return;
    }
    addPoints(n);
    setCustomInput('');
  }

  if (!tournament || !Array.isArray(tournament.players) || !Array.isArray(tournament.rounds)) return <SafeTournamentFallback />;

  // Karta „na ťahu“ – spoločná pre Zapisovateľa a Kombinovaný režim.
  const turnCard = (
          <div
            className="ks-card-prom ks-current-player-frame rounded-sm p-4 mb-2"
            style={{ '--ks-current-player-color': currentPlayerColor }}
            aria-current="true"
          >
            <div className="flex items-baseline justify-between mb-2">
              <div className="flex items-center gap-2">
                <CurrentPlayerBadge />
                <div className="ks-mono ks-gold text-xs">{t('game.round')} {currentRound + 1}</div>
              </div>
              <div className="ks-mono ks-muted text-xs">{t('game.target')} {fmtNum(target)}</div>
            </div>
            <div className="flex items-end justify-between gap-3 mb-1">
              <div className="flex-1 min-w-0">
                <div className="ks-mono ks-muted text-[10px] mb-0.5">{t('game.player')}</div>
                <div title={players[currentPlayer]} className="ks-display text-4xl ks-cream font-bold leading-tight truncate">{players[currentPlayer]}</div>
              </div>
              <div className="text-right shrink-0">
                <div className="ks-mono ks-muted text-[10px] mb-0.5">{t('game.score')}</div>
                <div className={`ks-display text-5xl font-bold leading-none ${total < 0 ? 'ks-text-accent' : 'ks-gold'}`} style={{ textShadow: total >= 0 ? '0 2px 12px rgba(212,184,106,0.3)' : 'none' }}>
                  {total.toLocaleString(numberLocale(lang))}
                </div>
              </div>
            </div>
          </div>
  );

  return (
    <div className={`ks-game-screen ks-fade ks-bg ${isViewerMode ? 'ks-viewer-screen' : (isRecorderMode || isCombinedMode) ? 'min-h-screen pb-6' : 'min-h-screen pb-32'}`}>
      {!isRecorderMode && !isCombinedMode && (
        <Header
          title={`Turnaj · do ${fmtNum(target)}`}
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
              {!isBasicSimplified && !isObserverSimplified && <button
                onClick={onToggleScoreMode}
                className="ks-press ks-gold p-1.5 rounded-sm border border-amber-700/40 hover:bg-amber-900/20"
                title={scoreDisplayMode === 'delta' ? t('game.toggle.toCumulative') : t('game.toggle.toDelta')}
                aria-label={scoreDisplayMode === 'delta' ? t('game.toggle.toCumulative') : t('game.toggle.toDelta')}
              >
                {scoreDisplayMode === 'delta'
                  ? <Sigma size={16} />
                  : <Layers size={16} />}
              </button>}
              <button onClick={onAbort} className="ks-press ks-text-accent px-2 py-1 text-xs ks-mono">{t('game.abort')}</button>
            </div>
          }
        />
      )}

      {isObserverMode ? (
        <div className="px-2 pt-1 pb-3 min-h-0 flex flex-col">
          <div className="flex-1 min-h-0 ks-card rounded-sm p-1 overflow-hidden">
            <div className="ks-observer-scroll h-full overflow-auto" data-keyboard-scroll tabIndex={0} role="region" aria-label="Živá tabuľka skóre — posúvaj šípkami">
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
        <div className="px-3 pt-2 pb-3 min-h-0 flex flex-col overflow-hidden">
          <div className="flex-1 min-h-0">
            <BigScoreDisplay players={players} totals={totals} highlightPlayer={currentPlayer}
                              target={target} extensions={extensions} size="xl" showRank />
          </div>
        </div>
      ) : isCombinedMode ? (
        <div className="h-[100dvh] flex flex-col px-3 pt-[max(10px,env(safe-area-inset-top))] pb-[max(10px,env(safe-area-inset-bottom))] overflow-y-auto">
          <div className="flex items-center justify-between gap-2 mb-2 shrink-0">
            <button onClick={onMenu} className="ks-press ks-cream flex items-center gap-1 px-2 py-1"><ChevronLeft size={20} /><span className="ks-body">{t('back')}</span></button>
            <div className="ks-display ks-gold text-lg text-center">{players[currentPlayer]}</div>
            <button onClick={onAbort} className="ks-press ks-card px-3 py-2 rounded-sm ks-mono text-xs ks-text-accent">{t('game.abort')}</button>
          </div>
          <div className="mb-2 flex-1" style={{ minHeight: 160 }}>
            <BigScoreDisplay players={players} totals={totals} highlightPlayer={currentPlayer}
                              target={target} extensions={extensions} size="lg" showRank showTarget fill />
          </div>
          <div className="shrink-0">{turnCard}</div>
        </div>
      ) : isRecorderMode ? (
        <div className="min-h-[100dvh] flex flex-col px-3 pt-[max(10px,env(safe-area-inset-top))] pb-[max(10px,env(safe-area-inset-bottom))]">
          <div className="flex items-center justify-between gap-2 mb-2">
            <button onClick={onMenu} className="ks-press ks-cream flex items-center gap-1 px-2 py-1"><ChevronLeft size={20} /><span className="ks-body">{t('back')}</span></button>
            <div className="ks-display ks-gold text-lg text-center">{players[currentPlayer]}</div>
            <button onClick={onAbort} className="ks-press ks-card px-3 py-2 rounded-sm ks-mono text-xs ks-text-accent">{t('game.abort')}</button>
          </div>
          {turnCard}
          <div className="ks-card-prom rounded-sm p-4 mb-2">
            <div className="flex items-center justify-between mb-3">
              <div className="ks-mono ks-gold text-xs">{t('game.adding')}</div>
              <div className="flex items-baseline gap-2">
                {pending.length > 0 && pending[0] !== 'dash' && Number.isFinite(newTotal) && (
                  <span className="ks-muted text-xl ks-mono leading-none">→ {newTotal.toLocaleString(numberLocale(lang))}</span>
                )}
                {pending[0] === 'dash' ? (
                  <div className="ks-display text-6xl font-bold ks-muted">—</div>
                ) : (
                  <div className={`ks-display text-6xl font-bold ${pendingSum < 0 ? 'ks-text-accent' : 'ks-gold'}`}>
                    {pendingSum > 0 ? '+' : ''}{pendingSum.toLocaleString(numberLocale(lang))}
                  </div>
                )}
              </div>
            </div>
            {pending.length > 0 ? (
              <div className="flex flex-wrap gap-2 mb-3">
                {pending.map((p, i) => (
                  <button key={i} onClick={() => removePending(i)} className={`ks-press group flex items-center gap-1.5 px-3 py-1.5 rounded-sm border ${p === 'dash' ? 'ks-pending-dash border-stone-600/60 bg-stone-800/40 ks-muted' : p < 0 ? 'ks-pending-negative border-red-800/60 bg-red-950/40 ks-text-accent' : 'ks-pending-positive ks-border-accent bg-stone-900/70 ks-cream'}`}>
                    <span className="ks-display font-semibold">{p === 'dash' ? t('game.dashChip') : (p > 0 ? `+${p}` : p)}</span>
                    <X size={14} className="opacity-60 group-hover:opacity-100" />
                  </button>
                ))}
              </div>
            ) : (
              <div className="ks-muted text-sm italic mb-3 py-2 text-center border border-dashed ks-border-sub rounded-sm">{t('game.addHint')}</div>
            )}
            <GoldButton onClick={commitPoints} disabled={pending.length === 0} icon={Check} className="w-full text-lg">{t('game.commit')}</GoldButton>
            {undoButton}
          </div>
          <div className="ks-card-sub rounded-sm p-4 flex-1">
            <div className="flex items-center justify-between mb-3">
              <div className="ks-mono ks-muted text-xs">{t('game.addFromThrow')}</div>
              <button aria-label="Upraviť rýchle hodnoty" onClick={() => setShowQVEditor(v => !v)} className="ks-press ks-muted hover:ks-cream p-0.5"><Edit3 size={13} /></button>
            </div>
            {showQVEditor && onQuickValuesChange && (
              <div className="ks-value-editor mb-3 p-2.5 border ks-border-sub rounded-sm bg-stone-950/60 space-y-2">
                <div className="ks-mono ks-muted text-xs">{t('game.editButtons')}</div>
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
                <button key={v} onClick={() => addPoints(v)} className="ks-press border ks-border-sub ks-quick-value bg-stone-950/40 hover:bg-stone-900/60 py-2.5 rounded-sm ks-display ks-cream text-lg font-semibold">+{v}</button>
              ))}
            </div>
            <div className="flex gap-2 mb-3">
              <input type="number" value={customInput} onChange={(e) => setCustomInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && addCustom()} placeholder={t('game.customPlaceholder')} className="ks-custom-value flex-1 min-w-0 bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700" />
              <GoldButton onClick={addCustom} icon={Plus} variant="outline">{t('game.addBtn')}</GoldButton>
            </div>
            <div className="ks-divider my-3" />
            <div className={`grid ${sixButton ? 'grid-cols-3' : 'grid-cols-2'} gap-2`}>
              <button onClick={addDash} className="ks-press p-3 rounded-sm ks-dash-button border-2 border-stone-600/50 bg-gradient-to-b from-stone-900/60 to-stone-950/80 hover:brightness-125 flex items-center justify-center gap-2"><Minus size={20} className="ks-muted" /><span className="ks-mono ks-cream font-semibold">{t('game.dashBtn')}</span></button>
              {sixButton}
              <button onClick={addPenalty} className="ks-press p-3 rounded-sm ks-penalty-button border-2 border-red-900/60 bg-gradient-to-b from-red-950/60 to-stone-950/60 hover:brightness-125 flex items-center justify-center gap-2"><Skull size={20} className="ks-text-accent" /><span className="ks-mono ks-text-accent font-semibold">{penaltyLabel}</span></button>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              <GoldButton onClick={() => setShowStandings(true)} icon={TrendingUp} variant="ghost">Priebeh hry</GoldButton>
              <GoldButton onClick={() => setShowrules(true)} icon={ScrollText} variant="ghost">{t('game.rules')}</GoldButton>
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
        <div
          className="ks-card-prom ks-current-player-frame rounded-sm p-4"
          style={{ '--ks-current-player-color': currentPlayerColor }}
          aria-current="true"
        >
          <div className="flex items-baseline justify-between mb-2">
            <div className="flex items-center gap-2">
              <CurrentPlayerBadge />
              <div className="ks-mono ks-gold text-xs">{t('game.round')} {currentRound + 1}</div>
            </div>
            <div className="ks-mono ks-muted text-xs">{t('game.target')} {fmtNum(target)}</div>
          </div>
          <div className="flex items-end justify-between gap-3 mb-1">
            <div className="flex-1 min-w-0">
              <div className="ks-mono ks-muted text-[10px] mb-0.5">{t('game.player')}</div>
              <div title={players[currentPlayer]} className="ks-display text-4xl ks-cream font-bold leading-tight truncate">
                {players[currentPlayer]}
              </div>
            </div>
            <div className="text-right shrink-0">
              <div className="ks-mono ks-muted text-[10px] mb-0.5">{t('game.score')}</div>
              <div className={`ks-display text-5xl font-bold leading-none ${total < 0 ? 'ks-text-accent' : 'ks-gold'}`}
                   style={{ textShadow: total >= 0 ? '0 2px 12px rgba(212,184,106,0.3)' : 'none' }}>
                {total.toLocaleString(numberLocale(lang))}
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
                <div className="ks-mono ks-gold text-xs">{t('game.adding')}</div>
                <div className="flex items-baseline gap-2">
                  {pending.length > 0 && pending[0] !== 'dash' && Number.isFinite(newTotal) && (
                    <span className="ks-muted text-xl ks-mono leading-none">→ {newTotal.toLocaleString(numberLocale(lang))}</span>
                  )}
                  {pending[0] === 'dash' ? (
                    <div className="ks-display text-6xl font-bold ks-muted">—</div>
                  ) : (
                    <div className={`ks-display text-6xl font-bold ${pendingSum < 0 ? 'ks-text-accent' : 'ks-gold'}`}>
                      {pendingSum > 0 ? '+' : ''}{pendingSum.toLocaleString(numberLocale(lang))}
                    </div>
                  )}
                </div>
              </div>

              {pending.length > 0 ? (
                <div className="flex flex-wrap gap-2 mb-3">
                  {pending.map((p, i) => (
                    <button key={i} onClick={() => removePending(i)}
                      className={`ks-press group flex items-center gap-1.5 px-3 py-1.5 rounded-sm border
                        ${p === 'dash' ? 'ks-pending-dash border-stone-600/60 bg-stone-800/40 ks-muted' :
                          p < 0 ? 'ks-pending-negative border-red-800/60 bg-red-950/40 ks-text-accent' :
                          'ks-pending-positive ks-border-accent bg-stone-900/70 ks-cream'}`}>
                      <span className="ks-display font-semibold">
                        {p === 'dash' ? t('game.dashChip') : (p > 0 ? `+${p}` : p)}
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
              {undoButton}
            </div>
          </div>

          {/* SUBTÍLNA KARTA — predvolené hodnoty */}
          <div className="px-4 mt-4">
            <div className="ks-card-sub rounded-sm p-4">
              <div className="ks-mono ks-muted text-xs mb-3">{t('game.addFromThrow')}</div>

              <div className="grid grid-cols-3 gap-2 mb-3">
                {qv.map(v => (
                  <button key={v} onClick={() => addPoints(v)}
                    className="ks-press border ks-border-sub ks-quick-value bg-stone-950/40 hover:bg-stone-900/60 py-2.5 rounded-sm ks-display ks-cream text-lg font-semibold">
                    +{v}
                  </button>
                ))}
              </div>

              <div className="flex gap-2 mb-3">
                <input type="number" value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && addCustom()}
                  placeholder={t('game.customPlaceholder')}
                  className="ks-custom-value flex-1 min-w-0 bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700"
                />
                <GoldButton onClick={addCustom} icon={Plus} variant="outline">{t('game.addBtn')}</GoldButton>
              </div>

              <div className="ks-divider my-3" />

              {/* Špeciálne tlačidlá: Čiarka + (6 rovnakých) + Penalizácia */}
              <div className={`grid ${sixButton ? 'grid-cols-3' : 'grid-cols-2'} gap-2`}>
                <button onClick={addDash}
                  className="ks-press p-3 rounded-sm ks-dash-button border-2 border-stone-600/50 bg-gradient-to-b from-stone-900/60 to-stone-950/80 hover:brightness-125 flex items-center justify-center gap-2">
                  <Minus size={20} className="ks-muted" />
                  <span className="ks-mono ks-cream font-semibold">{t('game.dashBtn')}</span>
                </button>
                {sixButton}
                <button onClick={addPenalty}
                  className="ks-press p-3 rounded-sm ks-penalty-button border-2 border-red-900/60 bg-gradient-to-b from-red-950/60 to-stone-950/60 hover:brightness-125 flex items-center justify-center gap-2">
                  <Skull size={20} className="ks-text-accent" />
                  <span className="ks-mono ks-text-accent font-semibold">{penaltyLabel}</span>
                </button>
              </div>
              <div className={`grid ${sixButton ? 'grid-cols-3' : 'grid-cols-2'} gap-2 mt-1`}>
                <div className="ks-muted text-[10px] italic text-center">{t('game.dashHint')}</div>
                {sixButton && <div className="ks-muted text-[10px] italic text-center">{t(sixOfKind === 'Automatická výhra' ? 'game.six.hint' : 'game.six.fixedHint')}</div>}
                <div className="ks-muted text-[10px] italic text-center">{t('game.penaltyHint')}</div>
              </div>
            </div>
          </div>

      <div className="px-4 mt-4 grid grid-cols-2 gap-2">
        <GoldButton onClick={() => setShowStandings(true)} icon={TrendingUp} variant="ghost">Priebeh hry</GoldButton>
        <GoldButton onClick={() => setShowrules(true)} icon={ScrollText} variant="ghost">{t('game.rules')}</GoldButton>
      </div>
      </>
      )}

      {toast && <Toast {...toast} onClose={() => setToast(null)} />}
      {!blockFollowupPopups && funny && !showDecisionPopup && funnyWindowsDisplayMode === 'standard' && (
        <FunnyOverlay data={funny} onClose={funnyQueue.dismiss} />
      )}

      {showStandings && (
        <FullscreenProgressView onClose={() => setShowStandings(false)} tournament={tournament} totals={totals} target={target} highlightPlayer={currentPlayer} />
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
      <Confetti active={!!(winnerCelebration && extensions.confetti && motionEnabled)} skin={selectedSkin} />

      {/* Míľnik flash */}
      {milestoneFlash && (
        <div className="fixed inset-0 z-[80] pointer-events-none flex items-center justify-center">
          <div className="ks-dark-overlay ks-milestone-in absolute text-center px-6 py-4 rounded-lg"
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
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-6 ks-overlay-bg ks-dark-overlay" style={{ background: 'var(--ks-overlay-dark, radial-gradient(circle at center, rgba(120,80,40,0.95), rgba(14,12,10,0.98)))' }}>
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
  const dialogRef = useRef(null);
  useFocusTrap(dialogRef);
  // Rozhodnutie je povinné – Späť ho nesmie preskočiť ani opustiť hru.
  useBackHandler(() => {});
  if (displayMode === 'standard') {
    return (
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-label="Potvrdenie výhry"
           className="fixed inset-0 z-50 flex items-center justify-center px-6 ks-overlay-bg ks-dark-overlay"
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
    <div ref={dialogRef} role="dialog" aria-modal="true" aria-label="Potvrdenie výhry"
         className="fixed inset-0 z-50 flex items-center justify-center px-4"
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

function FullscreenProgressView({ onClose, tournament, totals, target, highlightPlayer }) {
  const dialogRef = useRef(null);
  useFocusTrap(dialogRef);
  useBackHandler(() => onClose(), true);
  return (
    <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="ks-progress-title" tabIndex={-1} className="fixed inset-0 z-40 ks-bg ks-fade flex flex-col p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4 shrink-0">
        <h2 id="ks-progress-title" className="ks-display ks-gold text-3xl sm:text-4xl font-bold">Priebeh hry</h2>
        <button aria-label="Zatvoriť" onClick={onClose} className="ks-press ks-cream p-2 border ks-border-sub rounded-sm">
          <X size={28} />
        </button>
      </div>
      <div data-keyboard-scroll tabIndex={0} role="region" aria-label="Graf a poradie hráčov — posúvaj šípkami" className="flex-1 min-h-0 overflow-y-auto" style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-y' }}>
        <ProgressChart tournament={tournament} totals={totals} target={target} highlightPlayer={highlightPlayer} fullscreen />
      </div>
    </div>
  );
}

// ─── Modal + tabuľka poradia ──────────────────────────────────────────────

// ─── Pravidlá ─────────────────────────────────────────────────────────────

// ─── Editor pravidiel ─────────────────────────────────────────────────────

// ─── Archív ───────────────────────────────────────────────────────────────

// Bunka editora archívu: počas písania drží surový text, hodnotu uloží až pri
// opustení poľa alebo Enter. Neplatný text vráti pôvodnú hodnotu.

