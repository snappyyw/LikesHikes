export const GET_ALL_ROUTES = 'GET_ALL_ROUTES';
export const SAVE_ALL_ROUTES = 'SAVE_ALL_ROUTES';
export const ROUTE_FILTER = 'ROUTE_FILTER';

export const getAllRoutes = () => ({type: GET_ALL_ROUTES});
export const receiveAllRoute = (router) => ({type:SAVE_ALL_ROUTES, payload: router});
export const routeFilter = (data) => ({type: ROUTE_FILTER, payload: data});
