import React from 'react';

import './PromoClose.css';

export default class PromoClose extends React.Component {
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