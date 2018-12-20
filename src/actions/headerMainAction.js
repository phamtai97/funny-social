import {headerMainConstant} from '../constants/headerMainConstant'

const actionSetItemHeaderMainSelected = (payload) => ({
    type: headerMainConstant.SET_ITEM_HEADER_MAIN_SELETED,
    payload:{
        itemHeaderMain: payload.itemHeaderMain
    }
})

export const headerMainAction = {
    actionSetItemHeaderMainSelected
}
