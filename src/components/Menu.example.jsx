import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Ejemplo de Menú para probar el router.
 * Renderiza todas las rutas que se hayan agregado al arreglo de
 * routes.js
 */
const MenuExample = ({ routes }) => {
  const singleRoute = (route) => {
    return (
      <li key={route.key}>
        <Link to={route.path}>
          {route.key} ({route.path})
        </Link>
      </li>
    );
  };

  return (
    <ul>
      {routes.map((route) => {
        // Rutas anidadas
        if (route.routes) {
          return (
            <React.Fragment key={route.key}>
              {singleRoute(route)}
              <MenuExample routes={route.routes} />
            </React.Fragment>
          );
        }

        // Rutas simples (no anidadas)
        return singleRoute(route);
      })}
    </ul>
  );
};

export default MenuExample;
