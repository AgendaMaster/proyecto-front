import React from 'react';
import './../../sass/components/base/Button.scss';

const Button = ({ onClick, text, color, ...props }) => (
  <button
    onClick={onClick}
    className={`Button--${color}`}
    type='button'
    {...props}
  >
    {text}
  </button>
);

export default Button;
