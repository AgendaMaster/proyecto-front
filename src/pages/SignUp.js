import React, { useState } from 'react';
import { StyledTitle, FormGroup } from '../components/base';

import '../sass/pages/SignUp.scss';
import Button from '../components/base/Button';

const COLOR = 'primary';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className='SignUp' onSubmit={handleSubmit}>
      <StyledTitle text='Sign Up' level={1} color={COLOR} />
      <div className='SignUp__form'>
        <div className='SignUp__section'>
          <FormGroup label='First Name' color={COLOR}>
            <input
              required
              type='text'
              onChange={handleChangeInput}
              value={formData.firstName}
              data-name='firstName'
            />
          </FormGroup>
          <FormGroup label='Last Name' color={COLOR}>
            <input
              required
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
              required
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
        <Button text='Send' type='submit' color={COLOR} />
      </div>
    </form>
  );
};

export default SignUp;
