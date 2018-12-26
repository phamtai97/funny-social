import React, { Component } from 'react';
import './profile-header.css';

class ProfileHeader extends Component {

    state = {
        isOwner: true,
        selected: "posts"
    };

    getClassNameSelect = (type) => {
        let className = "navbar-item ";
        let selected = this.props.view;
        if(selected === "PROFILE_PAGE_VIEW_POST"){
            selected = "posts";
        }else if(selected === "PROFILE_PAGE_VIEW_FOLLOWING"){
            selected = "following";
        }else{
            selected = "followers";
        }

        if (type === selected)
            return className + "selected";

        return className + "normal";
    }

    onClickPosts = () => {
        this.setState({
            selected: "posts"
        });

        this.props.onViewPost();
    }

    onClickFollowing = () => {
        this.setState({
            selected: "following"
        });
        this.props.onViewFollowing();
    }

    onClickFollowers = () => {
        this.setState({
            selected: "followers"
        });
        this.props.onViewFollower();
    }

    onClickEditProfile = () => {
        alert("onClickEditProfile");
    }

    onClickFollowUser = () => {
        alert("onclickFollowUser");
    }

    render() {
        const { isOwner } = this.state;
        const {numberPostUser, numberFollowersUser, numberFollowingUser} = this.props;
        return (
            <div className="profile-header">
                <div className="profile-header-wrapper">
                    <div className="profile-navbar">
                        <div className="navbar-container">
                            <div className={this.getClassNameSelect("posts")}
                                onClick={() => this.onClickPosts()}
                            >
                                <div className="title">
                                    Posts
                                </div>
                                <div className="data-count">
                                    {numberPostUser}
                                </div>
                            </div>
                            <div className={this.getClassNameSelect("following")}
                                onClick={() => this.onClickFollowing()}
                            >
                                <div className="title">
                                    Following
                                </div>
                                <div className="data-count">
                                    {numberFollowingUser}
                                </div>
                            </div>
                            <div className={this.getClassNameSelect("followers")}
                                onClick={() => this.onClickFollowers()}
                            >
                                <div className="title">
                                    Followers
                                </div>
                                <div className="data-count">
                                    {numberFollowersUser}
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
