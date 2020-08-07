import { SET_USER, SET_TOKEN, SET_SUGGESTIONS, LOGOUT } from './actionsTypes';

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const setToken = (token) => ({
  type: SET_TOKEN,
  payload: token,
});

export const setSuggestions = (suggestions) => ({
  type: SET_SUGGESTIONS,
  payload: suggestions,
});

export const logout = () => ({
  type: LOGOUT,
});
