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
      include: [
        'src/**/*.{ts,tsx,js,jsx}', // Включаем все расширения кода
      ],
      exclude: [
        '**/*.d.ts', // Исключаем декларации
        '**/*.css', // Исключаем стили
        'src/index.js', // Исключаем точку входа
        'src/vite-env.d.ts',
        '**/*.test.{ts,tsx}',
        '**/*.spec.{ts,tsx}',
        '**/interfaces.ts',
      ],
    },
    setupFiles: ['./vitest.setup.ts'],
  },
});
