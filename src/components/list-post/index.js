import React, {Component} from 'react';
import PostHomeReview from '../post-home-review';
import './list-post.css';
import moment from 'moment';
import helpers from '../../helpers/helpers'
import {typeActivity} from '../../config/typeActivity';
import {baseURL} from '../../config/baseURL';

var listPost = [];

class ListPost extends Component {
    getTag(){
        const url = window.location.href.split('/');

        if(url.length === 5 && url[3] === "profile"){
            return url[4];
        }else{
            return null;
        }
    }

    getPayLoad = (page, perPage, publicKeyPath) => ({
        url: baseURL.BASE_URL + baseURL.URL.GET_POST + publicKeyPath + '&page=' + page + '&per_page=' + perPage
    })

    componentDidMount=()=>{
        const {actionGetListPostProfilePage} = this.props;
        const publicKeyPath = this.getTag();
        const perPage = 10;
        const page = -1;

        const payload = this.getPayLoad(page, perPage, publicKeyPath);
        actionGetListPostProfilePage(payload);
    }

    render() {
        const {listPostProfilePage,  userNameUser, avatarUser} = this.props;

        console.log(listPostProfilePage)
        return (
            <div className="list-post">
                <div className="list-post-container">
                    {
                        listPostProfilePage.map((value, index)=> {
                            return <PostHomeReview          
                                avatarUser={avatarUser}
                                userNameUser={userNameUser} 
                                key={index} value={value}/>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ListPost;
