export const SET_ROUTER = 'SET_ROUTER';
export const SET_COORDINAT = 'SET_COORDINAT';
export const REMOVE_COORDINAT = 'REMOVE_COORDINAT';


export const setRouter = (date) => ({type: SET_ROUTER, payload: date});
export const setCoordinat = (coordinat) => ({type: SET_COORDINAT, payload: coordinat});
export const removeCoordinat = () => ({type: REMOVE_COORDINAT});