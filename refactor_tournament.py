import re

lines = open('src/App.jsx', encoding='utf-8').readlines()

start = next(i for i,l in enumerate(lines) if l.startswith('function SafeTournamentFallback'))
end = next(i for i,l in enumerate(lines) if l.startswith('function Modal'))

print(f'Block: lines {start+1}-{end} ({end-start} lines)')

block = ''.join(lines[start:end])

header = """import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6, Plus, Minus, Trash2, X, ChevronLeft, AlertCircle, AlertTriangle, Check, RotateCcw, Crown, ChevronRight, Zap, Skull } from 'lucide-react';
import { SKIN_PRESETS, DICE_ICONS, skinVarsCss } from '../constants/skins.js';
import { QUICK_VALUES, PENALTY_VALUE, FUNNY_MESSAGES, POPUP_CONFIG, SETTING_RULE_IDS } from '../constants/gameConfig.js';
import { formatDateTime, formatDuration } from '../lib/gameEngine.js';
import { GoldButton, Header, Toast, Ornament, FunnyOverlay, SimplifiedResult, StatusBanner, StrikethroughCrown } from '../atoms/index.js';
import ScoreTable from '../components/ScoreTable.jsx';

"""

# Exporty
block = block.replace('function SafeTournamentFallback', 'export function SafeTournamentFallback')
block = block.replace('function PendingChips', 'export function PendingChips')
block = block.replace('function isStrictMode', 'export function isStrictMode')
block = block.replace('function computeTotals', 'export function computeTotals')
block = block.replace('function computeWinners', 'export function computeWinners')
block = block.replace('function useFunnyQueue', 'export function useFunnyQueue')
block = block.replace('function TournamentScreen', 'export function TournamentScreen')

import os
os.makedirs('src/screens', exist_ok=True)
open('src/screens/TournamentScreen.jsx', 'w', encoding='utf-8').write(header + block)
print('TournamentScreen.jsx written')

# Odstran z App.jsx
new_lines = lines[:start] + lines[end:]

# Pridaj import
imp = "import { TournamentScreen, SafeTournamentFallback, isStrictMode, computeTotals, computeWinners, useFunnyQueue } from './screens/TournamentScreen.jsx';\n"
last_imp = max(i for i,l in enumerate(new_lines) if l.startswith('import '))
new_lines.insert(last_imp+1, imp)

open('src/App.jsx', 'w', encoding='utf-8').writelines(new_lines)
print('App.jsx updated, lines:', len(new_lines))
