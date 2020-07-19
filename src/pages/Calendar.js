import React from 'react';
import { DailyView } from '../components/Calendar/DailyView'
import '../sass/components/calendar/Calendar.scss'


export function Calendar() {
  return (
    <div className="Calendar">
      <div className="titles">
        <h2>Viernes &lt;&gt; - BTN DAY - BTN NEW </h2>
      </div>
      <div className="Calendar-container">
        Calendar view DAY
        {
          <DailyView />
        }
      </div>
    </div>
  );
}
