import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import eslint from 'vite-plugin-eslint';
import dts from 'vite-plugin-dts';
import path from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), dts()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.tsx'),
      name: 'MyLib',
      formats: ['es', 'umd'],
      fileName: (format) => `tailwindui.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'styled-components'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled',
        },
      },
    },
  },
});
