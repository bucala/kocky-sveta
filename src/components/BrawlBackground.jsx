import React, { useMemo } from 'react';

const SYMBOLS_BRAWL = ['🎲', '🎲', '🃏', '🪙', '🎰', '⭐', '💠', '🎲'];
const SYMBOLS_BLUE  = ['💠', '🌊', '⚡', '🔷', '❄️', '🌀', '💎', '⚡'];

export function BrawlBackground({ skin }) {
  const symbols = skin === 'brawlblue' ? SYMBOLS_BLUE : SYMBOLS_BRAWL;
  const items = useMemo(() => symbols.map((sym, i) => ({
    sym,
    left: `${8 + (i * 12) % 84}%`,
    animationDelay: `${i * 0.9}s`,
    animationDuration: `${6 + (i % 4) * 1.5}s`,
    fontSize: `${1.4 + (i % 3) * 0.5}rem`,
  })), [skin]);

  return (
    <>
      {items.map((item, i) => (
        <span
          key={i}
          className="ks-brawl-float"
          style={{
            left: item.left,
            animationDelay: item.animationDelay,
            animationDuration: item.animationDuration,
            fontSize: item.fontSize,
          }}
        >
          {item.sym}
        </span>
      ))}
    </>
  );
}
