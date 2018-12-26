import React, {Component} from 'react'
import './input-status.css'
import { Modal, message, Upload, Icon } from 'antd'
import helpers from '../../helpers/helpers';
import './box-send-money.css';
import axios from 'axios';
import {baseURL} from '../../config/baseURL';
import {transactionGet} from '../../lib/transaction/get';
import fs from 'fs';




function beforeUpload(file) {

    const isJPG = (file.type === 'image/jpeg' || file.type === 'image/png');
    if (!isJPG) {
        message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 /1024 < 20;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
}

class BoxUpdateAvatar extends Component {
    state={
        newAvatar: '',
        imageUrl: '',
        loading: false,
    }

    onChangeEmail = (e) => {
        this.setState({
            newEmail: e.target.value
        })
    }

    getBase64 = (img) => {
        if(this.state.imageUrl.length === 0){
            const reader = new FileReader();
            reader.readAsDataURL(img);

            reader.onloadend = () => {
                this.setState({
                    imageUrl: reader.result
                })
            };
        }
    }

    //handle update avatar
    handleChange = (info) => {
        this.getBase64(info.file.originFileObj);
    }


    onCreate = () => {
        const {privateKey, publicKey, actionUpdateAvatar} = this.props;
        axios.get(baseURL.BASE_URL + baseURL.URL.GET_SEQUENCE + publicKey).then((result) => {
            try{
                var sequence = parseInt(result.data.data.sequence) + 1;
                const tx = transactionGet.updatePicture(privateKey, sequence, this.state.imageUrl);
                var payload = {
                    url: baseURL.BASE_URL + baseURL.URL.BROADCAST,
                    Tx: tx,
                    // newEmail: newEmail
                }
                actionUpdateAvatar(payload);
                this.setState({
                    imageUrl: '',
                })
            }catch(err){
                console.log('err: ', err)
                message.error(err.toString());
                this.setState({
                    imageUrl: '',
                })
            }
        })

        this.props.onCreate();
    }


    render(){
        const { visible, onCancel, avatar} = this.props;
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        
        const imageUrl = this.state.imageUrl;
        return(
            <div>
                <Modal
                    width={helpers.WIDTH_INPUT_STATUS}
                    visible={visible}
                    okText="Send"
                    title="Update your avatar"
                    onCancel={onCancel}
                    onOk={this.onCreate}
                >
                    <div className="wrapper-box-send-money">
                        <div className='container-avatar'>
                            <div className="wrapper-avatar">
                                <Upload
                                    name="avatar"
                                    listType="picture-card"
                                    className="avatar-uploader"
                                    showUploadList={false}
                                    action="//jsonplaceholder.typicode.com/posts/"
                                    beforeUpload={beforeUpload}
                                    onChange={this.handleChange}
                                >
                                    {imageUrl  ? <img src={imageUrl} alt="avatar" />
                                    :
                                    <img src={avatar} alt="avatar" />}
                                </Upload> 
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default BoxUpdateAvatar;
