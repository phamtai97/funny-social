import Register from '../components/login-page/register';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {registerAction} from '../actions/registerAction';

const mapStateToProps = (state) => ({
    privateKey: state.registerReducer.privateKey,
    publicKey: state.registerReducer.publicKey,
    isRegisterSuccess: state.registerReducer.isRegisterSuccess
})

const mapDispatchToProps = (dispatch) => ({
    actionGenPrivatePublicKey: (payload) => dispatch(registerAction.actionGenPrivatePublicKey(payload)),
    actionSetRegisterSuccess: (payload) => dispatch(registerAction.actionSetRegisterSuccess(payload)),
    actionRegister: (payload) => dispatch(registerAction.actionRegister(payload))
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(Register)
