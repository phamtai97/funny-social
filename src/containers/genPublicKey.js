import GenPublicKey from '../components/login-page/genPublicKey';
import { compose } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    // privateKey: state.registerReducer.privateKey,
    // publicKey: state.registerReducer.publicKey,
    // isLoginSuccess: state.loginReducer.isLoginSuccess,
})

const mapDispatchToProps = (dispatch) => ({
    // actionGenPrivatePublicKey: (payload) => dispatch(registerAction.actionGenPrivatePublicKey(payload)),
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(GenPublicKey)
