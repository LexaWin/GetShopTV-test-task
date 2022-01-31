import React from 'react';
import PromoInput from '../PromoInput';
import PromoClose from '../PromoClose';

export default class Promo extends React.Component {
  render() {
    return (
      <div>
        <PromoInput />
        <PromoClose
          promoControl={this.props.promoControl}
        />
      </div>
    );
  }
}