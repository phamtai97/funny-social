import React, {Component} from 'react';
import './nav-left-info.css';
import {withRouter} from "react-router-dom";
import { Avatar } from 'antd';
import AccountBox from '../../containers/accountBox';
class NavLeftInfo extends Component{

    handleClickItemPost = () => {
        this.setState({
            selected: "posts"
        });

        this.props.onViewPost();
        this.props.history.push('/profile');        
    }

    handleClickItemFollwing = () => {
        this.setState({
            selected: "following"
        });
        this.props.onViewFollowing();
        this.props.history.push('/profile');        
    }

    handleClickItemFollwers = () => {
        this.setState({
            selected: "followers"
        });
        this.props.onViewFollower();
        this.props.history.push('/profile');                
    }

    render(){
        const name = "Vo Minh Tri oc cho";
        const numberPost = 1000;
        const numberFollowing = 1000;
        const numberFollowers = 1000;
        return(
            <div className='container-nav-left'>
                <div className='background-user-home'>
                    <div className="wrapper-avatar">
                        <Avatar size={85} icon="user" />
                    </div>
                </div>
                <div className="container-nav-left-info">
                    <div className="container-info">
                        <div className="name">
                            {name}
                        </div>
                    </div>
                    <div className='account-box'>
                        <AccountBox></AccountBox>
                    </div>
                    <div className="info-card">
                        <div className="item-card" onClick={this.handleClickItemPost}>
                            <div className="type">
                                Post
                            </div>
                            <div className="count">
                                {numberPost}
                            </div>
                        </div>
                        <div className="item-card" onClick={this.handleClickItemFollwing}>
                            <div className="type">
                                Following
                            </div>
                            <div className="count">
                                {numberFollowing}
                            </div>
                        </div>
                        <div className="item-card" onClick={this.handleClickItemFollwers}>
                            <div className="type">
                                    Followers
                            </div>
                            <div className="count">
                                {numberFollowers}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(NavLeftInfo);
