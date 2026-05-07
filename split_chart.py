import re

# Nacitaj GameWidgets
gw = open("src/components/GameWidgets.jsx", encoding="utf-8").read()

# Najdi ProgressChart blok
lines = gw.split("\n")
start = next(i for i,l in enumerate(lines) if "export function ProgressChart" in l)
depth = 0
for end in range(start, len(lines)):
    depth += lines[end].count("{") - lines[end].count("}")
    if depth <= 0 and end > start:
        end += 1
        break

chart_code = "\n".join(lines[start:end])
rest_code = "\n".join(lines[:start] + lines[end:])

# Zapis ProgressChart do vlastneho suboru
chart_header = "import React from 'react';\nimport { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';\nimport { SKIN_PRESETS } from '../constants/skins.js';\n\n"
open("src/components/ProgressChart.jsx", "w", encoding="utf-8").write(chart_header + chart_code)

# Odstran Recharts import z GameWidgets
rest_code = re.sub(r"import \{[^}]*LineChart[^}]*\} from 'recharts';\n", "", rest_code)
rest_code = rest_code.replace("import { SKIN_PRESETS }", "// SKIN_PRESETS moved")
open("src/components/GameWidgets.jsx", "w", encoding="utf-8").write(rest_code)

# Uprav App.jsx - nahrad ProgressChart lazy import
app = open("src/App.jsx", encoding="utf-8").read()
app = app.replace(
    "const ProgressChart = React.lazy(() => import('./components/GameWidgets.jsx').then(m => ({ default: m.ProgressChart })));",
    "const ProgressChart = React.lazy(() => import('./components/ProgressChart.jsx').then(m => ({ default: m.ProgressChart })));"
)
open("src/App.jsx", "w", encoding="utf-8").write(app)
print("Done")
