import { SET_COORDINAT, REMOVE_COORDINAT} from "../action/creatingRoutes";

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
            if(Array.isArray(action.payload))
            {
                return{
                    ...state,
                    coordinates: action.payload,
                }
            }
            return{
                ...state,
                coordinates: [...state.coordinates, action.payload],
            }
        default:
            return state;
    }
}