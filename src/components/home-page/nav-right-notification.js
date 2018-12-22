import React, {Component} from 'react';
import './nav-right-notification.css'
import ItemNotification from './item-notification';
import {withRouter} from "react-router-dom";

class NavRightNotification extends Component{
    handleClickSeeMore = () => {
        this.props.history.push('/notification');
        var payload = {
            itemHeaderMain: 'notification'
        }
        this.props.actionSetItemHeaderMainSelected(payload);
    }
    render() {
        let a = Array(5).fill(0);
        let cnt = 0;
        return(
            <div className="container-nav-right-notification">
                <div className="title">
                    News
                </div>
                <div className='list-notification'>
                    {
                        a.map(()=> {
                            cnt++;
                            return <ItemNotification key={cnt}/>
                        })
                    }
                </div>
                <div className='footer' onClick={this.handleClickSeeMore}>
                    See more
                </div>
            </div>
        )
    }
}

export default withRouter(NavRightNotification);
