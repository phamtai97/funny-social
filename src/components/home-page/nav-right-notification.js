
import React, { Component } from 'react';
import './nav-right-notification.css'
import ItemNotification from './item-notification';
import { withRouter } from "react-router-dom";
import moment from 'moment';
import helpers from '../../helpers/helpers'
import { typeActivity } from '../../config/typeActivity';
 
var listPost = [];
 
const objectSendMoney = {
    avatarUrl: "https://f22-org-zp.zdn.vn/009bacc892dc798220cd.jpg",
    interactPerson: 'Vo Minh Tri',
    interactedPerson: 'Tan Tai',
    time: moment().format(helpers.FORMAT_DATE),
    type: typeActivity.PAYMENT,
    content: 10000,
    cntLove: 10,
    cntLike: 100,
    cntAngry: 40,
    cntCmt: 50,
    cntShare: 4566
}
 
 
const objectComment = {
    avatarUrl: "https://f22-org-zp.zdn.vn/009bacc892dc798220cd.jpg",
    interactPerson: 'Vo Minh Tri',
    interactedPerson: 'Tan Tai',
    time: moment().format(helpers.FORMAT_DATE),
    type: typeActivity.COMMENT,
    content: "Hello hot girl",
    cntLove: 10,
    cntLike: 100,
    cntAngry: 40,
    cntCmt: 50,
    cntShare: 4566
}
 
const objectReact = {
    avatarUrl: "https://f22-org-zp.zdn.vn/009bacc892dc798220cd.jpg",
    interactPerson: 'Vo Minh Tri',
    interactedPerson: 'Tan Tai',
    time: moment().format(helpers.FORMAT_DATE),
    type: typeActivity.REACTION,
    content: "abcd",
    cntLove: 10,
    cntLike: 100,
    cntAngry: 40,
    cntCmt: 50,
    cntShare: 4566
}
 
const objectFollowing = {
    avatarUrl: "https://f22-org-zp.zdn.vn/009bacc892dc798220cd.jpg",
    interactPerson: 'Vo Minh Tri',
    interactedPerson: 'Tan Tai',
    time: moment().format(helpers.FORMAT_DATE),
    type: typeActivity.FOLLOWINGS,
    content: "",
    cntLove: 10,
    cntLike: 100,
    cntAngry: 40,
    cntCmt: 50,
    cntShare: 4566
}
 
const objectUnFollow = {
    avatarUrl: "https://f22-org-zp.zdn.vn/009bacc892dc798220cd.jpg",
    interactPerson: 'Vo Minh Tri',
    interactedPerson: 'Tan Tai',
    time: moment().format(helpers.FORMAT_DATE),
    type: typeActivity.UNFOLLOW,
    content: "",
    cntLove: 10,
    cntLike: 100,
    cntAngry: 40,
    cntCmt: 50,
    cntShare: 4566
}
 
listPost.push(objectSendMoney);
listPost.push(objectComment);
listPost.push(objectReact);
listPost.push(objectFollowing);
listPost.push(objectUnFollow);
 
const value1 = {
    _id: "376cb02a97d85e00a0212c026bc307d95ad49300b5a3e20e16d9cdc3ddf22edf",
    type: "interact",
    owner: "GAPH3WMXXZRDQE36QQJWZFP5HSJ3A5MGXMTK3SBTYJEIHVJKCZHXGMQV",
    source: "GBOVRS6DWD56GOIEYHFFYRLUBCV3JPQXRZ7YY4B34IHK6KWO4MQXGNZF",
    dest: "GAPH3WMXXZRDQE36QQJWZFP5HSJ3A5MGXMTK3SBTYJEIHVJKCZHXGMQV",
    time: 1545578064,
    params: "941754A45FD4A8BC9108950954F787DAEF536BF69EACA8092A505B0D96CE677B",
    data: 19
}
 
class NavRightNotification extends Component {
    handleClickSeeMore = () => {
        this.props.history.push('/notification');
        var payload = {
            itemHeaderMain: 'notification'
        }
        this.props.actionSetItemHeaderMainSelected(payload);
    }
    render() {
        return (
            <div className="container-nav-right-notification">
                <div className="title">
                    News
                </div>
                <div className='list-notification'>
                    {
                        listPost.map((value, index) => {
                        return <ItemNotification key={index}  value={value1} key={index}/>
                        })
                    }
                </div>
                <div className='footer' onClick={this.handleClickSeeMore}>
                    See more
                </div>
            </div>
        )
    }
}
 
export default withRouter(NavRightNotification);
