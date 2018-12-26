import ProfilePage from '../components/profile-page';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {loginAction} from '../actions/loginAction';
import {accountAction} from '../actions/accountAction';

import {onViewPost, onViewFollowing, onViewFollower, actionSetProfileUser, actionGetAccountProfileUser, 
    actionGetListPostProfilePage, actionSetPublicKeyProfileUser, actionGetListFollowingProfilePage, actionGetListFollowerProfilePage} from '../actions/profilePageEventAction';


const mapStateToProps = state => ({
    view: state.profilePageReducer.view,
    publicKeyUser: state.profilePageReducer.publicKeyUser,
    userNameUser: state.profilePageReducer.userNameUser,
    emailUser: state.profilePageReducer.emailUser,
    avatarUser: state.profilePageReducer.avatarUser,
    balanceUser: state.profilePageReducer.balanceUser,
    oxygenUser: state.profilePageReducer.oxygenUser,
    numberFollowingUser: state.profilePageReducer.numberFollowingUser,
    numberFollowersUser: state.profilePageReducer.numberFollowersUser,
    numberPostUser: state.profilePageReducer.numberPostUser,
    listPostProfilePage: state.profilePageReducer.listPostProfilePage,
    listFollowingProfilePage: state.profilePageReducer.listFollowingProfilePage,
    listFollowerProfilePage: state.profilePageReducer.listFollowerProfilePage,
});

const mapDispatchToProps = dispatch => ({
    onViewPost: () => dispatch(onViewPost()),
    onViewFollowing: () => dispatch(onViewFollowing()),
    onViewFollower: () => dispatch(onViewFollower()),
    actionSetProfileUser: (payload) => dispatch(actionSetProfileUser(payload)),
    actionSetPublicKeyProfileUser: (payload) => dispatch(actionSetPublicKeyProfileUser(payload)),
    actionGetAccountProfileUser: (payload) => dispatch(actionGetAccountProfileUser(payload)),
    actionGetListPostProfilePage: (payload) => dispatch(actionGetListPostProfilePage(payload)),
    actionGetListFollowingProfilePage: (payload) => dispatch(actionGetListFollowingProfilePage(payload)),
    actionGetListFollowerProfilePage: (payload) => dispatch(actionGetListFollowerProfilePage(payload)),
    actionSetLoginSuccess: (payload) => dispatch(loginAction.actionSetLoginSuccess(payload)),
    actionGetAccountUser: (payload) => dispatch(accountAction.actionGetAccountUser(payload)),
    actionsSetPrivatrPublicKey: (payload) => dispatch(accountAction.actionsSetPrivatrPublicKey(payload)),

})

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(ProfilePage)
