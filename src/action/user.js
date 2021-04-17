export const SET_USER = 'SET_USER';
export const LOGOUT = 'LOGOUT';
export const REGISTRATION = 'REGISTRATION';
export const LOGIN = 'LOGIN';
export const AUTH = 'AUTH';

export const setUser = (user) => ({type: SET_USER, payload: user});
export const logout = () => ({type: LOGOUT});
export const registration = (values) => ({type: REGISTRATION, payload: values});
export const login = (values) => ({type: LOGIN, payload: values});
export const auth = () => ({type: AUTH});