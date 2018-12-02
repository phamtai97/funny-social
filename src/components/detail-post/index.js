import React, {Component} from 'react';
import './detail-post.css';
import { Avatar, Button, Input, Modal } from 'antd';
import moment from 'moment';
import helpers from '../../helpers/helpers.js';
import ListReact from '../../containers/ReactReviewDetailPost';
import ListComment from '../list-comment';

class DetailPost extends Component{
    state={
        loading: false, 
        key: ''
    }
    
    handleComment = (e) => {
        alert(e.target.value );
    }

    render(){
        const { visible, onCancel, onCreate, width } = this.props;
        const nameWritePost = "Pham Tai";
        const gmail = "abcxyz@gmail.com";
        const content = "11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
        const timeCreatePost = moment().format(helpers.FORMAT_DATE);
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
                            <div className="info-post">
                                <div className="name-post">
                                    {nameWritePost}
                                </div>
                                <div className="gmail-post">
                                    {gmail}
                                </div>
                            </div>
                            <div className="follow-button">
                                <Button type="primary">Follow</Button>
                            </div>
                        </div>
                        <div className="content-post">
                            {content}
                        </div>
                        <div className="time-create-pos">
                            {timeCreatePost}
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
