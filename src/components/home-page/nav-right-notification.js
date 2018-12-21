import React, {Component} from 'react';
import './nav-right-notification.css'
import ItemNotification from './item-notification';

class NavRightNotification extends Component{
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
                <div className='footer'>
                    See more
                </div>
            </div>
        )
    }
}

export default NavRightNotification;
