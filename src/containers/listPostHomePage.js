import ListPostHomePage from '../components/home-page/list-post';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {homePageAction} from '../actions/homePageAction';

const mapStateToProps = (state) => ({
    listPostHomePage: state.homePageReducer.listPostHomePage,
    newPostHomePage: state.homePageReducer.newPostHomePage,
    publicKey: state.accountReducer.publicKey,
})

const mapDispatchToProps = (dispatch) => ({
    actionSetListPostHomePage: (payload) => dispatch(homePageAction.actionSetListPostHomePage(payload)),
    actionAddNewPostHomePage: (payload) => dispatch(homePageAction.actionAddNewPostHomePage(payload))
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(ListPostHomePage)
