import React, {Component} from 'react';
import './registerSuccess.css';
import { Input, Button} from 'antd';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Download from '@axetroy/react-download';
import { throws } from 'assert';

const Search = Input.Search;

class RegisterSuccess extends Component{
    state = {
        iconLoadingLogin: false,
        privateKey: ''
    }
    onChangePrivateKey = (e) => {
        this.setState({
            privateKey: e.target.value
        })
    }

    sleep = (time) => {
        return new Promise((resolve) => setTimeout(resolve, time));
    }
    
    handleEnterLogin = () => {
        if(this.state.privateKey.length > 0){
            this.sleep(5000).then(() => {
                var payload = {
                    isLoginSuccess: true
                }
                this.props.actionSetLoginSuccess(payload);
                this.setState({ iconLoadingLogin: false });
            })
            this.setState({ iconLoadingLogin: true });
        }
    }


    handleClickCanncel = () => {
        var payload = {
            privateKey: '',
            publicKey: ''
        }
        this.props.actionGenPrivatePublicKey(payload);
        
        payload = {};
        payload = {
            isRegisterSuccess: false
        }
        this.props.actionSetRegisterSuccess(payload);
    } 

    handleClickDownloadFile = () => {

    }

    render(){
        const {privateKey, publicKey} = this.props;
        var content = 'Private Key: ' + this.props.privateKey + '\n' + 'Public key: ' + this.props.publicKey

        return(
            <div className='container-tab-register-success'>
                <div className='title-tab'>
                    <div className='name-title'>Save Your Private Key And Public Key</div>
                    <div className='button-download-file'>
                        <Download file="privatekey.txt" content={content}>
                            <Button type="primary" icon="download" size={"large"} onClick={this.handleClickDownloadFile}>Download</Button>
                        </Download>
                    </div>
                </div>
                <div className='wrapper-key'>
                    <div className="private-key">
                        <div className="name-private-key">Private Key</div>
                        <div className="wrapper-input-button-key">
                            <Input
                                    placeholder='Private key'
                                    // enterButton='Copy'
                                    size='large'
                                    style={{width: 600}}
                                    disabled={false}
                                    value={privateKey}
                            />
                            <CopyToClipboard text={privateKey}>
                                <Button type="primary" size="large">Copy</Button>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <div className="public-key">
                        <div className="name-public-key">Public Key</div>
                        <div className="wrapper-input-button-key">
                            <Input
                                    placeholder='Private key'
                                    // enterButton='Copy'
                                    size='large'
                                    style={{width: 600}}
                                    disabled={false}
                                    value={publicKey}
                            />
                            <CopyToClipboard text={publicKey}>
                                <Button type="primary" size="large">Copy</Button>
                            </CopyToClipboard>
                        </div>
                    </div>
                </div>
                <div className='wrapper-input-private-key'>
                    <Input
                        placeholder='Enter your private key'
                        enterButton='Login'
                        size='large'
                        style={{width: 615}}
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
                <div className="wrapper-button-canncel">
                    <Button type="danger" size={"large"} style={{width: 685}} onClick={this.handleClickCanncel}>Canncel</Button>
                </div>
            </div>
        )
    }
}

export default RegisterSuccess;
