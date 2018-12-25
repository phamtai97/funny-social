import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import 'antd/dist/antd.css';
import ProfilePage from '../containers/profilePage';
import HeaderMain from '../containers/headerMain';
import LoginPage from '../containers/login';
import NotificationPage from '../components/notification-page';
import HistoryPage from '../components/history-page';



class App extends Component {
  componentDidMount = () => {
    const privateKeyEncode = localStorage.getItem('privateKey');  
    if(privateKeyEncode){
      const privateKeyDecode = atob(privateKeyEncode);
      var payload = {
        isLoginSuccess: true
      }
      this.props.actionSetLoginSuccess(payload);
      payload = {
        privateKey: privateKeyDecode
      }
      this.props.actionGenPrivatePublicKey(payload)
    }
  }

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
                <Route path ='/history' component =  {HistoryPage}/>
              </Switch>
            </div>
          </BrowserRouter>
    );
  }
}

export default App;
