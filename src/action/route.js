export const GET_ROUTES = 'GET_ROUTES';
export const SAVE_ROUTES = 'SAVE_ROUTES';

export const getRoute = (id) => ({type: GET_ROUTES, payload: id});
export const receiveRoute = (router) => ({type:SAVE_ROUTES, payload: router});
