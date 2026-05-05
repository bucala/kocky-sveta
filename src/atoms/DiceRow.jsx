import React from 'react';
import DiceIcon from './DiceIcon.jsx';

export default function DiceRow({ dice, size = 24 }) {
  if (!dice || dice.length === 0) return <span className="ks-muted text-sm italic">—</span>;
  return (
    <div className="flex flex-wrap gap-1 items-center">
      {dice.map((d, i) => (
        <div key={i} className="ks-gold" style={{ display: 'inline-flex' }}>
          <DiceIcon value={d} size={size} />
        </div>
      ))}
    </div>
  );
}
