import React from 'react'
import { DailyView } from './DailyView'
import { WeekView } from './WeekView'
import '../../sass/components/calendar/Calendar.scss'

export function Calendar ({ view, config }) {

  return (
    <>
    {
      view === 'daily' ? <DailyView config={config} /> : <WeekView config={config} />
    }
    </>
  )

}