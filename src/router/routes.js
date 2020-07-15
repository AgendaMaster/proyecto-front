import React from 'react';
import { Route, Switch } from 'react-router-dom';

const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
};

export const RenderRoutes = ({ routes }) => {
  return (
    <Switch>
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  );
};

// Este es un arreglo donde irán todas las rutas de nuestra App ;)
const ROUTES = [
  { path: '/', key: 'LANDING', exact: true, component: () => <h1>Log in</h1> },
  {
    path: '/app',
    key: 'APP',
    component: RenderRoutes,
    routes: [
      {
        path: '/app',
        key: 'APP_ROOT',
        exact: true,
        component: () => <h1>App Index</h1>,
      },
    ],
  },
];

export default ROUTES;
