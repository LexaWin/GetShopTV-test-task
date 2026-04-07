import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // эмуляция браузера
    globals: true, // позволяет не импортировать 'it', 'describe' в каждом тесте
    coverage: {
      provider: 'v8', // или 'istanbul'
      reporter: ['text', 'json', 'html'], // 'text' выведет таблицу в консоль, 'html' создаст папку с красивым отчетом
    },
    setupFiles: ['./vitest.setup.ts'],
  },
});
