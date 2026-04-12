import { buttonMap } from './constatns';

export const getButtonPosition = (button) => {
  for (let y = 0; y < buttonMap.length; y++)
    for (let x = 0; x < buttonMap[y].length; x++)
      if (buttonMap[y][x] === button) return { x, y };

  return { x: 1, y: 1 };
};
