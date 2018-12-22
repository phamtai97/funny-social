import React, {Component} from 'react'
import './notification-page.css'
import ItemNotification from '../home-page/item-notification';

class NotificationPage extends Component{
    render(){
        let a = Array(100).fill(0);
        let cnt = 0;

        return(
            <div className="container-notification-page">
                <div className="container-notification-nav-center">
                    <div className="title-notication">
                        Your Notifications
                    </div>
                    <div className="list-notification">
                        {
                            a.map(()=> {
                                cnt++;
                                return <ItemNotification key={cnt}/>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default NotificationPage;
