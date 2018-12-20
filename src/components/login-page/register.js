import React, {Component} from 'react';
import './register.css';
import { Input, Upload, message, Icon, Button} from 'antd';
import { Keypair } from 'stellar-base';

const Search = Input.Search;

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJPG = (file.type === 'image/jpeg' || file.type === 'image/png');
    if (!isJPG) {
        message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
}

class Register extends Component{
    state={
        loading: false, 
        userName: '',
        publicKeyOfReferer: '',
        iconLoadingRegister: false
    }

    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => this.setState({
                imageUrl,
                loading: false,
                
            }));
        }
    }

    handleEnterYourName = (e) => {
        console.log(e.target.value)
    }

    emitEmpty = () => {
        this.userNameInput.focus();
        this.setState({ userName: '' });
    }

    emitEmptyInputPublicKeyOfReferer = () => {
        this.publicKeyRefererInput.focus();
        this.setState({ publicKeyOfReferer: '' });
    }

    onChangeUserName = (e) => {
        this.setState({ userName: e.target.value });
    }

    onChangePublicKeyOfReferer = (e) => {
        this.setState({ publicKeyOfReferer: e.target.value });
    }

    handleClickBtnGenKey = () => {
        const key = Keypair.random();
        var payload = {
            privateKey: key.secret().toString('base64'),
            publicKey: key.publicKey().toString('base64')
        }
        this.props.actionGenPrivatePublicKey(payload);
    }

    sleep = (time) => {
        return new Promise((resolve) => setTimeout(resolve, time));
    }
    
    
    handleClickBtnRegistrer = () => {
        this.sleep(1000).then(() => {
            var payload = {
                isRegisterSuccess: true
            }
            this.props.actionSetRegisterSuccess(payload);
            this.setState({ iconLoadingRegisterRegister: false });
        })
        this.setState({ iconLoadingRegister: true });
    }

    render(){
        var isGenKey = true;
        const {privateKey, publicKey} = this.props;
        const imageUrl = this.state.imageUrl;
        const { userName, publicKeyOfReferer } = this.state;
        const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
        const suffixPublicKeyOfReferer = publicKeyOfReferer ? <Icon type="close-circle" onClick={this.emitEmptyInputPublicKeyOfReferer} /> : null;


        if(privateKey.length > 0 && userName.length > 0){
            isGenKey = false;
        }

        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );

        return(
            <div className="container-register">
                <div className="container-upload-avatar">
                    <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        action="//jsonplaceholder.typicode.com/posts/"
                        beforeUpload={beforeUpload}
                        onChange={this.handleChange}
                        className="update-avatar"
                    >
                        {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
                    </Upload> 
                </div>
                <div className="wrapper-input-username">
                        <Input
                            placeholder="Enter your username"
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            suffix={suffix}
                            value={userName}
                            onChange={this.onChangeUserName}
                            ref={node => this.userNameInput = node}
                            style={{width:600}}
                            size={"large"}
                        />
                </div>

                <div className="wrapper-input-username">
                    <Input
                        placeholder="Enter public key of referrer"
                        prefix={<Icon type="key" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        suffix={suffixPublicKeyOfReferer}
                        value={publicKeyOfReferer}
                        onChange={this.onChangePublicKeyOfReferer}
                        ref={node => this.publicKeyRefererInput = node}
                        style={{width:600}}
                        size={"large"}
                    />
                </div>

                <div className="wrapper-private-key">
                    <Input
                        placeholder='Private key'
                        enterButton='Copy'
                        size='large'
                        style={{width: 600}}
                        disabled={false}
                        value={privateKey}
                    />
                </div>
                
                <div className="wrapper-public-key">
                    <Input
                        placeholder='Public key'
                        enterButton='Copy'
                        size='large'
                        style={{width: 600}}
                        disabled={false}
                        value={publicKey}
                    />
                </div>
                <div className='container-button-gen-register-key'>
                    <div className='wrapper-btn-gen-key'>
                        <Button 
                            type="primary" 
                            size={"large"} 
                            style={{width:280}}
                            icon="key" 
                            onClick={this.handleClickBtnGenKey}>Generate Key</Button> 
                    </div>
                    <div className='wrapper-btn-register-key'>
                        <Button 
                            type="primary" 
                            size={"large"} 
                            style={{width:280}}
                            icon="form"
                            loading={this.state.iconLoadingRegister}
                            disabled={isGenKey}
                            onClick={this.handleClickBtnRegistrer}>Register</Button>                       
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;
