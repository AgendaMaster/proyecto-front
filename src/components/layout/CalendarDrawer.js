import React from 'react';
import { Suggestions } from './../Suggestions';
import { CalendarMini } from '../../components/base/CalendarMini'
import './../../sass/components/layout/CalendarDrawer.scss';

export function CalendarDrawer({ suggestions = [] }) {
  return (
      <div className='CalendarDrawer'>
        <aside className='CalendarContainer'>
        <h3>Calendar</h3>
        <CalendarMini />
        <hr />
        <Suggestions suggestions={suggestions} />
      </aside>
      </div>
  )
}
