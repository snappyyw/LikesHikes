export const SET_COORDINAT = 'SET_COORDINAT';
export const REMOVE_COORDINAT = 'REMOVE_COORDINAT';
export const CREATE_ROUTE = 'CREATE_ROUTE';
export const CLEAR_ROUTE = 'CLEAR_ROUTE';

export const setCoordinat = (coordinat) => ({type: SET_COORDINAT, payload: coordinat});
export const removeCoordinat = () => ({type: REMOVE_COORDINAT});
export const createRoute = (date) => ({type: CREATE_ROUTE, payload: date});
export const clearRoute = () => ({type: CLEAR_ROUTE});
