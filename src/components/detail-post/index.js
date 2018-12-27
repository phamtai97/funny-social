import React, {Component} from 'react';
import './detail-post.css';
import { Avatar, Input, Modal } from 'antd';
import ListReact from '../../containers/reactReviewDetailPost';
import ListComment from '../list-comment';
import {typeActivity} from '../../config/typeActivity'
import axios from 'axios';
import { baseURL } from '../../config/baseURL';

const defReaction = ['', 'like', 'love', 'wow', 'haha', 'sad', 'angry'];

class DetailPost extends Component{
    state={
        loading: false, 
        key: ''
    }
    
    handleComment = (e) => {
        alert(e.target.value );
    }

    initListName = (value) => {
        if (value === undefined) return;
 
        let listName = [];
 
        switch (value.type) {
            case typeActivity.CREATE_ACCOUNT:
                listName.push(value.author);
                break;
            case typeActivity.PAYMENT:
                listName.push(value.author);
                listName.push(value.params.address);
                break;
            case typeActivity.UPDATE_ACCOUNT:
            case typeActivity.UPDATE_AVATAR:
            case typeActivity.UPDATE_EMAIL:
            case typeActivity.UPDATE_NAME:
            case typeActivity.POST:
                listName.push(value.author);
                break;
            case typeActivity.COMMENT:
                listName.push(value.author);
                break;
            case typeActivity.REACTION:
                listName.push(value.author);
                break;
            case typeActivity.INTERACT:
                listName.push(value.author);
                break;
            case typeActivity.FOLLOW:
                listName.push(value.author);
                const realList = value.params.data.map((item) => {
                    return item.address;
                });

                listName = listName.concat(realList);
                break;
            case typeActivity.UNFOLLOW: 
                listName.push(value.author);
                const realList1 = value.params.data.map((item) => {
                    return item.address;
                });
 
                listName = listName.concat(realList1);
                break;
            default:
                console.warn(value.type);
                break;
        }
 
        return listName;
    }

    
    requestName = (addresses) => {
        const request = {
            method: 'get',
            baseURL: baseURL.BASE_URL,
            url: baseURL.URL.GET_LIST_ACCOUNT,
            params: {
                addresses: addresses
            }
        };
 
        axios.request(request).then((res) => {
            const { data, status } = res.data;
            const { list } = data;
 
            if (status.code === 0) {
                let listNewName = this.state.listName;
                for (let i = 0; i < addresses.length; i++) {
                    if (list[i]) {
                        listNewName[i] = list[i].name;
                    }
                }
 
                this.setState({
                    ...this.state,
                    listName: listNewName
                });
 
            } else {
                console.error(data);
            }
        }).catch(err => {
            console.error(request, err);
        })
    }
 
    renderCreateAccount = (value) => {
        if (value.type === typeActivity.CREATE_ACCOUNT) {
            const { listName } = this.state;
 
            return (
                <div>
                    <span style={{ color: "#1890ff" }} className='name'>{listName[0]}</span>
                    <span className='content'>created account at </span>
                    <span style={{ color: "#1890ff" }} className='name'>{value.params.address}</span>
                </div>
            );
        }
    }
 
    renderPayment = (value) => {
        if (value.type === typeActivity.PAYMENT) {
            const { listName } = this.state;
            const amount = value.params.amount;
            return (
                <div>
                    <span style={{ color: "#1890ff" }} className='name'>{listName[0]}</span>
                    <span className='content'> credit transfer </span>
                    <span className="name" style={{ color: "#000000" }}>{`${amount} TRIE`}</span>
                    <span> to </span>
                    <span style={{ color: "#1890ff" }} className='name'>{listName[1]}</span>
                </div>
            )
        }
    }
 
    renderUpdateName = (value) => {
        if (value.type === typeActivity.UPDATE_NAME) {
            const { listName } = this.state;
 
            return (
                <div>
                    <span style={{ color: "#1890ff" }} className='name'>{listName[0]}</span>
                    <span className='content'>updated name to </span>
                    <span style={{ color: "#00000" }} className='name'>{value.params.data}</span>
                </div>
            );
        }
    }
 
    renderUpdateEmail = (value) => {
        if (value.type === typeActivity.UPDATE_EMAIL) {
            const { listName } = this.state;
            return (
                <div>
                    <span style={{ color: "#1890ff" }} className='name'>{listName[0]}</span>
                    <span className='content'>updated email to </span>
                    <span style={{ color: "#00000" }} className='name'>{value.params.data}</span>
                </div>
            );
        }
    }
 
    renderUpdateAvatar = (value) => {
        if (value.type === typeActivity.UPDATE_AVATAR) {
            const { listName } = this.state;
            return (
                <div>
                    <span style={{ color: "#1890ff" }} className='name'>{listName[0]}</span>
                    <span className='content'>updated avatar with </span>
                    <span style={{ color: "#00000" }} className='name'>{`${value.params.data.length} bytes`}</span>
                </div>
            );
        }
    }
 
    renderUpdateAccount = (value) => {
        if (value.type === typeActivity.UPDATE_ACCOUNT) {
            const { listName } = this.state;
            return (
                <div>
                    <span style={{ color: "#1890ff" }} className='name'>{listName[0]}</span>
                    <span className='content'>updated account with </span>
                    <span style={{ color: "#00000" }} className='name'>{`${value.params.data} bytes`}</span>
                </div>
            );
        }
    }
 
    renderPost = (value) => {
        if (value.type === typeActivity.POST) {
            const { listName } = this.state;
            // console.log('value: ', value);
            if(value.params.type === 1){
                return(
                    <div>
                        <span style={{ color: "#1890ff" }} className='name'>{listName[0]}</span>
                        <div className='content-post'>
                            {value.params.data}
                        </div>
                    </div>
                )
            }else{
                return (
                    <div>
                        <span style={{ color: "#1890ff" }} className='name'>{listName[0]}</span>
                        <span className='content'>posted with </span>
                        <span style={{ color: "#00000" }} className='name'>{`${value.params.data} bytes`}</span>
                        <span className='content'> and </span>
                        <span style={{ color: "#00000" }} className='name'>{`${value.params.keys.length} keys`}</span>
                    </div>
                );
            }
        }
    }
 
    renderFollow = (value) => {
        if (value.type === typeActivity.FOLLOW) {
            const { listName } = this.state;
            return (
                <div>
                    <span style={{ color: "#1890ff" }} className='name'>{listName[0]}</span>
                    <span className='content'> followings</span>
                    {
                        listName.map((item, index) => {
                            if (index === listName.length - 1 && index !== -1) {
                                return <span style={{ color: "#1890ff" }} className='name' key={index}>{` ${item}`}</span>;
                            }
 
                            if (index !== -1) {
                                return <span style={{ color: "#1890ff" }} className='name' key={index}>{` ${item},`}</span>;
                            }
 
                            return null;
                        })
                    }
 
                </div>
            );
        }
    }
 
    renderUnfollow = (value) => {
        if (value.type === typeActivity.UNFOLLOW) {
            const { listName } = this.state;
            return (
                <div>
                    <span style={{ color: "#1890ff" }} className='name'>{listName[0]}</span>
                    <span className='content'> unfollow </span>
                    {
                        listName.map((item, index) => {
                            if (index === listName.length - 1 && index !== -1) {
                                return <span style={{ color: "#1890ff" }} className='name' key={index}>{` ${item}`}</span>;
                            }
 
                            if (index !== -1) {
                                return <span style={{ color: "#1890ff" }} className='name' key={index}>{` ${item},`}</span>;
                            }
 
                            return null;
                        })
                    }
 
                </div>
            );
        }
    }
 
    renderReaction = (value) => {
        if (value.type === typeActivity.REACTION) {
            const { listName } = this.state;
            const { data, object } = value.params;
            if (data === 0) {
                return (
                    <div>
                        <span style={{ color: "#1890ff" }} className='name'>{listName[0]}</span>
                        <span style={{ color: "#000000" }} className='name'>removed</span>
                        <span className='content'> reaction on</span>
                        <span style={{ color: "#1890ff" }} className='name'>{object}</span>
                    </div>
                );
            }
            return (
                <div>
                    <span style={{ color: "#1890ff" }} className='name'>{listName[0]}</span>
                    <span className='content'> reacted </span>
                    <span style={{ color: "#000000" }} className='name'>{defReaction[data]}</span>
                    <span className='content'> on </span>
                    <span style={{ color: "#1890ff" }} className='name'>{object}</span>
                </div>
 
            );
        }
    }
 
    renderComment = (value) => {
        if (value.type === typeActivity.COMMENT) {
            const { listName } = this.state;
            const { data, object } = value.params;
            return (
                <div>
                    <span style={{ color: "#1890ff" }} className='name'>{listName[0]}</span>
                    <span className='content'> comment </span>
                    <span style={{ color: "#1890ff" }} className='name'>{object} </span>
                    <span className='content'> with </span>
                    <span style={{ color: "#000000" }} className='name'>{`${data.length} bytes`} </span>
                </div>
            );
        }
    }
 
 
    renderInteract = (value) => {
        if (value.type === typeActivity.INTERACT) {
            const { listName } = this.state;
            const { data, object } = value.params;
            return (
                <div>
                    <span style={{ color: "#1890ff" }} className='name'>{listName[0]}</span>
                    <span className='content'> interact with </span>
                    <span style={{ color: "#1890ff" }} className='name'>{object} </span>
                    <span className='content'> with </span>
                    <span style={{ color: "#000000" }} className='name'>{`${data} bytes`} </span>
                </div>
            );
        }
    }
    
    renderContent = (value) => {
        switch (value.type) {
            case typeActivity.CREATE_ACCOUNT:
                return this.renderCreateAccount(value);
            case typeActivity.PAYMENT:
                return this.renderPayment(value);
            case typeActivity.UPDATE_NAME:
                return this.renderUpdateName(value);
            case typeActivity.UPDATE_EMAIL:
                return this.renderUpdateEmail(value);
            case typeActivity.UPDATE_AVATAR:
                return this.renderUpdateAvatar(value);
            case typeActivity.UPDATE_ACCOUNT:
                return this.renderUpdateAccount(value);
            case typeActivity.FOLLOW:
                return this.renderFollow(value);
            case typeActivity.UNFOLLOW:
                return this.renderUnfollow(value);
            case typeActivity.POST:
                return this.renderPost(value);
            case typeActivity.REACTION:
                return this.renderReaction(value);
            case typeActivity.INTERACT:
                return this.renderInteract(value);
            case typeActivity.COMMENT:
                return this.renderComment(value);
            default:
        }
    }
    
    


    
    render(){
        const { visible, onCancel, onCreate, width, valueDetail } = this.props;
        
        const listActioner = [{"src":"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}, {"src": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}
        , {"src": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}, {"src": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}];

        return(
            <div className="container-modal">
                <Modal 
                    footer={null}
                    width={width}
                    visible={visible}                 
                    onCancel={onCancel}
                    onOk={onCreate}>

                    <div className="container-detail-post">
                        <div className="header-detail-post">
                            <div className="avatar-post">
                                <Avatar icon="user"/>
                            </div>
                            <div className='wrapper-content'>
                                {this.renderContent(valueDetail)}
                            </div>
                        </div>
                        {/* <div className="list-react-actioner">
                            <ListReact typeReact={this.props.typeReact}>
                            </ListReact>
                            <div className="avatar-actioner">
                                {listActioner.map((item, index) => {
                                    return(
                                        <Avatar key={index} src={item.src} className="avatar-actioner-wrapper"></Avatar>
                                    )
                                })}
                            </div>
                        </div> */}
                        <div className="input-comment">
                            <div className="avatar-wrapper">
                                <Avatar size="large" icon="user"></Avatar>
                            </div>
                            <div className="input-comment-wrapper">
                                <Input size="large" placeholder="Write your comment..." onPressEnter = {this.handleComment}/>
                            </div>
                        </div>
                        <div className="list-comment">
                            <ListComment></ListComment>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default DetailPost;
