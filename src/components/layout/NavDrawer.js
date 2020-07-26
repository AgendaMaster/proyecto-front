import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ROUTES from './../../router/routes';
import './../../sass/components/layout/NavDrawer.scss';

const routes = ROUTES.filter((route) => route.icon);

/**
 * Renderiza todas las rutas que se hayan agregado al arreglo de
 * routes.js
 */
export function NavDrawer() {
  return (
    <aside className='NavDrawer'>
      <nav className='NavDrawer-nav'>
        {routes.map((route, index) => (
          <NavLink
            key={index}
            to={route.path}
            className='NavDrawer-link'
            activeClassName='active'
          >
            <FontAwesomeIcon
              icon={route.icon}
              size='lg'
              className='NavDrawer-icon'
            />
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
