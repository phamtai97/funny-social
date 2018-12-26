import App from '../app/App';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {accountAction} from '../actions/accountAction';
import {loginAction} from '../actions/loginAction';

const mapStateToProps = (state) => ({
    isRegisterSuccess: state.registerReducer.isRegisterSuccess,
    isLoginSuccess: state.loginReducer.isLoginSuccess,
    privateKey: state.registerReducer.privateKey,
})

const mapDispatchToProps = (dispatch) => ({
    actionsSetPrivatrPublicKey: (payload) => dispatch(accountAction.actionsSetPrivatrPublicKey(payload)),
    actionSetLoginSuccess: (payload) => dispatch(loginAction.actionSetLoginSuccess(payload)),
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(App)
