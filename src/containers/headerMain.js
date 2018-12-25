import HeaderMain from '../components/header-main';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {headerMainAction} from '../actions/headerMainAction';
import {loginAction} from '../actions/loginAction';
const mapStateToProps = (state) => ({
    itemHeaderMain: state.headerMainReducer.itemHeaderMain,
    isLoginSuccess: state.loginReducer.isLoginSuccess,
    isLogoutSuccess: state.loginReducer.isLogoutSuccess,
    privateKey: state.registerReducer.privateKey,

})

const mapDispatchToProps = (dispatch) => ({
    actionSetItemHeaderMainSelected: (payload) => dispatch(headerMainAction.actionSetItemHeaderMainSelected(payload)),
    actionLogout: (payload) => dispatch(loginAction.actionLogout(payload))
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(HeaderMain)
