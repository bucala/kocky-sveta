#!/usr/bin/env python3
"""Compare apksigner's verified signer certificates with the expected DER certificate."""
import hashlib
from pathlib import Path
import re
import sys


def verify_certificate(report, certificate):
    expected = hashlib.sha256(certificate).hexdigest()
    # New build-tools label v3 signers by SDK range instead of "Signer #1".
    digests = re.findall(
        r'^Signer[^\r\n]* certificate SHA-256 digest:[ \t]*([0-9a-fA-F]{64})[ \t]*\r?$',
        report, re.MULTILINE)
    if not digests:
        raise ValueError('Vo výstupe apksigner chýba SHA-256 podpisového certifikátu. '
                         'Verejný výstup overenia: ' + repr(report))
    actual = {digest.lower() for digest in digests}
    if actual != {expected}:
        # Certificate fingerprints are public, not signing secrets.
        raise ValueError('APK nie je podpísané očakávaným release certifikátom. '
                         f'Očakávaný SHA-256: {expected}; APK SHA-256: {", ".join(sorted(actual))}')
    return expected


if __name__ == '__main__':
    if len(sys.argv) != 3:
        raise SystemExit('Usage: verify-apk-certificate.py apksigner-report.txt certificate.der')
    try:
        fingerprint = verify_certificate(Path(sys.argv[1]).read_text(), Path(sys.argv[2]).read_bytes())
    except (ValueError, OSError) as error:
        print(f'::error::{error}', file=sys.stderr)
        sys.exit(1)
    print(f'Release APK podpisový certifikát bol overený. SHA-256: {fingerprint}')
