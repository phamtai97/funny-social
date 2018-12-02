import ListReactActioner from '../components/list-react-actioner';
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
)(ListReactActioner)
