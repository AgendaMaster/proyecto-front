import React from 'react';

import { AppHeader } from './AppHeader';
import { NavDrawer } from './NavDrawer';
import { CalendarDrawer } from './CalendarDrawer';
import { Footer } from './Footer';
import ROUTES from './../../routes';
import './../../sass/components/layout/index.scss';

export function Layout({ children }) {
  return (
    <div className='Layout'>
      <AppHeader user={{}} />
      <NavDrawer routes={ROUTES[1].routes} />
      <main className='Layout-main'>{children}</main>
      <CalendarDrawer />
      <Footer />
    </div>
  );
}
