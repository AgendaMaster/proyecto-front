import {
  SET_SUGGESTIONS,
  SET_TOKEN,
  SET_USER,
  LOGOUT,
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
    default:
      return state;
  }
}
