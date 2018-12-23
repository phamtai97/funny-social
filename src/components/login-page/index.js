import React, {Component} from 'react';
import './login-page.css';
import { Input, Button} from 'antd';
import classNames from 'classnames';
import RegisterSuccess from '../../containers/registerSuccess';
import Register from '../../containers/register';
import HomePage from '../../components/home-page';
import baseURL from '../../config/baseURL';

const Search = Input.Search;

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
            // var payload = {
            //     url: baseURL + '/',
            //     privateKey: this.state.privateKey
            // }
            // this.props.actionLogin(payload)

            this.sleep(1000).then(() => {
                var payload = {
                    isLoginSuccess: true
                }
                this.props.actionSetLoginSuccess(payload);
            })
            this.setState({ iconLoadingLogin: true });
        }
    }

    onChangePrivateKey = (e) => {
        this.setState({
            privateKey: e.target.value
        })
    }
    
    componentDidUpdate = () => {
        if(this.state.iconLoadingLogin === true){
            this.setState({
                iconLoadingLogin: false
            })
        }
    }

    render(){
        const {tabName}  = this.state;
        const {isRegisterSuccess, isLoginSuccess} = this.props;
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
                            <div className={classNames('tab', {'tab-selected': tabName === 'login'})}>
                                <div className='content' onClick={() => this.handleClickTab('login')}>Login</div>
                            </div>
                            <div className={classNames('tab', {'tab-selected': tabName === 'register'})}>
                                <div className='content' onClick={() => this.handleClickTab('register')}>Register</div>
                            </div>
                        </div>
                    </div>
                    <div className='content-tab'>
                        {
                            tabName === 'login' ? 
                            (
                                <div className='container-tab-login'>
                                    <div className='title-tab'>
                                        Enter Private Key
                                    </div>
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
                            :
                            (   
                                <div>
                                    {
                                        isRegisterSuccess ?
                                        (
                                            <div>
                                                <RegisterSuccess></RegisterSuccess>
                                            </div>
                                        ) 
                                        :
                                        (
                                            <div className='container-tab-register'>
                                                <Register></Register>
                                            </div>
                                        )
                                    }
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage;
