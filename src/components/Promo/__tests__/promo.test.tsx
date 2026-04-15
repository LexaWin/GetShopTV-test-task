import { describe, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Promo } from '..';

describe('Promo', () => {
  it('отображает начальное состояние', async () => {
    render(<Promo />);

    expect(screen.getByText('+7(___)___-__-__')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /подтвердить/i })).toBeDisabled();
    expect(await screen.findByRole('button', { name: '5' })).toHaveFocus();
  });

  it('цифры вводятся последовательно', () => {
    render(<Promo />);

    const promoInput = screen.getByTestId('promo-input');

    fireEvent.keyDown(promoInput, { code: 'Digit9' });
    fireEvent.keyDown(promoInput, { code: 'Digit1' });

    expect(screen.getByText('+7(91_)___-__-__')).toBeInTheDocument();
  });

  it('backspace удаляет последнюю введённую цифру', () => {
    render(<Promo />);

    const promoInput = screen.getByTestId('promo-input');

    fireEvent.keyDown(promoInput, { code: 'Digit9' });
    fireEvent.keyDown(promoInput, { code: 'Digit1' });
    fireEvent.keyDown(promoInput, { code: 'Backspace' });

    expect(screen.getByText('+7(9__)___-__-__')).toBeInTheDocument();
  });

  it('кнопка "Подтвердить" активируется, когда заполнен номер и дано согласие на обработку ПД', () => {
    render(<Promo />);

    const promoInput = screen.getByTestId('promo-input');

    '9006003000'.split('').forEach((d) => {
      fireEvent.keyDown(promoInput, { code: `Digit${d}` });
    });

    fireEvent.click(screen.getByRole('checkbox'));

    expect(screen.getByRole('button', { name: /подтвердить/i })).toBeEnabled();
  });

  it('вместо PromoInput отображается PromoFinal при валидном номере', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({ valid: true })),
    );

    render(<Promo />);

    const promoInput = screen.getByTestId('promo-input');

    '9006003000'.split('').forEach((d) => {
      fireEvent.keyDown(promoInput, { code: `Digit${d}` });
    });

    fireEvent.click(screen.getByRole('checkbox'));
    fireEvent.click(screen.getByRole('button', { name: /подтвердить/i }));

    expect(await screen.findByTestId('promo-final')).toBeInTheDocument();
  });

  it('показывает ошибку при невалидном номере', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({ valid: false })),
    );

    render(<Promo />);

    const promoInput = screen.getByTestId('promo-input');

    '9006003000'.split('').forEach((d) => {
      fireEvent.keyDown(promoInput, { code: `Digit${d}` });
    });

    fireEvent.click(screen.getByRole('checkbox'));
    fireEvent.click(screen.getByRole('button', { name: /подтвердить/i }));

    expect(
      await screen.findByText(/неверно введён номер/i),
    ).toBeInTheDocument();
  });

  it('ничего не происходит, если кликнули мимо кнопки', () => {
    render(<Promo />);

    fireEvent.click(screen.getByTestId('num-frame'));

    expect(screen.getByText('+7(___)___-__-__')).toBeInTheDocument();
  });
});
