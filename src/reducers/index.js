import {
  SET_SUGGESTIONS,
  SET_TOKEN,
  SET_USER,
  LOGOUT,
  SET_CALENDAR_EVENTS,
  SET_CALENDAR_CURRENT_DAY
} from './../actions/actionsTypes';

export default function mainReducer(state = {}, action) {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case SET_SUGGESTIONS:
      return {
        ...state,
        suggestions: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        user: null,
        suggestions: null,
      };
    case SET_CALENDAR_EVENTS:
      return {
        ...state,
        events: action.payload
      };
    case SET_CALENDAR_CURRENT_DAY:
      console.log('SET_CALENDAR_CURRENT_DAY ::', action.payload)
      return {
        ...state,
        current_day: action.payload
      }
    default:
      return state;
  }
}
