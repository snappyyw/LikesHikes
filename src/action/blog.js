import {ADD_COMMENT} from "./route";

export const GET_BLOG = 'GET_BLOG';
export const SAVE_BLOG = 'SAVE_BLOG';
export  const CREATE_BLOG = 'CREATE_BLOG';
export  const DELETE_BLOG = 'DELETE_BLOG';
export const GET_DETAILS_BLOG = 'GET_DETAILS_BLOG';
export const SABE_DETAILS_BLOG = 'SABE_DETAILS_BLOG';
export const ADD_COMMENT_BLOG = 'ADD_COMMENT_BLOG';
export const DELETE_COMMENT_BLOG = 'DELETE_COMMENT_BLOG';

export const receiveBlog  = (blog) => ({type: SAVE_BLOG, payload: blog});
export const getBlog = (page) => ({type: GET_BLOG, payload: page});
export const createBlog = (data) => ({type: CREATE_BLOG, payload: data});
export const deleteBlog = (id) => ({type: DELETE_BLOG, payload: id})
export const getDetailsBlog = (id) => ({type: GET_DETAILS_BLOG, payload: id});
export const saveDetailsBlog = (data) => ({type: SABE_DETAILS_BLOG, payload: data});
export const addCommentBlog = (data) => ({type: ADD_COMMENT_BLOG, payload: data});
export const deleteCommentBlog = (data) => ({type: DELETE_COMMENT_BLOG, payload: data});
