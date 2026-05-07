import sys

content = open('src/App.jsx', encoding='utf-8').readlines()

# Najdi bloky
markers = {}
for i, line in enumerate(content):
    s = line.strip()
    if s.startswith('function SkinSelector(') and 'SkinSelector' not in markers:
        markers['SkinSelector'] = i
    if s.startswith('function PendingChips(') and 'PendingChips' not in markers:
        markers['PendingChips'] = i

start = markers['SkinSelector']
end = markers['PendingChips']
print(f'Block: lines {start+1} to {end} ({end-start} lines)')

# Extrahuj blok
block = content[start:end]
open('src/screens/SettingsMenu.jsx', 'w', encoding='utf-8').write(
    "import React, { useRef } from 'react';\n"
    "import { Settings, ChevronRight, Monitor, Bell, Layers, FileSpreadsheet, Download, Upload, Edit3, Trash2, AlertTriangle, AlertCircle } from 'lucide-react';\n"
    "import { Header } from '../atoms/Header.jsx';\n"
    "import { SKIN_PRESETS, FONT_PRESETS } from '../constants/skins.js';\n"
    "\n"
    + ''.join(
        line.replace('export default ', '')
        for line in block
    )
    + "\nexport { SkinSelector, FontSelector, VisualAndSkinScreen, SettingsMenu, GameViewModesScreen };\n"
)
print('SettingsMenu.jsx written')

# Odstran z App.jsx a pridaj import
new_import = "import { SkinSelector, FontSelector, VisualAndSkinScreen, SettingsMenu, GameViewModesScreen } from './screens/SettingsMenu.jsx';\n"
# Najdi posledny import
last_import = max(i for i, l in enumerate(content) if l.startswith('import '))
content.insert(last_import + 1, new_import)

# Prepocitaj indexy po inserte
for i, line in enumerate(content):
    s = line.strip()
    if s.startswith('function SkinSelector('):
        start = i
    if s.startswith('function PendingChips('):
        end = i
        break

content = content[:start] + content[end:]
open('src/App.jsx', 'w', encoding='utf-8').writelines(content)
print('App.jsx updated, lines:', len(content))
