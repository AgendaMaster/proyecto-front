import React from 'react';
import { StyledTitle } from '../components/base';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../assets/images/logo.svg';
import { Footer } from '../components/layout/Footer';
import '../sass/components/layout-NotUSer/index.scss';
import Button from '../components/base/Button';

const COLOR = 'primary';

const NotFound = () => {
  const history = useHistory();
  return (
    <div className='Layout_NotUser'>
      <div className='Layout_NotUser-header'>
        <Link to='/'>
          <div className='Layout_NotUser-header-logo'>
            <img src={Logo} alt='App logo (colorful brain)' /> UDIARY
          </div>
        </Link>
      </div>
      <div
        className='Layout_NotUser-content'
        style={{ flexDirection: 'column' }}
      >
        <StyledTitle text='¿Estás perdid@?' level={1} color={COLOR} />
        <Button to='/' text='Volver al inicio' onClick={() => history.push('/')}/>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
