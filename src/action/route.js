export const GET_ROUTES = 'GET_ROUTES';
export const SAVE_ROUTES = 'SAVE_ROUTES';
export const ADD_ROUTE = 'ADD_ROUTE';
export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const DELETE_ROUTE = 'DELETE_ROUTE';

export const getRoute = (id) => ({type: GET_ROUTES, payload: id});
export const receiveRoute = (router) => ({type:SAVE_ROUTES, payload: router});
export const addRoute = (id) => ({type: ADD_ROUTE, payload: id});
export const addComment = (data) => ({type: ADD_COMMENT, payload: data});
export const deleteComment = (id) => ({type: DELETE_COMMENT, payload: id});
export const deleteRoute = (id) => ({type: DELETE_ROUTE, payload: id});

