import React, { Component } from 'react';
import ProfileHeader from '../profile-header';
import ListPost from '../list-post';
import ListFollowing from '../list-following';
import './profile-page.css';
import ListFollower from '../list-follower';
import { VIEW_POST, VIEW_FOLLOWING, VIEW_FOLLOWER } from '../../constants/profilePageConstant';
import AccountBox from '../../containers/accountBox';
import UserReview from '../user-review';

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
        let a = Array(5).fill(0);
        let cnt = 0;

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
                    <div className='container-nav'>
                        <div className="nav-left-profile-page">
                            <div className="container-account-box">
                                <div className="title">
                                    Account
                                </div>
                                <AccountBox></AccountBox>
                            </div>
                        </div>
                        <div className="content-container">
                            {this.getContent()}
                        </div>
                        <div className="nav-right-profile-page">
                            <div className="container-follower-box">
                                <div className="title">
                                    You can follow
                                </div>
                                <div className="list-user-follow">
                                    {
                                        a.map(()=> {
                                            cnt++;
                                            return <UserReview key={cnt}/>
                                        })
                                    }
                                </div>
                                <div className="footer"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfilePage;
