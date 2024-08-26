import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      include: ['src/app/**', 'src/components/**'],
      exclude: ['src/app/layout.tsx', 'src/app/page.tsx', '**/*.spec.tsx', 'src/app/search/page.tsx'],
      provider: 'v8',
    },
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
