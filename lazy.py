import re

f = open('src/App.jsx', encoding='utf-8')
content = f.read()
f.close()

# Nahrad static importy lazy verziami
content = content.replace(
    "import { ArchiveScreen, ArchiveDetail } from './screens/ArchiveScreen.jsx';",
    "const ArchiveScreen = React.lazy(() => import('./screens/ArchiveScreen.jsx').then(m => ({ default: m.ArchiveScreen })));\nconst ArchiveDetail = React.lazy(() => import('./screens/ArchiveScreen.jsx').then(m => ({ default: m.ArchiveDetail })));"
)
content = content.replace(
    "import { RulesView, RulesEditor } from './screens/RulesEditor.jsx';",
    "const RulesView = React.lazy(() => import('./screens/RulesEditor.jsx').then(m => ({ default: m.RulesView })));\nconst RulesEditor = React.lazy(() => import('./screens/RulesEditor.jsx').then(m => ({ default: m.RulesEditor })));"
)

# Pridaj Suspense import ak tam nie je
if 'Suspense' not in content:
    content = content.replace("import React,", "import React, { Suspense,", 1)
    if 'import React, { Suspense,' not in content:
        content = content.replace("import React ", "import React, { Suspense } ", 1)

open('src/App.jsx', 'w', encoding='utf-8').write(content)
print('Done')
