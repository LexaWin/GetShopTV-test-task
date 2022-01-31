import React from 'react';

import './PromoClose.css';

export default class PromoClose extends React.Component {
  constructor(props) {
    super(props);

    this.promoClose = null;
  }

  componentDidMount() {
    this.promoClose = document.querySelector('.promo-close');

    setTimeout(() => {
      this.promoClose.classList.add('promo-close--active');
    }, 0);
  }

  render() {
    return (
      <button
        className='promo-close'
        onClick={this.props.promoControl}
      >
        <span></span>
        <span></span>
      </button>
    );
  }
}