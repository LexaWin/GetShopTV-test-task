import React from 'react';
import NumFrame from '../NumFrame';
import PersonalDataApproval from '../PersonalDataApproval';

import './PromoInput.css';

export default class PromoInput extends React.Component {
  constructor(props) {
    super(props);

    this.promoInput = null;
  }

  componentDidMount() {
    this.promoInput = document.querySelector('.promo-input');

    setTimeout(() => {
      this.promoInput.classList.add('promo-input--active');
    }, 0);
  }

  render() {
    return (
      <div className='promo-input'>
        <div className='promo-input__title'>
          Введите ваш номер<br />мобильного телефона
        </div>

        <div className='promo-input__number'>{this.props.number}</div>

        <div className='promo-input__subtitle'>
          и с Вами свяжется наш менеждер для<br />дальнейшей консультации
        </div>

        <NumFrame
          input={this.props.handleInput}
          delete={this.props.handleDelete}
          focused={this.props.currentButton}
        />

        <PersonalDataApproval
          handleCheckbox={this.props.handleCheckbox}
        />

        <button
          className='confirm-input-btn'
          id='confirm'
          disabled={this.props.confirmDisabled}
          onClick={this.props.handleConfirm}
        >
          Подтвердить номер
        </button>
      </div>
    );
  }
}
