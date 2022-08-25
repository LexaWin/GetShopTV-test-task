import React, { useEffect, useState } from 'react';
import NumFrame from '../NumFrame';
import PersonalDataApproval from '../PersonalDataApproval';

import './PromoInput.css';

const PromoInput = props => {
  const {
    isValidNumber,
    handleFrameButtonClick,
    handleFrameButtonKeyDown,
    handleCheck,
    submitEnabled,
    handleSubmit,
  } = props;

  const [number, setNumber] = useState('+7(___)___-__-__');
  const [focusedComponent, setFocusedComponent] = useState('num-frame');

  let promoInput = null;

  useEffect(() => {
    promoInput = document.querySelector('.promo-input');

    setTimeout(() => {
      promoInput.classList.add('promo-input--active');
    }, 0);
  }, []);

  const addDigit = (digit) => {
    setNumber(number.replace('_', digit));
  };

  const removeDidit = () => {
    setNumber(number.replace(/(?<!\+)\d(?=\D*$)/, '_'));
  };

  const numFrameReturnsFocus = (keyCode) => {
    switch (keyCode) {
      case 'ArrowRight':
        break;

      case 'ArrowDown':
        setFocusedComponent('personal-data-approval');
        break;

      default:
        break;
    }
  }

  const checkboxReturnsFocus = (keyCode) => {
    switch (keyCode) {
      case 'ArrowUp':
        setFocusedComponent('num-frame');
        break;

      case 'ArrowRight':
        break;

      case 'ArrowDown':
        break;

      default:
        break;
    }
  }

  return (
    <div className='promo-input'>
      <div className='promo-input__title'>
        Введите ваш номер<br />мобильного телефона
      </div>

      <div className={`promo-input__number ${
            isValidNumber ? '' : 'promo-input__number--invalid'}`}
      >
        {number}
      </div>

      <div className='promo-input__subtitle'>
        и с Вами свяжется наш менеждер для<br />дальнейшей консультации
      </div>

      <NumFrame
        addDigit={addDigit}
        removeDidit={removeDidit}
        returnFocus={numFrameReturnsFocus}
        isFocus={focusedComponent === 'num-frame'}
      />

      {isValidNumber ?
        <PersonalDataApproval
          onChange={handleCheck}
          onKeyDown={handleFrameButtonKeyDown}
          isChecked={props.isChecked}
          returnFocus={checkboxReturnsFocus}
          isFocus={focusedComponent === 'personal-data-approval'}
        /> :
        <div className='promo-input__error-number'>
          Неверно введён номер
        </div>
      }

      <button
        className='confirm-input-btn'
        id='nbSubmit'
        disabled={!submitEnabled}
        onClick={handleSubmit}
        onKeyDown={handleFrameButtonKeyDown}
      >
        Подтвердить номер
      </button>
    </div>
  );
}

export default PromoInput;