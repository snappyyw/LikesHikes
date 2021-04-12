import { SET_USER, LOGOUT} from "../action/user"

const defaultState = {
    currentUser: {
        login: "Snippy",
        email: "snippymr@yandex.ru",
        routes: 5,
        completed: 1,
    },
}

export default function  user (state = defaultState, action) {
    switch (action.type) {
        case SET_USER:

            return{
                ...state,
                currentUser: action.payload,
            }
        case LOGOUT:
            localStorage.removeItem('token')

            return{
                ...state,
                currentUser: undefined,
            }
        default:

            return state;
    }
}
