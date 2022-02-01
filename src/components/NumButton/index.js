import React from 'react';

import './NumButton.css';

export default class NumButton extends React.Component {
  render() {
    return (
      <button className='num-btn'>{this.props.value}</button>
    );
  }
}