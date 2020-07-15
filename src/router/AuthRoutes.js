import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from '../helpers/Authentication';

/*
  AuthenticatedRoute
  should be used for routes which require authentication
*/
export function AuthenticatedRoute({ component: Component, path, exact }) {
  if (isAuthenticated()) {
    return <Route component={Component} path={path} exact={exact} />;
  }

  return <Redirect to='/login' />;
}

/*
  AuthenticatedRoute
  should be used for routes which not require authentication
*/
export function UnauthenticatedRoute({
  component: Component,
  path,
  exact,
  redirect,
}) {
  if (isAuthenticated() && redirect) {
    return <Redirect to='/dashboard' />;
  }

  return <Route component={Component} path={path} exact={exact} />;
}
