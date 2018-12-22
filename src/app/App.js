import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import 'antd/dist/antd.css';
import HomePage from '../components/home-page';
import ProfilePage from '../containers/profilePage';
import HeaderMain from '../containers/headerMain';
import LoginPage from '../containers/login';
import NotificationPage from '../components/notification-page';

class App extends Component {
  render() {
    const {isLoginSuccess} = this.props;
    return (
          <BrowserRouter>
            <div className="App">
              {isLoginSuccess ? 
                <HeaderMain></HeaderMain> : null
              }
              <Switch>
                <Route exact path = '/' component = {LoginPage}/>
                <Route path = '/profile' component = {ProfilePage}/>
                <Route path = '/notification' component = {NotificationPage}/>
              </Switch>
            </div>
          </BrowserRouter>
    );
  }
}

export default App;
