import React from 'react';

import './Promo.css';

export default class Promo extends React.Component {
  constructor(props) {
    super(props);

    this.promo = null;
  }

  componentDidMount() {
    this.promo = document.querySelector('.promo');

    setTimeout(() => {
      this.promo.classList.add('promo--active');
    }, 0);
  }

  render() {
    return (
      <div className='promo'></div>
    );
  }
}