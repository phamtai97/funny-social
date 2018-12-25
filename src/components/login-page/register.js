import React, {Component} from 'react';
import './register.css';
import { Input, Icon, Button, message} from 'antd';
import {baseURL} from '../../config/baseURL';
import {transactionGet} from '../../lib/transaction/get';
import axios from 'axios';
const { Keypair } = require('stellar-base');

// function getBase64(img, callback) {
//     const reader = new FileReader();
//     reader.addEventListener('load', () => callback(reader.result));
//     reader.readAsDataURL(img);
// }

// function beforeUpload(file) {
//     const isJPG = (file.type === 'image/jpeg' || file.type === 'image/png');
//     if (!isJPG) {
//         alert('You can only upload JPG file!');
//     }
//     const isLt2M = file.size / 1024 / 1024 / 1024 < 20;
//     if (!isLt2M) {
//         alert('Image must smaller than 20KB!');
//     }
//     return isJPG && isLt2M;
// }

class Register extends Component{
    state={
        loading: false, 
        privateKey: 'SA72RQJR3RUU4ACDSM3QMLYQIH3FIWRGFI3HM6X7NPYT3GMEPNNPNMEP',
        publicKey: '',
        iconLoadingRegister: false
    }

    emitEmpty = () => {
        this.privateKeyInput.focus();
        this.setState({ privateKey: '' });
    }

    emitEmptyInputPublicKeyOfReferer = () => {
        this.publicKeyRefererInput.focus();
        this.setState({ publicKey: '' });
    }

    onChangePrivatekey = (e) => {
        this.setState({ privateKey: e.target.value });
    }

    onChangePublicKey = (e) => {
        this.setState({ publicKey: e.target.value });
    }


    sleep = (time) => {
        return new Promise((resolve) => setTimeout(resolve, time));
    }
    
    
    handleClickBtnRegistrer = () => {
        const key = Keypair.fromSecret(this.state.privateKey);
        const publicKey = key.publicKey();
        axios.get(baseURL.BASE_URL + baseURL.URL.GET_SEQUENCE + publicKey).then((result) => {
            try{
                var sequence = parseInt(result.data.data.sequence) + 1;
                const tx = transactionGet.createAccount(this.state.privateKey, sequence, this.props.publicKey)
                var payload = {
                    url: baseURL.BASE_URL + baseURL.URL.BROADCAST,
                    Tx: tx
                }
                this.props.actionRegister(payload)
        
                this.setState({ iconLoadingRegister: true });
            }catch(err){
                console.log('error: ',err)
                message.error('Register account failed !!!');
                this.setState({
                    iconLoadingRegister: false,
                    privateKey: '',
                    publicKey: ''
                })
            }
        })

    }
    
    componentDidUpdate = () => {
        if(this.props.isRegisterSuccess === true && this.state.iconLoadingRegister === true){
            message.success('Register account successed!!!');
            this.setState({
                iconLoadingRegister: false,
                privateKey: '',
                publicKey: ''
            })

        }else if(this.props.isRegisterSuccess === false && this.state.iconLoadingRegister === true){
            message.error('Register account failed !!!');
            this.setState({
                iconLoadingRegister: false,
                privateKey: '',
                publicKey: ''
            })
        }
    }
        

    render(){
        var isGenKey = true;
        const {isRegisterSuccess} = this.props;
        const {iconLoadingRegister} = this.state;
        const suffix = this.state.privateKey ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
        const suffixPublicKeyOfReferer = this.state.publicKey ? <Icon type="close-circle" onClick={this.emitEmptyInputPublicKeyOfReferer} /> : null;

        if(this.state.publicKey.length > 0 && this.state.privateKey.length > 0){
            isGenKey = false;
        }
        return(
            <div className="container-register">
                <div className="wrapper-input-key">
                    <Input
                        placeholder="Enter private key"
                        prefix={<Icon type="key" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        suffix={suffix}
                        value={this.state.privateKey}
                        onChange={this.onChangePrivatekey}
                        ref={node => this.privateKeyInput = node}
                        style={{width:600}}
                        size={"large"}
                    />
                </div>

                <div className="wrapper-input-key">
                    <Input
                        placeholder="Enter public key"
                        prefix={<Icon type="key" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        suffix={suffixPublicKeyOfReferer}
                        value={this.state.publicKey}
                        onChange={this.onChangePublicKey}
                        ref={node => this.publicKeyRefererInput = node}
                        style={{width:600}}
                        size={"large"}
                    />
                </div>

                
                <div className='container-button-gen-register-key'>
                    <div className='wrapper-btn-register-key'>
                        <Button 
                            type="primary" 
                            size="large"
                            icon="form"
                            width={1000}
                            loading={iconLoadingRegister}
                            disabled={isGenKey}
                            onClick={this.handleClickBtnRegistrer}>Register</Button>                       
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;
