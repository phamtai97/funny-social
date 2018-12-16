import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from '../store/store.js';
import 'antd/dist/antd.css';

import HomePage from '../components/home-page';
import ProfilePage from '../containers/ProfilePage';

import HeaderPage from '../components/header-main';


class App extends Component {
  render() {
    return (
        <Provider store = {store}>
          <BrowserRouter>
            <div className="App">
              <HeaderPage></HeaderPage>
              <Switch>
                <Route exact path = '/' component = {HomePage}/>
                <Route path = '/profile' component = {ProfilePage}/>
              </Switch>
            </div>
          </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
