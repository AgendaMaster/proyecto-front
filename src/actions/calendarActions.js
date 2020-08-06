import { SET_CALENDAR_EVENTS, SET_CALENDAR_CURRENT_DAY } from './actionsTypes';

export const setCalendarEvents = (payload) => ({
  type: SET_CALENDAR_EVENTS,
  payload
});

export const setCalendarCurrentDay = (payload) => ({
  type: SET_CALENDAR_CURRENT_DAY,
  payload
});