import React from 'react'
import '../../sass/components/calendar/EventTag.scss'

export function EventTag ({ info, time }) {
  console.log(info)

  const getDate = (myDate) => {
    return `${myDate.getDate()} - ${myDate.toLocaleString('default', { month: 'long' })}`;
  }

  const getStartTime = (myDate) => `${myDate.toLocaleString('default', { hourCycle: 'h12', hour: '2-digit', minute: '2-digit' })}`;
  const getEndTime = (myDate) => `${myDate.toLocaleString('default', { hourCycle: 'h12', hour: '2-digit', minute: '2-digit' })}`;

  const convertTimeToPixel = (startTime) => {
    const compensation = 60;
    const hoursPixelValue = 120;
    const minutesPixelValue = 30;
    const hours = startTime.getHours() - 1;

    const minutes = Math.round(startTime.getMinutes() / 15);

    return (hours * hoursPixelValue) + (minutes * minutesPixelValue) + compensation;
  }

  const convertTimeToHeight = (startTime, endtime) => {
    const diffTimeInMinutes = (endtime.getTime() - startTime.getTime()) / (1000 * 60);
    const minutesToPixels = Math.round(diffTimeInMinutes / 15) * 30
    return minutesToPixels
  }

  const getExtraClass = (height) => {
    let result = ''
    if (height === 60) result = 'single-line'

    return result
  }

  const renderTagInfo = (info) => {

    const itemHeight = convertTimeToHeight(info.start, info.end);
    const extraClass = getExtraClass(itemHeight)

    return (<div className={`EventTag ${extraClass}`} style={{ backgroundColor:`${info.color}`, borderLeftColor:`${info.border}`, top: `${convertTimeToPixel(info.start)}px`, height: `${itemHeight}px` }}>
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

  return (
    <>
      { renderTagInfo(info) }
    </>
  )
}