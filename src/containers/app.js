import App from '../app/App';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {registerAction} from '../actions/registerAction';
import {loginAction} from '../actions/loginAction';

const mapStateToProps = (state) => ({
    isRegisterSuccess: state.registerReducer.isRegisterSuccess,
    isLoginSuccess: state.loginReducer.isLoginSuccess,
})

const mapDispatchToProps = (dispatch) => ({
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(App)
