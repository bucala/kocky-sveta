// ─── Základné UI komponenty ────────────────────────────────────────────────
// Sdielané micro-komponenty používané naprieč celou appkou.
// Žiadna business logika — len vizuál a layout.

import React from 'react';
import {
  Dice1, Dice2, Dice3, Dice4, Dice5, Dice6,
  ChevronLeft, X, AlertCircle, AlertTriangle, Check,
} from 'lucide-react';

const DICE_ICONS = { 1: Dice1, 2: Dice2, 3: Dice3, 4: Dice4, 5: Dice5, 6: Dice6 };

export function DiceIcon({ value, size = 28 }) {
  const Icon = DICE_ICONS[value];
  if (!Icon) return null;
  return <Icon size={size} strokeWidth={1.5} />;
}

export function DiceRow({ dice, size = 24 }) {
  if (!dice || dice.length === 0)
    return <span className="ks-muted text-sm italic">—</span>;
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

export function GoldButton({ children, onClick, disabled, className = '', icon: Icon, variant = 'gold' }) {
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

export function Ornament() {
  return (
    <div className="flex items-center justify-center gap-3 my-3">
      <div className="ks-divider flex-1" />
      <div className="ks-gold text-xs">✦</div>
      <div className="ks-divider flex-1" />
    </div>
  );
}

export function Header({ title, onBack, right }) {
  return (
    <div className="flex items-center justify-between px-5 py-4 border-b ks-border-sub">
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

export function Toast({ msg, kind, onClose }) {
  const colorMap = {
    info:      'ks-border-accent bg-amber-950/90 ks-cream',
    warn:      'border-amber-600/70 bg-amber-900/80 ks-text-accent',
    overshoot: 'border-red-600/70 bg-gradient-to-b from-red-900 to-red-950 text-red-50',
  };
  const Icon = kind === 'overshoot' ? AlertTriangle : kind === 'warn' ? AlertCircle : Check;
  return (
    <div className="fixed top-2 left-3 right-3 z-50 ks-slide-down ks-popup-anchor" style={{ pointerEvents: 'none' }}>
      <div
        className={`max-w-md mx-auto p-3 rounded-sm border ${colorMap[kind] || colorMap.info} flex items-start gap-2 shadow-2xl`}
        style={{ pointerEvents: 'auto', opacity: 'var(--ks-popup-opacity, 0.92)' }}
      >
        <Icon size={20} className="shrink-0 mt-0.5" />
        <div className="ks-body flex-1 text-sm font-medium">{msg}</div>
        <button onClick={onClose} className="opacity-70 hover:opacity-100" aria-label="Zatvoriť">
          <X size={16} />
        </button>
      </div>
    </div>
  );
}

export function StatusBanner({ kind, icon: Icon, children }) {
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

export function SafeTournamentFallback({ title = 'Dáta sa nepodarilo načítať' }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 ks-cream">
      <div className="ks-card rounded-sm p-5 text-center max-w-md">
        <div className="ks-display text-2xl ks-gold mb-2">{title}</div>
        <div className="ks-muted text-sm">Skús sa vrátiť späť alebo otvoriť turnaj znova.</div>
      </div>
    </div>
  );
}
