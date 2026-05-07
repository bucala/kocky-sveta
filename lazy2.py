f = open('src/App.jsx', encoding='utf-8')
c = f.read()
f.close()
c = c.replace(
    "import { Modal, Standings, ProgressChart } from './components/GameWidgets.jsx';",
    "import { Modal, Standings } from './components/GameWidgets.jsx';\nconst ProgressChart = React.lazy(() => import('./components/GameWidgets.jsx').then(m => ({ default: m.ProgressChart })));"
)
open('src/App.jsx', 'w', encoding='utf-8').write(c)
print('Done')
