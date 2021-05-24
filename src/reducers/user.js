import { SET_USER, LOGOUT, SAVE_USER_DATA} from "../action/user";

const defaultState = {
    userName: null,
    email: null,
    routesCount: null,
    passedRoutesCount: null,
    isAdmin: null,
    userRoutes: [],
};

export default function  user (state = defaultState, action) {
    switch (action.type) {
        case SET_USER:
            return{
                ...state,
                userName: action.payload.userName,
                email: action.payload.email,
                isAdmin: action.payload.isAdmin,
                routesCount: action.payload.routesCount,
                passedRoutesCount: action.payload.passedRoutesCount,
            }
        case SAVE_USER_DATA:
            return{
                ...state,
                userRoutes: action.payload,
            }
        case LOGOUT:
            localStorage.removeItem('token')
            return{
                ...state,
                userName: null,
            }
        default:
            return state;
    }
}
