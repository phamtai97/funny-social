import ListReact from '../components/react-review/list-react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {reactReviewAction} from '../actions/react-review-action.js';

const mapStateToProps = (state) => ({
    typeReact: state.reactReviewReducer.typeReact,
})

const mapDispatchToProps = (dispatch) => ({
    actionSetTypeReact: (payload) => dispatch(reactReviewAction.actionSetTypeReact(payload)),
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(ListReact)
