import React from 'react';
import { Calendar } from '../components/Calendar/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export class CalendarPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: {
        name: new Date().toLocaleDateString('default', { weekday: 'long' }),
        date: new Date(),
        count: 0
      },
      viewCalendar: [
        {
          id: 'daily',
          name: 'Daily View',
          isActive: false
        },
        {
          id: 'week',
          name: 'Week View',
          isActive: true
        }
      ],
      config: {
        hourCycle: 'h12', // h12 - h24
        heightPerHour: 120, // in px,
        widthTime: 120, //in px
        widthDays: 120, //in px
      },
      actualView: 'daily'
    };
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.state.viewCalendar.map(view => event.target.value === view.id ? view.isActive = true : view.isActive = false );
    this.setState({ actualView: event.target.value });
  }

  handleClick = (event) => {
    let newDay = this.state.day;
    let today = new Date();
    event.target.value === 'back' ? newDay.count -= 1 : newDay.count += 1;
    today.setDate(today.getDate() + newDay.count )
    newDay.date = today
    this.setState({ day: newDay });
  }

  render () {
    return (
      <div className="Calendar">
        <div className="Calendar-header">
          <h2>{this.state.day.date.toLocaleDateString('default', { weekday: 'long', day: '2-digit', month: 'long' })} </h2>
          
          <div>
            <div className="Calendar-header-steps">
              <FontAwesomeIcon icon={faChevronLeft} onClick={this.handleClick} value="next" />
              <FontAwesomeIcon icon={faChevronRight} onClick={this.handleClick} value="back" />
            </div>
            <div className="Calendar-header-buttons">
              <select onChange={this.handleChange}>
                {
                  this.state.viewCalendar.map(view => (<option key={view.id} value={view.id} >{view.name}</option>))
                }
              </select>
            </div>
          </div>
        </div>
        <div className="Calendar-container">
          <Calendar view={this.state.actualView} config={this.state.config} />
        </div>
      </div>
    );
  }
}
