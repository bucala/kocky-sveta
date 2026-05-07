lines = open('src/App.jsx', encoding='utf-8').read().splitlines()

# Vymazať riadky 1186-1485 (indexy 1185-1484)
start = 1185
end = 1485  # vrátane closing }

import_line = "import { SkinSelector, FontSelector, VisualAndSkinScreen, SettingsMenu, GameViewModesScreen } from './screens/SettingsMenu.jsx';"

new_lines = lines[:start] + lines[end:]

last_import = max(i for i, l in enumerate(new_lines) if l.startswith('import '))
new_lines.insert(last_import + 1, import_line)

open('src/App.jsx', 'w', encoding='utf-8').write('\n'.join(new_lines) + '\n')
print(f'Done. Lines {start+1}-{end} removed. Total lines: {len(new_lines)}')
