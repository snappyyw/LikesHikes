import { SAVE_ALL_ROUTES } from "../action/allRoutes";

const defaultState = {
    routes: [
        {
            id: null,
            name: null,
            coordinates:[],
            duration: null,
            complexity: null,
            description: null,
            length: null,
            region: null,
            keyPoints: null,
            rating: null,
            userHas: null,
        },
    ],
};

export default function  routers (state = defaultState, action) {
    switch (action.type) {
        case SAVE_ALL_ROUTES:
            return{
                ...state,
                routes: action.payload
            }
        default:
            return state;
    }
}