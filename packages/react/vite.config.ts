import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@routes': path.resolve(__dirname, './src/routes/'),
      '@services': path.resolve(__dirname, './src/services/'),
      '@components': path.resolve(__dirname, './src/components/'),
      '@hooks': path.resolve(__dirname, './src/hooks/'),
      '@customTypes': path.resolve(__dirname, './src/types/'),
      '@assets': path.resolve(__dirname, './src/assets/'),
      '@utils': path.resolve(__dirname, './src/utils/'),
      '@pages': path.resolve(__dirname, './src/pages/'),
      '@redux': path.resolve(__dirname, './src/redux/'),
      '@contexts': path.resolve(__dirname, './src/contexts/'),
    },
    preserveSymlinks: true,
  },
  optimizeDeps: {
    exclude: ['@tanstack/react-query'],
  },
});
