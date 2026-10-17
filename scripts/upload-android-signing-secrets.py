#!/usr/bin/env python3
"""Upload signing secrets using a locally authenticated GitHub CLI, without echoing them."""
import argparse
import base64
import getpass
from pathlib import Path
import subprocess

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('keystore', type=Path)
parser.add_argument('--repo', default='bucala/kocky-sveta')
args = parser.parse_args()
encoded = base64.b64encode(args.keystore.read_bytes())
store_pass = getpass.getpass('Heslo keystore (nezobrazuje sa): ')
alias = input('Alias kluca [key0]: ').strip() or 'key0'
key_pass = getpass.getpass('Heslo kluca (Enter = rovnake ako keystore): ') or store_pass
if not store_pass:
    parser.error('Heslo keystore nesmie byt prazdne.')
for name, value in (
    ('ANDROID_KEYSTORE_BASE64', encoded),
    ('ANDROID_KEYSTORE_PASS', store_pass.encode()),
    ('ANDROID_KEY_ALIAS', alias.encode()),
    ('ANDROID_KEY_PASS', key_pass.encode()),
):
    subprocess.run(['gh', 'secret', 'set', name, '--repo', args.repo], input=value, check=True)
print('Vsetky styri Actions secrets boli nahrane. Hesla ani kluc sa nevypisali.')
