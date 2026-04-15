import React, { useEffect, useState } from 'react';
import PromoInput from '../PromoInput';
import PromoFinal from '../PromoFinal';
import PromoClose from '../PromoClose';
import PromoQrCode from '../PromoQrCode';
import { buttonMap } from './constatns';
import { getButtonPosition } from './utils';
import { TDigit } from './interfaces';

interface PromoProps {
  promoControl?(): void;
}

export const Promo = ({ promoControl }: PromoProps) => {
  const [number, setNumber] = useState('+7(___)___-__-__');
  const [isAgreement, setIsAgreement] = useState(false);
  const [isValidNumber, setIsValidNumber] = useState(true);
  const [currentButtonPosition, setCurrentButtonPosition] = useState(
    getButtonPosition('num5'),
  );
  const [promo, setPromo] = useState('input');

  const isApproveButtonEnable =
    isAgreement && isValidNumber && checkNumber(number);
  const currentButton =
    buttonMap[currentButtonPosition.y][currentButtonPosition.x];

  useEffect(() => {
    if (promo === 'input') {
      document
        .querySelector<
          HTMLButtonElement | HTMLInputElement
        >(`#${currentButton}`)
        ?.focus();
    }
  }, [currentButton, promo]);

  useEffect(() => {
    if (!isApproveButtonEnable || promo !== 'input') return;

    setCurrentButtonPosition(getButtonPosition('confirm'));
  }, [isApproveButtonEnable, promo]);

  useEffect(() => {
    if (promo === 'input') return;

    setCurrentButtonPosition(getButtonPosition('close'));
  }, [promo]);

  const inputDigit = (digit: TDigit) => {
    setNumber((prev) => prev.replace('_', digit));
    setCurrentButtonPosition(getButtonPosition(`num${digit}`));
  };

  const deleteDidit = () => {
    setNumber((prev) => prev.replace(/(?<!\+)\d(?=\D*$)/, '_'));
    setCurrentButtonPosition(getButtonPosition('clear'));
    setIsValidNumber(true);
  };

  const handleCheckbox = () => {
    setIsAgreement((prev) => !prev);
    setCurrentButtonPosition(getButtonPosition('checkbox'));
  };

  const handleConfirm = async () => {
    if (await validateNumber(number)) {
      setPromo('final');
    } else {
      setIsAgreement(false);
      setCurrentButtonPosition(getButtonPosition('clear'));
      setIsValidNumber(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.code) {
      case 'ArrowUp':
        setCurrentButtonPosition((prev) =>
          prev.x === 3 ? prev : { ...prev, y: Math.max(0, prev.y - 1) },
        );
        break;

      case 'ArrowRight':
        let step = 1;

        if (currentButton === 'clear') step = 2 - currentButtonPosition.x;
        else if (currentButton === 'checkbox' || currentButton === 'confirm')
          step = 3 - currentButtonPosition.x;

        setCurrentButtonPosition((prev) => ({
          ...prev,
          x: Math.min(prev.x + step, 3),
        }));
        break;

      case 'ArrowDown':
        setCurrentButtonPosition((prev) =>
          prev.x === 3 || (prev.y === 4 && !isApproveButtonEnable)
            ? prev
            : { ...prev, y: Math.min(prev.y + 1, 5) },
        );
        break;

      case 'ArrowLeft':
        setCurrentButtonPosition((prev) => ({
          ...prev,
          x: Math.max(0, prev.x - 1),
        }));
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
        inputDigit(event.code.slice(-1) as TDigit);
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

      <PromoClose promoControl={promoControl} />

      <PromoQrCode />
    </div>
  );
};

const checkNumber = (number: string) => {
  return !/_/.test(number);
};

const validateNumber = async (number: string) => {
  const API_KEY = '9a6f00b3e5b2495fb026a4448c87e040';

  const nakedNumber = nakeNumber(number);

  const url = `https://phonevalidation.abstractapi.com/v1/?api_key=${API_KEY}&phone=${nakedNumber}`;

  const result = await fetchNumberData(url);

  return result.valid;
};

const nakeNumber = (number: string) => {
  return number.replace(/[+()-]/g, '');
};

const fetchNumberData = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();

  return data;
};
