import React from 'react';

import './NumButton.css';

const NumButton = props => {
  const {
    id,
    value,
    doubled,
    handleClick,
    handleKeyDown,
  } = props;

  let className = 'num-btn';
  className += (doubled ? ' num-btn--doubled' : '');

  return (
    <button
      className={className}
      id={id}
      onClick={(event) => handleClick(event.target.id)}
      onKeyDown={(event) => handleKeyDown(event.target.id, event.code)}
    >
      {value}
    </button>
  );
}

export default NumButton