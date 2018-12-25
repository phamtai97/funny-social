import UpdateProfile from '../components/header-main/update-profile';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {updateProfileAction} from '../actions/updateProfileAction';

const mapStateToProps = (state) => ({
    isUpdateProfileSuccess: state.updateProfileReducer.isUpdateProfileSuccess,
})

const mapDispatchToProps = (dispatch) => ({
    actionUpdateProfile: (payload) => dispatch(updateProfileAction.actionUpdateProfile(payload)),
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(UpdateProfile)
