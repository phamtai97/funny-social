import AccountBox from '../components/home-page/account-box';
import { compose } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    privateKey: state.accountReducer.privateKey,
    publicKey: state.accountReducer.publicKey,
    isRegisterSuccess: state.registerReducer.isRegisterSuccess,
    isLoginSuccess: state.loginReducer.isLoginSuccess,
})

const mapDispatchToProps = (dispatch) => ({
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(AccountBox)
