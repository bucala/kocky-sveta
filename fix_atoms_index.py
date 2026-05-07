import re, os

atoms = ['GoldButton','Header','Toast','Ornament','FunnyOverlay','SimplifiedResult','StatusBanner','StrikethroughCrown','DiceIcon','DiceRow']

exports = {}
for a in atoms:
    path = f'src/atoms/{a}.jsx'
    if not os.path.exists(path):
        exports[a] = 'missing'
        continue
    content = open(path, encoding='utf-8').read()
    if f'export default function {a}' in content or 'export default' in content:
        exports[a] = 'default'
    elif f'export function {a}' in content or f'export const {a}' in content:
        exports[a] = 'named'
    else:
        exports[a] = 'unknown'
    print(f'{a}: {exports[a]}')

# Zapis spravny index.js
lines = []
for a, kind in exports.items():
    if kind == 'named':
        lines.append(f"export {{ {a} }} from './{a}.jsx';")
    elif kind == 'default':
        lines.append(f"export {{ default as {a} }} from './{a}.jsx';")
    else:
        lines.append(f"// MISSING: {a}")

open('src/atoms/index.js', 'w', encoding='utf-8').write('\n'.join(lines) + '\n')
print('index.js rewritten')
