import re

f = open('src/App.jsx', encoding='utf-8')
c = f.read()
f.close()

# Najdi funkciu ktora exportuje xlsx (okolo riadku 289)
# Pridaj "const XLSX = await getXLSX();" na zaciatok async funkcie obsahujucej XLSX.utils
lines = c.split('\n')
new_lines = []
i = 0
while i < len(lines):
    line = lines[i]
    # Najdi async funkciu kde sa prvy krat v tele objaví XLSX. (nie definicia)
    if re.match(r'\s*async function ', line) or re.match(r'\s*const \w+ = async \(', line) or re.match(r'\s*async \(', line) or 'async (' in line:
        # Zber cely blok
        block = [line]
        depth = line.count('{') - line.count('}')
        j = i + 1
        while j < len(lines) and (depth > 0 or j == i+1):
            block.append(lines[j])
            depth += lines[j].count('{') - lines[j].count('}')
            j += 1
        block_text = '\n'.join(block)
        # Ak blok obsahuje XLSX. ale nie getXLSX
        if 'XLSX.' in block_text and 'getXLSX' not in block_text:
            # Najdi prvu { a vloz za nu
            for k, bl in enumerate(block):
                if '{' in bl:
                    indent = len(bl) - len(bl.lstrip()) + 2
                    block.insert(k+1, ' ' * indent + 'const XLSX = await getXLSX();')
                    break
            print(f"Patched async block at line {i+1}: {line.strip()[:60]}")
        new_lines.extend(block)
        i = j
    else:
        new_lines.append(line)
        i += 1

open('src/App.jsx', 'w', encoding='utf-8').write('\n'.join(new_lines))
print('Done')
