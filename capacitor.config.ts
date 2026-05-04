import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId:   'sk.bucala.kockysveta',
  appName: 'Kocky sveta',
  webDir:  'dist',
  server: {
    androidScheme: 'https',
    cleartext: true,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration:        2000,
      launchAutoHide:            true,
      backgroundColor:           '#1a1712',
      androidSplashResourceName: 'splash',
      androidScaleType:          'CENTER_CROP',
      showSpinner:               false,
    },
  },
};

export default config;
