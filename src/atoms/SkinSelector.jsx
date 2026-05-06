import React from 'react';
import { SKIN_PRESETS } from '../constants/skins.js';

export function SkinSelector({ selectedSkin, onSkinChange }) {
  const skins = Object.values(SKIN_PRESETS);
  return (
    <div className="ks-card rounded-sm p-4">
      <div className="flex items-center justify-between gap-3 mb-4">
        <div>
          <div className="ks-display ks-cream text-xl font-semibold">Skiny</div>
          <div className="ks-muted text-sm">Vyber si vizuál aplikácie</div>
        </div>
        <div className="ks-mono ks-gold text-xs">ONE-PROMPT SKINNING</div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {skins.map(skin => {
          const active = skin.id === selectedSkin;
          return (
            <button
              key={skin.id}
              onClick={() => onSkinChange(skin.id)}
              className={`ks-press text-left rounded-sm p-3 border-2 transition-all ${
                active
                  ? 'ks-border-accent shadow-[0_0_0_1px_rgba(212,184,106,0.25)]'
                  : 'ks-border-sub'
              } ks-card`}
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <div>
                  <div className="ks-display ks-cream text-lg font-semibold leading-tight">{skin.name}</div>
                  <div className="ks-muted text-[11px] mt-0.5 uppercase tracking-[0.2em]">{skin.id}</div>
                </div>
                {active && <div className="ks-gold ks-mono text-[10px]">Aktívny</div>}
              </div>
              <div className="h-12 rounded-sm overflow-hidden border border-amber-900/25 flex">
                <div className="flex-1" style={{ background: skin.bg }} />
                <div className="w-10" style={{ background: 'var(--ks-accent)' }} />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
