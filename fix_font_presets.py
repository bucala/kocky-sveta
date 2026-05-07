import re

# Pridaj FONT_PRESETS do skins.js
font_presets = """export const FONT_PRESETS = {
  default:   { id: 'default',   name: 'Default',        stack: "'Cormorant Garamond', 'Crimson Pro', Georgia, serif",   monoStack: "'Bebas Neue', sans-serif" },
  calibri:   { id: 'calibri',   name: 'Calibri',         stack: "'Calibri', 'Segoe UI', sans-serif",                    monoStack: "'Bebas Neue', sans-serif" },
  arial:     { id: 'arial',     name: 'Arial',           stack: "Arial, 'Helvetica Neue', sans-serif",                  monoStack: "'Bebas Neue', sans-serif" },
  crimson:   { id: 'crimson',   name: 'Crimson Pro',     stack: "'Crimson Pro', Georgia, serif",                        monoStack: "'Bebas Neue', sans-serif" },
  comicsans: { id: 'comicsans', name: 'Comic Sans MS',   stack: "'Comic Sans MS', 'Comic Sans', cursive",               monoStack: "'Bebas Neue', sans-serif" },
  inkfree:   { id: 'inkfree',   name: 'Ink Free',        stack: "'Ink Free', 'Segoe Script', cursive",                  monoStack: "'Bebas Neue', sans-serif" },
};\n"""

# Precisti skins.js (odstran nedokonceny fragment ktory sme pridali)
skins = open('src/constants/skins.js', encoding='utf-8').read()
skins = re.sub(r'// FONT_PRESETS\nexport const FONT_PRESETS = \{\n', '', skins)
open('src/constants/skins.js', 'w', encoding='utf-8').write(skins + '\n' + font_presets)
print('skins.js updated')

# Odstran const FONT_PRESETS z App.jsx (riadky 72-78)
lines = open('src/App.jsx', encoding='utf-8').readlines()
new_lines = []
skip = False
for line in lines:
    if line.strip().startswith('const FONT_PRESETS = {'):
        skip = True
    if skip:
        if line.strip() == '};':
            skip = False
            continue
        continue
    new_lines.append(line)
open('src/App.jsx', 'w', encoding='utf-8').writelines(new_lines)
print('App.jsx cleaned, lines:', len(new_lines))
