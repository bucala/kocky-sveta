#!/usr/bin/env bash
# Generuje podpisový keystore pre Kocky sveta (Play Console release)
# Spustiť raz — keystore.jks si bezpečne uschovaj!
set -e

KEYSTORE="android/app/release.keystore"
ALIAS="kockysveta"
VALIDITY=10000  # ~27 rokov

echo "═══════════════════════════════════════════"
echo " Kocky sveta — Release Keystore Generator "
echo "═══════════════════════════════════════════"
echo ""

read -sp "Heslo keystoru (min 6 znakov): " KSPASS; echo
read -sp "Heslo kľúča (môže byť rovnaké): " KPASS; echo
read -p  "Tvoje meno a priezvisko: "        CN
read -p  "Organizácia (napr. Marcel Bucala): " ORG
read -p  "Mesto: "                          CITY
read -p  "Krajina (SK): "                   COUNTRY

keytool -genkeypair \
  -keystore  "$KEYSTORE" \
  -alias     "$ALIAS" \
  -keyalg    RSA \
  -keysize   4096 \
  -validity  $VALIDITY \
  -storepass "$KSPASS" \
  -keypass   "$KPASS" \
  -dname     "CN=$CN, O=$ORG, L=$CITY, C=$COUNTRY"

echo ""
echo "✓ Keystore vytvorený: $KEYSTORE"
echo ""
echo "Nastav premenné prostredia pred buildovaním:"
echo "  export KEYSTORE_PATH=\$(pwd)/android/app/release.keystore"
echo "  export KEYSTORE_PASS=<heslo keystoru>"
echo "  export KEY_ALIAS=kockysveta"
echo "  export KEY_PASS=<heslo kľúča>"
echo ""
echo "Potom spusti: npm run android:release"
