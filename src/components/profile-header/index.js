import React, { Component } from 'react';
import './profile-header.css';

class ProfileHeader extends Component {

    state = {
        isOwner: true,
        selected: "posts"
    };

    getClassNameSelect = (type) => {
        let className = "navbar-item ";

        if (type === this.state.selected)
            return className + "selected";

        return className + "normal";
    }

    onClickPosts = () => {
        this.setState({
            selected: "posts"
        });
    }

    onClickFollowing = () => {
        this.setState({
            selected: "following"
        });
    }

    onClickFollowers = () => {
        this.setState({
            selected: "followers"
        });
    }

    onClickEditProfile = () => {
        alert("onClickEditProfile");
    }

    onClickFollowUser = () => {
        alert("onclickFollowUser");
    }

    render() {
        const avatarUrl = "https://f22-org-zp.zdn.vn/009bacc892dc798220cd.jpg";
        const { isOwner } = this.state;

        return (
            <div className="profile-header">
                <div className="profile-header-wrapper">
                    <div className="profile-info">
                        <div className="avatar">
                            <div className="avatar-img"
                                style={{ backgroundImage: `url(${avatarUrl})` }}
                            >
                            </div>
                        </div>
                        <div className="name">
                            Võ Minh Trí
                        </div>
                    </div>
                    <div className="profile-navbar">
                        <div className="navbar-container">
                            <div className={this.getClassNameSelect("posts")}
                                onClick={() => this.onClickPosts()}
                            >
                                <div className="title">
                                    Posts
                                </div>
                                <div className="data-count">
                                    10
                                </div>
                            </div>
                            <div className={this.getClassNameSelect("following")}
                                onClick={() => this.onClickFollowing()}
                            >
                                <div className="title">
                                    Following
                                </div>
                                <div className="data-count">
                                    10
                                </div>
                            </div>
                            <div className={this.getClassNameSelect("followers")}
                                onClick={() => this.onClickFollowers()}
                            >
                                <div className="title">
                                    Followers
                                </div>
                                <div className="data-count">
                                    10
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="profile-tools">
                        <div className="tools-container">
                            {
                                isOwner === false ?
                                    <div className="item"
                                        onClick={() => this.onClickFollowUser()}
                                    >
                                        Follow
                                    </div>
                                    :
                                    <div className="item"
                                        onClick={() => this.onClickEditProfile()}
                                    >
                                        Edit profile
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileHeader;