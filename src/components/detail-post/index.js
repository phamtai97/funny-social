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

    
    
    render(){
        const { visible, onCancel, onCreate, width, valueDetail, data } = this.props;
        console.log('data:',this.props.data);

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
                                {/* {this.renderContent(valueDetail)} */}
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
