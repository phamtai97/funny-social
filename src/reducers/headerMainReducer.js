import {headerMainConstant} from '../constants/headerMainConstant'

const initalState = {
    itemHeaderMain : '',
}

export default function  headerMainReducer(state=initalState, actions){
    switch(actions.type){
        case headerMainConstant.SET_ITEM_HEADER_MAIN_SELETED:
            return {
                ...state,
                itemHeaderMain: actions.payload.itemHeaderMain
            }
        default:
            return state;
    }
}
