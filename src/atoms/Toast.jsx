import React from 'react';
import { AlertCircle, AlertTriangle, Check, X } from 'lucide-react';

/**
 * Toast — notifikačný popup.
 * kind: 'info' | 'warn' | 'overshoot'
 * position: 'top' | 'bottom'
 */
export default React.memo(function Toast({
  msg,
  kind = 'info',
  onClose,
  position = 'top',
  className = '',
}) {
  const colorMap = {
    info:      'ks-border-accent bg-amber-950/92 ks-cream',
    warn:      'border-amber-600/70 bg-amber-900/80 ks-text-accent',
    overshoot: 'border-red-600/70 bg-gradient-to-b from-red-900/95 to-red-950/95 text-red-50',
  };
  const Icon =
    kind === 'overshoot' ? AlertTriangle :
    kind === 'warn'      ? AlertCircle   : Check;

  const positionClass = position === 'bottom'
    ? 'bottom-4 left-3 right-3'
    : 'top-2 left-3 right-3';

  return (
    <div
      className={`fixed ${positionClass} z-50 ks-slide-down ks-popup-anchor ${className}`}
      style={{ pointerEvents: 'none' }}
    >
      <div
        className={`max-w-md mx-auto p-3 rounded-sm border flex items-start gap-2 shadow-2xl backdrop-blur-sm ${colorMap[kind] || colorMap.info}`}
        style={{ pointerEvents: 'auto', opacity: 'var(--ks-popup-opacity, 0.92)' }}
      >
        <Icon size={20} className="shrink-0 mt-0.5 flex-shrink-0" />
        <div className="ks-body flex-1 text-sm font-medium leading-tight">{msg}</div>
        <button onClick={onClose} className="opacity-70 hover:opacity-100 ml-1 flex-shrink-0">
          <X size={16} />
        </button>
      </div>
    </div>
  );
});
