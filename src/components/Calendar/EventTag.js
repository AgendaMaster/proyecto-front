import React from 'react'
import '../../sass/components/calendar/EventTag.scss'

export function EventTag ({ info, time }) {
  console.log(info)
  console.log(time)

  const getDate = (myDate) => {
    return `${myDate.getDate()} - ${myDate.toLocaleString('default', { month: 'long' })}`;
  }

  const getStartTime = (myDate) => `${myDate.toLocaleString('default', { hourCycle: 'h12', hour: '2-digit', minute: '2-digit' })}`;
  const getEndTime = (myDate) => `${myDate.toLocaleString('default', { hourCycle: 'h12', hour: '2-digit', minute: '2-digit' })}`;

  const isOnTime = (start, time) => {
    const startHours = new Date(start).getHours()
    const startMinutes = new Date(start).getMinutes()
    console.log('start :: ', startHours)
    console.log('time :: ', startMinutes)

    let result = false

    if (startHours === (time - 1)) {
      if (startMinutes > 30) result = true
    } else if (startHours === time) {
      if (startMinutes <= 30) result = true
    }

    return result
  }

  const renderHere = (minutes, min, max) => {
    return minutes >=min && minutes <=max ? true : false
  }

  const renderTagInfo = (info) => (
    <div className='EventTag' style={{ backgroundColor:`${info.color}`, borderLeftColor:`${info.border}` }}>
      <div className='EventTag-info'>
        <p>{info.name }</p>
        <p>{getDate(info.start)} {getStartTime(info.start)} - {getEndTime(info.end)}</p>
      </div>
      <div className='EventTag-avatar'>
        <div className='cover' style={{backgroundImage:`url(${info.avatar})`}}>

        </div>
        <p>{info.people}</p>
      </div>
    </div>
  )

  const renderTag = (info) => {
    const minutes = info.start.getMinutes()
    return (<div className='EventTag-Render'>
      <div>
        { renderHere(minutes, 30, 44) && renderTagInfo(info) }
        [YEP] first half {time - 1}:30 - 45
      </div>
      <div className='border-bottom'>
      { renderHere(minutes, 45, 59) && renderTagInfo(info) }
        [YEP] first half {time - 1}:45 - 00
      </div>
      <div>
      { renderHere(minutes, 0, 14) && renderTagInfo(info) }
        [YEP]second half {time}: 00 - 15
      </div>
      <div>
      { renderHere(minutes, 15, 29) && renderTagInfo(info) }
        [YEP]second half {time}: 15 - 30
      </div>
    </div>)
  }

  const noRenderTag = () => (
    <div className='EventTag-Render Norender'>
      <div>
      </div>
      <div className='border-bottom'>
      </div>
      <div>
      </div>
      <div>
      </div>
    </div>
  )

  return (
    <>
    {
      isOnTime(info.start, time) ? renderTag(info) : noRenderTag()
    }
    </>
  )
}