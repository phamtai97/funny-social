import React, { Component } from 'react';
import FollowButton from '../core/FollowButton';
import axios from 'axios';
import {baseURL} from '../../config/baseURL';
import './user-review.css';
import avatarDefault from '../../images/icon-avatar.png';
class UserReview extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.address,
            avatar: avatarDefault
        };
    }

    getFollowBtnClassName = (index) => {
        let res = "follow-btn ";
        if (index === 1) {
            return res + "following-text"
        }

        return res + "follow-text";
    }

    onClickFollow = () => {
        alert("Hello");
    }

    componentDidMount = () => {
        console.log(this.props);
        if(this.props.user.address){
            this.requestName(this.props.user.address);
        }
    }

    requestName = (address) => {
        const request = {
            method: 'get',
            baseURL: baseURL.BASE_URL,
            url: baseURL.URL.GET_ACCOUNT_PARAMS,
            params: {
                address: address
            }
        };

        axios.request(request).then((res) => {
            const { data, status } = res.data;
            if (status.code === 0) {
                this.setState({
                    ...this.state,
                    name: data.name,
                    avatar: data.picture
                });

            } else {
                console.error(data);
            }
        }).catch(err => {
            console.error(err);
        })
    }

    render() {
        const {type} = this.props;

        return (
            <div className="user-review">
                <div className="avatar">
                    <div className="avatar-img"
                        style={{ backgroundImage: `url(${this.state.avatar})` }}
                    >
                    </div>
                </div>
                <div className="wrapper">
                    <div className="name">
                        {this.state.name}
                    </div>

                    <FollowButton className="follow-btn"
                        type={type}
                        onClick={this.onClickFollow}
                    />
                </div>
            </div>
        );
    };
}

export default UserReview;
