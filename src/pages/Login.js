import React, { useState } from 'react';

import { StyledTitle, FormGroup } from '../components/base';
import Button from '../components/base/Button';

import '../sass/pages/Login.scss';

const COLOR = 'secondary';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  // TODO: Integrate this with backend.
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { email, password } = formData;
  };

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

  return (
    <form className='Login' onSubmit={handleSubmit}>
      <StyledTitle text='Sign In' level={1} color={COLOR} />
      <div className='Login__form'>
        <FormGroup label='E-mail' color={COLOR}>
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
            required
            type='password'
            onChange={handleChangeInput}
            value={formData.password}
            data-name='password'
          />
        </FormGroup>
      </div>
      <div className='Login__footer'>
        <Button text='Send' type='submit' color={COLOR} />
      </div>
    </form>
  );
};

export default Login;
