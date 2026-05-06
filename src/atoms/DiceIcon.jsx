import React from 'react';
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from 'lucide-react';

const DICE_ICONS = { 1: Dice1, 2: Dice2, 3: Dice3, 4: Dice4, 5: Dice5, 6: Dice6 };

export default function DiceIcon({ value, size = 28 }) {
  const Icon = DICE_ICONS[value];
  if (!Icon) return null;
  return <Icon size={size} strokeWidth={1.5} />;
}
