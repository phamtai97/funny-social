import {updateProfileConstant} from '../constants/updateProfileConstant'
import {requestApiAction} from './requestApiAction';

const actionUpdateProfile = (payload) => {
    return (dispatch) => {
        let payloadTmp = {
            method: 'POST',
            url: payload.url,
            data: {

            }
        }
        dispatch(requestApiAction.actionRequestApi(payloadTmp)).then((result) => {
            console.log(result)
            if(result.data.success){
                let payloadTmp = {
                    isUpdateProfileSuccess: true
                }
                dispatch(actionSetUpdateProfileSuccess(payloadTmp))
            }else{
                let payloadTmp = {
                    isUpdateProfileSuccess: false
                }
                dispatch(actionSetUpdateProfileSuccess(payloadTmp))
            }
        }).catch((err) => {
            let payloadTmp = {
                isUpdateProfileSuccess: false
            }
            dispatch(actionSetUpdateProfileSuccess(payloadTmp))
        })
    }
}

const actionSetUpdateProfileSuccess = (payload) => ({
    type: updateProfileConstant.IS_UP_LOAD_PROFILE_SUCCESS,
    payload:{
        isUpdateProfileSuccess: payload.isUpdateProfileSuccess
    }
})

export const updateProfileAction = {
    actionSetUpdateProfileSuccess,
    actionUpdateProfile
}
