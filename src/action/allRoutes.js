export const GET_ALL_ROUTES = 'GET_ALL_ROUTES';
export const SAVE_ALL_ROUTES = 'SAVE_ALL_ROUTES';

export const getAllRoutes = () => ({type: GET_ALL_ROUTES});
export const receiveAllRoute = (router) => ({type:SAVE_ALL_ROUTES, payload: router});
