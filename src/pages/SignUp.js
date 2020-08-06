import React, { useState } from 'react';
import { StyledTitle, FormGroup } from '../components/base';

import { useHistory, Link } from 'react-router-dom';

import { signUp } from '../api/';
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

  const history = useHistory();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password, confirmPassword, firstName, lastName, email } = formData;
    if (password !== confirmPassword) {
      // TODO: implement an user friendly message.
      return alert('Las contraseñas no coinciden.');
    }

    try {
      await signUp({ firstName, lastName, email, password, isCompany: false });
      history.push('login');
    } catch (error) {
      // TODO: Propper error handling
      console.error(error);
      alert('Ops, algo salió mal.');
    }
  };

  return (
    <form className='SignUp' onSubmit={handleSubmit}>
      <StyledTitle text='Sign Up' level={1} color={COLOR} />
      <Link to='/login' className="BackLink">
        Ya tengo cuenta
      </Link>
      <div className='SignUp__form'>
        <div className='SignUp__section'>
          <FormGroup label='Nombre' color={COLOR}>
            <input
              required
              type='text'
              onChange={handleChangeInput}
              value={formData.firstName}
              data-name='firstName'
            />
          </FormGroup>
          <FormGroup label='Apellido' color={COLOR}>
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
          <FormGroup label='Correo' color={COLOR}>
            <input
              required
              type='text'
              onChange={handleChangeInput}
              value={formData.email}
              data-name='email'
            />
          </FormGroup>
          <FormGroup label='Contraseña' color={COLOR}>
            <input
              required
              type='password'
              onChange={handleChangeInput}
              value={formData.password}
              data-name='password'
            />
          </FormGroup>
          <FormGroup label='Confirma la contraseña' color={COLOR}>
            <input
              required
              type='password'
              onChange={handleChangeInput}
              value={formData.confirmPassword}
              data-name='confirmPassword'
            />
          </FormGroup>
        </div>
      </div>
      <div className='SignUp__footer'>
        <Button text='Evniar' type='submit' color={COLOR} />
      </div>
    </form>
  );
};

export default SignUp;
