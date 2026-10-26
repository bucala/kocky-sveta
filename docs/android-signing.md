# Podpisovanie Android APK v GitHub Actions

Workflow **📱 Android aplikácia Kocky sveta** (`android-apk.yml`) zostavuje `debug` alebo `release`. Predvolený typ pri ručnom spustení je `release`.

## Jednorazové nastavenie Secrets

V [Settings → Secrets and variables → Actions](https://github.com/bucala/kocky-sveta/settings/secrets/actions) pridaj repository secrets:

| Secret | Hodnota |
| --- | --- |
| `ANDROID_KEYSTORE_BASE64` | Celý obsah existujúceho keystore zakódovaný ako Base64, nie odkaz na Disk ani cesta k súboru. |
| `ANDROID_KEYSTORE_PASS` | Heslo tohto keystore. |
| `ANDROID_KEY_ALIAS` | `key0` pre keystore poskytnutý vlastníkom projektu. |
| `ANDROID_KEY_PASS` | Heslo privátneho kľúča. Ak bolo pri vytváraní rovnaké ako heslo keystore, vlož rovnakú hodnotu. |

Heslá nemožno zistiť z keystore. Použi údaje uložené pri jeho vytvorení; nevytváraj náhradný kľúč pre aktualizáciu existujúcej aplikácie.

### Nahratie cez GitHub CLI

Na svojom počítači s Python 3 a prihláseným GitHub CLI spusti:

```sh
gh auth login
python3 scripts/upload-android-signing-secrets.py /cesta/k/povodnemu-keystore.jks
```

Vo Windows môže byť príkaz Pythonu `py` namiesto `python3`. Prípona keystore môže byť aj `.keystore` alebo `.p12`. Skript zadáva hodnoty do GitHub CLI cez štandardný vstup; heslá nie sú v argumentoch procesu ani v histórii shellu. Použitý GitHub účet/token musí mať právo zapisovať repository Actions secrets. Chyba `403 Resource not accessible by integration` znamená chýbajúce oprávnenie pripojeného tokenu, aj keď používateľ vlastní repozitár.

## Zostavenie a overenie

1. Otvor [Actions → Android aplikácia Kocky sveta](https://github.com/bucala/kocky-sveta/actions/workflows/android-apk.yml).
2. Zvoľ **Run workflow**, vetvu `main` a typ `release`.
3. Po úspešnom dokončení stiahni artifact **kocky-sveta-release-apk**.

Workflow ešte pred inštaláciou npm balíkov kontroluje všetky štyri secrets, Base64, heslo keystore a existenciu aliasu. Keystore a certifikát sú iba v súkromnom dočasnom priečinku runnera. Heslo privátneho kľúča overuje Gradle pri podpise.

Po zostavení `apksigner verify` skontroluje platnosť APK a SHA-256 certifikátu sa porovná s certifikátom z keystore. APK sa nahrá medzi artifacts iba po úspešnej kontrole. Dočasné podpisovacie súbory sa odstránia aj pri chybe.

Release build nikdy nepoužije debugový kľúč ako náhradu: bez podpisových údajov Gradle zlyhá. Iba na lokálny test sa dá výslovne povoliť `./gradlew assembleRelease -PallowDebugSignedRelease=true`; takéto APK sa nesmie šíriť. Debug build nevyžaduje release secrets. Kľúče, heslá ani ich Base64 nesmú byť súčasťou Git commitu; Base64 nie je šifrovanie.

## Lokálne overenie prípravy

```sh
python3 -m unittest discover -s scripts/tests -v
```

Testy generujú jednorazový testovací keystore a overujú správne údaje, chýbajúce secrets, neplatné Base64, nesprávne heslo, nesprávny alias a vyčistenie súborov pri chybe. Nepoužívajú produkčný podpisovací kľúč.
