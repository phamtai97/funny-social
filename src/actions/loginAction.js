import {loginConstant} from '../constants/loginConstant';

const actionSetLoginSuccess = (payload) => ({
    type: loginConstant.IS_LOGIN_SUCCESS,
    payload:{
        isLoginSuccess: payload.isLoginSuccess
    }
})

export const loginAction = {
    actionSetLoginSuccess
}
