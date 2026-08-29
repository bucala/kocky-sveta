import React from 'react';
import { useT } from '../lib/i18n.js';

export function CurrentPlayerBadge({ className = '' }) {
  const t = useT();

  return (
    <span className={`ks-current-player-badge ${className}`}>
      {t('game.currentTurn')}
    </span>
  );
}
