import React, { Component } from 'react';
import './header-main.css';
import ItemHeader from './item-header-main';
import { Input, Button, Avatar } from 'antd';


const Search = Input.Search;
class HeaderPage extends Component{
    render(){
        return(
            <div className="header-container">
                <div className="header">
                    <div className="item">
                        <ItemHeader content={"Home"}></ItemHeader>
                        <ItemHeader content={"Notification"}></ItemHeader>
                    </div>
                    <div className="search-bar">
                        <Search
                            placeholder="input search text"
                            onSearch={value => console.log(value)}
                            style={{ width: 250 }}
                        />
                    </div>
                    <div className="avatar-me">
                        <Avatar size={50} icon="user" />
                    </div>
                    <div className="button-funny-social">
                        <Button type="primary">Funny</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderPage;
