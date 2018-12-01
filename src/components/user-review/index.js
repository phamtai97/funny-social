import React, { Component } from 'react';
import FollowButton from '../core/FollowButton';

import './user-review.css';

class UserReview extends Component {

    getFollowBtnClassName = (index) => {
        let res = "follow-btn ";
        if (index === 1) {
            return res + "following-text"
        }

        return res + "follow-text";
    }

    onClickFollow = () => {
        alert("Hello");
    }

    render() {
        const avatarUrl = "https://f22-org-zp.zdn.vn/009bacc892dc798220cd.jpg";
        const name = "Võ Minh Trí";

        return (
            <div className="user-review">
                <div className="avatar">
                    <div className="avatar-img"
                        style={{ backgroundImage: `url(${avatarUrl})` }}
                    >
                    </div>
                </div>
                <div className="wrapper">
                    <div className="name">
                        {name}
                    </div>

                    <FollowButton className="follow-btn"
                        onClick={this.onClickFollow}
                    />
                </div>
            </div>
        );
    };
}

export default UserReview;