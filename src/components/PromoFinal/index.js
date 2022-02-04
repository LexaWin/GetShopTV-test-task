import React from 'react';

import './PromoFinal.css';

export default class PromoFinal extends React.Component {
  constructor(props) {
    super(props);

    this.promoFinal = null;
  }

  componentDidMount() {
    this.promoFinal = document.querySelector('.promo-final');

    setTimeout(() => {
      this.promoFinal.classList.add('promo-final--active');
    }, 0);
  }

  render() {
    return (
      <div className='promo-final'>
        <h1 className='promo-final__title'>ЗАЯВКА<br />ПРИНЯТА</h1>
        <p className='promo-final__text'>
          Держите телефон под рукой.<br />Скоро с Вами свяжется наш менеджер.
        </p>
      </div>
    );
  }
}
