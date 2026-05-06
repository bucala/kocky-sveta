import React from 'react';
import { Bell } from 'lucide-react';

/**
 * StatusBanner — informačný/varovný banner.
 * kind: 'info' | 'warn' | 'gold'
 * icon: Lucide icon component (voliteľné)
 */
export default React.memo(function StatusBanner({
  kind = 'info',
  icon: Icon,
  children,
  className = '',
}) {
  const colors = {
    info: 'border-amber-800/30 bg-amber-950/30 ks-text-accent/90',
    warn: 'border-red-800/40 bg-red-950/30 ks-text-accent',
    gold: 'border-amber-600/60 bg-amber-900/30 ks-text-accent',
  };
  const DefaultIcon = Icon || Bell;
  return (
    <div className={`flex items-start gap-2 text-sm border rounded-sm p-2 ${colors[kind] || colors.info} ${className}`}>
      <DefaultIcon size={16} className="mt-0.5 shrink-0 ks-gold" />
      <div className="ks-body">{children}</div>
    </div>
  );
});
