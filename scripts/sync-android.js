#!/usr/bin/env node
// scripts/sync-android.js
// Builds the web app and syncs assets to the Android Capacitor project.
//
// Usage:
//   node scripts/sync-android.js          — build + sync only
//   node scripts/sync-android.js --apk    — build + sync + assemble debug APK
//   node scripts/sync-android.js --release — build + sync + assemble release APK (needs keystore)

import { execSync } from 'child_process';
import { existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const args = process.argv.slice(2);
const buildApk = args.includes('--apk');
const buildRelease = args.includes('--release');

function run(cmd, cwd = root) {
  console.log(`\n▶ ${cmd}`);
  execSync(cmd, { cwd, stdio: 'inherit' });
}

// ── 1. Web build ──────────────────────────────────────────────────────────
console.log('\n═══════════════════════════════');
console.log(' KOCKY SVETA — Android Sync');
console.log('═══════════════════════════════');

run('npm run build');

// ── 2. Capacitor sync ────────────────────────────────────────────────────
if (!existsSync(resolve(root, 'android'))) {
  console.error('\n✗ Adresár android/ neexistuje. Spusti najprv: npx cap add android');
  process.exit(1);
}

run('npx cap sync android');

// ── 3. Apply Android fixes (minifyEnabled, versionCode) ──────────────────
if (existsSync(resolve(root, 'scripts/apply-android-fixes.js'))) {
  run('node scripts/apply-android-fixes.js');
}

// ── 4. Optional APK build ────────────────────────────────────────────────
if (buildApk || buildRelease) {
  const gradleCmd = buildRelease
    ? './gradlew assembleRelease'
    : './gradlew assembleDebug';

  const androidDir = resolve(root, 'android');
  run(gradleCmd, androidDir);

  const apkType = buildRelease ? 'release' : 'debug';
  const apkPath = buildRelease
    ? 'android/app/build/outputs/apk/release/app-release.apk'
    : 'android/app/build/outputs/apk/debug/app-debug.apk';

  console.log(`\n✓ APK hotové: ${apkPath}`);

  if (buildRelease) {
    console.log('\n⚠  Release APK nie je podpísaný kľúčom ak nemáš nastavený keystore.');
    console.log('   Nastav v android/app/build.gradle sekciu signingConfigs.');
  }
} else {
  console.log('\n✓ Sync hotový. APK nevytvárané (použi --apk alebo --release pre build).');
}

console.log('\n✓ Hotovo!\n');
