import React, {Component} from 'react';
import './detail-post.css';
import { Avatar, Input, Modal } from 'antd';
import ListReact from '../../containers/reactReviewDetailPost';
import ListComment from '../list-comment';
import {typeActivity} from '../../config/typeActivity'

class DetailPost extends Component{
    state={
        loading: false, 
        key: ''
    }
    
    handleComment = (e) => {
        alert(e.target.value );
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

    
    render(){
        const { visible, onCancel, onCreate, width, valueDetail } = this.props;
        const listActioner = [{"src":"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}, {"src": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}
        , {"src": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}, {"src": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}];

        return(
            <div className="container-modal">
                <Modal 
                    footer={null}
                    width={width}
                    visible={visible}                 
                    onCancel={onCancel}
                    onOk={onCreate}>

                    <div className="container-detail-post">
                        <div className="header-detail-post">
                            <div className="avatar-post">
                                <Avatar icon="user"/>
                            </div>
                            <div className='wrapper-content'>
                                {this.renderContent(valueDetail)}
                            </div>
                        </div>
                        <div className="list-react-actioner">
                            <ListReact typeReact={this.props.typeReact}>
                            </ListReact>
                            <div className="avatar-actioner">
                                {listActioner.map((item, index) => {
                                    return(
                                        <Avatar key={index} src={item.src} className="avatar-actioner-wrapper"></Avatar>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="input-comment">
                            <div className="avatar-wrapper">
                                <Avatar size="large" icon="user"></Avatar>
                            </div>
                            <div className="input-comment-wrapper">
                                <Input size="large" placeholder="Write your comment..." onPressEnter = {this.handleComment}/>
                            </div>
                        </div>
                        <div className="list-comment">
                            <ListComment></ListComment>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default DetailPost;
