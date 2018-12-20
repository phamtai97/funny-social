import NavLeftInfo from '../components/home-page/nav-left-info';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {onViewPost, onViewFollowing, onViewFollower} from '../actions/profilePageEvent';

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
)(NavLeftInfo)
