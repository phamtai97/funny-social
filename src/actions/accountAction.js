import {accountConstant} from '../constants/accountConstant'
import { requestApiAction } from './requestApiAction';

const actionsSetPrivatrPublicKey = (payload) => ({
    type: accountConstant.SET_PRIVATE_PUBLIC_KEY,
    payload:{
        privateKey: payload.privateKey,
        publicKey: payload.publicKey
    }
})

const actionSetProfileUser = (payload) => ({
    type: accountConstant.SET_PROFILE_USER,
    payload:{

    }
})

const actionUpdateUserName = (payload) => ({
    type: accountConstant.UPDATE_USERNAME,
    payload:{
        userName: payload.userName
    }
})

const actionUpdateEmail = (payload) => ({
    type: accountConstant.UPDATE_EMAIL,
    payload:{
        email: payload.email
    }
})

const actionUpdateAvatar = (payload) => ({
    type: accountConstant.UPDATE_AVATAR,
    payload: {
        avatar: payload.avatar
    }
})

const actionSetBalance = (payload) => ({
    type: accountConstant.SET_BALANCE,
    payload:{
        balance: payload.balance
    }
})

const actionSetOxygen = (payload) => ({
    type: accountConstant.SET_OXYGEN,
    payload: {
        oxygen: payload.oxygen
    }
})

const actionSetNumberPost = (payload) => ({
    type: accountConstant.SET_NUMBER_POST,
    payload: {
        numberPost: payload.numberPost
    }
})

const actionSetNumberFollowing = (payload) => ({
    type: accountConstant.SET_NUMBER_FOLLOWING,
    payload:{
        numberFollowing: payload.numberFollowing
    }
})

const actionSetNumberFollowers = (payload) => ({
    type: accountConstant.SET_NUMBER_FOLLOWERS,
    payload:{
        numberFollowers: payload.numberFollowers
    }
})

const actionSetProfile = (payload) => ({
    type:accountConstant.SET_PROFILE,
    payload: {
        publicKey: payload.publicKey,
        userName: payload.userName,
        email: payload.email,
        avatar: payload.avatar,
        balance: payload.balance,
        oxygen: payload.oxygen,
        numberPost: payload.numberPost,
        numberFollowing: payload.numberFollowing,
        numberFollowers: payload.numberFollowers
    }
})

const actionGetAccountUser = (payload) => {
    return (dispatch) => {
        let payloadTmp = {
            method: 'GET',
            url: payload.url,
        }
        dispatch(requestApiAction.actionRequestApi(payloadTmp)).then((result) => {
            console.log('result get:', result)
            if(result.data.status.code === 0){
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
                dispatch(actionSetProfile(payloadTmp))
            }else {
                console.log('post fail')
            }
        }).catch((err) => {
            console.log('err: ', err)
        })
    }
}


export const accountAction = {
    actionsSetPrivatrPublicKey,
    actionSetProfileUser,
    actionUpdateUserName,
    actionUpdateEmail,
    actionUpdateAvatar,
    actionSetBalance,
    actionSetOxygen,
    actionSetNumberPost,
    actionSetNumberFollowing,
    actionSetNumberFollowers,
    actionSetProfile,
    actionGetAccountUser
}
