import React, { useEffect, useRef } from 'react';
import NumFrame from '../NumFrame';
import PersonalDataApproval from '../PersonalDataApproval';
import { TButton, TDigit } from '../Promo/interfaces';

import './PromoInput.css';

interface PromoInputProps {
  handleInput(digit: TDigit): void;
  handleDelete(): void;
  handleCheckbox(): void;
  number: string;
  currentButton: TButton;
  confirmDisabled: boolean;
  handleConfirm(): Promise<void>;
  isValidNumber: boolean;
  isChecked: boolean;
}

export const PromoInput = ({
  isValidNumber,
  number,
  handleInput,
  handleDelete,
  currentButton,
  handleCheckbox,
  isChecked,
  confirmDisabled,
  handleConfirm,
}: PromoInputProps) => {
  const promoInput = useRef<HTMLDivElement>(null);

  useEffect(() => {
    promoInput.current?.classList.add('promo-input--active');
  }, []);

  return (
    <div ref={promoInput} className="promo-input">
      <div className="promo-input__title">
        Введите ваш номер
        <br />
        мобильного телефона
      </div>

      <div
        className={`promo-input__number ${
          isValidNumber ? '' : 'promo-input__number--invalid'
        }`}
      >
        {number}
      </div>

      <div className="promo-input__subtitle">
        и с Вами свяжется наш менеждер для
        <br />
        дальнейшей консультации
      </div>

      <NumFrame
        input={handleInput}
        delete={handleDelete}
        focused={currentButton}
      />

      {isValidNumber ? (
        <PersonalDataApproval
          handleCheckbox={handleCheckbox}
          isValidNumber={isValidNumber}
          isChecked={isChecked}
        />
      ) : (
        <div className="promo-input__error-number">Неверно введён номер</div>
      )}

      <button
        className="confirm-input-btn"
        id="confirm"
        disabled={confirmDisabled}
        onClick={handleConfirm}
      >
        Подтвердить номер
      </button>
    </div>
  );
};
