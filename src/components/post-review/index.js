import React, { Component } from 'react';
import './post-review.css';

class PostReview extends Component {
    onViewDetailPost = () => {
        alert("onViewDetailPost");
    }


    render() {
        const avatarUrl = "https://f22-org-zp.zdn.vn/009bacc892dc798220cd.jpg";
        const name = "Võ Minh Trí";
        const time = "Nov 16";
        const content = "Hello, Vietnam!";
        const cntLove = 10;
        const cntLike = 100;
        const cntAngry = 40;
        const cntCmt = 50;
        const cntShare = 4566;

        return (
            <div className="post-review"
                onClick={() => this.onViewDetailPost()}
            >
                <div className="avatar">
                    <div className="avatar-img"
                        style={{ backgroundImage: `url(${avatarUrl})` }}
                    >
                    </div>
                </div>
                <div className="post-review-wrapper">
                    <div className="header">
                        <div className="name">
                            {name}
                        </div>
                        <div className="time">
                            {time}
                        </div>
                    </div>
                    <div className="content">
                        {content}
                    </div>
                    <div className="footer">
                        <div className="item">
                            <div className="icon love">
                            </div>
                            <div className="count">
                                {cntLove}
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon like">
                            </div>
                            <div className="count">
                                {cntLike}
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon angry">
                            </div>
                            <div className="count">
                                {cntAngry}
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon comment">
                            </div>
                            <div className="count">
                                {cntCmt}
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon share">
                            </div>
                            <div className="count">
                                {cntShare}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostReview;