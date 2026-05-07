f = open('src/App.jsx', encoding='utf-8')
c = f.read()
f.close()
c = c.replace(
    "import * as XLSX from 'xlsx';",
    "let XLSX = null;\nasync function getXLSX() { if (!XLSX) XLSX = await import('xlsx'); return XLSX; }"
)
open('src/App.jsx', 'w', encoding='utf-8').write(c)
print('Done')
