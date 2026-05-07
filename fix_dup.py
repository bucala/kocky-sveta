lines = open('src/constants/skins.js', encoding='utf-8').readlines()

# Najdi obe vyskyty export const SKIN_PRESETS
idxs = [i for i,l in enumerate(lines) if 'export const SKIN_PRESETS' in l]
print('SKIN_PRESETS at lines:', [i+1 for i in idxs])

# Odstran prvy vyskyt (stary) - najdi kde konci (zatváracia });)
start = idxs[0]
end = start
depth = 0
for i in range(start, len(lines)):
    depth += lines[i].count('{') - lines[i].count('}')
    if depth <= 0 and i > start:
        end = i + 1
        break

print(f'Removing lines {start+1}-{end}')
new_lines = lines[:start] + lines[end:]
open('src/constants/skins.js', 'w', encoding='utf-8').writelines(new_lines)
print('Done, lines:', len(new_lines))
