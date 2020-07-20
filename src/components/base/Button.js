import React from 'react';
import './../../sass/components/base/Button.scss';

const Button = ({ onClick, text, color }) => (
  <button onClick={onClick} className={`Button--${color}`} type='button'>
    {text}
  </button>
);

export default Button;
