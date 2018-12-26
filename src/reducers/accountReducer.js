import {accountConstant} from '../constants/accountConstant'

const initalState = {
    privateKey: '',
    publicKey: '',
    userName: '',
    email: '',
    avatar: '',
    balance: 0,
    oxygen: 0,
    numberPost: 0,
    numberFollowing: 0,
    numberFollowers: 0
}

export default function accountReducer(state=initalState, actions){
    switch(actions.type){
        case accountConstant.SET_PRIVATE_PUBLIC_KEY:
            return{
                ...state,
                privateKey: actions.payload.privateKey,
                publicKey: actions.payload.publicKey
            }
        case accountConstant.UPDATE_USERNAME:
            return{
                ...state,
                userName: actions.payload.userName
            }
        case accountConstant.UPDATE_EMAIL:
            return{
                ...state,
                email: actions.payload.email
            }
        case accountConstant.UPDATE_AVATAR:
            return{
                ...state,
                avatar: actions.payload.avatar
            }
        case accountConstant.SET_BALANCE:
            return{
                ...state,
                balance: actions.payload.balance
            }
        case accountConstant.SET_OXYGEN:
            return{
                ...state,
                oxygen: actions.payload.oxygen
            }
        case accountConstant.SET_NUMBER_POST:
            return{
                ...state,
                numberPost: actions.payload.numberPost
            }
        case accountConstant.SET_NUMBER_FOLLOWING:
            return{
                ...state,
                numberFollowing: actions.payload.numberFollowing
            }
        case accountConstant.SET_NUMBER_FOLLOWERS:
            return{
                ...state,
                numberFollowers: actions.payload.numberFollowers
            }
        case accountConstant.SET_PROFILE:
            return{
                ...state,
                publicKey: actions.payload.publicKey,
                userName: actions.payload.userName,
                email: actions.payload.email,
                avatar: actions.payload.avatar,
                balance: actions.payload.balance,
                oxygen: actions.payload.oxygen,
                numberPost: actions.payload.numberPost,
                numberFollowing: actions.payload.numberFollowing,
                numberFollowers: actions.payload.numberFollowers
            }
        default:
            return state
    }
}
