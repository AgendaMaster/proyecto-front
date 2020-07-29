import React from 'react';
//import { Calendar } from './../Calendar';
import { Suggestions } from './../Suggestions';
import { CalendarMini } from '../../components/base/CalendarMini'
import './../../sass/components/layout/CalendarDrawer.scss';

export function CalendarDrawer({ suggestions = [] }) {
  return (
    <aside className='CalendarDrawer'>
      <h3>Calendar</h3>
      <CalendarMini />
      <hr />
      <Suggestions suggestions={suggestions} />
    </aside>
  );
}
