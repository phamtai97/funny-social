import AccountBox from '../components/home-page/account-box';
import { compose } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    privateKey: state.registerReducer.privateKey,
    publicKey: state.registerReducer.publicKey,
    isRegisterSuccess: state.registerReducer.isRegisterSuccess,
    isLoginSuccess: state.loginReducer.isLoginSuccess,
})

const mapDispatchToProps = (dispatch) => ({
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(AccountBox)
