import re, os

lines = open('src/App.jsx', encoding='utf-8').readlines()

def find_func(name):
    for i,l in enumerate(lines):
        if re.match(rf'^function {name}|^export default function {name}', l):
            return i
    return None

def extract_block(start):
    depth = 0
    for i in range(start, len(lines)):
        depth += lines[i].count('{') - lines[i].count('}')
        if depth <= 0 and i > start:
            return i + 1
    return len(lines)

# --- Definicia blokov ---
tasks = [
    # (output_file, [function_names], extra_imports)
    ('src/screens/ArchiveScreen.jsx',
     ['ArchiveScreen','ArchiveItem','ArchiveDetail','EditableScoreTable'],
     "import React, { useState } from 'react';\nimport { ChevronLeft, Trash2, Edit3, TrendingUp, Sigma, ChevronDown, ChevronRight, Crown, ScrollText, Clock, Calendar } from 'lucide-react';\nimport { Header, GoldButton, StatusBanner } from '../atoms/index.js';\nimport { SKIN_PRESETS } from '../constants/skins.js';\nimport { formatDateTime, formatDuration } from '../lib/gameEngine.js';\nimport { computeTotals, computeWinners } from './TournamentScreen.jsx';\nimport ScoreTable from '../components/ScoreTable.jsx';\n"
    ),
    ('src/screens/RulesEditor.jsx',
     ['RulesView','RulesContent','RulesEditor','SettingEditCard','RuleEditCard','Field','DicePicker'],
     "import React, { useState } from 'react';\nimport { ChevronLeft, Plus, Trash2, RotateCcw, AlertCircle } from 'lucide-react';\nimport { Header, GoldButton } from '../atoms/index.js';\nimport { SKIN_PRESETS, DICE_ICONS } from '../constants/skins.js';\nimport { DEFAULT_RULES, RULE_CATEGORIES, SETTING_RULE_IDS } from '../constants/gameConfig.js';\n"
    ),
    ('src/components/GameWidgets.jsx',
     ['Modal','Standings','ProgressChart'],
     "import React from 'react';\nimport { X, Crown, TrendingUp } from 'lucide-react';\nimport { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';\nimport { SKIN_PRESETS } from '../constants/skins.js';\n"
    ),
]

remove_ranges = []

for output, funcs, header in tasks:
    os.makedirs(os.path.dirname(output), exist_ok=True)
    block_lines = []
    for fname in funcs:
        idx = find_func(fname)
        if idx is None:
            print(f'WARNING: {fname} not found')
            continue
        end = extract_block(idx)
        chunk = ''.join(lines[idx:end])
        chunk = re.sub(rf'^(export default )?function {fname}', f'export function {fname}', chunk, count=1)
        block_lines.append(chunk)
        remove_ranges.append((idx, end))
        print(f'  {fname}: lines {idx+1}-{end}')

    open(output, 'w', encoding='utf-8').write(header + '\n'.join(block_lines))
    print(f'Written: {output}')

# Odstran atoms duplicity (119-364)
atoms_start = find_func('DiceIcon')
atoms_end = find_func('App')
if atoms_start and atoms_end:
    remove_ranges.append((atoms_start, atoms_end))
    print(f'Removing atoms duplicate: lines {atoms_start+1}-{atoms_end}')

# Zorad a odstran od konca
remove_ranges.sort(reverse=True)
new_lines = list(lines)
for s, e in remove_ranges:
    del new_lines[s:e]

# Pridaj importy
imports = [
    "import { Modal, Standings, ProgressChart } from './components/GameWidgets.jsx';\n",
    "import { RulesView, RulesEditor } from './screens/RulesEditor.jsx';\n",
    "import { ArchiveScreen, ArchiveDetail } from './screens/ArchiveScreen.jsx';\n",
]
last_imp = max(i for i,l in enumerate(new_lines) if l.startswith('import '))
for imp in reversed(imports):
    new_lines.insert(last_imp+1, imp)

open('src/App.jsx', 'w', encoding='utf-8').writelines(new_lines)
print(f'App.jsx final lines: {len(new_lines)}')
