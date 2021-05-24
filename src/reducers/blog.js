import {SAVE_BLOG} from "../action/blog";

const defaultState = {
    posts:[],
    pageModel:{
        pageNumber: 1,
        totalPages: 0,
        hasPreviousPage: false,
        hasNextPage: false,
    }
};

export default function  blog (state = defaultState, action) {
    switch (action.type) {
        case SAVE_BLOG:
            return{
                ...state,
                pageModel: action.payload.pageModel,
                posts: action.payload.posts,
            }
        default:
            return state;
    }
}