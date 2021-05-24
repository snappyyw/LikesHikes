import { SET_COORDINAT, REMOVE_COORDINAT, CLEAR_ROUTE} from "../action/creatingRoutes";

const defaultState = {
    coordinates: [],
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
        default:
            return state;
    }
}