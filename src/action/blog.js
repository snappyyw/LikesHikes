export const GET_BLOG = 'GET_BLOG';
export const SAVE_BLOG = 'SAVE_BLOG';

export const receiveBlog  = (blog) => ({type: SAVE_BLOG, payload: blog});
export const getBlog = (page) => ({type: GET_BLOG, payload: page});
