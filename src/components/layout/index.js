import React from 'react';
import { useLocation } from 'react-router-dom';

import { AppHeader } from './AppHeader';
import { CalendarDrawer } from './CalendarDrawer';
import { Footer } from './Footer';
import ROUTES from './../../router/routes';
import Burger from './Burger'
import './../../sass/components/layout/index.scss';

const suggestions = new Array(4).fill({
  title: 'Nombre del evento',
  date: '20-Jun 10:00 am - 12:00pm',
});

export function Layout({ children }) {
  const { pathname } = useLocation();
  const { auth: authRoute } =
    ROUTES.find((route) => route.path === pathname) || {};
  return (
    <div className={`Layout ${authRoute ? '' : 'basic'}`}>
      <Burger />
      <AppHeader auth={authRoute} />
      {/* {authRoute && <NavDrawer routes={ROUTES[1].routes} />} */}
      <main className='Layout-main'>{children}</main>
      {authRoute && <CalendarDrawer suggestions={suggestions} />}
      <Footer />
    </div>
  );
}
