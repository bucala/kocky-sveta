import React from 'react';
import { AlertTriangle, AlertCircle, Check, X } from 'lucide-react';

export function Toast({ msg, kind, onClose }) {
  const colorMap = {
    info:      'ks-border-accent bg-amber-950/90 ks-cream',
    warn:      'border-amber-600/70 bg-amber-900/80 ks-text-accent',
    overshoot: 'border-red-600/70 bg-gradient-to-b from-red-900 to-red-950 text-red-50',
  };
  const Icon = kind === 'overshoot' ? AlertTriangle : kind === 'warn' ? AlertCircle : Check;
  return (
    <div className="fixed top-2 left-3 right-3 z-50 ks-slide-down ks-popup-anchor" style={{ pointerEvents: 'none' }}>
      <div
        className={`max-w-md mx-auto p-3 rounded-sm border ${colorMap[kind] || colorMap.info} flex items-start gap-2 shadow-2xl`}
        style={{ pointerEvents: 'auto', opacity: 'var(--ks-popup-opacity, 0.92)' }}
      >
        <Icon size={20} className="shrink-0 mt-0.5" />
        <div className="ks-body flex-1 text-sm font-medium">{msg}</div>
        <button onClick={onClose} className="opacity-70 hover:opacity-100"><X size={16} /></button>
      </div>
    </div>
  );
}
