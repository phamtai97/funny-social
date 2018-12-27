import React, {Component} from 'react';
import PostHomeReview from '../../components/post-home-review';
import {typeActivity} from '../../config/typeActivity';
import './list-post.css';
import moment from 'moment';
import helpers from '../../helpers/helpers';
import axios from 'axios';
import { baseURL } from '../../config/baseURL';

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
    "_id" : "008096CC174EF9A93F7274D88BDFF878AE56A5310763AC2CE8C4DB4280B86036",
    "time" : 1545708287,
    "author" : "GCZRPJNYGLR4VD3HROBGDUF4IIS32DAF5FNBRFRHUD4QCDE5ZKTEB37B",
    "type" : "post",
    "params" : {
        "type" : 1,
        "content" : {
            "type" : 1,
            "text" : "Dù ai nói ngã nói nghiêng\nThì ta cũng vững như kiềng ba chân"
        },
        "keys" : []
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
        const request = {
            baseURL: baseURL.BASE_URL,
            url: baseURL.URL.GET_LIST_NEW_FEED,
            method: 'get',
            params:{
                address: 'GDMZJFJVTR4PWYGZJEHN2USXQSEXNKET4AWDIUNJX7ZE56PUCTEY5NOO',
                page: -1,
                per_page: 10
            }
        };

        axios.request(request).then(result =>{
            console.log(result);
            this.setState({
                listNewFeed: result.data.data.list
            })
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        const {listPostHomePage} = this.props;
        listPost = listPostHomePage.concat(listPost);
        return (
            <div className="list-post">
                <div className="list-post-container">
                    {
                        this.state.listNewFeed.map((value, index)=> {
                            return <PostHomeReview key={index} value={value}/>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ListPost;
