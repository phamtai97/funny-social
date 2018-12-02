import React, { Component } from 'react';
import ProfileHeader from '../profile-header';
import ListPost from '../list-post';
import ListFollowing from '../list-following';
import './profile-page.css';
import ListFollower from '../list-follower';
import { VIEW_POST, VIEW_FOLLOWING, VIEW_FOLLOWER } from '../../constants/profile-page-const';

class ProfilePage extends Component {


    getContent = () => {
        const { view } = this.props;

        switch (view) {
            case VIEW_POST:
                return <ListPost></ListPost>
            case VIEW_FOLLOWING:
                return <ListFollowing></ListFollowing>
            case VIEW_FOLLOWER:
                return <ListFollower></ListFollower>
            default:
                return <ListPost></ListPost>
        }
    }

    render() {
        const { onViewPost, onViewFollowing, onViewFollower } = this.props;

        return (
            <div className="profile-page">
                <ProfileHeader
                    onViewPost={onViewPost}
                    onViewFollowing={onViewFollowing}
                    onViewFollower={onViewFollower}
                />
                <div className="content-container">
                    {this.getContent()}
                </div>
            </div>
        )
    }
}

export default ProfilePage;
