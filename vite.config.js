import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          // React core — načítaný vždy, malý a stabilný
          'vendor-react': ['react', 'react-dom'],
          // Recharts + D3 dep — ~200 KB, len pre grafy
          'vendor-recharts': ['recharts'],
          // XLSX — ~800 KB, lazy importovaný len pri export/import
          'vendor-xlsx': ['xlsx'],
          // Lucide ikony — tree-shakeable, ale oddelené pre lepší caching
          'vendor-lucide': ['lucide-react'],
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
