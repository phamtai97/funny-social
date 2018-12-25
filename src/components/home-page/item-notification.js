import React, {Component} from 'react';
import './item-notification.css';
import '../post-home-review/post-review.css';
import {Avatar} from 'antd';
import helpers from '../../helpers/helpers';
import DetailPost from '../../components/detail-post';
import {typeActivity} from '../../config/typeActivity';

class ItemNotification extends Component {
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

    render(){
        const {value} = this.props;
        return(
            <div>
                <DetailPost 
                    width={helpers.WIDTH_DETAIL_POST}
                    visible={this.state.visibleDetailPost}
                    onCancel={this.handleCancelDetailPost}
                    onCreate={this.handleOkDetailPost}
                    valueDetail={value}                    
                >
                </DetailPost>

                <div className='container-item-notification' onClick={() => this.onViewDetailPost()}>
                    <div className='wrapper-avatar'>
                        <Avatar size={65} icon="user" />
                    </div>
                    <div className='container-name-content'>
                        {this.renderContent(value)}
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemNotification;
