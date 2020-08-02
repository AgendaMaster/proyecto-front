import React from 'react';
import { Calendar } from './../Calendar';
import { Suggestions } from './../Suggestions';
import './../../sass/components/layout/CalendarDrawer.scss';

export function CalendarDrawer({ suggestions = [] }) {
  return (
    <aside className='CalendarDrawer'>
      <div className='CalendarContainer'>
      <h3>Calendar</h3>
      <Calendar />
      </div>
      <Suggestions suggestions={suggestions} />
    </aside>
  );
}
