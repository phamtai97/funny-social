import React, {Component} from 'react';
import './genPublicKey.css';
import { Input, Button} from 'antd';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Download from '@axetroy/react-download';
import { Keypair } from 'stellar-base';


class GenPublicKey extends Component{
    state = {
        iconLoadingLogin: false,
        privateKey: '',
        publicKey: '',
    }

    sleep = (time) => {
        return new Promise((resolve) => setTimeout(resolve, time));
    }
    
    handleGenKey = () => {
        const key = Keypair.random();
        this.setState({
            privateKey: key.secret().toString('base64'),
            publicKey: key.publicKey().toString('base64'),
        })
    }


    handleClickCanncel = () => {
        this.setState({
            privateKey: '',
            publicKey: ''
        })
    } 

    componentDidMount = () => {
        if(this.state.publicKey.length == 0 && this.state.privateKey.length === 0) {
            const key = Keypair.random();
            this.setState({
                privateKey: key.secret().toString('base64'),
                publicKey: key.publicKey().toString('base64'),
            })
        }
    }

    render(){
        const {privateKey, publicKey} = this.state;
        var isDownload = true;
        var content = JSON.stringify({PrivateKey : this.state.privateKey, PublicKey: this.state.publicKey});
        if(privateKey.length > 0 && publicKey.length > 0){
            isDownload = false;
        }
        return(
            <div className='container-tab-register-success'>
                <div className='title-tab'>
                    <div className='name-title'>Save Your Private Key And Public Key</div>
                    <div className='button-download-file'>
                        <Download file="privatekey.txt" content={content}>
                            <Button 
                                type="primary" 
                                icon="download" 
                                size={"large"} 
                                disabled={isDownload}
                                onClick={this.handleClickDownloadFile}>Download</Button>
                        </Download>
                    </div>
                </div>
                <div className='wrapper-key'>
                    <div className="private-key">
                        <div className="name-private-key">Private Key</div>
                        <div className="wrapper-input-button-key">
                            <Input
                                    placeholder='Private key'
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
                <div className='wrapper-decided-button'>
                    <div className='wrapper-button-genkey'>
                        <Button 
                            type="primary" 
                            size="large"
                            style={{width: 300}} 
                            loading={this.state.iconLoadingLogin}
                            onClick={this.handleGenKey}>Generate Key</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default GenPublicKey;
