import React, { Component } from 'react';
import './header.css';
import ItemHeader from '../item-header/item-header.js';

class HeaderPage extends Component{
    render(){
        return(
            <div className="header-container">
                <div className="header">
                    {/* <ItemHeader content={Home}></ItemHeader> */}
                </div>
            </div>
        )
    }
}

export default HeaderPage;
