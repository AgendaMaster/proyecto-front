import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import '../../sass/components/calendarMini/CalendarMini.scss'

export class CalendarMini extends React.Component {
  constructor(props) {
    super(props);
    const today = new Date()
    const currentDate = {
      month: parseInt(today.getMonth()),
      day: parseInt(today.toLocaleDateString('default', { day: '2-digit' })),
      year: today.getFullYear()
    }

    const activeDate = { ...currentDate }

    this.state = {
      today: new Date(),
      currentDate,
      activeDate,
      config: {
        klass: {
          mainComponent: 'main-component-class',
          headerComponent: 'header-component-class',
          next: 'next-days-class',
          labelMonth: 'label-month-class',
          prev: 'prev-days-class',
          today: 'today-class',
          days: 'days-class',
          extraDays: 'extra-days-class',
          labelDays: 'label-days-class',
          activeDay: 'active-day-class'
        },
        localization: 'default',  // 'default' || es-MX || en-US ||  language specific format 
        dayLabelFormat: 'narrow', //"long" || "short"** ||  "narrow"
        monthFormat: 'long', //"2-digit" || "long" || "narrow" || "numeric" || "short"
        showNext: true, // true || false
        showPrev: true // true || false
      }
  }
}

  printDayName = (daytoset, localization, dayLabelFormat) => {
    let myDate = new Date(2020, 6, 24, 9, 0)
    let distance = daytoset - myDate.getDay()
    myDate.setDate(myDate.getDate() + distance)

    return myDate.toLocaleDateString(localization, { weekday: dayLabelFormat })
  }

  printDaysGrid = (today, currentDate, activeDate, localization, dayLabelFormat, daysClass, extraDaysClass, todayClass, activeDayClass) => {
    const { month: currentMonth, year: currentYear } = currentDate
    const todayDay = parseInt(today.toLocaleDateString(localization, { day: '2-digit' }))
    const todayMonth = parseInt(today.toLocaleDateString(localization, { month: '2-digit' })) - 1

    const { month: activeMonth, day: activeDay, year: activeYear } = activeDate

    let myDate = new Date(2020, currentMonth + 1, 0)

    let firstDay = new Date(2020, currentMonth, 1)
    let firstDayWeekDay = firstDay.getDay()
    let lastDay = new Date(2020, currentMonth, myDate.getDate())

    let oldMonth = new Date(2020, currentMonth, 0)
    let oldMonthDays = oldMonth.getDate()

    let resultArray = []

    for (let iterMonthDays = 0; iterMonthDays < firstDayWeekDay; iterMonthDays++) {
      const today = new Date(currentYear, currentMonth - 1, oldMonthDays - iterMonthDays)
      const isToday = (todayDay === iterMonthDays && todayMonth === (currentMonth - 1)) ? true : false
      const isActive = (activeDay === iterMonthDays && activeMonth === (currentMonth - 1) && activeYear === currentYear)
      const res = {
        dayWeek: today.getDay(),
        dayNumber: oldMonthDays - iterMonthDays,
        format: today.toLocaleDateString(localization, { weekday: dayLabelFormat }),
        extraDays: true,
        isToday,
        isActive
      }
      resultArray.unshift(res)
    }

    for (let iterMonthDays = 1; iterMonthDays <= myDate.getDate(); iterMonthDays++) {
      const today = new Date(currentYear, currentMonth, iterMonthDays)
      const isToday = (todayDay === iterMonthDays && todayMonth === (currentMonth)) ? true : false
      const isActive = (activeDay === iterMonthDays && activeMonth === currentMonth && activeYear === currentYear)
      const res = {
        dayWeek: today.getDay(),
        dayNumber: iterMonthDays,
        format: today.toLocaleDateString(localization, { weekday: dayLabelFormat }),
        extraDays: false,
        isToday,
        isActive
      }
      resultArray.push(res)
    }

    for (let iterMonthDays = 1; iterMonthDays < (7 - lastDay.getDay()); iterMonthDays++) {
      const today = new Date(currentYear, currentMonth + 1, iterMonthDays)
      const isToday = (todayDay === iterMonthDays && todayMonth === (currentMonth + 1)) ? true : false
      const isActive = (activeDay === iterMonthDays && activeMonth === (currentMonth + 1) && activeYear === currentYear)
      const res = {
        dayWeek: today.getDay(),
        dayNumber: iterMonthDays,
        format: today.toLocaleDateString(localization, { weekday: dayLabelFormat }),
        extraDays: true,
        isToday,
        isActive
      }
      resultArray.push(res)
    }

    const isTodayString = `today ${todayClass}`
    const isActiveString = `active ${activeDayClass}`

    return resultArray.map((day, i) => (<div
        data-day={day.dayNumber}
        key={`CalendaMini-day-set-${i}`}
        onClick={this.handleClickSetCurrentDate}
        className={`CalendarMini-body__days ${day.extraDays ? extraDaysClass : daysClass} 
                    ${day.isToday && isTodayString } 
                    ${day.isActive && isActiveString }
                    `
                  }
        >{
          day.dayNumber
        }</div>))

  }

  handleClickMonthChange = (event) => {
    let { currentDate } = this.state;
    const action = event.currentTarget.getAttribute('value')

    currentDate.month = action === 'prev' ? currentDate.month -= 1 : currentDate.month += 1

    this.setState({ currentDate })
  }

  handleClickSetCurrentDate = (event) => {
    let { activeDate, currentDate } = this.state
    activeDate = { ...currentDate }

    activeDate.day = parseInt(event.currentTarget.getAttribute('data-day'))
    this.setState({ activeDate })
  }

  render () {
    const today = this.state.today
    const { klass, localization, showNext, showPrev, dayLabelFormat } = this.state.config
    const { currentDate, activeDate } = this.state
    const actualDate = new Date(currentDate.year, currentDate.month, currentDate.day)

    return (
      <div className={`CalendarMini ${klass.mainComponent}`}>
        <div className={`CalendarMini-header ${klass.headerComponent}`}>
            <div className={`CalendarMini-header__prev ${klass.prev}`}>
              { showNext && 
                <span
                  onClick={this.handleClickMonthChange}
                  value="prev"
                >
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                  />
                </span>
              }
            </div>
            <div className={`CalendarMini-header__label-month ${klass.labelMonth}`}>
              <span className={`CalendarMini-header__label-month`}>{
                actualDate.toLocaleDateString(localization, { month: 'long' })
              }</span> <span className={`CalendarMini-header__label-year`}>{
                actualDate.getFullYear(localization, { month: 'long', year: 'numeric' })
                }</span>
            </div>
            <div className={`CalendarMini-header__next ${klass.prev}`}>
            { showPrev && 
              <span
                onClick={this.handleClickMonthChange}
                value="next"
              >
                <FontAwesomeIcon
                  icon={faChevronRight}
                />
              </span>
            }
            </div>
        </div>
        <div className={`CalendarMini-body`}>
          {
            [...Array(7)].map((e, i) =>
              <div
                key={`calendarmini-day-name-${i}`}
                className={`CalendarMini-body__labelMonth ${klass.labelMonth}`}
              >{
                this.printDayName(i, localization, dayLabelFormat)
              }</div>
            )
          }
          {
            this.printDaysGrid(today, currentDate, activeDate, localization, dayLabelFormat, klass.days, klass.extraDays, klass.today, klass.activeDay)
          }
        </div>
      </div>
    );
  }
}
