import { USER_LOGIN, USER_LOGIN_GOOGLE, USER_LOGOUT, CURRENT_USER } from "../../actions/UserAction";

export const initialState = {
    userLoginResult: false,
    userLoginError: false,
    userLoginLoading: false,
    currentUserData: false
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                userLoginResult: action.payload.data,
                userLoginError: action.payload.errorMessage,
                userLoginLoading: action.payload.loading
            }
        case USER_LOGIN_GOOGLE:
            return {
                ...state,
                userLoginResult: action.payload.data,
                userLoginError: action.payload.errorMessage,
                userLoginLoading: action.payload.loading
            }
        case USER_LOGOUT:
            return initialState
        case CURRENT_USER:
            return {
                ...state,
                currentUserData: action.payload.data,
                userLoginError: action.payload.errorMessage,
                userLoginLoading: action.payload.loading
            }
        default:
            return state
    }
}

export default user