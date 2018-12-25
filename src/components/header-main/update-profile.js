import React, { Component } from 'react';
import './update-profile.css';
import { Modal, Upload, Icon, message, Form, Input} from 'antd';

const FormItem = Form.Item;

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

class UpdateProfile extends Component {
    state={
        loading: false, 
    }

    handleOnCreate = () => {
        this.props.onCreate(this.state.imageUrl)
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

    render() {
        const { visible, onCancel, form } = this.props;
        const { getFieldDecorator } = form;
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        
        const imageUrl = this.state.imageUrl;

        return (
            <div className="container-update-profile">
                <Modal
                    visible={visible}
                    title="Update your profile"
                    okText="Update"
                    onCancel={onCancel}
                    onOk={this.handleOnCreate}
                >
                    <Form layout="vertical" className="container-form">
                        <div className="container-upload">
                            <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                action="//jsonplaceholder.typicode.com/posts/"
                                beforeUpload={beforeUpload}
                                onChange={this.handleChange}
                            >
                                {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
                            </Upload> 
                        
                        </div>
                        
                        <FormItem label="New your name">
                            {getFieldDecorator('newName', {
                                rules: [{ required: true, message: 'Please input the new your name!' }],
                            })
                            (
                                <Input />
                            )}
                        </FormItem>
                        <FormItem label="New your gmail">
                            {getFieldDecorator('email', {
                                rules: [{
                                    type: 'email', message: 'The input is not valid E-mail!',
                                    }, {
                                    required: true, message: 'Please input new your E-mail!',
                                }],
                            })
                                (<Input/>)
                            }
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        );
    }
}

export default Form.create()(UpdateProfile);
