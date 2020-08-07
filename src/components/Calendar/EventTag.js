import React from 'react'
import '../../sass/components/calendar/EventTag.scss'

export function EventTag ({ info, view, config }) {

  const getDate = (myDate) => {
    console.log('getDate', myDate)
    const dayName = myDate.toLocaleString('default', { day: '2-digit' })
    return `${dayName} - ${myDate.toLocaleString('default', { month: 'long' })}`;
  }

  const getStartTime = (myDate) => `${myDate.toLocaleString('default', { hourCycle: 'h12', hour: '2-digit', minute: '2-digit' })}`;
  const getEndTime = (myDate) => `${myDate.toLocaleString('default', { hourCycle: 'h12', hour: '2-digit', minute: '2-digit' })}`;

  const convertTimeToPixel = (startTime, hoursPixelValue) => {
    const compensation = Math.round(hoursPixelValue/2); // HALF HOUR COMPENSATION
    const minutesPixelValue = 15;
    const hours = startTime.getHours() - 1;

    const minutes = Math.round(startTime.getMinutes() / 15);

    return (hours * hoursPixelValue) + (minutes * minutesPixelValue) + compensation;
  }

  const convertTimeToHeight = (startTime, endtime, hoursPixelValue) => {
    const minPixelPer15Minutes = Math.round(hoursPixelValue/4); // EVERY 15MINUTS == 25% OF A HOUR
    const diffTimeInMinutes = (endtime.getTime() - startTime.getTime()) / (1000 * 60);
    const minutesToPixels = Math.round(diffTimeInMinutes / 15) * minPixelPer15Minutes
    return minutesToPixels
  }

  const getExtraClass = (height) => {
    let result = ''
    if (height <= 60) result = 'single-line'

    return result
  }

  const renderViewDaily = (info, config) => {
    const startDate = new Date(info.startDate)
    const endDate = new Date(info.endDate)


    console.log('info::', info)
    console.log('startDate ::', startDate)
    const itemHeight = convertTimeToHeight(startDate, endDate);
    const extraClass = getExtraClass(itemHeight)
    const top = convertTimeToPixel(startDate, config.heightPerHour) + 'px';

    return (<div
              className={`EventTag daily ${extraClass}`}
              style={{
                backgroundColor:`${info.bckColor}`,
                borderLeftColor:`${info.borderColor}`,
                top: top,
                height: `${itemHeight}px`
              }}
            >
      <div className='EventTag-info'>
        <p>{info.eventName }</p>
        <p>{getDate(startDate)} {getStartTime(startDate)} - {getEndTime(endDate)}</p>
      </div>
      <div className='EventTag-avatar'>
        <div className='cover' style={{backgroundImage:`url(${info.avatar})`}}>

        </div>
        <p>{info.people}</p>
      </div>
    </div>)
  }

  const renderViewWeek = (info, config) => {
    const itemHeight = convertTimeToHeight(info.startDate, info.endDate, config.heightPerHour);
    const extraClass = getExtraClass(itemHeight)
    const top = convertTimeToPixel(info.startDate, config.heightPerHour) + 'px';

    return (<div
              key={Math.random() }
              className={`EventTag week ${extraClass}`}
              style={{ 
                backgroundColor:`${info.color}`, borderLeftColor:`${info.border}`,
                top: top,
                height: `${itemHeight}px` }}
              >
              <p>{info.name}</p>
              </div>)
  }

  return (
    <>
      { view === 'daily' && renderViewDaily(info, config) }
      { view === 'week' && renderViewWeek(info, config) }
    </>
  )
}