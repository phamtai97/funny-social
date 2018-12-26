import React, { Component } from 'react';
import './header-main.css';
import { Input, Button, Avatar, Dropdown, Menu, Icon, Badge, message} from 'antd';
import UpdateProfile from '../../containers/updateProfile';
import InputStatus from '../../containers/inputStatusHeaderMain';
import {withRouter} from "react-router-dom";
import classNames from 'classnames';
import iconSendmoney from '../../images/icon-send-money.png';
import BoxSendMoney from './box-send-money';
import {transactionGet} from '../../lib/transaction/get';
import {baseURL} from '../../config/baseURL';
import BoxUpdateName from './box-update-name';
import BoxUpdateEmail from './box-update-email';
import BoxUpdateAvatar from './box-update-avatar';

const Search = Input.Search;
const CollectionCreateForm = UpdateProfile;
const InputStatusFrom = InputStatus;
const BoxSendMoneyFrom = BoxSendMoney;
const BoxUpdateNameFrom = BoxUpdateName;
const BoxUpdateEmailFrom = BoxUpdateEmail;
const BoxUpdateAvatarFrom = BoxUpdateAvatar;

class HeaderMain extends Component{
    state = {
        visible: false,  
        visibleInputStatus: false, 
        visibleBoxSendMoney: false,
        visibleBoxUpdateName: false,
        visibleBoxUpdateEmail: false,
        visibleBoxUpdateAvatar: false,
    };
    
    //handle update profile
    showModal = () => {
        this.setState({ visible: true });
    }

    handleCancel = () => {
        this.setState({ visible: false });
    }

    saveFormRef = (formRef) => {
        this.formRef = formRef;
    }
    
    handleCreate = (url) => {
        console.log(url);

        const form = this.formRef.props.form;

        form.validateFields((err, values) => {
            if (err) {
                return;
            }

            alert('Received values of form: ' + values.newName + values.email);
            form.resetFields();
            this.setState({ visible: false });
        });
        this.setState({ visible: false });

    }

    ///cliclk button status
    showModalInputStatus = () => {
        this.setState({ visibleInputStatus: true });
    }

    handleCancelInputStatus = () => {
        this.setState({ visibleInputStatus: false });
    }

    handleSubmitStatus = () => {
        this.setState({ visibleInputStatus: false });
    }

    ///cliclk button send money
    handleCancelBoxSendMoney  = () => {
        this.setState({ visibleBoxSendMoney: false });
    }

    showModalSendMoney = () => {
        this.setState({ visibleBoxSendMoney: true });
    }

    handleSendMoney = () => {
        this.setState({ visibleBoxSendMoney: false });
    }

    handleClickButtonSendMoney = () => {
        this.showModalSendMoney();
    }

    //click update name
    handleCancelBoxUpdateName  = () => {
        this.setState({ visibleBoxUpdateName: false });
    }

    showModalUpdateName = () => {
        this.setState({ visibleBoxUpdateName: true });
    }

    handleUpdateName = () => {
        this.setState({ visibleBoxUpdateName: false });
    }

    //click update email
    handleCancelBoxUpdateEmail  = () => {
        this.setState({ visibleBoxUpdateEmail: false });
    }

    showModalUpdateEmail = () => {
        this.setState({ visibleBoxUpdateEmail: true });
    }

    handleUpdateEmail = () => {
        this.setState({ visibleBoxUpdateEmail: false });
    }

    //click update avatar
    handleCancelBoxUpdateAvatar  = () => {
        this.setState({ visibleBoxUpdateAvatar: false });
    }

    showModalUpdateAvatar = () => {
        this.setState({ visibleBoxUpdateAvatar: true });
    }

    handleUpdateAvatar = () => {
        this.setState({ visibleBoxUpdateAvatar: false });
    }

    //handle clich item on header
    handleClickHomeItem = () => {
        this.props.history.push('/');
        var payload = {
            itemHeaderMainSelected: 'home'
        }
        this.props.actionSetItemHeaderMainSelected(payload);
    }

    handleClickNotificationItem = () => {
        this.props.history.push('/notification');
        var payload = {
            itemHeaderMainSelected: 'notification'
        }
        this.props.actionSetItemHeaderMainSelected(payload);
    }

    handleClickProfileItem = () => {
        this.props.history.push('/profile');
        var payload = {
            itemHeaderMainSelected: 'profile'
        }
        this.props.actionSetItemHeaderMainSelected(payload);
    }
    
    handleClickHistoryItem = () => {
        this.props.history.push('/history');
        var payload = {
            itemHeaderMainSelected: 'history'
        }
        this.props.actionSetItemHeaderMainSelected(payload);
    }

    //handler search
    handleSearch = (value) => {
        alert(value);
    }

    //handler write status
    handleClickFunnyItem = () => {
        this.showModalInputStatus();
        // alert("Funny");
    }

    //handler clich on menu
    handleMenuClick = (e) => {
        if (e.key === '1') {
            this.props.history.push('/profile');
            let payload = {
                itemHeaderMainSelected: 'profile'
            }
            this.props.actionSetItemHeaderMainSelected(payload);
        }else if(e.key === '2'){
            this.showModal();
        }else if(e.key === '3'){
            this.showModalUpdateName();
        }else if(e.key === '4'){
            this.showModalUpdateEmail();
        }else if(e.key === '5'){
            this.showModalUpdateAvatar();
        }else if(e.key === '6'){
            if(this.props.privateKey.length > 0){
                const tx = transactionGet.logout(this.props.privateKey);
                let payload = {
                    url: baseURL.BASE_URL + baseURL.URL.LOGOUT,
                    tx: tx
                }
                this.props.actionLogout(payload)
                this.props.history.push('/');
            }
        }
    }

    componentDidUpdate = () => {
        if(this.props.isSendMoneySuccess){
            message.success('You have successfully sent money')
            var payload = {
                isSendMoneySuccess: false,
                moneySend: 0
            }
            this.props.actionSendMoneySuccess(payload)
        }

        if(this.props.isUpdateNameSuccess){
            message.success('You have successfully update name')
            var payload = {
                isUpdateNameSuccess: false,
            }
            this.props.actionUpdateNameSuccess(payload)
        }

        console.log(this.props);
        
        if(this.props.isUpdateEmailSuccess){
            message.success('You have successfully update email')
            var payload = {
                isUpdateEmailSuccess: false,
            }
            this.props.actionUpdateEmailSuccess(payload)
        }
    }

    render(){
        const {actionUpdateAvatar, actionUpdateEmail, actionSendMoney, itemHeaderMainSelected, privateKey, publicKey, actionUpdateName}  = this.props;
        const count = 1;
        const userName = "Vo Minh Tri";
        const email = "abcxyz@gmail.com";
        const avatar = '../../images/icon-avatar-default.png';

        const menu = (
            <Menu onClick={this.handleMenuClick}>
                <Menu.Item key="1">
                    <a>Profile</a>
                </Menu.Item>
                <Menu.Item key="2">
                    <a>Update profile</a>
                </Menu.Item>
                <Menu.Item key="3">
                    <a>Update name</a>
                </Menu.Item>
                <Menu.Item key="4">
                    <a>Update email</a>
                </Menu.Item>
                <Menu.Item key="5">
                    <a>Update avatar</a>
                </Menu.Item>
                <Menu.Item key="6">
                    <a target="_blank">Log out</a>
                </Menu.Item>
            </Menu>
        );
                
        return(
            <div className="header-container">
                <CollectionCreateForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />

                <InputStatusFrom
                    visible={this.state.visibleInputStatus}
                    onCancel={this.handleCancelInputStatus}
                    onCreate={this.handleSubmitStatus}
                />

                <BoxSendMoneyFrom
                    privateKey={privateKey}
                    publicKey={publicKey}
                    actionSendMoney={actionSendMoney}
                    visible={this.state.visibleBoxSendMoney}
                    onCancel={this.handleCancelBoxSendMoney}
                    onCreate={this.handleSendMoney}
                />

                <BoxUpdateNameFrom
                    privateKey={privateKey}
                    publicKey={publicKey}
                    userName={userName}
                    actionUpdateName={actionUpdateName}
                    visible={this.state.visibleBoxUpdateName}
                    onCancel={this.handleCancelBoxUpdateName}
                    onCreate={this.handleUpdateName}
                />

                <BoxUpdateEmailFrom
                    privateKey={privateKey}
                    publicKey={publicKey}
                    email={email}
                    actionUpdateEmail={actionUpdateEmail}
                    visible={this.state.visibleBoxUpdateEmail}
                    onCancel={this.handleCancelBoxUpdateEmail}
                    onCreate={this.handleUpdateEmail}
                />

                <BoxUpdateAvatarFrom
                    privateKey={privateKey}
                    publicKey={publicKey}
                    avatar={avatar}
                    actionUpdateAvatar={actionUpdateAvatar}
                    visible={this.state.visibleBoxUpdateAvatar}
                    onCancel={this.handleCancelBoxUpdateAvatar}
                    onCreate={this.handleUpdateAvatar}
                />
                

                <div className="header">
                    <div className="header-wrapper">
                        <div className="item-header">
                            <div className={classNames("item-container", {'item-container-selected': itemHeaderMainSelected === 'home'})} onClick={this.handleClickHomeItem} >
                                <div className="wrapper-content">
                                    <Icon type="home"/>
                                    <span className="content">Home</span>
                                </div>
                            </div>
                            <div className={classNames("item-container", {'item-container-selected': itemHeaderMainSelected === 'notification'})} onClick={this.handleClickNotificationItem}>
                                <div className="wrapper-content">
                                    <Icon type="bell"/>
                                    <Badge count={count} offset={[1, -7]}>
                                        <span className='content-notification'>Notification</span>
                                    </Badge>
                                </div>
                            </div>
                            <div className={classNames("item-container", {'item-container-selected': itemHeaderMainSelected === 'profile'})} onClick={this.handleClickProfileItem}>
                                <div className="wrapper-content">
                                    <Icon type="profile" />
                                    <span className='content'>Profile</span>
                                </div>
                            </div>
                            <div className={classNames("item-container", {'item-container-selected': itemHeaderMainSelected === 'history'})} onClick={this.handleClickHistoryItem}>
                                <div className="wrapper-content">
                                    <Icon type="calendar" />
                                    <span className='content'>History</span>
                                </div>
                            </div>
                        </div>
                        <div className="button-send-money">
                            <img src={iconSendmoney}  onClick={this.handleClickButtonSendMoney} alt='avtar'></img>
                        </div>
                        <div className="search-bar">
                            <Search
                                placeholder="input search text"
                                onSearch={value => this.handleSearch(value)}
                                style={{ width: 250 }}
                            />
                        </div>
                        {/* <Tooltip placement="bottom" title={profile_setting}> */}
                            <Dropdown overlay={menu} placement="bottomCenter" trigger={['click']}>
                                <div className="avatar-me">
                                    <Avatar size={47} icon="user"/>
                                </div>
                            </Dropdown>
                        {/* </Tooltip> */}
                        <div className="button-funny-social">
                            <Button type="primary" onClick={this.handleClickFunnyItem}>Funny</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(HeaderMain);
