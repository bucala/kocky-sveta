import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';
import pkg from './package.json' with { type: 'json' };

// Dosadí do dist/sw.js jedinečné ID buildu. Service worker sa tak zmení pri
// každom deployi, prehliadač ho preinštaluje a staré cache sa zmažú.
function serviceWorkerVersion() {
  let outDir = 'dist';
  return {
    name: 'kocky-sw-version',
    apply: 'build',
    configResolved(config) { outDir = config.build.outDir; },
    writeBundle() {
      const file = path.resolve(outDir, 'sw.js');
      if (!fs.existsSync(file)) return;
      const buildId = `${pkg.version}-${Date.now().toString(36)}`;
      fs.writeFileSync(file, fs.readFileSync(file, 'utf8').replaceAll('__BUILD_ID__', buildId));
    },
  };
}

export default defineConfig({
  plugins: [react(), serviceWorkerVersion()],
  base: './',
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-lucide': ['lucide-react'],
          'vendor-firebase': ['firebase/app', 'firebase/auth', 'firebase/firestore'],
          'vendor-zustand': ['zustand'],
        },
      },
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test-setup.js'],
    include: ['src/**/*.test.{js,jsx}'],
  },
});
