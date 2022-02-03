import React from 'react';

import './PersonalDataApproval.css';

export default class PersonalDataApproval extends React.Component {
  render() {
    return (
      <div className='personal-data-approval'>
        <input
          className='personal-data-approval__checkbox'
          id='checkbox'
          type='checkbox'
          onChange={this.props.handleCheckbox}
        />
        <div className='personal-data-approval__title'>
          Согласие на обработку<br />персональных данных
        </div>
      </div>
    );
  }
}