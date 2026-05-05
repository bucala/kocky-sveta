import React from 'react';

export default function GoldButton({ children, onClick, disabled, className = '', icon: Icon, variant = 'gold' }) {
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
