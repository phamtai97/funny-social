import {homePageConstant} from '../constants/homePageConstant';
import { requestApiAction } from './requestApiAction';

const actionSetListPostHomePage = (payload) => ({
    type: homePageConstant.SET_LIST_POST_HOME_PAGE,
    payload: {
        listPostHomePage: payload.listPostHomePage
    }
})

const actionAddNewPostHomePage = (payload) => ({
    type: homePageConstant.ADD_NEW_POST_HOME_PAGE,
    payload: {
        newPostHomePage: payload.newPostHomePage
    }
})

const actionPushNewPostHomePage = (payload) => {
    return (dispatch) => {
        let payloadTmp = {
            method: 'POST',
            url: payload.url,
            data: {
                tx: payload.Tx
            }
        }
        
        dispatch(requestApiAction.actionRequestApi(payloadTmp)).then((result) => {
            console.log('result post:', result)
            if(result.data.status.code === 0){
                let payloadTmp = {
                    newPostHomePage: payload.itemPost
                }
                dispatch(actionAddNewPostHomePage(payloadTmp))
            }else {
                console.log('post fail')
            }
        }).catch((err) => {
            console.log('err: ', err)
        })
    }
}

const getListPostHomePage = (payload) => {
    // return (dispatch) => {
    //     let payloadTmp = {
    //         method: 'POST',
    //         url: payload.url,
    //         data: {
    //             tx: payload.Tx
    //         }
    //     }
        
    //     dispatch(requestApiAction.actionRequestApi(payloadTmp)).then((result) => {
    //         console.log('result post:', result)
    //         if(result.data.status.code === 0){
    //             let payloadTmp = {
    //                 newPostHomePage: payload.itemPost
    //             }
    //             dispatch(actionSetListPostHomePage(payloadTmp))
    //         }else {
    //             console.log('post fail')
    //         }
    //     }).catch((err) => {
    //         console.log('err: ', err)
    //     })
    // }
}

export const homePageAction = {
    actionSetListPostHomePage,
    actionAddNewPostHomePage,
    actionPushNewPostHomePage,
    getListPostHomePage
}
