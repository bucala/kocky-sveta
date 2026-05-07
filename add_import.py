content = open('src/App.jsx', encoding='utf-8').readlines()
new_import = "import { MainMenu, MenuButton } from './screens/MainMenu.jsx';\n"
content.insert(16, new_import)
open('src/App.jsx', 'w', encoding='utf-8').writelines(content)
print('Done, lines:', len(content))
