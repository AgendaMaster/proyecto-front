import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Logo from './../../assets/images/logo.svg';
import './../../sass/components/layout/AppHeader.scss';

export function AppHeader({ user = {} }) {
  return (
    <div className='AppHeader'>
      <Link className='AppHeader-logo' to='/'>
        <figure>
          <img src={Logo} alt='App logo (colorful brain)' />
        </figure>
      </Link>
      <div className='SearchBar'>
        <i className='SearchBar-icon'>S</i>
        <input placeholder='Search' className='SearchBar-input' type='text' />
      </div>
      <div className='AppHeader-userInfo'>
        <div className='Account'>
          <img className='Account-profile' alt={user.name} />
          <strong className='Acount-name'>{user.name}</strong>
        </div>
        <div className='Notifications'>
          <FontAwesomeIcon className='Notifications-icon' icon={faBell} />
        </div>
      </div>
    </div>
  );
}
