import React, {Component} from 'react'
import './input-status.css'
import { Modal,  Input, Tooltip, message } from 'antd'
import helpers from '../../helpers/helpers';
import './box-send-money.css';
import axios from 'axios';
import {baseURL} from '../../config/baseURL';
import {transactionGet} from '../../lib/transaction/get';

class BoxUpdateEmail extends Component {
    state={
        newEmail: '',
    }

    onChangeEmail = (e) => {
        this.setState({
            newEmail: e.target.value
        })
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
        const { visible, onCancel, email} = this.props;

        return(
            <div>
                <Modal
                    width={helpers.WIDTH_INPUT_STATUS}
                    visible={visible}
                    okText="Send"
                    title="Update your email"
                    onCancel={onCancel}
                    onOk={this.onCreate}
                >
                    <div className="wrapper-box-send-money">
                        <div className='wrapper-public-key'>
                            <div className="userName">
                                <div>
                                    Email: 
                                </div>
                                <p>
                                    {email}
                                </p>
                            </div>
                            <Input
                                placeholder='Enter new email'
                                size='large'
                                onChange={this.onChangeEmail}
                                value={this.state.newEmail}
                            />
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default BoxUpdateEmail;
