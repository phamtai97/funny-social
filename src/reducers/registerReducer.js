import {registerConstant} from '../constants/registerConstant'

const initalState = {
    privateKey: '',
    publicKey: '',
    isRegisterSuccess: false
}

export default function registerReducer(state=initalState, actions){
    switch(actions.type){
        case registerConstant.GEN_PRIVATE_PUBLIC_KEY:
            return{
                ...state,
                privateKey: actions.payload.privateKey,
                publicKey: actions.payload.publicKey
            }
        case registerConstant.IS_REGISTER_SUCCESS:
            return{
                ...state,
                isRegisterSuccess: actions.payload.isRegisterSuccess
            }
        default:
            return state
    }
}
