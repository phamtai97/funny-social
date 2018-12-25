import {requestApiConstant} from '../constants/requestApiConstant';
import axios from 'axios';

const actionRequesting = () =>({
    type: requestApiConstant.REQUESTING
})

const actionRequestSuccess = (payload) => ({
    type: requestApiConstant.REQUEST_SUCCESS,
    payload:{
        result: payload.result
    }
})

const actionRequestFail = (payload) => ({
    type: requestApiConstant.REQUEST_FAIL,
    payload: {
        err: payload.err
    }
})

const actionRequestApi = (payload) => {
    return (dispatch, getState) => {
        dispatch(actionRequesting);
        switch (payload.method){
            case requestApiConstant.GET:
                return axios.get(payload.url);
            case requestApiConstant.POST:
                return axios.post(payload.url, payload.data);
            case requestApiConstant.PUT:
                return axios.put(payload.url, payload.data)
            default:
            dispatch(actionRequestFail({err: "Unknown method"}))
            
        }
    }
}
export const requestApiAction = {
    actionRequesting,
    actionRequestSuccess,
    actionRequestFail,
    actionRequestApi
}
