export const GET_BLOG = 'GET_BLOG';
export const SAVE_BLOG = 'SAVE_BLOG';
export  const CREATE_BLOG = 'CREATE_BLOG';
export  const DELETE_BLOG = 'DELETE_BLOG';

export const receiveBlog  = (blog) => ({type: SAVE_BLOG, payload: blog});
export const getBlog = (page) => ({type: GET_BLOG, payload: page});
export const createBlog = (data) => ({type: CREATE_BLOG, payload: data});
export const deleteBlog = (id) => ({type: DELETE_BLOG, payload: id})
