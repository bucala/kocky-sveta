import base64
import importlib.util
import os
from pathlib import Path
import subprocess
import tempfile
import unittest

spec = importlib.util.spec_from_file_location('signing', Path(__file__).parents[1] / 'prepare-android-signing.py')
signing = importlib.util.module_from_spec(spec)
spec.loader.exec_module(signing)


class SigningTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.fixture = tempfile.TemporaryDirectory()
        keystore = Path(cls.fixture.name) / 'test.p12'
        subprocess.run(['keytool', '-genkeypair', '-alias', 'fixture', '-keyalg', 'RSA',
                        '-keysize', '2048', '-validity', '1', '-dname', 'CN=CI Test Only',
                        '-keystore', str(keystore), '-storetype', 'PKCS12',
                        '-storepass', 'test-only-password', '-keypass', 'test-only-password'],
                       check=True, capture_output=True)
        cls.encoded = base64.b64encode(keystore.read_bytes()).decode()

    @classmethod
    def tearDownClass(cls):
        cls.fixture.cleanup()

    def setUp(self):
        self.directory = tempfile.TemporaryDirectory()
        self.addCleanup(self.directory.cleanup)
        self.env = dict(os.environ, RUNNER_TEMP=self.directory.name,
                        ANDROID_KEYSTORE_BASE64=self.encoded,
                        KEYSTORE_PASS='test-only-password', KEY_ALIAS='fixture',
                        KEY_PASS='test-only-password')

    def test_valid_key_has_restricted_permissions_and_certificate(self):
        self.env['ANDROID_KEYSTORE_BASE64'] = '\n'.join(
            self.encoded[i:i+76] for i in range(0, len(self.encoded), 76))
        path = signing.prepare(self.env)
        self.assertEqual(path.stat().st_mode & 0o777, 0o600)
        self.assertEqual(path.parent.stat().st_mode & 0o777, 0o700)
        self.assertTrue((path.parent / 'certificate.der').is_file())
        self.assertEqual(path.read_bytes(), base64.b64decode(self.encoded))

    def test_reports_all_missing_secrets_before_writing(self):
        for name in ('ANDROID_KEYSTORE_BASE64', 'KEYSTORE_PASS', 'KEY_ALIAS', 'KEY_PASS'):
            del self.env[name]
        with self.assertRaises(ValueError) as error:
            signing.prepare(self.env)
        self.assertIn('ANDROID_KEYSTORE_BASE64', str(error.exception))
        self.assertIn('ANDROID_KEY_PASS', str(error.exception))
        self.assertFalse((Path(self.directory.name) / 'android-signing').exists())

    def test_malformed_base64(self):
        self.env['ANDROID_KEYSTORE_BASE64'] = 'not-a-keystore!'
        with self.assertRaisesRegex(ValueError, 'Base64'):
            signing.prepare(self.env)

    def test_empty_decoded_keystore(self):
        self.env['ANDROID_KEYSTORE_BASE64'] = '\n '
        with self.assertRaisesRegex(ValueError, 'prázdny'):
            signing.prepare(self.env)

    def test_wrong_store_password_removes_signing_material(self):
        self.env['KEYSTORE_PASS'] = 'wrong-test-only-password'
        self.assert_invalid_key_is_removed()

    def test_wrong_alias_removes_signing_material(self):
        self.env['KEY_ALIAS'] = 'missing-fixture'
        self.assert_invalid_key_is_removed()

    def assert_invalid_key_is_removed(self):
        with self.assertRaisesRegex(ValueError, 'Keystore') as error:
            signing.prepare(self.env)
        self.assertNotIn(self.env['KEYSTORE_PASS'], str(error.exception))
        directory = Path(self.directory.name) / 'android-signing'
        self.assertFalse((directory / 'release.keystore').exists())
        self.assertFalse((directory / 'certificate.der').exists())


if __name__ == '__main__':
    unittest.main()
