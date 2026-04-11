import React from 'react';

import './NumButton.css';

export default class NumButton extends React.Component {
  render() {
    return (
      <button
        className='num-btn'
        id={this.props.value === 'стереть' ?
                     'clear' :
                     'num' + this.props.value}
      >
        {this.props.value}
      </button>
    );
  }
}