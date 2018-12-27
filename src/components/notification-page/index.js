
import React, { Component } from 'react'
import './notification-page.css'
import ItemNotification from '../home-page/item-notification';
import moment from 'moment';
import helpers from '../../helpers/helpers'
import { typeActivity } from '../../config/typeActivity';
import axios from 'axios';
import { baseURL } from '../../config/baseURL';
 
 
const _key = 'GDMZJFJVTR4PWYGZJEHN2USXQSEXNKET4AWDIUNJX7ZE56PUCTEY5NOO';
 
class NotificationPage extends Component {
    state = {
        list: [],
        isLoading: false,
        page: 0,
        per_page: 20
    };
 
    componentDidMount() {
        this.loadNotify();
    }
    
    componentWillMount = () => {
        const privateKeyEncode = localStorage.getItem('privateKey');  
        const publicKeyEncode = localStorage.getItem('publicKey');
        if(privateKeyEncode && publicKeyEncode){
            console.log('login')
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
            console.log('logout')
            let payload = {
                isLoginSuccess: false
            }
            this.props.actionSetLoginSuccess(payload);
            this.props.history.push('/');
        }
    }
    
    loadNotify = () => {
        const publicKey = _key;
 
        const request = {
            method: 'get',
            baseURL: baseURL.BASE_URL,
            url: baseURL.URL.GET_NOTIFY,
            params: {
                address: publicKey,
                page: -1,
                per_page: 5
            }
        };
 
        axios.request(request).then(res => {
            const { status, data } = res.data;
            if (status.code !== 0) {
                this.setState({
                    ...this.state,
                    isLoading: false
                });
            } else {
                this.setState({
                    list: this.state.list.concat(data.list),
                    isLoading: false
                });
            }
 
        });
    }
 
    renderList = () => {
        const { list, isLoading } = this.state;
 
        const isEmpty = list.length === 0 && isLoading === false;
 
        if (isLoading === true) {
            return <div style={{
                textAlign: "center"
            }}>Loading...</div>
        }
 
        if (isEmpty === true) {
            return <div style={{
                textAlign: "center"
            }}>Notification empty</div>
        } else {
 
 
            return list.map((value, index) => {
                return <ItemNotification key={index} value={value}/>
            });
        }
    }
    
    render() {
        return (
            <div className="container-notification-page">
                <div className="container-notification-nav-center">
                    <div className="title-notication">
                        Your Notifications
                    </div>
                    <div className="list-notification">
                        {
                            this.renderList()
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default NotificationPage;
