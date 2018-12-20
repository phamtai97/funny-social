import HeaderMain from '../components/header-main';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {headerMainAction} from '../actions/headerMainAction';

const mapStateToProps = (state) => ({
    itemHeaderMain: state.headerMainReducer.itemHeaderMain,
})

const mapDispatchToProps = (dispatch) => ({
    actionSetItemHeaderMainSelected: (payload) => dispatch(headerMainAction.actionSetItemHeaderMainSelected(payload)),
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(HeaderMain)
