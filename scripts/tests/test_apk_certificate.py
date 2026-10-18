import hashlib
import importlib.util
from pathlib import Path
import unittest

spec = importlib.util.spec_from_file_location('verification', Path(__file__).parents[1] / 'verify-apk-certificate.py')
verification = importlib.util.module_from_spec(spec)
spec.loader.exec_module(verification)


class CertificateTests(unittest.TestCase):
    certificate = b'test certificate bytes'
    digest = hashlib.sha256(certificate).hexdigest()

    def test_legacy_numbered_signer(self):
        self.assertEqual(verification.verify_certificate(
            f'Signer #1 certificate SHA-256 digest: {self.digest}\n', self.certificate), self.digest)

    def test_sdk_range_signer_in_new_build_tools(self):
        self.assertEqual(verification.verify_certificate(
            f'Signer (minSdkVersion=24, maxSdkVersion=2147483647) certificate SHA-256 digest: {self.digest}\n',
            self.certificate), self.digest)

    def test_same_certificate_across_signing_schemes(self):
        report = (f'Signer #1 certificate SHA-256 digest: {self.digest}\n'
                  f'Signer (minSdkVersion=28, maxSdkVersion=2147483647) certificate SHA-256 digest: {self.digest.upper()}\r\n')
        self.assertEqual(verification.verify_certificate(report, self.certificate), self.digest)

    def test_different_certificate_is_rejected(self):
        with self.assertRaisesRegex(ValueError, 'očakávaným'):
            verification.verify_certificate(f'Signer #1 certificate SHA-256 digest: {"0" * 64}\n', self.certificate)

    def test_additional_unexpected_signer_is_rejected(self):
        report = (f'Signer #1 certificate SHA-256 digest: {self.digest}\n'
                  f'Signer #2 certificate SHA-256 digest: {"0" * 64}\n')
        with self.assertRaises(ValueError):
            verification.verify_certificate(report, self.certificate)

    def test_missing_or_invalid_certificate_digest_is_rejected(self):
        for report in ('', 'Verified', f'Signer #1 public key SHA-256 digest: {self.digest}',
                       'Signer #1 certificate SHA-256 digest: 1234'):
            with self.subTest(report=report), self.assertRaises(ValueError):
                verification.verify_certificate(report, self.certificate)
