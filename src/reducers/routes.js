import { SAVE_ROUTES } from "../action/route";

const defaultState = {
    id: null,
    name: null,
    coordinates:[],
    length: null,
    complexity: null,
    description: null,
    region: null,
    keyPoints: null,
    rating: null,
    duration: null,
    routeReviews: [],
    userReview: null,
    isPublished: null,
};

export default function  routers (state = defaultState, action) {
    switch (action.type) {
        case SAVE_ROUTES:
            return{
                ...state,
                id: action.payload.id,
                complexity: action.payload.complexity,
                coordinates: action.payload.coordinates,
                description: action.payload.description,
                keyPoints: action.payload.keyPoints,
                length: action.payload.length,
                duration: action.payload.duration,
                name: action.payload.name,
                rating: action.payload.rating,
                region: action.payload.region,
                routeReviews: action.payload.routeReviews,
                userReview: action.payload.userReview,
                isPublished: action.payload.isPublished,
            }
        default:
            return state;
    }
}