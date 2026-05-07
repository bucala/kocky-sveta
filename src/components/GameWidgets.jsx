import React from 'react';
import { X, Crown, TrendingUp } from 'lucide-react';
// SKIN_PRESETS moved from '../constants/skins.js';
export function Modal({ children, onClose, title }) {
  return (
    <div className="fixed inset-0 z-40 flex items-end sm:items-center justify-center p-0 sm:p-4"
         style={{ background: 'rgba(0,0,0,0.7)' }} onClick={onClose}>
      <div className="ks-card w-full max-w-lg max-h-[85vh] flex flex-col rounded-t-lg sm:rounded-sm ks-fade"
           onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between p-4 border-b ks-border-sub">
          <h3 className="ks-display ks-gold text-xl font-semibold">{title}</h3>
          <button onClick={onClose} className="ks-press ks-cream p-1"><X size={22} /></button>
        </div>
        <div className="flex-1 overflow-y-auto p-4" style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-y" }}>{children}</div>
      </div>
    </div>
  );
}

export function Standings({ players, totals, target }) {
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

