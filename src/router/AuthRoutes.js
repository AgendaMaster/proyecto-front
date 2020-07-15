import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from '../helpers/Authentication';

/*
  AuthenticatedRoute
  should be used for routes which require authentication
*/
export function AuthenticatedRoute({ component: Component, path }) {
  if (!isAuthenticated()) {
    return <Redirect to='/login' />;
  }

  return <Route component={Component} path={path} />;
}
/*
  AuthenticatedRoute
  should be used for routes which not require authentication
*/
export function UnauthenticatedRoute({ component: Component, path }) {
  if (isAuthenticated()) {
    return <Redirect to='/dashboard' />;
  }

  return <Route component={Component} path={path} />;
}
