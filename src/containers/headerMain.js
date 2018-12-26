import HeaderMain from '../components/header-main';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {headerMainAction} from '../actions/headerMainAction';
import {loginAction} from '../actions/loginAction';
const mapStateToProps = (state) => ({
    itemHeaderMainSelected: state.headerMainReducer.itemHeaderMainSelected,
    isLoginSuccess: state.loginReducer.isLoginSuccess,
    isLogoutSuccess: state.loginReducer.isLogoutSuccess,
    privateKey: state.accountReducer.privateKey,
    publicKey: state.accountReducer.publicKey,
    moneySend: state.headerMainReducer.moneySend,
    isSendMoneySuccess: state.headerMainReducer.isSendMoneySuccess,
    isUpdateNameSuccess: state.headerMainReducer.isUpdateNameSuccess,
    isUpdateEmailSuccess: state.headerMainReducer.isUpdateEmailSuccess,
    isUpdateAvatarSuccess: state.headerMainReducer.isUpdateAvatarSuccess,
})

const mapDispatchToProps = (dispatch) => ({
    actionSetItemHeaderMainSelected: (payload) => dispatch(headerMainAction.actionSetItemHeaderMainSelected(payload)),
    actionLogout: (payload) => dispatch(loginAction.actionLogout(payload)),
    actionSendMoney: (payload) => dispatch(headerMainAction.actionSendMoney(payload)),
    actionSendMoneySuccess: (payload) => dispatch(headerMainAction.actionSendMoneySuccess(payload)),
    actionUpdateName: (payload) => dispatch(headerMainAction.actionUpdateName(payload)),
    actionUpdateNameSuccess: (payload) => dispatch(headerMainAction.actionUpdateNameSuccess(payload)),
    actionUpdateEmail: (payload) => dispatch(headerMainAction.actionUpdateEmail(payload)),
    actionUpdateEmailSuccess: (payload) => dispatch(headerMainAction.actionUpdateEmailSuccess(payload)),
    actionUpdateAvatar: (payload) => dispatch(headerMainAction.actionUpdateAvatar(payload)),
    actionUpdateAvatarSuccess: (payload) => dispatch(headerMainAction.actionUpdateAvatarSuccess(payload)),
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(HeaderMain)
