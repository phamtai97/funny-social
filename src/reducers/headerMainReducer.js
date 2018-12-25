import {headerMainConstant} from '../constants/headerMainConstant'

const initalState = {
    itemHeaderMainSelected : '',
}

export default function  headerMainReducer(state=initalState, actions){
    switch(actions.type){
        case headerMainConstant.SET_ITEM_HEADER_MAIN_SELETED:
            return {
                ...state,
                itemHeaderMainSelected: actions.payload.itemHeaderMainSelected
            }
        default:
            return state;
    }
}
