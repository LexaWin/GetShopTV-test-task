import React from 'react';
import NumFrame from '../NumFrame';
import PersonalDataApproval from '../PersonalDataApproval';

import './PromoInput.css';

export default class PromoInput extends React.Component {
  constructor(props) {
    super(props);

    this.promoInput = null;

    this.state = {
      number: '+7(___)___-__-__',
    }
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

        <div className='promo-input__number'>{this.state.number}</div>

        <div className='promo-input__subtitle'>
          и с Вами свяжется наш менеждер для<br />дальнейшей консультации
        </div>

        <NumFrame />

        <PersonalDataApproval />

        <button className='confirm-input-btn--inactiv'>
          Подтвердить номер
        </button>
      </div>
    );
  }
}