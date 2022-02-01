import React from 'react';
import NumButton from '../NumButton';

import './NumFrame.css';

const buttons = [
  '1', '2', '3', '4', '5', '6', '7', '8', '9', 'стереть', '0'
]

export default class NumFrame extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const button = event.target.closest('button');

    if (!button) return;

    if (button.innerHTML.toLowerCase() !== 'стереть') {
      this.props.input(button.innerHTML);
    } else {
      this.props.delete();
    }
  }

  render() {
    return (
      <div
        className='num-frame'
        onClick={this.handleClick}
      >
        {buttons.map(btn => <NumButton key={btn} value={btn} />)}
      </div>
    );
  }
}