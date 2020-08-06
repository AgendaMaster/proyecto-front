import React from 'react';
import { useLocation } from 'react-router-dom';

import { AppHeader } from './AppHeader';
import { NavDrawer } from './NavDrawer';
import { CalendarDrawer } from './CalendarDrawer';
import { Footer } from './Footer';
import ROUTES from './../../router/routes';
import './../../sass/components/layout/index.scss';

const suggestions = new Array(4).fill({
  title: 'Nombre del evento',
  date: '20-Jun 10:00 am - 12:00pm',
});

export function Layout({ children }) {
  const { pathname } = useLocation();
  const currentRoute = ROUTES.find((route) => route.path === pathname) || {};
  console.log(currentRoute);
  return (
    <div className='Layout'>
      <AppHeader auth={currentRoute.auth} />
      {currentRoute.auth && <NavDrawer routes={ROUTES[1].routes} />}
      <main className='Layout-main'>{children}</main>
      {currentRoute.auth && <CalendarDrawer suggestions={suggestions} />}
      <Footer />
    </div>
  );
}
