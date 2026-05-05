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

const DICE_ICONS = { 1: Dice1, 2: Dice2, 3: Dice3, 4: Dice4, 5: Dice5, 6: Dice6 };

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
    victory:          { accent: '#d4b86a', label: 'VÍŤAZ' },
    draw:             { accent: '#d4b86a', label: 'REMÍZA' },
    'temporary-king': { accent: '#c44848', label: 'DOČASNÝ KRÁĽ' },
    'win-pending':    { accent: '#d4b86a', label: 'POTVRD VÝHRU' },
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

export {
  DiceIcon,
  DiceRow,
  GoldButton,
  Ornament,
  Header,
  Toast,
  StrikethroughCrown,
  SimplifiedResult,
  FunnyOverlay,
  StatusBanner,
};
