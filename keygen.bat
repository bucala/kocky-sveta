@echo off
REM Generuje podpisovy keystore pre Kocky sveta
set KEYSTORE=android\app\release.keystore
set ALIAS=kockysveta

echo Kocky sveta - Release Keystore Generator
echo ==========================================
set /p KSPASS=Heslo keystoru: 
set /p KPASS=Heslo kluca: 
set /p CN=Meno a priezvisko: 
set /p ORG=Organizacia: 
set /p CITY=Mesto: 
set /p COUNTRY=Krajina (SK): 

keytool -genkeypair -keystore %KEYSTORE% -alias %ALIAS% -keyalg RSA -keysize 4096 -validity 10000 -storepass %KSPASS% -keypass %KPASS% -dname "CN=%CN%, O=%ORG%, L=%CITY%, C=%COUNTRY%"

echo.
echo Keystore vytvoreny: %KEYSTORE%
echo.
echo V Android Studio: Build > Generate Signed Bundle/APK
pause
