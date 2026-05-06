import React from 'react';

/**
 * PendingChips — zoznam čipov pripisovaných bodov.
 * Každý čip je klikateľný (removePending).
 */
export default React.memo(function PendingChips({ pending, removePending }) {
  return (
    <div className="flex flex-wrap gap-2">
      {pending.map((p, i) => (
        <button
          key={i}
          onClick={() => removePending(i)}
          className={`px-3 py-2 rounded-sm border ks-press ${
            p === 'dash'
              ? 'ks-border-accent ks-gold'
              : p < 0
              ? 'border-red-800/60 ks-text-accent'
              : 'ks-border-sub ks-cream'
          }`}
        >
          {p === 'dash'
            ? '— Čiarka'
            : `${p > 0 ? '+' : ''}${Number(p).toLocaleString('sk-SK')}`}
        </button>
      ))}
    </div>
  );
});
