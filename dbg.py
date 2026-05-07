c = open('src/screens/SettingsMenu.jsx', encoding='utf-8').read()
print(repr(c[c.index('function SkinSelector'):c.index('function SkinSelector')+50]))
print('---')
print(f'Total length: {len(c)}')
