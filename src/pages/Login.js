import React, { useState } from 'react';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setSuggestions, setToken, setUser } from '../actions/authActions';

import { useHistory, Link } from 'react-router-dom';

import { StyledTitle, FormGroup } from '../components/base';
import Button from '../components/base/Button';
import Logo from '../assets/images/logo.svg';
import {Footer} from '../components/layout/Footer'
import { login } from '../api';
import '../sass/pages/Login.scss';
import '../sass/components/layout-NotUSer/index.scss';


const COLOR = 'secondary';

const Login = ({ setSuggestions, setToken, setUser }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    try {
      const { access_token, user, suggestions } = await login(email, password);
      setToken(access_token);
      setUser(user);
      setSuggestions(suggestions);
      history.replace('/dashboard');
    } catch (error) {
      // TODO: Propper error handling
      console.error(error);
      alert('Ups, parece que tienes credenciales incorrectos');
    }
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
    <div className="Layout_NotUser">
      <div className="Layout_NotUser-header">
      <Link to='/'>
      <div className="Layout_NotUser-header-logo">
        <img src={Logo} alt='App logo (colorful brain)' /> UDIARY
      </div>
      </Link>
      </div>
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
      <Footer/>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setSuggestions, setToken, setUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(Login);
