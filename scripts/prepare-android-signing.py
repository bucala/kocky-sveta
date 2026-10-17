#!/usr/bin/env python3
"""Decode CI signing material outside the checkout; never log secret values."""
import base64
import binascii
import os
from pathlib import Path
import subprocess
import sys


def prepare(env):
    names = ('ANDROID_KEYSTORE_BASE64', 'KEYSTORE_PASS', 'KEY_ALIAS', 'KEY_PASS')
    missing = [name for name in names if not env.get(name)]
    if missing:
        raise ValueError('Chýbajú GitHub Actions secrets: ' + ', '.join(
            {'KEYSTORE_PASS': 'ANDROID_KEYSTORE_PASS', 'KEY_ALIAS': 'ANDROID_KEY_ALIAS',
             'KEY_PASS': 'ANDROID_KEY_PASS'}.get(name, name) for name in missing))
    try:
        data = base64.b64decode(''.join(env['ANDROID_KEYSTORE_BASE64'].split()), validate=True)
    except (binascii.Error, ValueError):
        raise ValueError('ANDROID_KEYSTORE_BASE64 nie je platné Base64.') from None
    if not data:
        raise ValueError('ANDROID_KEYSTORE_BASE64 obsahuje prázdny súbor.')
    directory = Path(env['RUNNER_TEMP']) / 'android-signing'
    directory.mkdir(mode=0o700, parents=True, exist_ok=True)
    directory.chmod(0o700)
    keystore = directory / 'release.keystore'
    keystore.write_bytes(data)
    keystore.chmod(0o600)
    certificate = directory / 'certificate.der'
    try:
        result = subprocess.run([
            'keytool', '-exportcert', '-keystore', str(keystore),
            '-alias', env['KEY_ALIAS'], '-storepass:env', 'KEYSTORE_PASS',
            '-file', str(certificate),
        ], env=env, capture_output=True, check=False)
        if result.returncode:
            raise ValueError('Keystore sa nedá otvoriť alebo alias neexistuje. '
                             'Skontroluj ANDROID_KEYSTORE_PASS a ANDROID_KEY_ALIAS.')
        certificate.chmod(0o600)
    except BaseException:
        keystore.unlink(missing_ok=True)
        certificate.unlink(missing_ok=True)
        raise
    return keystore


if __name__ == '__main__':
    try:
        prepare(os.environ)
    except (ValueError, OSError) as error:
        print(f'::error::{error}', file=sys.stderr)
        sys.exit(1)
    print('Release keystore a podpisový certifikát sú pripravené.')
