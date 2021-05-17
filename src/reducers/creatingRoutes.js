import { SET_COORDINAT, REMOVE_COORDINAT, CLEAR_ROUTE} from "../action/creatingRoutes";

const defaultState = {
    coordinates: [
        {lat: 59.285221741174766, lng: 121.82320441988949},
        {lat: 58.285221741174766, lng: 120.82320441988949},
    ],
    name: null,
    duration: null,
    complexity: null,
    region: null,
    discription: null,
    keyPoints: null,
};

export default function  creatingRoutes (state = defaultState, action) {
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
        case CLEAR_ROUTE:
            return{
                ...state,
                state: undefined,
            }
        default:
            return state;
    }
}