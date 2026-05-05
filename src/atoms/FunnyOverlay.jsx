import React from 'react';
import StrikethroughCrown from './StrikethroughCrown.jsx';

const VARIANT_STYLES = {
  doubt: { bg: 'radial-gradient(circle at center, rgba(80,30,30,0.95), rgba(0,0,0,0.95))',   label: 'DOTAZ Z PUBLIKA', glow: 'rgba(212,184,106,0.4)', labelColor: '#d4b86a' },
  fight: { bg: 'radial-gradient(circle at center, rgba(120,40,30,0.95), rgba(20,10,5,0.97))', label: 'POVZBUDENIE',    glow: 'rgba(231,128,82,0.5)',  labelColor: '#e08854' },
  doom:  { bg: 'radial-gradient(circle at center, rgba(60,20,20,0.97), rgba(0,0,0,0.98))',   label: 'PROROCTVO',       glow: 'rgba(196,72,72,0.5)',   labelColor: '#c44848' },
};

export default function FunnyOverlay({ data, onClose }) {
  const msg     = typeof data === 'string' ? data         : data?.msg;
  const emoji   = typeof data === 'string' ? '🤨'        : (data?.emoji   || '🤨');
  const variant = typeof data === 'string' ? 'doubt'     : (data?.variant || 'doubt');
  const style   = VARIANT_STYLES[variant] || VARIANT_STYLES.doubt;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-6 ks-overlay-bg"
         style={{ background: style.bg }} onClick={onClose}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full ks-funny-orb"
             style={{ background: `radial-gradient(circle, ${style.glow}, transparent 70%)` }} />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full ks-funny-orb"
             style={{ background: `radial-gradient(circle, ${style.glow}, transparent 70%)`, animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-10 w-32 h-32 rounded-full ks-funny-orb"
             style={{ background: `radial-gradient(circle, ${style.glow}, transparent 70%)`, animationDelay: '0.5s' }} />
      </div>

      <div className="ks-funny relative z-10 text-center max-w-sm" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="h-px flex-1 max-w-[60px]" style={{ background: `linear-gradient(90deg, transparent, ${style.labelColor})` }} />
          <span style={{ color: style.labelColor }} className="text-xs">✦</span>
          <div className="h-px flex-1 max-w-[60px]" style={{ background: `linear-gradient(90deg, ${style.labelColor}, transparent)` }} />
        </div>

        <div className="mb-3 ks-funny-emoji flex justify-center" style={{ filter: `drop-shadow(0 4px 16px ${style.glow})` }}>
          {emoji === 'strikethrough-crown'
            ? <StrikethroughCrown size={112} color="#d4b86a" strikeColor="#c44848" />
            : <span className="text-7xl">{emoji}</span>}
        </div>

        <div className="ks-mono text-xs mb-3 tracking-widest" style={{ color: style.labelColor }}>{style.label}</div>

        <div className="ks-display text-5xl font-bold ks-cream leading-tight px-4"
             style={{ textShadow: `0 4px 24px ${style.glow}, 0 0 40px ${style.glow}` }}>
          {msg}
        </div>

        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="h-px flex-1 max-w-[60px]" style={{ background: `linear-gradient(90deg, transparent, ${style.labelColor})` }} />
          <span style={{ color: style.labelColor }} className="text-xs">✦</span>
          <div className="h-px flex-1 max-w-[60px]" style={{ background: `linear-gradient(90deg, ${style.labelColor}, transparent)` }} />
        </div>

        <button onClick={onClose} className="ks-press mt-5 ks-mono ks-muted text-xs tracking-widest">ZATVORIŤ</button>
      </div>
    </div>
  );
}
