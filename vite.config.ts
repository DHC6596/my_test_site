import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/my_test_site/',
  plugins: [react()],
  server: {
    port: 3000,
    hmr: {
      overlay: false
    }
  }
});
