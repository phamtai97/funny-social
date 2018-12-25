import React, {Component} from 'react';
import './home-page.css';
import ListPostHomePage from '../../containers/listPostHomePage';
import NavLeftInfo from '../../containers/navLeftInfo';
import InputStatus from '../../containers/inputStatus';
import NavRightNotification from '../../containers/navRightNotification';

class HomePage extends Component{
    
    render() {
        return (
            <div className="container-home-page">
                <div className="warpper-home-page">
                    <div className="nav-left">
                        <NavLeftInfo></NavLeftInfo>
                    </div>
                    <div className="nav-center">
                        <div className="container-nav-center">
                            <InputStatus></InputStatus>
                            <div className="container-post">
                                <ListPostHomePage></ListPostHomePage>
                            </div>
                        </div>
                    </div>
                    <div className="nav-right">
                        <div className="container-nav-right">
                            <NavRightNotification></NavRightNotification>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default HomePage;
