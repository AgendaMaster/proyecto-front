import React from 'react';
import './../../sass/components/base/FormGroup.scss';

const FormGroup = ({ children, label }) => {
  return (
    <div className='FromGroup'>
      <div className="FormGroup__label">
          <span>{label}</span>
      </div>
      <div className='FromGroup__input'>{children}</div>
    </div>
  );
};

export default FormGroup;
