import React from 'react';

import qrCode from '../../assets/svg/qr-code.svg';

import './PromoQrCode.css';


export default class PromoQrCode extends React.Component {
  constructor(props) {
    super(props);

    this.promoQrCode = null;
  }

  componentDidMount() {
    this.promoQrCode = document.querySelector('.promo-qr-code');

    setTimeout(() => {
      this.promoQrCode.classList.add('promo-qr-code--active');
    }, 0);
  }

  render() {
    return (
      <div className='promo-qr-code'>
        <p className='promo-qr-code__text'>
          Сканируйте QR-код<br />
          ДЛЯ ПОЛУЧЕНИЯ<br />
          ДОПОЛНИТЕЛЬНОЙ<br />
          ИНФОРМАЦИИ
        </p>

        <img
          className='promo-qr-code__img'
          src={qrCode}
          alt='QR-code'
        />
      </div>
    );
  }
}