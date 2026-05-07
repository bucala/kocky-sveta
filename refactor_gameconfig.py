lines = open('src/App.jsx', encoding='utf-8').readlines()

# Najdi hranice: QUICK_VALUES -> STYLES
start = next(i for i,l in enumerate(lines) if l.strip().startswith('const QUICK_VALUES'))
end = next(i for i,l in enumerate(lines) if l.strip().startswith('const STYLES'))

block = ''.join(lines[start:end])
block = block.replace('const QUICK_VALUES', 'export const QUICK_VALUES')
block = block.replace('const PENALTY_VALUE', 'export const PENALTY_VALUE')
block = block.replace('const TARGET_OPTIONS', 'export const TARGET_OPTIONS')
block = block.replace('const FUNNY_MESSAGES', 'export const FUNNY_MESSAGES')
block = block.replace('const RULE_CATEGORIES', 'export const RULE_CATEGORIES')
block = block.replace('const SETTING_RULE_IDS', 'export const SETTING_RULE_IDS')
block = block.replace('const POPUP_CONFIG', 'export const POPUP_CONFIG')
block = block.replace('const DEFAULT_RULES', 'export const DEFAULT_RULES')

open('src/constants/gameConfig.js', 'w', encoding='utf-8').write(block)
print(f'gameConfig.js written ({end-start} lines)')

# Odstran z App.jsx
new_lines = lines[:start] + lines[end:]

# Pridaj import
imp = "import { QUICK_VALUES, PENALTY_VALUE, TARGET_OPTIONS, FUNNY_MESSAGES, RULE_CATEGORIES, SETTING_RULE_IDS, POPUP_CONFIG, DEFAULT_RULES } from './constants/gameConfig.js';\n"
last_imp = max(i for i,l in enumerate(new_lines) if l.startswith('import '))
new_lines.insert(last_imp+1, imp)

open('src/App.jsx', 'w', encoding='utf-8').writelines(new_lines)
print('App.jsx updated, lines:', len(new_lines))
