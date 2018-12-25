import App from '../app/App';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {registerAction} from '../actions/registerAction';
import {loginAction} from '../actions/loginAction';

const mapStateToProps = (state) => ({
    isRegisterSuccess: state.registerReducer.isRegisterSuccess,
    isLoginSuccess: state.loginReducer.isLoginSuccess,
    privateKey: state.registerReducer.privateKey,
})

const mapDispatchToProps = (dispatch) => ({
    actionGenPrivatePublicKey: (payload) => dispatch(registerAction.actionGenPrivatePublicKey(payload)),
    actionSetLoginSuccess: (payload) => dispatch(loginAction.actionSetLoginSuccess(payload)),
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(App)
