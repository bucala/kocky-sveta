lines = open('src/constants/gameConfig.js', encoding='utf-8').readlines()

# Najdi a odstran formatDateTime a formatDuration
start = next((i for i,l in enumerate(lines) if 'function formatDateTime' in l), None)
if start is not None:
    # Najdi koniec druhej funkcie (formatDuration)
    end = start
    found = 0
    for i in range(start, len(lines)):
        if 'function format' in lines[i]:
            found += 1
        if found >= 2 and lines[i].strip() == '}':
            end = i + 1
            break
    print(f'Removing lines {start+1}-{end}')
    lines = lines[:start] + lines[end:]
    open('src/constants/gameConfig.js', 'w', encoding='utf-8').writelines(lines)
    print('gameConfig.js fixed')
else:
    print('Not found')

# Pridaj import formatDateTime, formatDuration do App.jsx
app = open('src/App.jsx', encoding='utf-8').read()
if 'formatDateTime' not in app.split('import')[0] and "from './lib/gameEngine.js'" not in app:
    # Najdi posledny import a pridaj
    import_line = "import { formatDateTime, formatDuration } from './lib/gameEngine.js';\n"
    lines2 = open('src/App.jsx', encoding='utf-8').readlines()
    last_imp = max(i for i,l in enumerate(lines2) if l.startswith('import '))
    lines2.insert(last_imp+1, import_line)
    open('src/App.jsx', 'w', encoding='utf-8').writelines(lines2)
    print('App.jsx import added')
else:
    print('App.jsx already has import')
