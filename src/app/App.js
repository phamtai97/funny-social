import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import 'antd/dist/antd.css';
import HomePage from '../components/home-page';
import ProfilePage from '../containers/profilePage';
import HeaderMain from '../containers/headerMain';
import LoginPage from '../containers/login';

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
                {/* <Route path ='/login' component = {LoginPage}/> */}
                <Route path = '/profile' component = {ProfilePage}/>
              </Switch>
            </div>
          </BrowserRouter>
    );
  }
}

export default App;
