lines = open('src/App.jsx', encoding='utf-8').read().splitlines()

# Najdi riadok s "from './screens/SettingsMenu" a pridaj SKIN_PRESETS import
for i, l in enumerate(lines):
    if "from './screens/SettingsMenu" in l:
        lines.insert(i + 1, "import { SKIN_PRESETS, FONT_PRESETS, skinVarsCss, DICE_ICONS } from './constants/skins.js';")
        break

# Najdi a vymaž inline const SKIN_PRESETS blok (riadok 24 = index ~24)
# Hľadáme "const SKIN_PRESETS = {" a "const FONT_PRESETS" a "const DICE_ICONS"
remove_patterns = ['const SKIN_PRESETS = {', 'const FONT_PRESETS', 'const DICE_ICONS = {']
# Označíme riadky na vymazanie - len prvý výskyt každého patternu a jeho blok nie
# Jednoduchšie: vymaž len riadok DICE_ICONS (jednoriadkový)
result = []
skip_block = 0
for line in lines:
    if skip_block > 0:
        skip_block -= 1
        # Počítaj { a } aby sme vedeli koniec bloku
        continue
    if line.strip().startswith('const DICE_ICONS = {') and 'Dice1' in line:
        continue  # jednoriadkový, preskočíme
    result.append(line)

open('src/App.jsx', 'w', encoding='utf-8').write('\n'.join(result) + '\n')
print('Done')
