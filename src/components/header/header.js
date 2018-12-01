import React, { Component } from 'react';
import { Layout, Menu, Avatar, Input} from 'antd';
import './header.css';
const { Header} = Layout;
const Search = Input.Search;


class HeaderPage extends Component{
    render(){
        return(
            <div className="header">
                <Layout>
                    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                        <Menu
                            them="light"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{ lineHeight: '62px' }}
                            className="header-menu"
                        >
                            <Menu.Item key="1" className="item">Home</Menu.Item>
                            <Menu.Item key="2">nav 2</Menu.Item>
                            <Menu.Item key="3">nav 3</Menu.Item>
                        </Menu>

                        {/* <Search
                            placeholder="input search text"
                            onSearch={value => console.log(value)}
                            enterButton
                        />
                        <Avatar size={50} icon="user" /> */}
                    </Header>
                </Layout>
            </div>
        )
    }
}

export default HeaderPage;
