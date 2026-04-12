import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';
import { Promo } from '..';

describe('Promo navigation', () => {
  describe('ArrowUp', () => {
    it('переходит на кнопку 1 с кнопки 4', () => {
      render(<Promo />);

      const button4 = screen.getByRole('button', { name: '4' });

      fireEvent.click(button4);
      fireEvent.keyDown(button4, {
        code: 'ArrowUp',
      });

      expect(screen.getByRole('button', { name: '1' })).toHaveFocus();
    });

    it('переходит на кнопку 2 с кнопки 5', () => {
      render(<Promo />);

      fireEvent.keyDown(screen.getByRole('button', { name: '5' }), {
        code: 'ArrowUp',
      });

      expect(screen.getByRole('button', { name: '2' })).toHaveFocus();
    });

    it('переходит на кнопку 3 с кнопки 6', () => {
      render(<Promo />);

      const button6 = screen.getByRole('button', { name: '6' });

      fireEvent.click(button6);
      fireEvent.keyDown(button6, {
        code: 'ArrowUp',
      });

      expect(screen.getByRole('button', { name: '3' })).toHaveFocus();
    });

    it('переходит на кнопку 4 с кнопки 7', () => {
      render(<Promo />);

      const button7 = screen.getByRole('button', { name: '7' });

      fireEvent.click(button7);
      fireEvent.keyDown(button7, {
        code: 'ArrowUp',
      });

      expect(screen.getByRole('button', { name: '4' })).toHaveFocus();
    });

    it('переходит на кнопку 5 с кнопки 8', () => {
      render(<Promo />);

      const button8 = screen.getByRole('button', { name: '8' });

      fireEvent.click(button8);
      fireEvent.keyDown(button8, {
        code: 'ArrowUp',
      });

      expect(screen.getByRole('button', { name: '5' })).toHaveFocus();
    });

    it('переходит на кнопку 6 с кнопки 9', () => {
      render(<Promo />);

      const button9 = screen.getByRole('button', { name: '9' });

      fireEvent.click(button9);
      fireEvent.keyDown(button9, {
        code: 'ArrowUp',
      });

      expect(screen.getByRole('button', { name: '6' })).toHaveFocus();
    });

    it('переходит на кнопку 7 с кнопки "стереть"', () => {
      render(<Promo />);

      const buttonClear = screen.getByRole('button', { name: /стереть/i });

      fireEvent.click(buttonClear);
      fireEvent.keyDown(buttonClear, {
        code: 'ArrowUp',
      });

      expect(screen.getByRole('button', { name: '7' })).toHaveFocus();
    });

    it('переходит на кнопку 9 с кнопки 0', () => {
      render(<Promo />);

      const button0 = screen.getByRole('button', { name: '0' });

      fireEvent.click(button0);
      fireEvent.keyDown(button0, {
        code: 'ArrowUp',
      });

      expect(screen.getByRole('button', { name: '9' })).toHaveFocus();
    });

    it('переходит на кнопку "стереть" с чекбокса', () => {
      render(<Promo />);

      const checkbox = screen.getByRole('checkbox');

      fireEvent.click(checkbox);
      fireEvent.keyDown(checkbox, { code: 'ArrowUp' });

      expect(screen.getByRole('button', { name: /стереть/i })).toHaveFocus();
    });

    it('переходит на чекбокс с кнопки "подтвердить"', () => {
      render(<Promo />);

      const promoInput = screen.getByTestId('promo-input');

      '9006003000'.split('').forEach((d) => {
        fireEvent.keyDown(promoInput, { code: `Digit${d}` });
      });

      const checkbox = screen.getByRole('checkbox');

      fireEvent.click(checkbox);
      fireEvent.keyDown(screen.getByRole('button', { name: /подтвердить/i }), {
        code: 'ArrowUp',
      });

      expect(checkbox).toHaveFocus();
    });
  });
  describe('ArrowRight', () => {
    it('переходит на кнопку 2 с кнопки 1', () => {
      render(<Promo />);

      const button1 = screen.getByRole('button', { name: '1' });

      fireEvent.click(button1);
      fireEvent.keyDown(button1, {
        code: 'ArrowRight',
      });

      expect(screen.getByRole('button', { name: '2' })).toHaveFocus();
    });

    it('переходит на кнопку 3 с кнопки 2', () => {
      render(<Promo />);

      const button2 = screen.getByRole('button', { name: '2' });

      fireEvent.click(button2);
      fireEvent.keyDown(button2, {
        code: 'ArrowRight',
      });

      expect(screen.getByRole('button', { name: '3' })).toHaveFocus();
    });

    it('переходит на кнопку "close" с кнопки 3', () => {
      render(<Promo />);

      const button3 = screen.getByRole('button', { name: '3' });

      fireEvent.click(button3);
      fireEvent.keyDown(button3, {
        code: 'ArrowRight',
      });

      expect(screen.getByTestId('close')).toHaveFocus();
    });

    it('переходит на кнопку 5 с кнопки 4', () => {
      render(<Promo />);

      const button4 = screen.getByRole('button', { name: '4' });

      fireEvent.click(button4);
      fireEvent.keyDown(button4, {
        code: 'ArrowRight',
      });

      expect(screen.getByRole('button', { name: '5' })).toHaveFocus();
    });

    it('переходит на кнопку 6 с кнопки 5', () => {
      render(<Promo />);

      fireEvent.keyDown(screen.getByRole('button', { name: '5' }), {
        code: 'ArrowRight',
      });

      expect(screen.getByRole('button', { name: '6' })).toHaveFocus();
    });

    it('переходит на кнопку "close" с кнопки 6', () => {
      render(<Promo />);

      const button6 = screen.getByRole('button', { name: '6' });

      fireEvent.click(button6);
      fireEvent.keyDown(button6, {
        code: 'ArrowRight',
      });

      expect(screen.getByTestId('close')).toHaveFocus();
    });

    it('переходит на кнопку 8 с кнопки 7', () => {
      render(<Promo />);

      const button7 = screen.getByRole('button', { name: '7' });

      fireEvent.click(button7);
      fireEvent.keyDown(button7, {
        code: 'ArrowRight',
      });

      expect(screen.getByRole('button', { name: '8' })).toHaveFocus();
    });

    it('переходит на кнопку 9 с кнопки 8', () => {
      render(<Promo />);

      const button8 = screen.getByRole('button', { name: '8' });

      fireEvent.click(button8);
      fireEvent.keyDown(button8, {
        code: 'ArrowRight',
      });

      expect(screen.getByRole('button', { name: '9' })).toHaveFocus();
    });

    it('переходит на кнопку "close" с кнопки 9', () => {
      render(<Promo />);

      const button9 = screen.getByRole('button', { name: '9' });

      fireEvent.click(button9);
      fireEvent.keyDown(button9, {
        code: 'ArrowRight',
      });

      expect(screen.getByTestId('close')).toHaveFocus();
    });

    it('переходит на кнопку 0 с кнопки "стереть"', () => {
      render(<Promo />);

      const buttonClear = screen.getByRole('button', { name: /стереть/i });

      fireEvent.click(buttonClear);
      fireEvent.keyDown(buttonClear, {
        code: 'ArrowRight',
      });

      expect(screen.getByRole('button', { name: '0' })).toHaveFocus();
    });

    it('переходит на кнопку "close" с кнопки 0', () => {
      render(<Promo />);

      const button0 = screen.getByRole('button', { name: '0' });

      fireEvent.click(button0);
      fireEvent.keyDown(button0, {
        code: 'ArrowRight',
      });

      expect(screen.getByTestId('close')).toHaveFocus();
    });

    it('переходит на кнопку "close" с чекбокса', () => {
      render(<Promo />);

      const checkbox = screen.getByRole('checkbox');

      fireEvent.click(checkbox);
      fireEvent.keyDown(checkbox, { code: 'ArrowRight' });

      expect(screen.getByTestId('close')).toHaveFocus();
    });

    it('переходит на кнопку "close" с кнопки "подтвердить"', () => {
      render(<Promo />);

      const promoInput = screen.getByTestId('promo-input');

      '9006003000'.split('').forEach((d) => {
        fireEvent.keyDown(promoInput, { code: `Digit${d}` });
      });

      fireEvent.click(screen.getByRole('checkbox'));
      fireEvent.keyDown(screen.getByRole('button', { name: /подтвердить/i }), {
        code: 'ArrowRight',
      });

      expect(screen.getByTestId('close')).toHaveFocus();
    });
  });

  describe('ArrowDown', () => {
    it('переходит на кнопку 4 с кнопки 1', () => {
      render(<Promo />);

      const button1 = screen.getByRole('button', { name: '1' });

      fireEvent.click(button1);
      fireEvent.keyDown(button1, {
        code: 'ArrowDown',
      });

      expect(screen.getByRole('button', { name: '4' })).toHaveFocus();
    });

    it('переходит на кнопку 5 с кнопки 2', () => {
      render(<Promo />);

      const button2 = screen.getByRole('button', { name: '2' });

      fireEvent.click(button2);
      fireEvent.keyDown(button2, {
        code: 'ArrowDown',
      });

      expect(screen.getByRole('button', { name: '5' })).toHaveFocus();
    });

    it('переходит на кнопку 6 с кнопки 3', () => {
      render(<Promo />);

      const button3 = screen.getByRole('button', { name: '3' });

      fireEvent.click(button3);
      fireEvent.keyDown(button3, {
        code: 'ArrowDown',
      });

      expect(screen.getByRole('button', { name: '6' })).toHaveFocus();
    });

    it('переходит на кнопку 7 с кнопки 4', () => {
      render(<Promo />);

      const button4 = screen.getByRole('button', { name: '4' });

      fireEvent.click(button4);
      fireEvent.keyDown(button4, {
        code: 'ArrowDown',
      });

      expect(screen.getByRole('button', { name: '7' })).toHaveFocus();
    });

    it('переходит на кнопку 8 с кнопки 5', () => {
      render(<Promo />);

      fireEvent.keyDown(screen.getByRole('button', { name: '5' }), {
        code: 'ArrowDown',
      });

      expect(screen.getByRole('button', { name: '8' })).toHaveFocus();
    });

    it('переходит на кнопку 9 с кнопки 6', () => {
      render(<Promo />);

      const button6 = screen.getByRole('button', { name: '6' });

      fireEvent.click(button6);
      fireEvent.keyDown(button6, {
        code: 'ArrowDown',
      });

      expect(screen.getByRole('button', { name: '9' })).toHaveFocus();
    });

    it('переходит на кнопку "стереть" с кнопки 7', () => {
      render(<Promo />);

      const button7 = screen.getByRole('button', { name: '7' });

      fireEvent.click(button7);
      fireEvent.keyDown(button7, {
        code: 'ArrowDown',
      });

      expect(screen.getByRole('button', { name: /стереть/i })).toHaveFocus();
    });

    it('переходит на кнопку "стереть" с кнопки 8', () => {
      render(<Promo />);

      const button8 = screen.getByRole('button', { name: '8' });

      fireEvent.click(button8);
      fireEvent.keyDown(button8, {
        code: 'ArrowDown',
      });

      expect(screen.getByRole('button', { name: /стереть/i })).toHaveFocus();
    });

    it('переходит на кнопку 0 с кнопки 9', () => {
      render(<Promo />);

      const button9 = screen.getByRole('button', { name: '9' });

      fireEvent.click(button9);
      fireEvent.keyDown(button9, {
        code: 'ArrowDown',
      });

      expect(screen.getByRole('button', { name: '0' })).toHaveFocus();
    });

    it('переходит на чекбокс с кнопки "стереть"', () => {
      render(<Promo />);

      const buttonClear = screen.getByRole('button', { name: /стереть/i });

      fireEvent.click(buttonClear);
      fireEvent.keyDown(buttonClear, {
        code: 'ArrowDown',
      });

      expect(screen.getByRole('checkbox')).toHaveFocus();
    });

    it('переходит на чекбокс с кнопки 0', () => {
      render(<Promo />);

      const button0 = screen.getByRole('button', { name: '0' });

      fireEvent.click(button0);
      fireEvent.keyDown(button0, {
        code: 'ArrowDown',
      });

      expect(screen.getByRole('checkbox')).toHaveFocus();
    });

    it('переходит на кнопку "подтвердить" с чекбокса', () => {
      render(<Promo />);

      const promoInput = screen.getByTestId('promo-input');

      '9006003000'.split('').forEach((d) => {
        fireEvent.keyDown(promoInput, { code: `Digit${d}` });
      });

      const checkbox = screen.getByRole('checkbox');
      const buttonConfirm = screen.getByRole('button', {
        name: /подтвердить/i,
      });

      fireEvent.click(checkbox);
      fireEvent.keyDown(buttonConfirm, { code: 'ArrowUp' });
      fireEvent.keyDown(checkbox, {
        code: 'ArrowDown',
      });

      expect(buttonConfirm).toHaveFocus();
    });
  });

  describe('ArrowLeft', () => {
    it('переходит на кнопку 1 с кнопки 2', () => {
      render(<Promo />);

      const button2 = screen.getByRole('button', { name: '2' });

      fireEvent.click(button2);
      fireEvent.keyDown(button2, {
        code: 'ArrowLeft',
      });

      expect(screen.getByRole('button', { name: '1' })).toHaveFocus();
    });

    it('переходит на кнопку 2 с кнопки 3', () => {
      render(<Promo />);

      const button3 = screen.getByRole('button', { name: '3' });

      fireEvent.click(button3);
      fireEvent.keyDown(button3, {
        code: 'ArrowLeft',
      });

      expect(screen.getByRole('button', { name: '2' })).toHaveFocus();
    });

    it('переходит на кнопку 4 с кнопки 5', () => {
      render(<Promo />);

      fireEvent.keyDown(screen.getByRole('button', { name: '5' }), {
        code: 'ArrowLeft',
      });

      expect(screen.getByRole('button', { name: '4' })).toHaveFocus();
    });

    it('переходит на кнопку 5 с кнопки 6', () => {
      render(<Promo />);

      const button6 = screen.getByRole('button', { name: '6' });

      fireEvent.click(button6);
      fireEvent.keyDown(button6, {
        code: 'ArrowLeft',
      });

      expect(screen.getByRole('button', { name: '5' })).toHaveFocus();
    });

    it('переходит на кнопку 7 с кнопки 8', () => {
      render(<Promo />);

      const button8 = screen.getByRole('button', { name: '8' });

      fireEvent.click(button8);
      fireEvent.keyDown(button8, {
        code: 'ArrowLeft',
      });

      expect(screen.getByRole('button', { name: '7' })).toHaveFocus();
    });

    it('переходит на кнопку 8 с кнопки 9', () => {
      render(<Promo />);

      const button9 = screen.getByRole('button', { name: '9' });

      fireEvent.click(button9);
      fireEvent.keyDown(button9, {
        code: 'ArrowLeft',
      });

      expect(screen.getByRole('button', { name: '8' })).toHaveFocus();
    });

    it('переходит на кнопку "стереть" с кнопки 0', () => {
      render(<Promo />);

      const button0 = screen.getByRole('button', { name: '0' });

      fireEvent.click(button0);
      fireEvent.keyDown(button0, {
        code: 'ArrowLeft',
      });

      expect(screen.getByRole('button', { name: /стереть/i })).toHaveFocus();
    });

    it('переходит на кнопку 5 с кнопки "close"', () => {
      render(<Promo />);

      const button6 = screen.getByRole('button', { name: '6' });
      fireEvent.click(button6);
      fireEvent.keyDown(button6, { code: 'ArrowRight' });

      fireEvent.keyDown(screen.getByTestId('close'), {
        code: 'ArrowLeft',
      });

      expect(screen.getByRole('button', { name: '5' })).toHaveFocus();
    });
  });
});
