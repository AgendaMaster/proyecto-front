import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBell,
  faSearch,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Logo from './../../assets/images/logo.svg';
import './../../sass/components/layout/AppHeader.scss';

export function AppHeader({ user = { name: 'John Doe' }, auth }) {
  return (
    <div className='AppHeader'>
      <Link className='AppHeader-logo' to='/'>
        <figure>
          <img src={Logo} alt='App logo (colorful brain)' />
        </figure>
      </Link>
      <div className='SearchBar'>
        <FontAwesomeIcon className='SearchBar-icon' icon={faSearch} />
        <input placeholder='Search' className='SearchBar-input' type='text' />
      </div>
      {auth && (
        <div className='AppHeader-userInfo'>
          <div className='Account'>
            <img
              className='Account-profile'
              alt={user.name}
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU'
            />
            <strong className='Acount-name'>
              {user.name}{' '}
              <FontAwesomeIcon className='Account-icon' icon={faAngleDown} />
            </strong>
          </div>
          <div className='Notifications'>
            <FontAwesomeIcon
              className='Notifications-icon'
              icon={faBell}
              size='lg'
            />
          </div>
        </div>
      )}
    </div>
  );
}
