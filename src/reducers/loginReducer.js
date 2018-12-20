import {loginConstant} from '../constants/loginConstant';
const initalState = {
    isLoginSuccess: true
}

export default function loginReducer (state=initalState, actions) {
    switch (actions.type){
        case loginConstant.IS_LOGIN_SUCCESS:
            return {
                ...state,
                isLoginSuccess: actions.payload.isLoginSuccess
            }
        default:
            return state
    }
}
