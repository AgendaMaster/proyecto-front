import React from 'react';
import { StyledTitle } from '../components/base';
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo.svg';
import {Footer} from '../components/layout/Footer'
import '../sass/components/layout-NotUSer/index.scss';

const COLOR = 'primary';

const NotFound = () => {

  return (
    <div className="Layout_NotUser">
    <div className="Layout_NotUser-header">
      <Link to='/'>
      <div className="Layout_NotUser-header-logo">
        <img src={Logo} alt='App logo (colorful brain)' /> UDIARY
      </div>
      </Link>
    </div>
    <div className="Layout_NotUser-content">
      <StyledTitle text='Erro 404, Lo sentimos' level={1} color={COLOR} />
    </div>
      <Footer/>
    </div>
  );
};

export default NotFound;
