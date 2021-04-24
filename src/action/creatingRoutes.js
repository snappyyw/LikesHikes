export const SET_MY_ROUTE = 'SET_MY_ROUTE';
export const SET_COORDINAT = 'SET_COORDINAT';
export const REMOVE_COORDINAT = 'REMOVE_COORDINAT';


export const setRoute = (date) => ({type: SET_MY_ROUTE, payload: date});
export const setCoordinat = (coordinat) => ({type: SET_COORDINAT, payload: coordinat});
export const removeCoordinat = () => ({type: REMOVE_COORDINAT});