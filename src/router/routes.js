import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { faHome, faUser, faReceipt } from '@fortawesome/free-solid-svg-icons';

import Login from './../pages/Login';
import SignUp from '../pages/SignUp';
import NotFound from '../pages/NotFound';
import { Landing } from './../pages/Landing';
import { Event } from './../pages/Event';
import CalendarPage from '../pages/Calendar';
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
      <Route component={NotFound} />
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
    path: '/sign-up',
    key: 'SIGNUP',
    exact: true,
    component: SignUp,
    auth: false,
    redirect: true,
  },
  {
    path: '/dashboard',
    key: 'DASHBOARD',
    exact: true,
    icon: faHome,
    component: Event,
    auth: true,
  },
  {
    path: '/user',
    key: 'USER',
    exact: true,
    icon: faUser,
    component: Event,
    auth: true,
  },
  {
    path: '/ticket',
    key: 'TICKET',
    exact: true,
    icon: faReceipt,
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
