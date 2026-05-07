// ─── FunnyOverlay, SimplifiedResult, StrikethroughCrown ───────────────────
// Popup / notifikačné komponenty pre výsledky a funny hlášky.

import React from 'react';
import { Crown } from 'lucide-react';

// ─── StrikethroughCrown ──────────────────────────────────────────────────
// Vylepšená SVG verzia "prečiarknutej koruny" pre dočasného kráľa.
// Nahrádza pôvodný emoji '👑' (combining strikethrough), ktorý sa na
// Androide/Windowse vykresľoval rôzne — niekde vôbec.
export function StrikethroughCrown({ size = 96, color = '#d4b86a', strikeColor = '#c44848' }) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 96 96"
      xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
      style={{ filter: 'drop-shadow(0 4px 16px rgba(212,184,106,0.5))' }}
    >
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

// ─── SimplifiedResult ────────────────────────────────────────────────────
// Minimalistický výsledok pre režim "Zjednodušený".
export function SimplifiedResult({ kind, title, subtitle, onClose, actionLabel }) {
  const palette = {
    victory:          { accent: '#d4b86a', label: 'VÍŤAZ' },
    draw:             { accent: '#d4b86a', label: 'REMÍZA' },
    'temporary-king': { accent: '#c44848', label: 'DOČASNÝ KRÁĽ' },
    'win-pending':    { accent: '#d4b86a', label: 'POTVRD VÝHRU' },
  }[kind] || { accent: '#d4b86a', label: '' };

  const IconInner = ({ size = 56 }) => {
    if (kind === 'temporary-king') return <StrikethroughCrown size={size} />;
    return (
      <Crown
        size={size}
        className="ks-gold"
        style={{ filter: 'drop-shadow(0 4px 16px rgba(212,184,106,0.5))' }}
      />
    );
  };

  return (
    <div
      className="fixed inset-x-3 top-1/3 z-50 ks-fade ks-popup-anchor flex justify-center"
      onClick={onClose}
    >
      <div
        className="ks-card max-w-sm w-full rounded-sm border-2 p-5 text-center shadow-2xl"
        style={{ borderColor: palette.accent, opacity: 'var(--ks-popup-opacity, 0.92)', cursor: 'pointer' }}
      >
        <div className="flex justify-center mb-3"><IconInner /></div>
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

// ─── FunnyOverlay ─────────────────────────────────────────────────────────
export function FunnyOverlay({ data, onClose }) {
  const msg     = typeof data === 'string' ? data : data?.msg;
  const emoji   = typeof data === 'string' ? '🤨' : (data?.emoji   || '🤨');
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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-6 ks-overlay-bg"
      style={{ background: style.bg }}
      onClick={onClose}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full ks-funny-orb"
             style={{ background: `radial-gradient(circle, ${style.glow}, transparent 70%)` }} />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full ks-funny-orb"
             style={{ background: `radial-gradient(circle, ${style.glow}, transparent 70%)`, animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-10 w-32 h-32 rounded-full ks-funny-orb"
             style={{ background: `radial-gradient(circle, ${style.glow}, transparent 70%)`, animationDelay: '0.5s' }} />
      </div>

      <div className="ks-funny relative z-10 text-center max-w-sm" onClick={e => e.stopPropagation()}>
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

        <div
          className="ks-display text-5xl font-bold ks-cream leading-tight px-4"
          style={{ textShadow: `0 4px 24px ${style.glow}, 0 0 40px ${style.glow}` }}
        >
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
