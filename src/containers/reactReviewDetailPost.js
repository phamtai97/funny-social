import ListReact from '../components/detail-post/list-react.js';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {reactReviewAction} from '../actions/reactReviewAction.js';

const mapStateToProps = (state) => ({
    typeReact: state.reactReviewReducer.typeReact,
})

const mapDispatchToProps = (dispatch) => ({
    actionSetTypeReact: (payload) => dispatch(reactReviewAction.actionSetTypeReact(payload)),
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(ListReact)
