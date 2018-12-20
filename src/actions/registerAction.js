import {registerConstant} from '../constants/registerConstant'

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

export const registerAction = {
    actionGenPrivatePublicKey,
    actionSetRegisterSuccess,
    actionCopyKey
}
