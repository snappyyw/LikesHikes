export const GET_ROUTER = 'GET_ROUTER';
export const SAVE_ROUTER = 'SAVE_ROUTER';

export const getRouter = () => ({type: GET_ROUTER});
export const receiveRouter = (router) => ({type:SAVE_ROUTER, payload: router});
