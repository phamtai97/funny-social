import HomePage from '../components/home-page';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {homePageAction} from '../actions/homePageAction';

const mapStateToProps = (state) => ({
    listPostHomePage: state.homePageReducer.listPostHomePage,
    newPostHomePage: state.homePageReducer.newPostHomePage
})

const mapDispatchToProps = (dispatch) => ({
    actionSetListPostHomePage: (payload) => dispatch(homePageAction.actionSetListPostHomePage(payload)),
    actionAddNewPostHomePage: (payload) => dispatch(homePageAction.actionAddNewPostHomePage(payload))
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(HomePage)
