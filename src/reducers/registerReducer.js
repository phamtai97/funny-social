import {registerConstant} from '../constants/registerConstant'

const initalState = {
    isRegisterSuccess: -1
}

export default function registerReducer(state=initalState, actions){
    switch(actions.type){
        case registerConstant.IS_REGISTER_SUCCESS:
            return{
                ...state,
                isRegisterSuccess: actions.payload.isRegisterSuccess
            }
        default:
            return state
    }
}
