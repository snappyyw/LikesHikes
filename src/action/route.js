export const GET_ROUTES = 'GET_ROUTES';
export const SAVE_ROUTES = 'SAVE_ROUTES';
export const ADD_ROUTE = 'ADD_ROUTE';

export const getRoute = (id) => ({type: GET_ROUTES, payload: id});
export const receiveRoute = (router) => ({type:SAVE_ROUTES, payload: router});
export const addRoute = (id) => ({type: ADD_ROUTE, payload: id});

