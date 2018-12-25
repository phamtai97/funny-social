import {headerMainConstant} from '../constants/headerMainConstant'

const initalState = {
    itemHeaderMainSelected : '',
    isSendMoneySuccess: false,
    moneySend: ''
}

export default function  headerMainReducer(state=initalState, actions){
    switch(actions.type){
        case headerMainConstant.SET_ITEM_HEADER_MAIN_SELETED:
            return {
                ...state,
                itemHeaderMainSelected: actions.payload.itemHeaderMainSelected
            }
        case headerMainConstant.IS_SEND_MONEY_SUCCESS:
            return{
                ...state,
                isSendMoneySuccess: actions.payload.isSendMoneySuccess,
                moneySend: actions.payload.moneySend
            }
        default:
            return state;
    }
}
