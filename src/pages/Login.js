import React from 'react';
import { StyledTitle, FormGroup } from '../components/base';

import '../sass/pages/Login.scss';
import Button from '../components/base/Button';

const COLOR = 'primary';

const Login = () => {
  // TODO: Integrate this with backend.
  const handleSubmit = () => console.log('Submitting...');

  return (
    <div className='Login'>
      <StyledTitle text='Sign In' level={1} color={COLOR} />
      <div className='Login__form'>
        <FormGroup label='E-mail' color={COLOR}>
          <input type='text' />
        </FormGroup>
        <FormGroup label='Password' color={COLOR}>
          <input type='password' />
        </FormGroup>
      </div>
      <div className='Login__footer'>
        <Button text='Send' onClick={handleSubmit} color={COLOR} />
      </div>
    </div>
  );
};

export default Login;
