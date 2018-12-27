import React, { Component } from 'react';
import ProfileHeader from '../profile-header';
import ListPost from '../list-post';
import ListFollowing from '../list-following';
import './profile-page.css';
import ListFollower from '../list-follower';
import { VIEW_POST, VIEW_FOLLOWING, VIEW_FOLLOWER } from '../../constants/profilePageConstant';
import AccountBox from '../../containers/accountBox';
import {baseURL} from '../../config/baseURL';
import {withRouter} from "react-router-dom";

class ProfilePage extends Component {
    getContent = () => {
        const { view, actionGetListPostProfilePage, listPostProfilePage, avatarUser, userNameUser, 
            actionGetListFollowingProfilePage, listFollowingProfilePage, listFollowerProfilePage, actionGetListFollowerProfilePage } = this.props;
        console.log(listPostProfilePage);
        
        switch (view) {
            case VIEW_POST:
                return <ListPost 
                    avatarUser={avatarUser}
                    userNameUser={userNameUser}
                    actionGetListPostProfilePage={actionGetListPostProfilePage} 
                    listPostProfilePage={listPostProfilePage}>
                </ListPost>
            case VIEW_FOLLOWING:
                return <ListFollowing
                    actionGetListFollowingProfilePage={actionGetListFollowingProfilePage}
                    listFollowingProfilePage={listFollowingProfilePage}
                ></ListFollowing>
            case VIEW_FOLLOWER:
                return <ListFollower
                    actionGetListFollowerProfilePage={actionGetListFollowerProfilePage}
                    listFollowerProfilePage={listFollowerProfilePage}
                ></ListFollower>
            default:
                return <ListPost></ListPost>
        }

    }

    getTag(){
        const url = window.location.href.split('/');

        if(url.length === 5 && url[3] === "profile"){
            return url[4];
        }else{
            return null     ;
        }
    }







    componentWillMount = () => {
        const privateKeyEncode = localStorage.getItem('privateKey');  
        const publicKeyEncode = localStorage.getItem('publicKey');
        if(privateKeyEncode && publicKeyEncode){
        const privateKeyDecode = atob(privateKeyEncode);
        const publicKeyDecode = atob(publicKeyEncode);
        let payload = {
            isLoginSuccess: true
        }
        this.props.actionSetLoginSuccess(payload);
        payload = {
            privateKey: privateKeyDecode,
            publicKey: publicKeyDecode
        }
        this.props.actionsSetPrivatrPublicKey(payload);
        payload = {
            url: baseURL.BASE_URL + baseURL.URL.GET_ACCOUNT + publicKeyDecode
        } 
        this.props.actionGetAccountUser(payload);
        }else {
            let payload = {
                isLoginSuccess: false
            }
            this.props.actionSetLoginSuccess(payload);
            this.props.history.push('/');
        }
    }

    render() {
        const { onViewPost, onViewFollowing, onViewFollower, view, 
            publicKeyUser, actionGetAccountProfileUser,  actionSetPublicKeyProfileUser,
            balanceUser, oxygenUser, userNameUser, avatarUser,
            numberFollowingUser, numberFollowersUser, numberPostUser} = this.props;
        
        var avatarUrl = ''
        if(!avatarUser){
            avatarUrl = '../../images/icon-avatar-default.png';
        }else{
            avatarUrl = avatarUser
        }

        let a = Array(5).fill(0);
        let cnt = 0;

        const publicKeyPath = this.getTag();

        if(publicKeyUser !== publicKeyPath && publicKeyPath !== null){
            let payload = {
                publicKeyUser: publicKeyPath,
            }
            actionSetPublicKeyProfileUser(payload);
            //call api get account user
            payload = {
                url: baseURL.BASE_URL + baseURL.URL.GET_ACCOUNT + publicKeyPath
            } 
            actionGetAccountProfileUser(payload)
        }

        return (
            <div className="profile-page">
                <div className="container-profile-page">
                    <div className="background-user">
                        <div className="wrapper-background-user">
                            <div className="avatar">
                                <div className="avatar-img" style={{ backgroundImage: `url(${avatarUrl})` }}></div>
                            </div>
                            <div className="profile-info">        
                                <div className="name">
                                    {userNameUser}
                                </div>
                            </div>
                        </div>
                    </div>
                    <ProfileHeader
                        onViewPost={onViewPost}
                        onViewFollowing={onViewFollowing}
                        onViewFollower={onViewFollower}
                        view={view}
                        numberPostUser={numberPostUser}
                        numberFollowersUser={numberFollowersUser}
                        numberFollowingUser={numberFollowingUser}
                    />
                    <div className='container-nav'>
                        <div className="nav-left-profile-page">
                            <div className="container-account-box">
                                <div className="title">
                                    Account
                                </div>
                                <AccountBox publicKey={publicKeyUser} balance={balanceUser} oxygen={oxygenUser}></AccountBox>
                            </div>
                        </div>
                        <div className="content-container">
                            {this.getContent()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ProfilePage);
