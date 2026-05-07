content = open('src/App.jsx', encoding='utf-8').readlines()

# Pridaj import za riadok 17 (index 17)
new_import = "import { NewTournament } from './screens/NewTournament.jsx';\n"
content.insert(17, new_import)

# Najdi a odstran inline NewTournament (od "function NewTournament" po "function PendingChips")
start = None
end = None
for i, line in enumerate(content):
    if line.startswith('function NewTournament(') and start is None:
        start = i
    if line.startswith('function PendingChips(') and start is not None:
        end = i
        break

print(f'Removing lines {start+1} to {end} ({end-start} lines)')
content = content[:start] + content[end:]
open('src/App.jsx', 'w', encoding='utf-8').writelines(content)
print('Done, lines:', len(content))
