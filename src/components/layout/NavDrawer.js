import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Renderiza todas las rutas que se hayan agregado al arreglo de
 * routes.js
 */
export function NavDrawer({ routes = [] }) {
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
            <i className='NavDrawer-icon'>{route.icon}</i>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
