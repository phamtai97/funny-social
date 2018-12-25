import {registerConstant} from '../constants/registerConstant'
import { requestApiAction } from './requestApiAction';

const actionGenPrivatePublicKey = (payload) => ({
    type: registerConstant.GEN_PRIVATE_PUBLIC_KEY,
    payload: {
        privateKey: payload.privateKey,
        publicKey: payload.publicKey,
    }
})

const actionSetRegisterSuccess = (payload) => ({
    type:registerConstant.IS_REGISTER_SUCCESS,
    payload: {
        isRegisterSuccess: payload.isRegisterSuccess
    }
})

const actionCopyKey = (payload) => ({
    type: registerConstant.COPY_KEY,
    payload: {
        keyCopy: payload.keyCopy
    }
})

const actionRegister = (payload) => {
    return (dispatch) => {
        let payloadTmp = {
            method: 'POST',
            url: payload.url,
            data: {
                tx: payload.Tx
            }
        }
        
        dispatch(requestApiAction.actionRequestApi(payloadTmp)).then((result) => {
            if(result.data.status.code === 0){
                let payloadTmp = {
                    isRegisterSuccess: true
                }
                dispatch(actionSetRegisterSuccess(payloadTmp))
            }else {
                let payloadTmp = {
                    isRegisterSuccess: false
                }
                dispatch(actionSetRegisterSuccess(payloadTmp))
            }
        }).catch((err) => {
            let payloadTmp = {
                isRegisterSuccess: false
            }
            dispatch(actionSetRegisterSuccess(payloadTmp))
        })
    }
}

export const registerAction = {
    actionGenPrivatePublicKey,
    actionSetRegisterSuccess,
    actionCopyKey,
    actionRegister
}
