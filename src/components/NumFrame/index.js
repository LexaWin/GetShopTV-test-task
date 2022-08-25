import React, { useEffect, useState } from 'react';
import NumButton from '../NumButton';

import './NumFrame.css';

const NumFrame = props => {
  const {
    addDigit,
    removeDidit,
    returnFocus,
    isFocus,
  } = props;

  const buttons = [
    {id: 'nb1', value: '1'}, {id: 'nb2', value: '2'}, {id: 'nb3', value: '3'},

    {id: 'nb4', value: '4'}, {id: 'nb5', value: '5'}, {id: 'nb6', value: '6'},

    {id: 'nb7', value: '7'}, {id: 'nb8', value: '8'}, {id: 'nb9', value: '9'},

    {id: 'nbClear', value: 'стереть', size: 'double'}, {id: 'nb0', value: '0'},
  ];

  const [activeButtonId, setActiveButton] = useState('nb5');

  useEffect(() => {
    if (activeButtonId && isFocus) {
      document.querySelector(`#${activeButtonId}`).focus();
    }
  });

  const handleClick = (buttonId) => {
    setActiveButton(buttonId);

    if (buttonId === 'nbClear') {
      removeDidit();
    } else {
      addDigit(buttons[getIndex(buttonId)].value);
    }
  };

  const getIndex = (buttonId) => {
    return buttons.findIndex(button => button.id === buttonId);
  };

  const handleKeyDown = (buttonId, keyCode) => {
    const index = getIndex(buttonId);
    let newIndex,
        step;

    switch(keyCode) {
      case 'ArrowUp':
        step = (buttonId === 'nb0' ? 2 : 3);
        newIndex = index - step;

        if (newIndex >= 0) {
          setActiveButton(buttons[newIndex].id);
        } else {
          returnFocus(keyCode)
        }

        break;

      case 'ArrowRight':
        if ((index + 1) % 3 === 0 || buttonId === 'nb0') {
          returnFocus(keyCode);
        } else {
          setActiveButton(buttons[index + 1].id);
        }

        break;

      case 'ArrowDown':
        step = ((buttonId === 'nb8' || buttonId === 'nb9') ? 2 : 3);
        newIndex = index + step;

        if (newIndex < buttons.length) {
          setActiveButton(buttons[newIndex].id);
        } else {
          returnFocus(keyCode);
        }

        break;

      case 'ArrowLeft':
        if ((index + 1) % 3 === 1) {
          returnFocus(keyCode);
        } else {
          setActiveButton(buttons[index - 1].id);
        }

        break;

      default:
        break;
    }
  };

  return (
    <div className='num-frame'>
      {buttons.map(button => (
        <NumButton
          key={button.id}
          id={button.id}
          doubled={button.size === 'double'}
          value={button.value}
          handleClick={handleClick}
          handleKeyDown={handleKeyDown}
        />
      ))}
    </div>
  );
}

export default NumFrame;