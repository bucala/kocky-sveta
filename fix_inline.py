lines = open('src/App.jsx', encoding='utf-8').read().splitlines()

# Vymazať riadky 24-90 (indexy 23-89) - SKIN_PRESETS, FONT_PRESETS, skinVarsCss, DICE_ICONS
# Ale najprv zistíme kde končí skinVarsCss
end_idx = 23
brace_count = 0
in_block = False
for i in range(23, len(lines)):
    l = lines[i]
    if i == 23:
        in_block = True
    if in_block:
        brace_count += l.count('{') - l.count('}')
        # Hľadáme koniec posledného bloku (skinVarsCss funkcia)
        # Jednoducho hľadáme riadok "const DICE_ICONS" ako koniec
        if 'const DICE_ICONS' in l:
            end_idx = i + 1  # vrátane tohto riadku
            break

print(f"Removing lines 24-{end_idx+1}")
new_lines = lines[:23] + lines[end_idx:]
open('src/App.jsx', 'w', encoding='utf-8').write('\n'.join(new_lines) + '\n')
print(f'Done. Total lines: {len(new_lines)}')
