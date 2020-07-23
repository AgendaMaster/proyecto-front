import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login } from './../pages/Login';
import { Landing } from './../pages/Landing';
import { Event } from './../pages/Event';
import { CalendarPage } from '../pages/Calendar'
import { AuthenticatedRoute, UnauthenticatedRoute } from './AuthRoutes';

export const RenderRoutes = () => {
  return (
    <Switch>
      {ROUTES.map(({ auth, exact, key, path, redirect, component }) => {
        const AuthRoute = auth ? AuthenticatedRoute : UnauthenticatedRoute;
        return (
          <AuthRoute
            key={key}
            exact={exact}
            component={component}
            path={path}
            redirect={redirect}
          />
        );
      })}

      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  );
};

// Este es un arreglo donde irán todas las rutas de nuestra App ;)
const ROUTES = [
  {
    path: '/',
    key: 'LANDING',
    exact: true,
    component: Landing,
    auth: false,
    redirect: false,
  },
  {
    path: '/login',
    key: 'LOGIN',
    exact: true,
    component: Login,
    auth: false,
    redirect: true,
  },
  {
    path: '/dashboard',
    key: 'DASHBOARD',
    exact: true,
    component: Event,
    auth: true,
  },
  {
    path: '/calendar',
    key: 'CALENDAR',
    exact: true,
    component: CalendarPage,
    auth: true,
  },
  {
    path: '/event/:eventId',
    key: 'EVENT',
    exact: true,
    component: Event,
    auth: true,
  },
];

export default ROUTES;
