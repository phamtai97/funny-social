import {headerMainConstant} from '../constants/headerMainConstant'
import { requestApiAction } from './requestApiAction';

const actionSetItemHeaderMainSelected = (payload) => ({
    type: headerMainConstant.SET_ITEM_HEADER_MAIN_SELETED,
    payload:{
        itemHeaderMainSelected: payload.itemHeaderMainSelected
    }
})

const actionSendMoneySuccess = (payload) => ({
    type:headerMainConstant.IS_SEND_MONEY_SUCCESS,
    payload:{
        isSendMoneySuccess: payload.isSendMoneySuccess,
        moneySend: payload.moneySend
    }
})

const actionSendMoney = (payload) => {
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
                    isSendMoneySuccess: true,
                    moneySend: payload.moneySend       
                }
                dispatch(actionSendMoneySuccess(payloadTmp))
            }else {
                console.log('post fail')
            }
        }).catch((err) => {
            console.log('err: ', err)
        })
    }
}

export const headerMainAction = {
    actionSetItemHeaderMainSelected,
    actionSendMoneySuccess,
    actionSendMoney
}
