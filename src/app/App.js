import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from '../store/store.js';
import HomePage from '../components/home-page/home-page.js';
import 'antd/dist/antd.css';
class App extends Component {
  render() {
    return (
        <Provider store = {store}>
          <BrowserRouter>
            <div className="App">
              {/* <Header></Header> */}
              <Switch>
                <Route exact path = '/' component = {HomePage}/>

              </Switch>
            </div>
          </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
