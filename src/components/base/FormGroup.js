import React from 'react';
import './../../sass/components/base/FormGroup.scss';

const FormGroup = ({ children, label, color }) => {
  return (
    <div className={`FormGroup FormGroup--color-${color}`}>
      <div className="FormGroup__label">
          <span>{label}</span>
      </div>
      <div className='FormGroup__input'>{children}</div>
    </div>
  );
};

export default FormGroup;
