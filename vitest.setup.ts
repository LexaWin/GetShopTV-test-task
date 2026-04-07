import '@testing-library/jest-dom/vitest';
import { beforeAll } from 'vitest';

beforeAll(() => {
  const style = document.createElement('style');
  style.innerHTML = `
    * {
      transition: none !important;
      animation: none !important;
    }
  `;
  document.head.appendChild(style);
});
