import re

lines = open('src/App.jsx', encoding='utf-8').readlines()

# Najdi hranice
start = next(i for i,l in enumerate(lines) if l.strip().startswith('const DICE_ICONS'))
end = next(i for i,l in enumerate(lines) if l.strip().startswith('const QUICK_VALUES'))

block = lines[start:end]
print(f'Block: lines {start+1}-{end} ({end-start} lines)')

# Pridaj do skins.js
skins = open('src/constants/skins.js', encoding='utf-8').read()
# Nahrad const -> export const pre DICE_ICONS, SKIN_PRESETS, skinVarsCss
export_block = ''.join(block)
export_block = export_block.replace('const DICE_ICONS', 'export const DICE_ICONS')
export_block = export_block.replace('const SKIN_PRESETS', 'export const SKIN_PRESETS')
export_block = export_block.replace('function skinVarsCss', 'export function skinVarsCss')

open('src/constants/skins.js', 'w', encoding='utf-8').write(skins + '\n' + export_block)
print('skins.js updated')

# Odstran z App.jsx
new_lines = lines[:start] + lines[end:]

# Uprav import v SettingsMenu.jsx
sm = open('src/screens/SettingsMenu.jsx', encoding='utf-8').read()
sm = sm.replace(
    "import { SKIN_PRESETS, FONT_PRESETS } from '../constants/skins.js';",
    "import { SKIN_PRESETS, FONT_PRESETS, DICE_ICONS, skinVarsCss } from '../constants/skins.js';"
)
open('src/screens/SettingsMenu.jsx', 'w', encoding='utf-8').write(sm)

# Pridaj import do App.jsx
import_line = "import { SKIN_PRESETS, FONT_PRESETS, DICE_ICONS, skinVarsCss } from './constants/skins.js';\n"
last_imp = max(i for i,l in enumerate(new_lines) if l.startswith('import '))
new_lines.insert(last_imp+1, import_line)

open('src/App.jsx', 'w', encoding='utf-8').writelines(new_lines)
print('App.jsx updated, lines:', len(new_lines))
