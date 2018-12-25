import {loginConstant} from '../constants/loginConstant';
const initalState = {
    isLoginSuccess: false,
    isLogoutSuccess: false
}

export default function loginReducer (state=initalState, actions) {
    switch (actions.type){
        case loginConstant.IS_LOGIN_SUCCESS:
            return {
                ...state,
                isLoginSuccess: actions.payload.isLoginSuccess
            }
        case loginConstant.IS_LOGOUT_SUCCESS:
            return {
                ...state,
                isLogoutSuccess: actions.payload.isLogoutSuccess
            }
        default:
            return state
    }
}
