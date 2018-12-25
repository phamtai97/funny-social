import React, { Component } from 'react';
import DetailPost from '../../components/detail-post';
import helpers from '../../helpers/helpers';
import './post-review.css';
import {typeActivity} from '../../config/typeActivity'

class PostHomeReview extends Component {
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

    renderContent = (value) => {
        switch(value.type){
            case typeActivity.POST:
                return(
                    <div>
                        <div className="header">
                            <div className="name">
                                {value.interactPerson}
                            </div>
                        </div>
                        <div className="content">
                            {value.content}
                        </div>
                    </div>
                )
                
            case typeActivity.PAYMENT:
                return (
                    <div>
                        <span style={{color: "#1890ff"}} className='name'>{value.interactPerson}</span>
                        <span className='content'>credit transfer </span>
                        <span style={{color: "#1890ff"}} className='name'>{value.interactedPerson}</span>
                        <span className="content">{value.content}</span>
                    </div>
                )
            case typeActivity.REACTION:
                return (
                    <div>
                        <span style={{color: "#1890ff"}} className='name'>{value.interactPerson}</span>
                        <span className='content'>reacted </span>
                        <span style={{color: "#1890ff"}} className='name'>{value.interactedPerson}</span>
                    </div>
                )
            case typeActivity.UPDATE_ACCOUNT:
                return (
                    <div>
                        <span style={{color: "#1890ff"}} className='name'>{value.interactPerson}</span>
                        <span className='content'>updated account </span>
                    </div>
                )
            case typeActivity.UPDATE_NAME:
                return (
                    <div>
                        <span style={{color: "#1890ff"}} className='name'>{value.interactPerson}</span>
                        <span className='content'>updated name to</span>
                        <span style={{color: "#1890ff"}} className='name'>{value.interactedPerson}</span>
                    </div>
                )
            case typeActivity.UPDATE_AVATAR:
                return (
                    <div>
                        <span style={{color: "#1890ff"}} className='name'>{value.interactPerson}</span>
                        <span className='content'>updated avatar to </span>
                        <div className='update-avatar'>
                            <img src={value.content} height="40%" width="40%" alt='avatar'/>
                        </div>
                    </div>
                )
            case typeActivity.UPDATE_EMAIL:
                return (
                    <div>
                        <span style={{color: "#1890ff"}} className='name'>{value.interactPerson}</span>
                        <span className='content'>updated email to </span>
                        <span className="content-email">{value.content}</span>
                    </div>
                ) 
            case typeActivity.FOLLOWINGS:
                return (
                    <div>
                        <span style={{color: "#1890ff"}} className='name'>{value.interactPerson}</span>
                        <span className='content'>followings </span>
                        <span style={{color: "#1890ff"}} className='name'>{value.interactedPerson}</span>
                    </div>
                )
            case typeActivity.UNFOLLOW:
                return (
                    <div>
                        <span style={{color: "#1890ff"}} className='name'>{value.interactPerson}</span>
                        <span className='content'>unfollows </span>
                        <span style={{color: "#1890ff"}} className='name'>{value.interactedPerson}</span>
                    </div>
                )
            case typeActivity.COMMENT:
                return (
                    <div>
                        <span style={{color: "#1890ff"}} className='name'>{value.interactPerson}</span>
                        <span className='content'> comment </span>
                        <span style={{color: "#1890ff"}} className='name'>{value.interactedPerson}</span>
                        <span className="content">{value.content}</span>
                    </div>
                )
            default:
        }
    }

    render() {
        const {value} = this.props;
        return (
            <div className="container-post-review">
                <DetailPost 
                    valueDetail={value}
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
                            style={{ backgroundImage: `url(${value.avatarUrl})` }}
                        >
                        </div>
                    </div>
                    <div className="post-review-wrapper">
                        <div className='wrapper-content'>
                            {this.renderContent(value)}
                        </div>
                        <div className='time'>
                            {value.time}
                        </div>
                        <div className="footer">
                            <div className="item">
                                <div className="icon love">
                                </div>
                                <div className="count">
                                    {value.cntLove}
                                </div>
                            </div>
                            <div className="item">
                                <div className="icon like">
                                </div>
                                <div className="count">
                                    {value.cntLike}
                                </div>
                            </div>
                            <div className="item">
                                <div className="icon angry">
                                </div>
                                <div className="count">
                                    {value.cntAngry}
                                </div>
                            </div>
                            <div className="item">
                                <div className="icon comment">
                                </div>
                                <div className="count">
                                    {value.cntCmt}
                                </div>
                            </div>
                            <div className="item">
                                <div className="icon share">
                                </div>
                                <div className="count">
                                    {value.cntShare}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default PostHomeReview;
