
import React, { Component } from 'react';
import './item-notification.css';
import '../post-home-review/post-review.css';
import { Avatar } from 'antd';
import helpers from '../../helpers/helpers';
import DetailPost from '../../components/detail-post';
import { typeActivity } from '../../config/typeActivity';
import axios from 'axios';
import moment from 'moment';
import { baseURL } from '../../config/baseURL';
 
const ownerAddress = 'GDMZJFJVTR4PWYGZJEHN2USXQSEXNKET4AWDIUNJX7ZE56PUCTEY5NOO';
 
const defReaction = ['', 'like', 'love', 'wow', 'haha', 'sad', 'angry'];
 
class ItemNotification extends Component {
 
    constructor(props) {
        super(props);
 
        const { value } = props;
 
        let listName = this.initListName(value);
 
        this.state = {
            visibleDetailPost: false,
            listName
        };
    }
 
    initListName = (value) => {
        if (value === undefined) return;
 
        let listName = [];
 
        switch (value.type) {
            case typeActivity.CREATE_ACCOUNT:
                listName.push(value.source);
                break;
            case typeActivity.PAYMENT:
                listName.push(value.source);
                listName.push(value.params.address);
                break;
            case typeActivity.UPDATE_ACCOUNT:
            case typeActivity.UPDATE_AVATAR:
            case typeActivity.UPDATE_EMAIL:
            case typeActivity.UPDATE_NAME:
            case typeActivity.POST:
                listName.push(value.source);
                break;
            case typeActivity.COMMENT:
                listName.push(value.source);
                break;
            case typeActivity.REACTION:
                listName.push(value.source);
                break;
            case typeActivity.INTERACT:
                listName.push(value.source);
                break;
            case typeActivity.FOLLOW:
                listName.push(value.source);
                listName = listName.concat(value.params.data);
                break;
            case typeActivity.UNFOLLOW:
                console.log(value);
                listName.push(value.source);
                const realList = value.params.data.map((item) => {
                    return item.address;
                });
 
                listName = listName.concat(value.params.data.map);
                break;
            default:
                console.warn(value.type);
                break;
        }
 
        return listName;
    }
 
    componentDidMount() {
        this.requestName(this.state.listName);
    }
 
    onViewDetailPost = () => {
        this.showModalDetailPost();
    }
 
    //handle click in detal post
    handleCancelDetailPost = () => {
        this.setState({ visibleDetailPost: false });
    }
 
    handleOkDetailPost = () => {
        this.setState({ visibleDetailPost: false });
    }
 
    showModalDetailPost = () => {
        this.setState({ visibleDetailPost: true });
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
            return (
                <div>
                    <span style={{ color: "#1890ff" }} className='name'>{listName[0]}</span>
                    <span className='content'>posted with </span>
                    <span style={{ color: "#00000" }} className='name'>{`${value.params.content.text.length} bytes`}</span>
                    <span className='content'> and </span>
                    <span style={{ color: "#00000" }} className='name'>{`${value.params.keys.length} keys`}</span>
                </div>
            );
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
 
    renderListName = (list, idxDisable) => {
        return <div> {
            list.map((item, index) => {
                if (index !== idxDisable) {
                    return <span style={{ color: "#1890ff" }} className='name' key={index}>{item}</span>;
                }
 
                return <span style={{ color: "#1890ff" }} className='name' key={index}></span>;
            })
        }</div>;
    }
 
    renderUnfollow = (value) => {
        if (value.type === typeActivity.UNFOLLOW) {
            const { listName } = this.state;
 
            return (
                <div>
                    <span style={{ color: "#1890ff" }} className='name'>{listName[0]}</span>
                    <span className='content'> unfollowed </span>
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
 
 
    handlePost = (value) => {
        if (value.type === typeActivity.POST) {
 
        }
    }
 
    render() {
        const { value } = this.props;
        const time = value.time;
 
        return (
            <div>
                <DetailPost
                    width={helpers.WIDTH_DETAIL_POST}
                    visible={this.state.visibleDetailPost}
                    onCancel={this.handleCancelDetailPost}
                    onCreate={this.handleOkDetailPost}
                    valueDetail={value}
                >
                </DetailPost>
 
                <div className='container-item-notification' onClick={() => this.onViewDetailPost()}>
                    <div className='wrapper-avatar'>
                        <Avatar size={65} icon="user" />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                        <div className='container-name-content'>
                            {this.renderContent(value)}
                        </div>
                        <div className="container-name-timme">
                            {moment.unix(time).format('hh:mm - DD MMM YYYY')}
                        </div>
                    </div>
 
                </div>
 
            </div>
        )
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
}

export default ItemNotification;
