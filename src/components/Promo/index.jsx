import React, { useEffect, useState } from 'react';
import PromoInput from '../PromoInput';
import PromoFinal from '../PromoFinal';
import PromoClose from '../PromoClose';
import PromoQrCode from '../PromoQrCode';

export const Promo = (props) => {
  const [number, setNumber] = useState('+7(___)___-__-__');
  const [isAgreement, setIsAgreement] = useState(false);
  const [isValidNumber, setIsValidNumber] = useState(true);
  const [currentButton, setCurrentButton] = useState('num5');
  const [promo, setPromo] = useState('input');

  const isApproveButtonEnable =
    isAgreement && isValidNumber && checkNumber(number);

  useEffect(() => {
    if (promo === 'input') {
      document.querySelector(`#${currentButton}`).focus();
    }
  }, [currentButton, promo]);

  useEffect(() => {
    if (!isApproveButtonEnable || promo !== 'input') return;

    setCurrentButton('confirm');
  }, [isApproveButtonEnable, promo]);

  useEffect(() => {
    if (promo === 'input') return;

    setCurrentButton('close');
  }, [promo]);

  const inputDigit = (digit) => {
    setNumber((prev) => prev.replace('_', digit));
    setCurrentButton(`num${digit}`);
  };

  const deleteDidit = () => {
    setNumber((prev) => prev.replace(/(?<!\+)\d(?=\D*$)/, '_'));
    setCurrentButton('clear');
    setIsValidNumber(true);
  };

  const handleCheckbox = () => {
    setIsAgreement((prev) => !prev);
    setCurrentButton('checkbox');
  };

  const handleConfirm = async () => {
    if (await validateNumber(number)) {
      setPromo('final');
    } else {
      setIsAgreement(false);
      setCurrentButton('clear');
      setIsValidNumber(false);
    }
  };

  const handleKeyDown = (event) => {
    switch (event.code) {
      case 'ArrowUp':
        switch (currentButton) {
          case 'num4':
            setCurrentButton('num1');
            break;
          case 'num5':
            setCurrentButton('num2');
            break;
          case 'num6':
            setCurrentButton('num3');
            break;
          case 'num7':
            setCurrentButton('num4');
            break;
          case 'num8':
            setCurrentButton('num5');
            break;
          case 'num9':
            setCurrentButton('num6');
            break;
          case 'clear':
            setCurrentButton('num7');
            break;
          case 'num0':
            setCurrentButton('num9');
            break;
          case 'checkbox':
            setCurrentButton('clear');
            break;
          case 'confirm':
            setCurrentButton('checkbox');
            break;

          default:
            break;
        }
        break;

      case 'ArrowRight':
        switch (currentButton) {
          case 'num1':
            setCurrentButton('num2');
            break;
          case 'num2':
            setCurrentButton('num3');
            break;
          case 'num3':
            setCurrentButton('close');
            break;
          case 'num4':
            setCurrentButton('num5');
            break;
          case 'num5':
            setCurrentButton('num6');
            break;
          case 'num6':
            setCurrentButton('close');
            break;
          case 'num7':
            setCurrentButton('num8');
            break;
          case 'num8':
            setCurrentButton('num9');
            break;
          case 'num9':
            setCurrentButton('close');
            break;
          case 'clear':
            setCurrentButton('num0');
            break;
          case 'num0':
            setCurrentButton('close');
            break;
          case 'checkbox':
            setCurrentButton('close');
            break;
          case 'confirm':
            setCurrentButton('close');
            break;

          default:
            break;
        }
        break;

      case 'ArrowDown':
        switch (currentButton) {
          case 'num1':
            setCurrentButton('num4');
            break;
          case 'num2':
            setCurrentButton('num5');
            break;
          case 'num3':
            setCurrentButton('num6');
            break;
          case 'num4':
            setCurrentButton('num7');
            break;
          case 'num5':
            setCurrentButton('num8');
            break;
          case 'num6':
            setCurrentButton('num9');
            break;
          case 'num7':
            setCurrentButton('clear');
            break;
          case 'num8':
            setCurrentButton('clear');
            break;
          case 'num9':
            setCurrentButton('num0');
            break;
          case 'clear':
            setCurrentButton('checkbox');
            break;
          case 'num0':
            setCurrentButton('checkbox');
            break;
          case 'checkbox':
            if (!isApproveButtonEnable) return;

            setCurrentButton('confirm');
            break;

          default:
            break;
        }
        break;

      case 'ArrowLeft':
        switch (currentButton) {
          case 'num2':
            setCurrentButton('num1');
            break;
          case 'num3':
            setCurrentButton('num2');
            break;
          case 'num5':
            setCurrentButton('num4');
            break;
          case 'num6':
            setCurrentButton('num5');
            break;
          case 'num8':
            setCurrentButton('num7');
            break;
          case 'num9':
            setCurrentButton('num8');
            break;
          case 'num0':
            setCurrentButton('clear');
            break;
          case 'close':
            setCurrentButton('num5');
            break;

          default:
            break;
        }
        break;

      case 'Backspace':
        deleteDidit();
        break;

      case 'Digit1':
      case 'Digit2':
      case 'Digit3':
      case 'Digit4':
      case 'Digit5':
      case 'Digit6':
      case 'Digit7':
      case 'Digit8':
      case 'Digit9':
      case 'Digit0':
        inputDigit(event.code.slice(-1));
        break;

      default:
        break;
    }
  };

  return (
    <div data-testid="promo-input" onKeyDown={handleKeyDown}>
      {promo === 'input' ? (
        <PromoInput
          handleInput={inputDigit}
          handleDelete={deleteDidit}
          handleCheckbox={handleCheckbox}
          number={number}
          currentButton={currentButton}
          confirmDisabled={!isApproveButtonEnable}
          handleConfirm={handleConfirm}
          isValidNumber={isValidNumber}
          isChecked={isAgreement}
        />
      ) : (
        <PromoFinal />
      )}

      <PromoClose promoControl={props.promoControl} />

      <PromoQrCode />
    </div>
  );
};

const checkNumber = (number) => {
  return !/_/.test(number);
};

const validateNumber = async (number) => {
  const API_KEY = '9a6f00b3e5b2495fb026a4448c87e040';

  const nakedNumber = nakeNumber(number);

  const url = `https://phonevalidation.abstractapi.com/v1/?api_key=${API_KEY}&phone=${nakedNumber}`;

  const result = await fetchNumberData(url);

  return result.valid;
};

const nakeNumber = (number) => {
  return number.replace(/[+()-]/g, '');
};

const fetchNumberData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();

  return data;
};
