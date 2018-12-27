import NotificationPage from '../components/notification-page';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {reactReviewAction} from '../actions/reactReviewAction.js';
import {loginAction} from '../actions/loginAction';
import {accountAction} from '../actions/accountAction';
const mapStateToProps = (state) => ({

})



const mapDispatchToProps = (dispatch) => ({
    actionSetLoginSuccess: (payload) => dispatch(loginAction.actionSetLoginSuccess(payload)),
    actionGetAccountUser: (payload) => dispatch(accountAction.actionGetAccountUser(payload)),
    actionsSetPrivatrPublicKey: (payload) => dispatch(accountAction.actionsSetPrivatrPublicKey(payload)),
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(NotificationPage)
