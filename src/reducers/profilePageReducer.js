import { VIEW_POST, VIEW_FOLLOWING, VIEW_FOLLOWER, SET_PROFILE_USER, SET_PUBLIC_KEY_PROFILE_USER,
    SET_LIST_POST_PROFILE_PAGE, SET_LIST_FOLLOWING_PROFILE_PAGE, SET_LIST_FOLLOWERS_PROFILE_PAGE} from '../constants/profilePageConstant';

const initState = {
    view: VIEW_POST,
    publicKeyUser: '',
    userNameUser: '',
    emailUser: '',
    avatarUser: '',
    balanceUser: 0,
    oxygenUser: 0,
    numberPostUser: 0,
    numberFollowingUser: 0,
    numberFollowersUser: 0,
    listPostProfilePage: [],
    listFollowingProfilePage: [],
    listFollowerProfilePage: [],
}

export default function profilePageReducer(state = initState, actions){
    switch (actions.type) {
        case VIEW_POST:
        case VIEW_FOLLOWING:
        case VIEW_FOLLOWER:
            return {
                ...state,
                view: actions.type
            }
            case SET_PROFILE_USER:
                return{
                    ...state,
                    publicKeyUser: actions.payload.publicKey,
                    userNameUser: actions.payload.userName,
                    emailUser: actions.payload.email,
                    avatarUser: actions.payload.avatar,
                    balanceUser: actions.payload.balance,
                    oxygenUser: actions.payload.oxygen,
                    numberPostUser: actions.payload.numberPost,
                    numberFollowingUser: actions.payload.numberFollowing,
                    numberFollowersUser: actions.payload.numberFollowers
            }
            case SET_PUBLIC_KEY_PROFILE_USER:
                return{
                    ...state,
                    publicKeyUser: actions.payload.publicKeyUser
                }
            case SET_LIST_POST_PROFILE_PAGE:
                state.listPostProfilePage =  [];
                return{
                    ...state,
                    listPostProfilePage: state.listPostProfilePage.concat(actions.payload.listPostProfilePage)
                }
            case SET_LIST_FOLLOWING_PROFILE_PAGE:
                state.listFollowingProfilePage = [];
                return{
                    ...state,
                    listFollowingProfilePage: state.listFollowingProfilePage.concat(actions.payload.listFollowingProfilePage)
                }
            case SET_LIST_FOLLOWERS_PROFILE_PAGE:
                state.listFollowerProfilePage = [];
                return{
                    ...state,
                    listFollowerProfilePage: state.listFollowerProfilePage.concat(actions.payload.listFollowerProfilePage)
                }
        default:
            return state;
    }
}
