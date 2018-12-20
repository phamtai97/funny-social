import React, {Component} from 'react';
import './home-page.css';
import ListPost from './list-post';
import NavLeftInfo from '../../containers/navLeftInfo';
import InputStatus from './inputStatus';

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
                                <ListPost></ListPost>
                            </div>
                        </div>
                    </div>
                    <div className="nav-right">
                        <div className="container-nav-right">
                            asdasdasd
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default HomePage;
