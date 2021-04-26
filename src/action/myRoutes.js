export const GET_MY_ROUTES = 'GET_MY_ROUTES';
export const SAVE_MY_ROUTES = 'SAVE_MY_ROUTES';

export const getMyRoute = (user_id) => ({type: GET_MY_ROUTES, payload: user_id});
export const receiveMyRoute = (router) => ({type:SAVE_MY_ROUTES, payload: router});