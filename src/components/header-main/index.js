import React, { Component } from 'react';
import './header-main.css';
import { Input, Button, Avatar, Dropdown, Menu, Icon, Badge} from 'antd';
import CollectionCreateFormUpdateProfile from './update-profile.js';
import InputStatus from './input-status';
import {withRouter} from "react-router-dom";
import classNames from 'classnames';

const Search = Input.Search;
const CollectionCreateForm = CollectionCreateFormUpdateProfile;
const InputStatusFrom = InputStatus;

class HeaderMain extends Component{
    state = {
        visible: false,  
        visibleInputStatus: false, 
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
    
    handleCreate = () => {
        // console.log(this.formRef.props);

        const form = this.formRef.props.form;

        form.validateFields((err, values) => {
            if (err) {
                return;
            }

            alert('Received values of form: ' + values.newName + values.email);
            form.resetFields();
            this.setState({ visible: false });
        });
    }

    showModalInputStatus = () => {
        this.setState({ visibleInputStatus: true });
    }

    handleCancelInputStatus = () => {
        this.setState({ visibleInputStatus: false });
    }

    handleSubmitStatus = () => {

        this.setState({ visibleInputStatus: false });
    }

    //handle clich item on header
    handleClickHomeItem = () => {
        this.props.history.push('/');
        var payload = {
            itemHeaderMain: 'home'
        }
        this.props.actionSetItemHeaderMainSelected(payload);
    }

    handleClickNotificationItem = () => {
        this.props.history.push('/notification');
        var payload = {
            itemHeaderMain: 'notification'
        }
        this.props.actionSetItemHeaderMainSelected(payload);
    }

    handleClickProfileItem = () => {
        this.props.history.push('/profile');
        var payload = {
            itemHeaderMain: 'profile'
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
            var payload = {
                itemHeaderMain: 'profile'
            }
            this.props.actionSetItemHeaderMainSelected(payload);
        }else if(e.key === '2'){
            this.showModal();
        }else if(e.key === '3'){
            alert("Change password")
        }else if(e.key === '4'){
            alert("Log out")
        }
    }
    
    render(){
        const itemHeaderMainSelected = this.props.itemHeaderMain;
        const count = 1;
        const menu = (
            <Menu onClick={this.handleMenuClick}>
                <Menu.Item key="1">
                    <a>Profile</a>
                </Menu.Item>
                <Menu.Item key="2">
                    <a>Update profile</a>
                </Menu.Item>
                <Menu.Item key="3">
                    <a>Change password</a>
                </Menu.Item>
                <Menu.Item key="4">
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
