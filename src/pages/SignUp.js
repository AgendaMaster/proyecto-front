import React, { useState } from 'react';
import { StyledTitle, FormGroup } from '../components/base';

import '../sass/pages/SignUp.scss';
import Button from '../components/base/Button';

const COLOR = 'primary';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChangeInput = (e) => {
    const {
      target: {
        dataset: { name }, // Obtengo el nombre del campo
        value, // Obtengo el valor
      },
    } = e;
    const updatedFormData = { ...formData };
    updatedFormData[name] = value;
    setFormData(updatedFormData);
  };
  // TODO: Integrate this with backend.
  const handleSubmit = () => console.log('Submitting...');

  return (
    <div className='SignUp'>
      <StyledTitle text='Sign Up' level={1} color={COLOR} />
      <div className='SignUp__form'>
        <div className='SignUp__section'>
          <FormGroup label='First Name' color={COLOR}>
            <input
              type='text'
              onChange={handleChangeInput}
              value={formData.firstName}
              data-name='firstName'
            />
          </FormGroup>
          <FormGroup label='Last Name' color={COLOR}>
            <input
              type='text'
              onChange={handleChangeInput}
              value={formData.lastName}
              data-name='lastName'
            />
          </FormGroup>
        </div>
        <div className='SignUp__section'>
          <FormGroup label='E-mail Address' color={COLOR}>
            <input
              type='text'
              onChange={handleChangeInput}
              value={formData.email}
              data-name='email'
            />
          </FormGroup>
          <FormGroup label='Password' color={COLOR}>
            <input
              type='password'
              onChange={handleChangeInput}
              value={formData.password}
              data-name='password'
            />
          </FormGroup>
          <FormGroup label='Confirm Password' color={COLOR}>
            <input
              type='password'
              onChange={handleChangeInput}
              value={formData.confirmPassword}
              data-name='confirmPassword'
            />
          </FormGroup>
        </div>
      </div>
      <div className='SignUp__footer'>
        <Button text='Send' onClick={handleSubmit} color={COLOR} />
      </div>
    </div>
  );
};

export default SignUp;
