# Kocky Sveta — Android Studio Setup Guide

## Requirements
- Android Studio Hedgehog 2023.1.1 or newer
- JDK 17 (bundled with Android Studio)
- Android SDK API 35 (compileSdk)
- Node.js 18+ and npm

---

## First-time Setup (Step by Step)

### 1. Install web dependencies
In the **root** of the project (not in `android/`):
```bash
npm install
```
This downloads `node_modules/@capacitor/android` which Gradle needs.

### 2. Build the web app
```bash
npm run build
```

### 3. Copy web assets into Android project
```bash
npx cap sync android
```

### 4. Create local.properties
```
cp android/local.properties.template android/local.properties
```
Edit `local.properties` and set `sdk.dir` to your Android SDK path.

### 5. Open in Android Studio
```
File → Open → select the android/ folder
```
Click **Sync Project with Gradle Files** when prompted.

---

## Project Structure

```
android/
├── app/
│   ├── build.gradle            ← app-level Gradle config
│   ├── proguard-rules.pro      ← ProGuard rules for release
│   └── src/
│       └── main/
│           ├── AndroidManifest.xml
│           ├── assets/
│           │   └── public/     ← web app (copied by cap sync)
│           ├── java/sk/bucala/kockysveta/
│           │   └── MainActivity.java
│           └── res/
│               ├── drawable*/  ← splash screens
│               ├── mipmap-*/   ← app icons (all densities)
│               ├── values/
│               │   ├── colors.xml
│               │   ├── strings.xml
│               │   └── styles.xml
│               └── xml/        ← file_paths, network_security_config
├── build.gradle                ← root Gradle config
├── gradle.properties
├── gradle/wrapper/
│   └── gradle-wrapper.properties
├── settings.gradle             ← module includes + Capacitor path
└── variables.gradle            ← SDK versions, dependency versions
```

---

## Build & Run

### Debug (USB / Emulator)
1. Connect device or start emulator
2. Click ▶ Run in Android Studio
3. Or via terminal:
   ```bash
   cd android
   ./gradlew assembleDebug
   ```

### Release APK
```bash
cd android
./gradlew assembleRelease
```
Output: `app/build/outputs/apk/release/app-release.apk`

### Release AAB (Google Play)
```bash
./gradlew bundleRelease
```
Output: `app/build/outputs/bundle/release/app-release.aab`

---

## Signing (Release)

Set via environment variables before building:
```bash
export KEYSTORE_PATH=/path/to/release.keystore
export KEYSTORE_PASS=your_store_password
export KEY_ALIAS=kockysveta
export KEY_PASS=your_key_password
```

Or run the included helper:
```bash
# From project root
./keygen.sh    # macOS/Linux
keygen.bat     # Windows
```

---

## App Info

| Field | Value |
|-------|-------|
| App ID | `sk.bucala.kockysveta` |
| App Name | Kocky sveta |
| Version | 1.2.3 (versionCode 3) |
| Min SDK | API 22 (Android 5.1) |
| Target SDK | API 35 (Android 15) |
| Architecture | Capacitor + React/Vite |

---

## Common Issues

### "Timeout waiting to lock journal cache"
Another Gradle process is running. Try:
```
File → Invalidate Caches → Restart
```
or kill: `pkill -f gradle`

### "Could not find :capacitor-android"
Run `npm install` in the project root first.

### "SDK location not found"
Create `android/local.properties` with your SDK path.

### After updating web code
```bash
npm run build
npx cap sync android
# Then rebuild in Android Studio
```

---

## Firebase (Optional)

If you need native push notifications or Analytics:
1. Create a project at https://console.firebase.google.com
2. Add Android app with ID `sk.bucala.kockysveta`
3. Download `google-services.json`
4. Place it in `android/app/google-services.json`
5. Uncomment in `android/app/build.gradle`:
   ```gradle
   apply plugin: 'com.google.gms.google-services'
   ```

---

*Kocky sveta © 2026 by Marcel*
