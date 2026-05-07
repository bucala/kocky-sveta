lines = open('src/App.jsx', encoding='utf-8').read().splitlines()
# Vymazať riadky 24-127 (indexy 23-126)
new_lines = lines[:23] + lines[127:]
open('src/App.jsx', 'w', encoding='utf-8').write('\n'.join(new_lines) + '\n')
print(f'Done. Removed lines 24-127. Total lines: {len(new_lines)}')
