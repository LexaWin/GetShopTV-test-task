import { buttonMap } from './constatns';
import { TButton } from './interfaces';

export const getButtonPosition = (button: TButton) => {
  for (let y = 0; y < buttonMap.length; y++)
    for (let x = 0; x < buttonMap[y].length; x++)
      if (buttonMap[y][x] === button) return { x, y };

  return { x: 1, y: 1 };
};

export const checkNumber = (number: string) => {
  return !/_/.test(number);
};

export const validateNumber = async (number: string) => {
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
