import React, { useMemo } from 'react';

const SYMBOLS = ['🎲', '🎲', '🃏', '🪙', '🎰', '⭐', '💠', '🎲'];

export function BrawlBackground() {
  const items = useMemo(() => SYMBOLS.map((sym, i) => ({
    sym,
    left: `${8 + (i * 12) % 84}%`,
    animationDelay: `${i * 0.9}s`,
    animationDuration: `${6 + (i % 4) * 1.5}s`,
    fontSize: `${1.4 + (i % 3) * 0.5}rem`,
  })), []);

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
