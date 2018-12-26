import {VIEW_POST, VIEW_FOLLOWING, VIEW_FOLLOWER, SET_PROFILE_USER, SET_PUBLIC_KEY_PROFILE_USER,
    SET_LIST_POST_PROFILE_PAGE, SET_LIST_FOLLOWING_PROFILE_PAGE, SET_LIST_FOLLOWERS_PROFILE_PAGE} 
    from '../constants/profilePageConstant';
import { requestApiAction } from './requestApiAction';

export const onViewPost = () => {
    return {
        type: VIEW_POST
    }
}

export const onViewFollowing = () => {
    return {
        type: VIEW_FOLLOWING
    };
}

export const onViewFollower = () => {
    return {
        type: VIEW_FOLLOWER
    };
}

export const actionSetPublicKeyProfileUser = (payload) => ({
    type: SET_PUBLIC_KEY_PROFILE_USER,
    payload: {
        publicKeyUser: payload.publicKeyUser
    }
})


export const actionSetProfileUser = (payload) => ({
    type: SET_PROFILE_USER,
    payload: {
        publicKey: payload.publicKey,
        userName: payload.userName,
        email: payload.email,
        avatar: payload.avatar,
        balance: payload.balance,
        oxygen: payload.oxygen,
        numberPost: payload.numberPost,
        numberFollowing: payload.numberFollowing,
        numberFollowers: payload.numberFollowers,
    }
})

export const actionGetAccountProfileUser = (payload) => {
    return (dispatch) => {
        let payloadTmp = {
            method: 'GET',
            url: payload.url,
        }
        dispatch(requestApiAction.actionRequestApi(payloadTmp)).then((result) => {
            console.log('result get user profile page:', result)
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
                dispatch(actionSetProfileUser(payloadTmp));
            }else {
                console.log('post fail');
            }
        }).catch((err) => {
            console.log('err: ', err);
        })
    }
}

export const actionGetListPostProfilePage = (payload) => {
    return(dispatch) => {
        let payloadTmp = {
            method: 'GET',
            url: payload.url,
        }
        dispatch(requestApiAction.actionRequestApi(payloadTmp)).then((result) => {
            console.log('result get post profile page:', result.data.data.list)
            if(result.data.status.code === 0){
                var setListPost = new Set(result.data.data.list);
                let payloadTmp = {
                    listPostProfilePage: Array.from(setListPost),
                }
                dispatch(actionSetListPostProfilePage(payloadTmp));
            }else {
                console.log('post fail');
            }
        }).catch((err) => {
            console.log('err: ', err);
        })
    }
}

export const actionSetListPostProfilePage = (payload) => ({
    type: SET_LIST_POST_PROFILE_PAGE,
    payload:{
        listPostProfilePage: payload.listPostProfilePage,
    }
})

export const actionGetListFollowingProfilePage = (payload) => {
    return(dispatch) => {
        let payloadTmp = {
            method: 'GET',
            url: payload.url,
        }
        dispatch(requestApiAction.actionRequestApi(payloadTmp)).then((result) => {
            console.log('result get list following profile page:', result.data.data.list)
            if(result.data.status.code === 0){
                var setListFollowing = new Set(result.data.data.list);
                let payloadTmp = {
                    listFollowingProfilePage: Array.from(setListFollowing),
                }
                console.log(payloadTmp)
                dispatch(actionSetListFollowingProfilePage(payloadTmp));
            }else {
                console.log('post fail');
            }
        }).catch((err) => {
            console.log('err: ', err);
        })
    }
}

export const actionSetListFollowingProfilePage = (payload) => ({
    type: SET_LIST_FOLLOWING_PROFILE_PAGE,
    payload:{
        listFollowingProfilePage: payload.listFollowingProfilePage,
    }
})

export const actionGetListFollowerProfilePage = (payload) => {
    return(dispatch) => {
        let payloadTmp = {
            method: 'GET',
            url: payload.url,
        }
        dispatch(requestApiAction.actionRequestApi(payloadTmp)).then((result) => {
            console.log('result get list follower profile page:', result.data.status.code)
            if(result.data.status.code === 0){
                var setListFollower= new Set(result.data.data.list);
                let payloadTmp = {
                    listFollowerProfilePage: Array.from(setListFollower),
                }
                console.log(payloadTmp)
                dispatch(actionSetListFollowerProfilePage(payloadTmp));
            }else {
                console.log('post fail');
            }
        }).catch((err) => {
            console.log('err: ', err);
        })
    }
}

export const actionSetListFollowerProfilePage = (payload) => ({
    type: SET_LIST_FOLLOWERS_PROFILE_PAGE,
    payload:{
        listFollowerProfilePage: payload.listFollowerProfilePage,
    }
})
