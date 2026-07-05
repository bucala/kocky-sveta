import React from 'react';

// Zdieľaný, štandardizovaný prepínač — ikona vľavo, statický nadpis/popis,
// štandardný "pill" switch vpravo. Karta samotná vyzerá vždy rovnako;
// zapnutý/vypnutý stav vyjadruje iba samotný switch.
export function ToggleRow({ icon: Icon, title, subtitle, enabled, onToggle, compact = false }) {
  return (
    <button
      onClick={onToggle}
      role="switch"
      aria-checked={enabled}
      className={`ks-card ks-press w-full ${compact ? 'p-2.5' : 'p-4'} rounded-sm flex items-center gap-3 text-left`}
    >
      {Icon && (
        <div className={`${compact ? 'w-9 h-9' : 'w-12 h-12'} rounded-sm border ks-border-sub flex items-center justify-center flex-shrink-0`}>
          <Icon size={compact ? 16 : 22} className="ks-gold" />
        </div>
      )}
      <div className="flex-1 min-w-0 text-left">
        <div className={`ks-display ks-cream font-semibold ${compact ? 'text-sm' : 'text-lg'}`}>
          {title}
        </div>
        {subtitle && <div className="ks-muted text-xs leading-relaxed">{subtitle}</div>}
      </div>
      <div className={`${compact ? 'w-8 h-4' : 'w-10 h-5'} rounded-full transition-colors flex-shrink-0 ${enabled ? 'ks-gold-bg' : 'bg-stone-700'}`}>
        <div className={`${compact ? 'w-4 h-4' : 'w-5 h-5'} rounded-full bg-white shadow transition-transform ${
          enabled ? (compact ? 'translate-x-4' : 'translate-x-5') : 'translate-x-0'
        }`} />
      </div>
    </button>
  );
}
