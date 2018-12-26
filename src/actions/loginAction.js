import {loginConstant} from '../constants/loginConstant';
import {requestApiAction} from './requestApiAction';
import {accountAction} from './accountAction';

const actionSetLoginSuccess = (payload) => ({
    type: loginConstant.IS_LOGIN_SUCCESS,
    payload:{
        isLoginSuccess: payload.isLoginSuccess
    }
})

const actionSetLogoutSuccess = (payload) => ({
    type: loginConstant.IS_LOGOUT_SUCCESS,
    payload:{
        isLogoutSuccess: payload.isLogoutSuccess
    }
})
const actionLogout = (payload) => {
    return (dispatch) => {
        let payloadTmp = {
            method: 'POST',
            url: payload.url,
            data: {
                ...payload.tx
            }
        }
        dispatch(requestApiAction.actionRequestApi(payloadTmp)).then((result) => {
            console.log('login: ', result);
            if(result.data.status.code === 0){
                let payloadTmp = {
                    isLoginSuccess: false
                }
                dispatch(actionSetLoginSuccess(payloadTmp))
                payloadTmp = {
                    isLogoutSuccess: true
                }
                dispatch(actionSetLogoutSuccess(payloadTmp))
                payloadTmp = {
                    privateKey: '',
                    publicKey: ''
                }
                dispatch(accountAction.actionsSetPrivatrPublicKey(payloadTmp))
                //get profile
            }else{
                let payloadTmp = {
                    isLoginSuccess: false
                }
                dispatch(actionSetLoginSuccess(payloadTmp))
                payloadTmp = {
                    isLogoutSuccess: true
                }
                dispatch(actionSetLogoutSuccess(payloadTmp))
            }
        }).catch((err) => {
            console.log('err: ', err);
            let payloadTmp = {
                isLoginSuccess: false
            }
            dispatch(actionSetLoginSuccess(payloadTmp))
            payloadTmp = {
                isLogoutSuccess: true
            }
            dispatch(actionSetLogoutSuccess(payloadTmp))
        })
    }
}

const actionLogin = (payload) => {
    return (dispatch) => {
        let payloadTmp = {
            method: 'POST',
            url: payload.url,
            data: {
                ...payload.tx
            }
        }
        dispatch(requestApiAction.actionRequestApi(payloadTmp)).then((result) => {            
            if(result.data.status.code === 0){
                let payloadTmp = {
                    isLoginSuccess: true
                }
                dispatch(actionSetLoginSuccess(payloadTmp))
                const data = result.data.data;
                payloadTmp = {
                    publicKey: data._id,
                    userName: data.name,
                    email: data.email,
                    avatar: data.picture,
                    balance: data.balance,
                    oxygen: data.bandwidthLimit - data.bandwidth,
                    numberPost: data.countPost,
                    numberFollowing: data.countFollowings,
                    numberFollowers: data.countFollowers
                }
                dispatch(accountAction.actionSetProfile(payloadTmp))
                //get profile
                payloadTmp = {
                    isLogoutSuccess: false
                }
                dispatch(actionSetLogoutSuccess(payloadTmp))
            }else{
                let payloadTmp = {
                    isLoginSuccess: false
                }
                dispatch(actionSetLoginSuccess(payloadTmp))
                payloadTmp = {
                    isLogoutSuccess: false
                }
                dispatch(actionSetLogoutSuccess(payloadTmp))
            }
        }).catch((err) => {
            let payloadTmp = {
                isLoginSuccess: false
            }
            dispatch(actionSetLoginSuccess(payloadTmp))
            payloadTmp = {
                isLogoutSuccess: false
            }
            dispatch(actionSetLogoutSuccess(payloadTmp))
        })
    }
}


export const loginAction = {
    actionSetLoginSuccess,
    actionLogin,
    actionLogout,
    actionSetLogoutSuccess,
}
