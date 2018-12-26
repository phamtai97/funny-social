import React, {Component} from 'react'
import './input-status.css'
import { Modal,  Input, Tooltip, message } from 'antd'
import helpers from '../../helpers/helpers';
import './box-send-money.css';
import axios from 'axios';
import {baseURL} from '../../config/baseURL';
import {transactionGet} from '../../lib/transaction/get';

class BoxUpdateName extends Component {
    state={
        newUserName: '',
    }

    onChangeUserName = (e) => {
        this.setState({
            newUserName: e.target.value
        })
    }

    onCreate = () => {
        const {privateKey, publicKey, actionUpdateName} = this.props;
        const newUserName = this.state.newUserName;
        axios.get(baseURL.BASE_URL + baseURL.URL.GET_SEQUENCE + publicKey).then((result) => {
            try{
                var sequence = parseInt(result.data.data.sequence) + 1;
                const tx = transactionGet.updateName(privateKey, sequence, newUserName);
                var payload = {
                    url: baseURL.BASE_URL + baseURL.URL.BROADCAST,
                    Tx: tx,
                    userName: newUserName
                }
                actionUpdateName(payload);
                this.setState({
                    newUserName: '',
                })
            }catch(err){
                message.error(err.toString());
                this.setState({
                    newUserName: '',
                })
            }
        })

        this.props.onCreate();
    }

    render(){
        const { visible, onCancel, userName} = this.props;

        return(
            <div>
                <Modal
                    width={helpers.WIDTH_INPUT_STATUS}
                    visible={visible}
                    okText="Send"
                    title="Update your name"
                    onCancel={onCancel}
                    onOk={this.onCreate}
                >
                    <div className="wrapper-box-send-money">
                        <div className='wrapper-public-key'>
                            <div className="userName">
                                <div>
                                    Your name: 
                                </div>
                                <p>
                                    {userName}
                                </p>
                            </div>
                            <Input
                                placeholder='Enter new name'
                                size='large'
                                onChange={this.onChangeUserName}
                                value={this.state.newUserName}
                            />
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default BoxUpdateName
