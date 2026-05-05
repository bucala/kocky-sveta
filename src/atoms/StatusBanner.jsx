import React from 'react';

export default function StatusBanner({ kind, icon: Icon, children }) {
  const colors = {
    info: 'border-amber-800/30 bg-amber-950/30 ks-text-accent/90',
    warn: 'border-red-800/40 bg-red-950/30 ks-text-accent',
    gold: 'border-amber-600/60 bg-amber-900/30 ks-text-accent',
  };
  return (
    <div className={`flex items-start gap-2 text-sm border rounded-sm p-2 ${colors[kind]}`}>
      <Icon size={16} className="mt-0.5 shrink-0 ks-gold" />
      <div className="ks-body">{children}</div>
    </div>
  );
}
