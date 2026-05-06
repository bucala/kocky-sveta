import React from 'react';

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
