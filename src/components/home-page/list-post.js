import React, {Component} from 'react';
import PostHomeReview from '../../components/post-home-review';
import {typeActivity} from '../../config/typeActivity';
import './list-post.css';
import moment from 'moment';
import helpers from '../../helpers/helpers';
import axios from 'axios';

var listPost = [];

const objectPost = {
    avatarUrl: "https://f22-org-zp.zdn.vn/009bacc892dc798220cd.jpg",
    interactPerson: 'Vo Minh Tri',
    time: moment().format(helpers.FORMAT_DATE),
    type: typeActivity.POST,
    content: 'Hello viet nam \n 44444444444444444444444444444444',
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
    content: "100000000000000000000000000000000000000000000000000000000000000000000000000000000000",
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
    content: "abcddqưedqưqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
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
    content: "http://img.f50.bdpcdn.net/Assets/Media/2018/08/03/75/hot-girl.jpg",
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

const value1 = {
    "_id" : "007E9B3013E7C93396AE768B0BD49E5B60F30DD7A2683F47DD13B61B8EBA95E9",
    "time" : 1544672518,
    "author" : "GAKXVIL35CL7QRBFIAXCYMOAV4JKD3QDWGRYJRMSWNRJWX7RL726IAOF",
    "type" : "payment",
    "params" : {
        "address" : "GB73OPHUZC3RSDEU2LYV5T7MEAN2Q26HYQPDYIENGNBUHW5CXAQ6UJOO",
        "amount" : 1
    }
}

class ListPost extends Component {
    constructor(props){
        super(props);
        this.state = {
            listNewFeed : []
        }
    }
    componentDidMount = () => {
        
    }
    render() {
        const {listPostHomePage} = this.props;
        listPost = listPostHomePage.concat(listPost);
        return (
            <div className="list-post">
                <div className="list-post-container">
                    {
                        listPost.map((value, index)=> {
                            return <PostHomeReview key={index} value={value1}/>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ListPost;
