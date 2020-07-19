import React from 'react'
import { EventTag } from './EventTag'
import '../../sass/components/calendar/DailyView.scss'

export function DailyView() {
  const MOCK_TIME = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

  const MOCK_EVENT_TAG = [{
    name: 'Evento 1',
    start: new Date(2020, 7, 18, 9, 0),
    end: new Date(2020, 7, 18, 10, 0),
    avatar: 'https://images.dog.ceo/breeds/maltese/n02085936_7515.jpg',
    people: '@Razielini',
    color: '#FFCBBB',
    border: '#F19072'
  },
  {
    name: 'Evento 3',
    start: new Date(2020, 7, 18, 12, 30),
    end: new Date(2020, 7, 18, 13, 0),
    avatar: 'https://images.dog.ceo/breeds/maltese/n02085936_7515.jpg',
    people: '@Fulanito',
    color: '#FFCBBB',
    border: '#F19072'
  },
  {
    name: 'Evento 4',
    start: new Date(2020, 7, 18, 13, 15),
    end: new Date(2020, 7, 18, 14, 30),
    avatar: 'https://images.dog.ceo/breeds/maltese/n02085936_7515.jpg',
    people: '@Sutanito',
    color: '#FFCBBB',
    border: '#F19072'
  },
  {
    name: 'Evento 5',
    start: new Date(2020, 7, 18, 15, 45),
    end: new Date(2020, 7, 18, 17, 0),
    avatar: 'https://images.dog.ceo/breeds/maltese/n02085936_7515.jpg',
    people: '@Perenganito',
    color: '#FFCBBB',
    border: '#F19072'
  }]

  const printTime = (time) => {
    let result = new Date();
    result = result.setHours(time)
    result = new Date(result)
    result = result.setMinutes(0)
    result = new Date(result)
    return `${result.toLocaleString('default', { hourCycle: 'h12', hour: '2-digit', minute: '2-digit' })}`
  }


  return (
    <div className='DailyView'>
      <div className='DailyView-item-hour'>
      {
        [...Array(24)].map((e, i) =>
          <div>{printTime(i+1)}</div>
        )
      }
      </div>
      <div className='DailyView-item-event'>
      {
        MOCK_EVENT_TAG.map(evento => <EventTag info={ evento } />)
      }
      </div>
      {/*
        MOCK_TIME.map((time) => <div className='DailyView-item' key={`${Math.random()}-${Math.round(new Date().getTime() / 1000)}`}>
          <div className='DailyView-item-hour'>
            {printTime(time)}
          </div>
          <div className='DailyView-item-event'>
            { MOCK_EVENT_TAG.map(evento => <EventTag info={ evento } time={time} />)}
          </div>
        </div>)
      */}
    </div>
  );
}
