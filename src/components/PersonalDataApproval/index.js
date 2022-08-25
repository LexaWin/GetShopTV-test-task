import React, { useEffect } from 'react';

import './PersonalDataApproval.css';

const PersonalDataApproval = props => {
  const {
    onChange,
    isChecked,
    returnFocus,
    isFocus,
  } = props;

  useEffect(() => {
    if (isFocus) {
      document.querySelector('#checkbox').focus();
    }
  });

  const onKeyDown = (keyCode) => {
    switch (keyCode) {
      case 'ArrowUp':
      case 'ArrowRight':
      case 'ArrowDown':
        returnFocus(keyCode);
        break;
      default:
        break;
    }
  }

  return (
    <div className='personal-data-approval'>
      <label className='personal-data-approval__checkbox'>
        <input
          className='personal-data-approval__input'
          id='checkbox'
          type='checkbox'
          onChange={onChange}
          onKeyDown={(event) => onKeyDown(event.code)}
          checked={isChecked}
        />
        <span className='personal-data-approval__span'></span>
      </label>
      <div className='personal-data-approval__title'>
        Согласие на обработку<br />персональных данных
      </div>
    </div>
  );
}

export default PersonalDataApproval;