import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Default output directory for Vite
  },
  base: '/', // Ensure the base path is correct for your app
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
