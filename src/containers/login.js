import Login from '../components/login-page';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {accountAction} from '../actions/accountAction';
import {loginAction} from '../actions/loginAction';

const mapStateToProps = (state) => ({
    privateKey: state.accountReducer.privateKey,
    publicKey: state.accountReducer.publicKey,
    isRegisterSuccess: state.registerReducer.isRegisterSuccess,
    isLoginSuccess: state.loginReducer.isLoginSuccess,
    isLogoutSuccess: state.loginReducer.isLogoutSuccess,
})

const mapDispatchToProps = (dispatch) => ({
    // actionGenPrivatePublicKey: (payload) => dispatch(registerAction.actionGenPrivatePublicKey(payload)),
    actionsSetPrivatrPublicKey: (payload) => dispatch(accountAction.actionsSetPrivatrPublicKey(payload)),
    actionSetLoginSuccess: (payload) => dispatch(loginAction.actionSetLoginSuccess(payload)),
    actionLogin: (payload) => dispatch(loginAction.actionLogin(payload)),
    actionLogout: (payload) => dispatch(loginAction.actionLogout(payload))
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(Login)
