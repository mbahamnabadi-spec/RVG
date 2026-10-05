import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  server: {
    host: true,
    allowedHosts: true,
    port: 5173,
    strictPort: true,
  },
});
