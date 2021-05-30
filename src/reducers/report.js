import { SAVE_REPORT } from "../action/user";

const defaultState = {
    name: null,
    text: null,
    id: null,
};

export default function  report (state = defaultState, action) {
    switch (action.type) {
        case SAVE_REPORT:
            return{
                ...state,
                name: action.payload.name,
                text: action.payload.text,
                id: action.payload.id,
            }
        default:
            return state;
    }
}