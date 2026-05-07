// ─── SkinSelector + FontSelector ─────────────────────────────────────────
// Vizuálne výberové komponenty pre skin a font.

import React from 'react';
import { SKIN_PRESETS, FONT_PRESETS } from '../constants/skins.js';

export function SkinSelector({ selectedSkin, onSkinChange }) {
  const skins = Object.values(SKIN_PRESETS);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {skins.map((skin) => {
        const isActive = skin.id === selectedSkin;
        const accent   = skin.vars['--ks-accent'];
        const accent2  = skin.vars['--ks-accent-2'];
        const bgMain   = skin.vars['--ks-bg-main'];
        const bgSoft   = skin.vars['--ks-bg-soft'];
        const text     = skin.vars['--ks-text'];
        return (
          <button
            key={skin.id}
            onClick={() => onSkinChange(skin.id)}
            aria-label={`Skin: ${skin.name}${isActive ? ' (aktívny)' : ''}`}
            aria-pressed={isActive}
            className="ks-press rounded-sm border-2 transition-all flex flex-col pt-3 pb-3 px-3 gap-1 hover:brightness-110 relative"
            style={{ minHeight: '120px', background: bgMain, borderColor: isActive ? accent : 'rgba(255,255,255,0.12)' }}
          >
            {isActive && (
              <div
                className="absolute top-3 right-3 ks-mono font-bold text-[13px] tracking-wider"
                style={{ color: accent }}
              >
                ✦ AKTÍVNY
              </div>
            )}
            <div className="flex items-start w-full">
              <div className="ks-display text-base font-semibold leading-tight" style={{ color: text }}>
                {skin.name}
              </div>
            </div>
            <div
              className="mt-auto w-full grid items-end"
              style={{ gridTemplateColumns: '1fr auto', columnGap: '12px', rowGap: '4px' }}
            >
              <div
                className="rounded-[4px] shrink-0"
                style={{ width: 38, height: 38, background: accent, gridColumn: '2', gridRow: '1 / 3' }}
              />
              <div className="flex items-center gap-1.5 w-full">
                <div className="rounded-[3px] border border-white/10 flex-1" style={{ height: 15, background: bgSoft }} />
                <div className="rounded-[3px] flex-1" style={{ height: 15, background: accent2 }} />
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}

export function FontSelector({ selectedFont, onFontChange }) {
  const fonts = Object.values(FONT_PRESETS);
  return (
    <div className="flex flex-col gap-2">
      {fonts.map((font) => {
        const isActive = font.id === selectedFont;
        return (
          <button
            key={font.id}
            onClick={() => onFontChange(font.id)}
            aria-pressed={isActive}
            className={`ks-press flex items-center justify-between px-4 py-3 rounded-sm border transition-all ${
              isActive
                ? 'border-[var(--ks-border-strong)] ks-card-prom'
                : 'ks-card hover:brightness-110'
            }`}
          >
            <span className="ks-body ks-cream text-sm" style={{ fontFamily: font.stack }}>
              {font.name}
            </span>
            {isActive && <span className="ks-mono text-[11px] ks-gold tracking-widest">✦ AKTÍVNY</span>}
          </button>
        );
      })}
    </div>
  );
}
