import json, os, re

f = open('src/App.jsx', encoding='utf-8')
imports = [l.strip() for l in f if l.strip().startswith('import') and "from '" in l]
f.close()
for i in imports:
    print(i)
