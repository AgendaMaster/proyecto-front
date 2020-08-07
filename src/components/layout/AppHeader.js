import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignOutAlt,
  faSearch,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import { logout } from '../../actions/authActions';
import Logo from './../../assets/images/logo.svg';
import './../../sass/components/layout/AppHeader.scss';

export const AppHeader = connect(mapStateToProps, mapDispatchToProps)(({user = {}, auth, logout }) => {

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
              {user.firstName + ' ' + user.lastName}
              <FontAwesomeIcon className='Account-icon' icon={faAngleDown} />
            </strong>
          </div>
          <a onClick={logout} className='Notifications'>
            <FontAwesomeIcon
              className='Notifications-icon'
              icon={faSignOutAlt}
              size='lg'
            />
          </a>
        </div>
      )}
    </div>
  );
});

function mapStateToProps ({user}) {
  return {
    user,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logout }, dispatch);
}