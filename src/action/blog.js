export const SET_BLOG = 'SET_BLOG';
export const RECEIVE_BLOG = 'RECEIVE_BLOG';

export const setBlog = (blog) => ({type: SET_BLOG, payload: blog});
export const receiveBlog = () => ({type: RECEIVE_BLOG});