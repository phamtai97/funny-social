import React, {Component} from 'react';
import PostHomeReview from '../post-home-review';
import './list-post.css';
import moment from 'moment';
import helpers from '../../helpers/helpers'
import {typeActivity} from '../../config/typeActivity';

var listPost = [];

const objectPost = {
    avatarUrl: "https://f22-org-zp.zdn.vn/009bacc892dc798220cd.jpg",
    interactPerson: 'Vo Minh Tri',
    time: moment().format(helpers.FORMAT_DATE),
    type: typeActivity.POST,
    content: 'Hello viet nam',
    cntLove: 10,
    cntLike: 100,
    cntAngry: 40,
    cntCmt: 50,
    cntShare: 4566
}

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
    content: "abcd",
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

const objectUpdate = {
    avatarUrl: "https://f22-org-zp.zdn.vn/009bacc892dc798220cd.jpg",
    interactPerson: 'Vo Minh Tri',
    interactedPerson: 'Tan Tai',
    time: moment().format(helpers.FORMAT_DATE),
    type: typeActivity.UPDATE_ACCOUNT,
    content: "abc",
    cntLove: 10,
    cntLike: 100,
    cntAngry: 40,
    cntCmt: 50,
    cntShare: 4566
}

const objectUpdateName = {
    avatarUrl: "https://f22-org-zp.zdn.vn/009bacc892dc798220cd.jpg",
    interactPerson: 'Vo Minh Tri',
    interactedPerson: 'Vo Minh Tri Oc Cho',
    time: moment().format(helpers.FORMAT_DATE),
    type: typeActivity.UPDATE_NAME,
    content: "abc",
    cntLove: 10,
    cntLike: 100,
    cntAngry: 40,
    cntCmt: 50,
    cntShare: 4566
}

const objectUpdateAvatar = {
    avatarUrl: "https://f22-org-zp.zdn.vn/009bacc892dc798220cd.jpg",
    interactPerson: 'Vo Minh Tri',
    interactedPerson: 'Vo Minh Tri Oc Cho',
    time: moment().format(helpers.FORMAT_DATE),
    type: typeActivity.UPDATE_AVATAR,
    content: "http://sohanews.sohacdn.com/2017/photo-1-1491982254229.jpg",
    cntLove: 10,
    cntLike: 100,
    cntAngry: 40,
    cntCmt: 50,
    cntShare: 4566
}

const objectUpdateEmail = {
    avatarUrl: "https://f22-org-zp.zdn.vn/009bacc892dc798220cd.jpg",
    interactPerson: 'Vo Minh Tri',
    interactedPerson: 'Vo Minh Tri Oc Cho',
    time: moment().format(helpers.FORMAT_DATE),
    type: typeActivity.UPDATE_EMAIL,
    content: "septantai@gmai.com",
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
listPost.push(objectPost);
listPost.push(objectSendMoney);
listPost.push(objectComment);
listPost.push(objectReact);
listPost.push(objectUpdate);
listPost.push(objectUpdateName);
listPost.push(objectUpdateAvatar);
listPost.push(objectUpdateEmail);
listPost.push(objectFollowing);
listPost.push(objectUnFollow);

class ListPost extends Component {
    render() {
        return (
            <div className="list-post">
                <div className="list-post-container">
                    {
                        listPost.map((value, index)=> {
                            return <PostHomeReview key={index} value={value}/>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ListPost;
