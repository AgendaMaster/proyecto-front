import React, { useState, useEffect } from 'react'
import { EventTag } from './EventTag'
import '../../sass/components/calendar/DailyWeek.scss'

// REDUX
import { connect } from 'react-redux';

const WeekView = ({ config, events }) => {
  const [myEvents, setMyEvents] = useState([]);
  const [myWeek, setMyWeek] = useState([]);

  const MOCK_DAYS = [
    'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'
  ]
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

  const printTime = (time) => {
    let result = new Date();
    result = result.setHours(time)
    result = new Date(result)
    result = result.setMinutes(0)
    result = new Date(result)
    return `${result.toLocaleString('default', { hourCycle: 'h12', hour: '2-digit', minute: '2-digit' })}`
  }

  const getTodayWeek = async () => {
    const arrayDays = [0,1,2,3,4,5,6]
    let result = await arrayDays.map(e => {
      let myDate = new Date()
      let distance = e - myDate.getDay()
      myDate.setDate(myDate.getDate() + distance)
      return {
        e,
        id: myDate.valueOf(),
        date: myDate,
        name: myDate.toLocaleDateString('default', { weekday:'long' })
      }
    })

    console.log(result)

    setMyWeek(result)
  }

  useEffect(() => {
    if(events.length > 0) {
      setMyEvents(events)
      getTodayWeek()
    }
  }, [])

  const compareDate = (dateOne, dateTwo) => {
    const one = dateOne.split(' ')[0]
    const two = dateTwo.getFullYear() + "-" + (dateTwo.toLocaleDateString('default', { month: '2-digit' })) + "-" + dateTwo.toLocaleDateString('default', { day: '2-digit' })

    console.log(one + ' === ' + two)
    return one === two
  }


  return (
    <div className='DailyWeek'>
      <div className='DailyWeek-item-hour'>
      {
        [...Array(24)].map((e, i) =>
          <div key={i} style={{ height:`${config.heightPerHour}px` }}>{printTime(i+1)}</div>
        )
      }
      </div>
      {
        myWeek.map(({ id, name, date }) => <div key={id} className={`DailyWeek-item-event ${id}`}>
            <p>{name}</p>
            { 
              myEvents.length > 0 && myEvents.map(evento => {
                console.log('evento::', evento.startDate)
                console.log('date::', date)
                if(compareDate(evento.startDate, date)) {
                  return <EventTag key={evento._id} today={date} info={ evento } view={'daily'} config={config} />
                }
              })
            }
          </div>
        )
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    events: state.events
  }
}

export default connect(mapStateToProps, null)(WeekView);
