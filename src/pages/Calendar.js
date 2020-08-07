import React from 'react';
import {Layout} from '../components/layout';
import { Calendar } from '../components/Calendar/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import { getEvents } from '../api';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCalendarEvents, setCalendarCurrentDay } from '../actions/calendarActions';

class CalendarPage extends React.Component {
  constructor(props) {
    super(props);
    this.getAllEvents()
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
    const { viewCalendar } = this.state;
    viewCalendar.map(view => view.isActive = event.target.value === view.id );
    this.setState({ actualView: event.target.value });
  }

  getAllEvents = async () => {
    try {
      const info = await getEvents(this.props.token);
      console.log('info::', info)
      // this.setState({ events: info.data });
      this.props.setCalendarEvents(info.data)
    } catch (error) {
      // TODO: Propper error handling
      console.error(error);
      alert('Ups, parece que tienes credenciales incorrectos');
    }
  }

  handleClick = async (event) => {
    let newDay = this.state.day;
    let today = new Date();
    console.log('event.target.value ::', event.currentTarget.getAttribute('value'))
    event.currentTarget.getAttribute('value') === 'back' ? newDay.count -= 1 : newDay.count += 1;
    today.setDate(today.getDate() + newDay.count )
    newDay.date = today
    console.log('newDay::', newDay)
    this.props.setCalendarCurrentDay(newDay)
    //await new Promise(resolve => this.setState({ day: newDay }, () => resolve())) 
    this.setState(state => ({...state, day: newDay }));
  }

  render () {
    return (
      <Layout>
        <div className="Calendar">
          <div className="Calendar-header">
            <h2>{this.state.day.date.toLocaleDateString('default', { weekday: 'long', day: '2-digit', month: 'long' })} </h2>
            
            <div>
              <div className="Calendar-header-steps">
                <FontAwesomeIcon icon={faChevronLeft} onClick={this.handleClick} value="back" />
                <FontAwesomeIcon icon={faChevronRight} onClick={this.handleClick} value="next" />
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
            <Calendar view={this.state.actualView} config={this.state.config} day={this.state.day} />
          </div>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = ({events, token}) => {
  return {
    events,
    token
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setCalendarEvents, setCalendarCurrentDay }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarPage);
