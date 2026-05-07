content = open('src/App.jsx', encoding='utf-8').readlines()
# Najdi zaciatok a koniec blokov na odstranenie
start = None
end = None
for i, line in enumerate(content):
    if line.startswith('function MainMenu(') and start is None:
        start = i
    if line.startswith('function SafeTournamentFallback(') and start is not None:
        end = i
        break
print(f'Removing lines {start+1} to {end} ({end-start} lines)')
content = content[:start] + content[end:]
open('src/App.jsx', 'w', encoding='utf-8').writelines(content)
print('Done, lines:', len(content))
