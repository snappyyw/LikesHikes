import {SET_MY_ROUTE, SET_COORDINAT, REMOVE_COORDINAT} from "../action/creatingRoutes";

const defaultState = {
    coordinates: [],
    name: undefined,
    duration: undefined,
    complexity: undefined,
    region: undefined,
    discription: undefined,
    keyPoints: undefined,
};

export default function  myRouters (state = defaultState, action) {
    switch (action.type) {

        case REMOVE_COORDINAT:
            return{
                ...state,
                coordinates: []
            }

        case SET_COORDINAT:
            return{
                ...state,
                coordinates: [...state.coordinates, action.payload],
            }
        case SET_MY_ROUTE:
            return{
                ...state,
            }
        default:
            return state;
    }
}