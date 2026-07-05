import React from 'react';

// Zdieľaný, štandardizovaný prepínač — ikona vľavo, statický nadpis/popis,
// štandardný "pill" switch vpravo. Používaný v Admin nastaveniach aj vo
// Vizuál/Zvuky/Skiny obrazovke, aby vyzerali a správali sa jednotne.
export function ToggleRow({ icon: Icon, title, subtitle, enabled, onToggle, compact = false }) {
  return (
    <button
      onClick={onToggle}
      role="switch"
      aria-checked={enabled}
      className={`ks-press w-full ${compact ? 'p-2.5' : 'p-4'} rounded-sm border flex items-center gap-3 text-left transition-colors ${
        enabled ? 'ks-border-accent border bg-amber-950/20' : 'ks-border-sub border'
      }`}
    >
      {Icon && (
        <div className={`${compact ? 'w-9 h-9' : 'w-12 h-12'} rounded-sm border ks-border-sub flex items-center justify-center flex-shrink-0`}>
          <Icon size={compact ? 16 : 22} className={enabled ? 'ks-gold' : 'ks-muted'} />
        </div>
      )}
      <div className="flex-1 min-w-0 text-left">
        <div className={`ks-display font-semibold ${compact ? 'text-sm' : 'text-lg'} ${enabled ? 'ks-cream' : 'ks-muted'}`}>
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
