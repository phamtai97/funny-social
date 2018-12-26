import InputStatus from '../components/home-page/inputStatus';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {homePageAction} from '../actions/homePageAction';

const mapStateToProps = (state) => ({
    newPostHomePage: state.homePageReducer.newPostHomePage,
    privateKey: state.accountReducer.privateKey,    
})

const mapDispatchToProps = (dispatch) => ({
    actionAddNewPostHomePage: (payload) => dispatch(homePageAction.actionAddNewPostHomePage(payload)),
    actionPushNewPostHomePage: (payload) => dispatch(homePageAction.actionPushNewPostHomePage(payload))
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(InputStatus)
