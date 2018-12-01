import React, { Component } from 'react';
import './header-main.css';
import ItemHeader from './item-header-main';
import { Input, Button, Avatar, Dropdown, Menu, Tooltip} from 'antd';
import CollectionCreateFormUpdateProfile from './update-profile.js';
import DetailPostComponent from '../detail-post';

const Search = Input.Search;
const profile_setting = <span>Profile and Setting</span>;


const CollectionCreateForm = CollectionCreateFormUpdateProfile;
const DetailPost = DetailPostComponent;

class HeaderPage extends Component{
    state = {
        visible: false,   
        visibleDetailPost:false
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

    //handle clich item on header
    handleClickHomeBtn = () => {
        alert("Home");
    }

    handleClickNotificationBtn = () => {
        alert("notification")
    }

    //handler search
    handleSearch = (value) => {
        alert(value);
    }

    //handler write status
    handleClickFunnyBtn = () => {
        // alert("Funny");
        this.showModalDetailPost();
    }

    //handler clich on menu
    handleMenuClick = (e) => {
        if (e.key === '1') {
            alert("Profile");
        }else if(e.key === '2'){
            this.showModal();
        }else if(e.key === '3'){
            alert("Change password")
        }else if(e.key === '4'){
            alert("Log out")
        }
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

    render(){
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

                <DetailPost 
                    visible={this.state.visibleDetailPost}
                    onCancel={this.handleCancelDetailPost}
                    onCreate={this.handleOkDetailPost}
                >
                </DetailPost>

                <div className="header">
                    <div className="header-wrapper">
                        <div className="item">
                            <ItemHeader content={"Home"} onClick={() => this.handleClickHomeBtn}></ItemHeader>
                            <ItemHeader content={"Notification"} onClick={() => this.handleClickNotificationBtn}></ItemHeader>
                        </div>
                        <div className="search-bar">
                            <Search
                                placeholder="input search text"
                                onSearch={value => this.handleSearch(value)}
                                style={{ width: 250 }}
                            />
                        </div>
                        <Tooltip placement="bottom" title={profile_setting}>
                            <Dropdown overlay={menu} placement="bottomCenter" trigger={['click']}>
                                <div className="avatar-me">
                                    <Avatar size={47} icon="user"/>
                                </div>
                            </Dropdown>
                        </Tooltip>
                        <div className="button-funny-social">
                            <Button type="primary" onClick={this.handleClickFunnyBtn}>Funny</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderPage;
