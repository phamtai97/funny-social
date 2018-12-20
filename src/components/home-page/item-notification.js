import React, {Component} from 'react';
import './item-notification.css';
import moment from 'moment';
import {Avatar} from 'antd';
import helpers from '../../helpers/helpers';
import DetailPost from '../../components/detail-post';

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

    render(){
        const timeCreatePost = moment().format(helpers.FORMAT_DATE);
        const userNameAction = 'Pham Tinh Hong Tan Tai AJ Pham';
        const contentAction = "Da comment bai viet nay vi qua"
        return(
            <div>
                <DetailPost 
                    width={helpers.WIDTH_DETAIL_POST}
                    visible={this.state.visibleDetailPost}
                    onCancel={this.handleCancelDetailPost}
                    onCreate={this.handleOkDetailPost}
                >
                </DetailPost>

                <div className='container-item-notification' onClick={() => this.onViewDetailPost()}>
                    <div className='wrapper-avatar'>
                        <Avatar size={65} icon="user" />
                    </div>
                    <div className='container-name-content'>
                        <div className='user-name'>
                            {userNameAction}
                        </div>
                        <div className='content-action'>
                            {contentAction}
                        </div>
                        <div className='time-action'>
                            {timeCreatePost}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemNotification;
