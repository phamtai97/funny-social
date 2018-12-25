import HeaderMain from '../components/header-main';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {headerMainAction} from '../actions/headerMainAction';
import {loginAction} from '../actions/loginAction';
const mapStateToProps = (state) => ({
    itemHeaderMainSelected: state.headerMainReducer.itemHeaderMainSelected,
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
