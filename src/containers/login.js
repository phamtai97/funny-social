import Login from '../components/login-page';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {registerAction} from '../actions/registerAction';
import {loginAction} from '../actions/loginAction';

const mapStateToProps = (state) => ({
    privateKey: state.registerReducer.privateKey,
    publicKey: state.registerReducer.publicKey,
    isRegisterSuccess: state.registerReducer.isRegisterSuccess,
    isLoginSuccess: state.loginReducer.isLoginSuccess,
    isLogoutSuccess: state.loginReducer.isLogoutSuccess,
})

const mapDispatchToProps = (dispatch) => ({
    actionGenPrivatePublicKey: (payload) => dispatch(registerAction.actionGenPrivatePublicKey(payload)),
    actionSetLoginSuccess: (payload) => dispatch(loginAction.actionSetLoginSuccess(payload)),
    actionLogin: (payload) => dispatch(loginAction.actionLogin(payload)),
    actionLogout: (payload) => dispatch(loginAction.actionLogout(payload))
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(Login)
