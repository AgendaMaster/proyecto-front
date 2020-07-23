import React from 'react'
import '../../sass/components/calendar/EventTag.scss'

export function EventTag ({ info, view, config }) {
  // console.log(info)

  const getDate = (myDate) => {
    return `${myDate.getDate()} - ${myDate.toLocaleString('default', { month: 'long' })}`;
  }

  const getStartTime = (myDate) => `${myDate.toLocaleString('default', { hourCycle: 'h12', hour: '2-digit', minute: '2-digit' })}`;
  const getEndTime = (myDate) => `${myDate.toLocaleString('default', { hourCycle: 'h12', hour: '2-digit', minute: '2-digit' })}`;

  const convertTimeToPixel = (startTime, hoursPixelValue) => {
    // console.log({ hoursPixelValue })
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
    const itemHeight = convertTimeToHeight(info.start, info.end);
    const extraClass = getExtraClass(itemHeight)
    const top = convertTimeToPixel(info.start, config.heightPerHour) + 'px';

    return (<div
              className={`EventTag daily ${extraClass}`}
              style={{
                backgroundColor:`${info.color}`,
                borderLeftColor:`${info.border}`,
                top: top,
                height: `${itemHeight}px`
              }}
            >
      <div className='EventTag-info'>
        <p>{info.name }</p>
        <p>{getDate(info.start)} {getStartTime(info.start)} - {getEndTime(info.end)}</p>
      </div>
      <div className='EventTag-avatar'>
        <div className='cover' style={{backgroundImage:`url(${info.avatar})`}}>

        </div>
        <p>{info.people}</p>
      </div>
    </div>)
  }

  const renderViewWeek = (info, config) => {
    const itemHeight = convertTimeToHeight(info.start, info.end, config.heightPerHour);
    const extraClass = getExtraClass(itemHeight)
    const top = convertTimeToPixel(info.start, config.heightPerHour) + 'px';

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