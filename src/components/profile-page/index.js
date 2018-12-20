import React, { Component } from 'react';
import ProfileHeader from '../profile-header';
import ListPost from '../list-post';
import ListFollowing from '../list-following';
import './profile-page.css';
import ListFollower from '../list-follower';
import { VIEW_POST, VIEW_FOLLOWING, VIEW_FOLLOWER } from '../../constants/profilePageConstant';

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
        const { onViewPost, onViewFollowing, onViewFollower, view} = this.props;
        const avatarUrl = "https://f22-org-zp.zdn.vn/009bacc892dc798220cd.jpg";
        const name = "Võ Minh Trí";
        
        return (
            <div className="profile-page">
                <div className="container-profile-page">
                    <div className="background-user">
                        <div className="wrapper-background-user">
                            <div className="avatar">
                                <div className="avatar-img" style={{ backgroundImage: `url(${avatarUrl})` }}></div>
                            </div>
                            <div className="profile-info">
                                
                                <div className="name">
                                    {name}
                                </div>

                            </div>
                        </div>
                    </div>
                    <ProfileHeader
                        onViewPost={onViewPost}
                        onViewFollowing={onViewFollowing}
                        onViewFollower={onViewFollower}
                        view={view}
                    />
                    <div className="content-container">
                        {this.getContent()}
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfilePage;
