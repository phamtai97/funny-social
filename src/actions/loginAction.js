import {loginConstant} from '../constants/loginConstant';
import {requestApiAction} from './requestApiAction';

const actionSetLoginSuccess = (payload) => ({
    type: loginConstant.IS_LOGIN_SUCCESS,
    payload:{
        isLoginSuccess: payload.isLoginSuccess
    }
})

const actionLogin = (payload) => {
    return (dispatch) => {
        let payloadTmp = {
            method: 'POST',
            url: payload.url,
            data: {
                privateKey: payload.privateKey
            }
        }
        dispatch(requestApiAction.actionRequestApi(payloadTmp)).then((result) => {
            console.log(result);
            if(result.data.sucsess){
                let payloadTmp = {
                    isLoginSuccess: true
                }
                dispatch(actionSetLoginSuccess(payloadTmp))
                //get profile
            }else{
                let payloadTmp = {
                    isLoginSuccess: false
                }
                dispatch(actionSetLoginSuccess(payloadTmp))
            }
        }).catch((err) => {
            let payloadTmp = {
                isLoginSuccess: false
            }
            dispatch(actionSetLoginSuccess(payloadTmp))
        })
    }
}


export const loginAction = {
    actionSetLoginSuccess,
    actionLogin
}
