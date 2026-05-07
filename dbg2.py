c = open('src/screens/SettingsMenu.jsx', encoding='utf-8').read()

start = c.index('function SkinSelector({ selectedSkin, onSkinChange })')
end = c.index('\n\nfunction FontSelector(')

print(f'Block from {start} to {end}')
print('First 100 chars of block:')
print(repr(c[start:start+100]))
