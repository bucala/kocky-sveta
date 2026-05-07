import React from 'react';
import { Crown } from 'lucide-react';
import { StrikethroughCrown } from './StrikethroughCrown.jsx';

export default function SimplifiedResult({ kind, title, subtitle, onClose, actionLabel }) {
  const palette = {
    victory:          { accent: '#d4b86a', label: 'VĂŤĹ¤AZ' },
    draw:             { accent: '#d4b86a', label: 'REMĂŤZA' },
    'temporary-king': { accent: '#c44848', label: 'DOÄŚASNĂť KRĂÄ˝' },
    'win-pending':    { accent: '#d4b86a', label: 'POTVRD VĂťHRU' },
  }[kind] || { accent: '#d4b86a', label: '' };

  const Icon = ({ size = 56 }) => {
    if (kind === 'temporary-king') return <StrikethroughCrown size={size} />;
    return <Crown size={size} className="ks-gold" style={{ filter: 'drop-shadow(0 4px 16px rgba(212,184,106,0.5))' }} />;
  };

  return (
    <div className="fixed inset-x-3 top-1/3 z-50 ks-fade ks-popup-anchor flex justify-center" onClick={onClose}>
      <div className="ks-card max-w-sm w-full rounded-sm border-2 p-5 text-center shadow-2xl"
           style={{ borderColor: palette.accent, opacity: 'var(--ks-popup-opacity, 0.92)', cursor: 'pointer' }}>
        <div className="flex justify-center mb-3"><Icon /></div>
        <div className="ks-mono text-xs tracking-widest mb-2" style={{ color: palette.accent }}>{palette.label}</div>
        {title && <div className="ks-display text-2xl font-bold ks-cream leading-tight px-2 mb-1">{title}</div>}
        {subtitle && <div className="ks-body ks-cream text-sm opacity-90 leading-snug">{subtitle}</div>}
        {actionLabel && <div className="ks-mono text-[10px] ks-muted mt-3 tracking-widest">{actionLabel}</div>}
      </div>
    </div>
  );
}
