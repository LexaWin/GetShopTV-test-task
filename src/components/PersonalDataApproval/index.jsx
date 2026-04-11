import React from 'react';

import './PersonalDataApproval.css';

export default class PersonalDataApproval extends React.Component {
  render() {
    return (
      <div className='personal-data-approval'>
        <label className='personal-data-approval__checkbox'>
          <input
            className='personal-data-approval__input'
            id='checkbox'
            type='checkbox'
            onChange={this.props.handleCheckbox}
            checked={this.props.isChecked}
          />
          <span className='personal-data-approval__span'></span>
        </label>
        <div className='personal-data-approval__title'>
          Согласие на обработку<br />персональных данных
        </div>
      </div>
    );
  }
}