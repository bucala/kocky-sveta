// Post-cap-sync úpravy pre Android build.
// Nastavuje SDK verzie, minifikáciu a základné permissions/atribúty
// v AndroidManifest. Sieťové permissions ostávajú zachované, lebo Capacitor
// WebView ich potrebuje pre lokálne file:// requesty (a pre prípadné
// budúce online funkcie). Firebase-specific network_security_config už
// nepoužívame — appka je čisto offline.
const fs = require('fs');
const path = require('path');

const paths = {
  gradle: path.resolve(__dirname, '../android/app/build.gradle'),
  manifest: path.resolve(__dirname, '../android/app/src/main/AndroidManifest.xml'),
};

if (fs.existsSync(paths.gradle)) {
  let content = fs.readFileSync(paths.gradle, 'utf8');
  content = content.replace(/compileSdkVersion\s+\d+/g, 'compileSdkVersion 34');
  content = content.replace(/targetSdkVersion\s+\d+/g, 'targetSdkVersion 34');
  content = content.replace(/minifyEnabled\s+false/g, 'minifyEnabled true');
  content = content.replace(/shrinkResources\s+false/g, 'shrinkResources true');
  fs.writeFileSync(paths.gradle, content);
}

if (fs.existsSync(paths.manifest)) {
  let content = fs.readFileSync(paths.manifest, 'utf8');
  if (!content.includes('android.permission.INTERNET')) {
    content = content.replace('</manifest>', '    <uses-permission android:name="android.permission.INTERNET" />\n</manifest>');
  }
  if (!content.includes('android.permission.ACCESS_NETWORK_STATE')) {
    content = content.replace('</manifest>', '    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />\n</manifest>');
  }
  if (!content.includes('android:hardwareAccelerated="true"')) {
    content = content.replace('<application', '<application android:hardwareAccelerated="true"');
  }
  fs.writeFileSync(paths.manifest, content);
}

console.log('✅ Android post-sync fixes applied (offline-only build).');
