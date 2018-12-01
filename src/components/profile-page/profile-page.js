import React, { Component } from 'react';
import Content from '../content/content.js';
import SiderLeft from '../sider-left/sider-left.js';
import SiderRight from '../sider-right/sider-right.js';
import './profile-page.css';

class ProfilePage extends Component{
    render(){
        return(
            <div className="container-profile-page">
                <SiderLeft></SiderLeft>
                <Content></Content>
                <SiderRight></SiderRight>
            </div>
        )
    }
}

export default ProfilePage;
