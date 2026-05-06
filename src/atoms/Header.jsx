import React from 'react';
import { ChevronLeft } from 'lucide-react';

/**
 * Header — štandardná hlavička obrazoviek.
 * Props: title, onBack?, right? (slot pre akcie vpravo)
 */
export default React.memo(function Header({
  title,
  onBack,
  right,
  className = '',
  titleClassName = 'text-xl font-semibold',
}) {
  return (
    <div
      className={`flex items-center justify-between px-5 py-4 border-b ks-border-sub ${className}`}
    >
      {onBack ? (
        <button
          onClick={onBack}
          className="ks-press ks-cream flex items-center gap-1 -ml-2 px-2 py-1 rounded-sm"
        >
          <ChevronLeft size={20} />
          <span className="ks-body text-sm">Späť</span>
        </button>
      ) : (
        <div className="w-16" />
      )}
      <h2 className={`ks-display ks-gold text-center flex-1 ${titleClassName}`}>
        {title}
      </h2>
      <div className="w-16 flex justify-end">{right}</div>
    </div>
  );
});
