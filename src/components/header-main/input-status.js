import React, {Component} from 'react'
import './input-status.css'
import { Modal, Avatar,  Input } from 'antd'
import helpers from '../../helpers/helpers';
import axios from 'axios';
import {baseURL} from '../../config/baseURL';
import {transactionGet} from '../../lib/transaction/get';
import moment from 'moment';
import {typeActivity} from '../../config/typeActivity';

const {TextArea} = Input;

class InputStatus extends Component {
    state = {
        status: ''
    }
    //handler write status
    onCreate = () => {
        const status = this.state.status;
        const privateKey = this.props.privateKey;
        const publicKey = 'GDMZJFJVTR4PWYGZJEHN2USXQSEXNKET4AWDIUNJX7ZE56PUCTEY5NOO';

        axios.get(baseURL.BASE_URL + baseURL.URL.GET_SEQUENCE + publicKey).then((result) => {
            console.log('result sequence: ', result.data.data.sequence);

            try{
                var sequence = parseInt(result.data.data.sequence) + 1;
                const tx = transactionGet.post(privateKey, sequence, status);
                var payload = {
                    url: baseURL.BASE_URL + baseURL.URL.BROADCAST,
                    Tx: tx,
                    itemPost:{
                        avatarUrl: "https://f22-org-zp.zdn.vn/009bacc892dc798220cd.jpg",
                        interactPerson: 'Vo Minh Tri',
                        time: moment().format(helpers.FORMAT_DATE),
                        type: typeActivity.POST,
                        content: status,
                        cntLove: 0,
                        cntLike: 0,
                        cntAngry: 0,
                        cntCmt: 0,
                        cntShare: 0
                    }
                }
                this.props.actionPushNewPostHomePage(payload);
                this.setState({
                    status: ''
                })
            }catch(err){
                console.log('error: ',err)
            }
        })
        this.props.onCreate();
    }

    // handleComment = (e) => {
    //     alert(e.target.value );
    // }
    
    onChange = (e) => {
        this.setState({
            status: e.target.value
        })
    }

    render(){
        const { visible, onCancel} = this.props;
        
        return(
            <div>
                <Modal
                    width={helpers.WIDTH_INPUT_STATUS}
                    visible={visible}
                    title="Compose new Funny"
                    okText="Funny"
                    onCancel={onCancel}
                    onOk={this.onCreate}
                >
                    <div className="wrapper-input-status">
                        <div className="avatar-input-status">
                            <Avatar size={50} icon="user" />
                        </div>
                        <div className="input-status">
                            <TextArea placeholder="What's happening ?" onChange={this.onChange} onPressEnter = {this.handleComment} autosize={{ minRows: 1, maxRows: 6} }/>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default InputStatus
