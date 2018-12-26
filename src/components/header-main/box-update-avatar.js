import React, {Component} from 'react'
import './input-status.css'
import { Modal, message, Upload, Icon } from 'antd'
import helpers from '../../helpers/helpers';
import './box-send-money.css';
import axios from 'axios';
import {baseURL} from '../../config/baseURL';
import {transactionGet} from '../../lib/transaction/get';


function getBase64(img, callback) {
    const reader = new FileReader();  
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    console.log('file: ', file);

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

class BoxUpdateAvatar extends Component {
    state={
        newAvatar: '',
        imageUrl: '',
        loading: false,
        previewImage: '',
        previewVisible: false,
    }

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }
    //handle update avatar
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

    onCreate = () => {
        const {privateKey, publicKey, actionUpdateEmail} = this.props;
        const newEmail = this.state.newEmail;
        axios.get(baseURL.BASE_URL + baseURL.URL.GET_SEQUENCE + publicKey).then((result) => {
            try{
                var sequence = parseInt(result.data.data.sequence) + 1;
                const tx = transactionGet.updateEmail(privateKey, sequence, newEmail);
                var payload = {
                    url: baseURL.BASE_URL + baseURL.URL.BROADCAST,
                    Tx: tx,
                    newEmail: newEmail
                }
                actionUpdateEmail(payload);
                this.setState({
                    newEmail: '',
                })
            }catch(err){
                message.error(err.toString());
                this.setState({
                    newEmail: '',
                })
            }
        })

        this.props.onCreate();
    }


    render(){
        const { visible, onCancel, avatar} = this.props;
        const { previewVisible, previewImage} = this.state;
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
                        <div className='wrapper-public-key'>
                            <div className="avatar">

                            </div>
                            <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                action="//jsonplaceholder.typicode.com/posts/"
                                onPreview={this.handlePreview}
                                beforeUpload={beforeUpload}
                                onChange={this.handleChange}
                            >
                                {imageUrl ? <img src={imageUrl} alt="avatar" /> : <img src={previewImage} alt="avatar" /> }
                            </Upload> 
                            <Modal visible={previewVisible} footer={null}>
                                <img alt="avatar" style={{ width: '100%' }} src={previewImage} />
                            </Modal>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default BoxUpdateAvatar;
