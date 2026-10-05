import React, { memo, useEffect, useState } from 'react';
import { Crown, Diamond, Dice5, Flame, Leaf, Shield, Skull, Sparkles, Star, WandSparkles, Zap } from 'lucide-react';

function Owl() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <g className="ks-owl-wing ks-owl-wing-left"><path d="M24 28C12 18 4 26 5 43c8 0 14-4 21-9" /></g>
      <g className="ks-owl-wing ks-owl-wing-right"><path d="M40 28c12-10 20-2 19 15-8 0-14-4-21-9" /></g>
      <path d="M21 16l-3-8 12 7h4l12-7-3 8c5 6 5 17 2 25-3 8-9 12-13 12s-10-4-13-12c-3-8-3-19 2-25Z" />
      <circle cx="26" cy="27" r="6" /><circle cx="38" cy="27" r="6" />
      <circle cx="26" cy="27" r="1.5" fill="currentColor" /><circle cx="38" cy="27" r="1.5" fill="currentColor" />
      <path d="m29 35 3 5 3-5M27 53l-3 5m13-5 3 5" />
    </svg>
  );
}

// Stable, bounded vector scenes: no timers or per-frame React updates.
const THEMES = {
  forest: { glyphs: [Leaf, Dice5, Sparkles], scene: 'forest' },
  royal: { glyphs: [Crown, Shield, Diamond, Dice5], scene: 'royal' },
  parchment: { glyphs: [Dice5, Star], scene: 'dice' },
  walnut: { glyphs: [Dice5, Crown], scene: 'dice' },
  rosered: { glyphs: [Star, Dice5, Sparkles], scene: 'dice' },
  ruby: { glyphs: [Diamond, Flame, Dice5], scene: 'ruby' },
  blackwhite: { glyphs: [Dice5, Star], scene: 'dice' },
  whiteblack: { glyphs: [Dice5, Star], scene: 'dice' },
  brawlstars: { glyphs: [Star, Skull, Zap, Shield, Diamond], scene: 'brawl', count: 12 },
  brawlblue: { glyphs: [Skull, Diamond, Zap, Star], scene: 'energy', count: 12 },
  harrypotter: { glyphs: [Owl, WandSparkles, Sparkles, Zap, Star], scene: 'magic', count: 12 },
};

export const BrawlBackground = memo(function BrawlBackground({ skin }) {
  const [paused, setPaused] = useState(() => document.hidden);
  useEffect(() => {
    const update = () => setPaused(document.hidden);
    document.addEventListener('visibilitychange', update);
    return () => document.removeEventListener('visibilitychange', update);
  }, []);
  const theme = THEMES[skin];
  if (!theme) return null;
  return (
    <div className={`ks-theme-background ks-scene-${theme.scene}`} data-paused={paused} aria-hidden="true">
      <div className="ks-theme-aura ks-theme-aura-first" />
      <div className="ks-theme-aura ks-theme-aura-second" />
      <div className="ks-theme-orbit" />
      {Array.from({ length: theme.count || 8 }, (_, i) => {
        const Glyph = theme.glyphs[i % theme.glyphs.length];
        return (
          <span key={`${skin}-${i}`} className={`ks-theme-particle ${Glyph === Owl ? 'ks-theme-owl' : ''}`}
            style={{ left: `${4 + (i * 23) % 91}%`, '--ks-particle-size': `${28 + (i % 4) * 9}px`,
              '--ks-particle-duration': `${18 + (i % 5) * 3}s`, '--ks-particle-delay': `${-i * 3.7}s`,
              '--ks-particle-drift': `${(i % 2 ? -1 : 1) * (28 + (i % 3) * 18)}px`,
              '--ks-particle-turn': `${(i % 2 ? -1 : 1) * 24}deg` }}>
            <span className="ks-theme-glyph"><Glyph strokeWidth={1.5} /></span>
          </span>
        );
      })}
    </div>
  );
});
