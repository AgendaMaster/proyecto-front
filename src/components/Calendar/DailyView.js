import React from 'react'
import {Link} from 'react-router-dom';
import { EventTag } from './EventTag'
import '../../sass/components/calendar/DailyView.scss'

export function DailyView({ config }) {

  const MOCK_EVENT_TAG = [{
    id: 'evento1',
    name: 'Evento 1',
    start: new Date(2020, 7, 18, 9, 0),
    end: new Date(2020, 7, 18, 10, 0),
    avatar: 'https://images.dog.ceo/breeds/maltese/n02085936_7515.jpg',
    people: '@Razielini',
    color: '#FFCBBB',
    border: '#F19072'
  },
  {
    id: 'evento3',
    name: 'Evento 3',
    start: new Date(2020, 7, 18, 12, 30),
    end: new Date(2020, 7, 18, 13, 0),
    avatar: 'https://images.dog.ceo/breeds/maltese/n02085936_7515.jpg',
    people: '@Fulanito',
    color: '#FFCBBB',
    border: '#F19072'
  },
  {
    id: 'evento4',
    name: 'Evento 4',
    start: new Date(2020, 7, 18, 13, 15),
    end: new Date(2020, 7, 18, 14, 30),
    avatar: 'https://images.dog.ceo/breeds/maltese/n02085936_7515.jpg',
    people: '@Sutanito',
    color: '#FFCBBB',
    border: '#F19072'
  },
  {
    id: 'evento5',
    name: 'Evento 5',
    start: new Date(2020, 7, 18, 15, 45),
    end: new Date(2020, 7, 18, 17, 0),
    avatar: 'https://images.dog.ceo/breeds/maltese/n02085936_7515.jpg',
    people: '@Perenganito',
    color: '#FFCBBB',
    border: '#F19072'
  }]

  const printTime = (time, config) => {
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
          <div key={i} style={{ height:`${config.heightPerHour}px` }}>{ printTime((i+1), config) }</div>
        )
      }
      </div>
      <div className='DailyView-item-event'>
      {
        MOCK_EVENT_TAG.map(evento => <Link to="/event/1">
          <EventTag key={evento.id} info={ evento } view={'daily'} config={config} />
        </Link>)
      }
      </div>
    </div>
  );
}
