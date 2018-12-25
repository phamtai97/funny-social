import React, {Component} from 'react';
import './nav-right-notification.css'
import ItemNotification from './item-notification';
import {withRouter} from "react-router-dom";
import moment from 'moment';
import helpers from '../../helpers/helpers'
import {typeActivity} from '../../config/typeActivity';

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

class NavRightNotification extends Component{
    handleClickSeeMore = () => {
        this.props.history.push('/notification');
        var payload = {
            itemHeaderMain: 'notification'
        }
        this.props.actionSetItemHeaderMainSelected(payload);
    }
    render() {
        return(
            <div className="container-nav-right-notification">
                <div className="title">
                    News
                </div>
                <div className='list-notification'>
                    {
                        listPost.map((value, index)=> {
                            return <ItemNotification key={index} value={value}/>
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
