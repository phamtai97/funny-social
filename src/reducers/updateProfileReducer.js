import {updateProfileConstant} from '../constants/updateProfileConstant';

const initalState = {
    isUpdateProfileSuccess: false
}

export default function updateProfileReducer(state=initalState, actions){
    switch(actions.type){
        case updateProfileConstant.IS_UP_LOAD_PROFILE_SUCCESS:
            return{
                ...state,
                isUpdateProfileSuccess: actions.payload.isUpdateProfileSuccess,
            }
        default:
            return state
    }
}
