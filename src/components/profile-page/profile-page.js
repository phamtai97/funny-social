import React, { Component } from 'react';
import Content from '../content/content.js';
import SiderLeft from '../sider-left/sider-left.js';
import SiderRight from '../sider-right/sider-right.js';
import ProfileHeader from '../profile-header';

import './profile-page.css';

class ProfilePage extends Component{


    getContent  = () => {
        return <ProfileHeader></ProfileHeader>
    }

    render(){

        return(
            <div className="profile-page">
                <ProfileHeader/>
                <div className="content-container">
                </div>
            </div>
        )
    }
}

export default ProfilePage;
