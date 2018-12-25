import React, {Component} from 'react';
import './login-page.css';
import { Input, Button, message} from 'antd';
import classNames from 'classnames';
import GenPublicKey from '../../containers/genPublicKey';
import Register from '../../containers/register';
import HomePage from '../../containers/homePage';
import {baseURL} from '../../config/baseURL';
import {transactionGet} from '../../lib/transaction/get';
const { Keypair } = require('stellar-base');


class LoginPage extends Component {
    state = {
        tabName: 'login',
        privateKey: '',
        iconLoadingLogin: false ,
    }

    handleClickTab = (tabName) => {
        this.setState({
            tabName: tabName
        })    
    }

    sleep = (time) => {
        return new Promise((resolve) => setTimeout(resolve, time));
    }
    
    handleEnterLogin = () => {
        if(this.state.privateKey.length > 0){
            try{
                const tx = transactionGet.login(this.state.privateKey);
                var payload = {
                    url: baseURL.BASE_URL + baseURL.URL.LOGIN,
                    tx: tx
                }
                this.props.actionLogin(payload)
                this.setState({ iconLoadingLogin: true});
            }catch (err) {
                console.log('err login: ', err)
                message.error('Login failed !!!');
            }
        }
    }

    onChangePrivateKey = (e) => {
        this.setState({
            privateKey: e.target.value
        })
    }
    
    componentDidUpdate = () => {
        if(this.props.isLoginSuccess === true && this.state.iconLoadingLogin === true){
            const payload = {
                privateKey: this.state.privateKey,
                publicKey: 'GDMZJFJVTR4PWYGZJEHN2USXQSEXNKET4AWDIUNJX7ZE56PUCTEY5NOO'
            }
            this.props.actionGenPrivatePublicKey(payload)
            //encode privatekey and save to storage

            const privateKeyEncode = btoa(this.state.privateKey);
            localStorage.setItem('privateKey', privateKeyEncode);
            this.setState({
                iconLoadingLogin: false,
                privateKey: ''
            })
        }
    }

    renderTab = (nameTab) => {
        if(nameTab === 'login'){
            return (
                <div className='container-tab-login'>
                    <div className='wrapper-input-private-key'>
                        <Input
                                placeholder='Enter your private key'
                                enterButton='Login'
                                size='large'
                                style={{width: 600}}
                                onChange={this.onChangePrivateKey}
                                onPressEnter={this.handleEnterLogin}
                        />
                        <Button 
                            type="primary" 
                            size="large"
                            loading={this.state.iconLoadingLogin}
                            onClick={this.handleEnterLogin}
                        >Login</Button>
                    </div>
                </div>
            )
        } else if (nameTab === 'register'){
            return (
                <div className='container-tab-register'>
                    <Register></Register>
                </div>
            )
        }else {
            return (
                <GenPublicKey></GenPublicKey>
            )
        }
    }

    handleDeleteDataInStorage = () => {
        const privateKeyEncode = localStorage.getItem('privateKey');  
        if(this.props.isLogoutSuccess === true && this.props.isLoginSuccess === false && privateKeyEncode){
            localStorage.removeItem('privateKey')
        }
    }

    render(){
        const {tabName}  = this.state;
        const {isLoginSuccess} = this.props;
        this.handleDeleteDataInStorage();
        if(isLoginSuccess){
            return(
                <div>
                    <HomePage></HomePage>
                </div>
            )
        }

        return (
            <div className='login-page'>
                <div className='container-login-page'>
                    <div className='title'>
                        Funny Social
                    </div>
                    <div className='header-tab'>
                        <div className='wrapper-header-tab'>
                            <div className={classNames('tab-login', {'tab-selected': tabName === 'login'})}>
                                <div className='content' onClick={() => this.handleClickTab('login')}>Login</div>
                            </div>
                            <div className={classNames('tab-register', {'tab-selected': tabName === 'register'})}>
                                <div className='content' onClick={() => this.handleClickTab('register')}>Register</div>
                            </div>
                            <div className={classNames('tab-generatekey', {'tab-selected': tabName === 'generatekey'})}>
                                <div className='content' onClick={() => this.handleClickTab('generatekey')}>Generate Key</div>
                            </div>
                        </div>
                    </div>
                    <div className='content-tab'>
                        {
                            this.renderTab(tabName)
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage;
