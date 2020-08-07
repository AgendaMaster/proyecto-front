import React from 'react'
import DailyView from './DailyView'
import WeekView from './WeekView'
import '../../sass/components/calendar/Calendar.scss'

export function Calendar ({ view, config, day }) {

  return (
    <>
    {
      view === 'daily' ? <DailyView config={config} day={day} /> : <WeekView config={config} />
    }
    </>
  )

}