import Register from '../components/login-page/register';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {registerAction} from '../actions/registerAction';
import {accountAction} from '../actions/accountAction';

const mapStateToProps = (state) => ({
    privateKey: state.accountReducer.privateKey,
    publicKey: state.accountReducer.publicKey,
    isRegisterSuccess: state.registerReducer.isRegisterSuccess
})

const mapDispatchToProps = (dispatch) => ({
    // actionGenPrivatePublicKey: (payload) => dispatch(registerAction.actionGenPrivatePublicKey(payload)),
    actionsSetPrivatrPublicKey: (payload) => dispatch(accountAction.actionsSetPrivatrPublicKey(payload)),
    actionSetRegisterSuccess: (payload) => dispatch(registerAction.actionSetRegisterSuccess(payload)),
    actionRegister: (payload) => dispatch(registerAction.actionRegister(payload))
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(Register)
