import ProfilePage from '../components/profile-page';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {onViewPost, onViewFollowing, onViewFollower} from '../actions/profile-page-event';

const mapStateToProps = state => ({
    view: state.profilePage.view
});

const mapDispatchToProps = dispatch => ({
    onViewPost: () => dispatch(onViewPost()),
    onViewFollowing: () => dispatch(onViewFollowing()),
    onViewFollower: () => dispatch(onViewFollower())
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(ProfilePage)