import {SAVE_BLOG, SABE_DETAILS_BLOG} from "../action/blog";

const defaultState = {
    posts:[],
    pageModel:{
        pageNumber: 1,
        totalPages: 0,
        hasPreviousPage: false,
        hasNextPage: false,
    },
    appImagesId: null,
    comments: [],
    heading: null,
    id: null,
    publishingDate: null,
    text: null,
    isBlog: true,
};

export default function  blog (state = defaultState, action) {
    switch (action.type) {
        case SAVE_BLOG:
            return {
                ...state,
                pageModel: action.payload.pageModel,
                posts: action.payload.posts,
            }
        case SABE_DETAILS_BLOG:
            return {
                ...state,
                appImageId: action.payload.appImageId,
                comments: action.payload.comments,
                heading: action.payload.heading,
                id: action.payload.id,
                publishingDate: action.payload.publishingDate,
                text: action.payload.text,
            }
        default:
            return state;
    }
}