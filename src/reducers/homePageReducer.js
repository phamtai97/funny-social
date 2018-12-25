import {homePageConstant} from '../constants/homePageConstant'

const initalState = {
    listPostHomePage : [],
    newPostHomePage: '',
}

export default function  homePageReducer(state=initalState, actions){
    switch(actions.type){
        case homePageConstant.SET_LIST_POST_HOME_PAGE:
            return {
                ...state,
                listPostHomePage: state.listPostHomePage.concat(actions.payload.listPostHomePage)
            }
        case homePageConstant.ADD_NEW_POST_HOME_PAGE:
            return {
                ...state,
                listPostHomePage: state.listPostHomePage.concat(actions.payload.newPostHomePage)
            }
        default:
            return state;
    }
}
