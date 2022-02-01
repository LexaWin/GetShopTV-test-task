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

    this.inputDigit = this.inputDigit.bind(this);
    this.deleteDidit = this.deleteDidit.bind(this);
  }

  componentDidMount() {
    this.promoInput = document.querySelector('.promo-input');

    setTimeout(() => {
      this.promoInput.classList.add('promo-input--active');
    }, 0);
  }

  inputDigit(digit) {
    const number = this.state.number.replace('_', digit);

    this.setState({
      number,
    });
  }

  deleteDidit() {
    const number = this.state.number.replace(/(?<!\+)\d(?=\D*$)/, '_');

    this.setState({
      number,
    });
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

        <NumFrame
          input={this.inputDigit}
          delete={this.deleteDidit}
        />

        <PersonalDataApproval />

        <button className='confirm-input-btn' disabled>
          Подтвердить номер
        </button>
      </div>
    );
  }
}
