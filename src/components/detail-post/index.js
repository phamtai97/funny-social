import React, {Component} from 'react';
import { Modal} from 'antd';
import './detail-post.css';
import { Avatar, Button } from 'antd';
import moment from 'moment';
import helpers from '../../helpers/helpers.js';
class DetailPost extends Component{
    state={
        loading: false, 
    }

    render(){
        const { visible, onCancel, onCreate, width } = this.props;
        const nameWritePost = "Pham Tai";
        const gamil = "abcxyz@gmail.com";
        const content = "11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
        const timeCreatePost = moment().format(helpers.FORMAT_DATE);
        
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
                                    {gamil}
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
                        <div className="item-react">

                        </div>
                        <div className="react-action"></div>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default DetailPost;
