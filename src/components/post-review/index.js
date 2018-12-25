import React, { Component } from 'react';
import DetailPost from '../../components/detail-post';
import helpers from '../../helpers/helpers';
import './post-review.css';
import '../../config/typeActivity'

class PostReview extends Component {
    state = {
        visibleDetailPost:false,
    }

    onViewDetailPost = () => {
        this.showModalDetailPost();
    }

    //handle click in detal post
    handleCancelDetailPost = () => {
        this.setState({ visibleDetailPost: false });
    }

    handleOkDetailPost = () => {
        this.setState({ visibleDetailPost: false });        
    }

    showModalDetailPost = () => {
        this.setState({ visibleDetailPost: true });
    }

    renderContent = (type) => {
        // if(type === '')
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
            <div className="container-post-review">
                <DetailPost 
                    width={helpers.WIDTH_DETAIL_POST}
                    visible={this.state.visibleDetailPost}
                    onCancel={this.handleCancelDetailPost}
                    onCreate={this.handleOkDetailPost}
                >
                </DetailPost>


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

            </div>
        );
    }
}

export default PostReview;
