import React from 'react';

import qrCode from '../../assets/svg/qr-code.svg';

import './Banner.css';

export default class Banner extends React.Component {
  constructor(props) {
    super(props);

    this.banner = null;

    this.removeBanner = this.removeBanner.bind(this);
  }

  componentDidMount() {
    this.banner = document.querySelector('.banner');

    setTimeout(() => {
      this.banner.classList.add('banner--active');
    }, 0);
  }

  removeBanner() {
    this.banner.classList.remove('banner--active');

    setTimeout(this.props.bannerControl, 400);
  }

  render() {
    return (
      <div className='banner'>
        <h2 className='banner__title'>
          ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША!<br />ПОДАРИТЕ ЕМУ СОБАКУ!
        </h2>

        <div className='banner__qr-code'>
          <img src={qrCode} alt='QR-code' />
        </div>

        <p>Сканируйте QR-код<br />или нажмите ОК</p>

        <button
          className='banner__btn'
          onClick={this.removeBanner}
        >
          OK
        </button>
      </div>
    );
  }
}