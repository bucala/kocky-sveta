// Post-cap-sync úpravy pre Android build.
// Nastavuje SDK verzie, minifikáciu a základné permissions/atribúty
// v AndroidManifest. Sieťové permissions ostávajú zachované, lebo Capacitor
// WebView ich potrebuje pre lokálne file:// requesty (a pre prípadné
// budúce online funkcie). Firebase-specific network_security_config už
// nepoužívame — appka je čisto offline.
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const paths = {
  gradle: resolve(__dirname, '../android/app/build.gradle'),
  manifest: resolve(__dirname, '../android/app/src/main/AndroidManifest.xml'),
};

if (existsSync(paths.gradle)) {
  let content = readFileSync(paths.gradle, 'utf8');
  content = content.replace(/compileSdkVersion\s+\d+/g, 'compileSdkVersion 34');
  content = content.replace(/targetSdkVersion\s+\d+/g, 'targetSdkVersion 34');
  content = content.replace(/(buildTypes\s*\{[^}]*release\s*\{[^}]*)minifyEnabled\s+false/s, '$1minifyEnabled true');
  content = content.replace(/(buildTypes\s*\{[^}]*release\s*\{[^}]*)shrinkResources\s+false/s, '$1shrinkResources true');
  writeFileSync(paths.gradle, content);
}

if (existsSync(paths.manifest)) {
  let content = readFileSync(paths.manifest, 'utf8');
  if (!content.includes('android.permission.INTERNET')) {
    content = content.replace('</manifest>', '    <uses-permission android:name="android.permission.INTERNET" />\n</manifest>');
  }
  if (!content.includes('android.permission.ACCESS_NETWORK_STATE')) {
    content = content.replace('</manifest>', '    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />\n</manifest>');
  }
  if (!content.includes('android:hardwareAccelerated="true"')) {
    content = content.replace('<application', '<application android:hardwareAccelerated="true"');
  }
  writeFileSync(paths.manifest, content);
}

console.log('✅ Android post-sync fixes applied.');
