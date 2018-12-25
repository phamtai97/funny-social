import React, {Component} from 'react'
import './input-status.css'
import { Modal,  Input, Tooltip, message } from 'antd'
import helpers from '../../helpers/helpers';
import './box-send-money.css';
import axios from 'axios';
import {baseURL} from '../../config/baseURL';
import {transactionGet} from '../../lib/transaction/get';

class BoxSendMoney extends Component {
    state={
        publicKey: '',
        money: ''
    }

    onChangePublicKey = (e) => {
        this.setState({
            publicKey: e.target.value
        })
    }

    onCreate = () => {
        const {privateKey, publicKey, actionSendMoney} = this.props;
        const publicKeyReceiver = this.state.publicKey ;
        const moneySend = this.state.money;
        axios.get(baseURL.BASE_URL + baseURL.URL.GET_SEQUENCE + publicKey).then((result) => {
            try{
                var sequence = parseInt(result.data.data.sequence) + 1;
                const tx = transactionGet.payment(privateKey, sequence, publicKeyReceiver, parseInt(moneySend));
                var payload = {
                    url: baseURL.BASE_URL + baseURL.URL.BROADCAST,
                    Tx: tx,
                    moneySend: moneySend
                }
                actionSendMoney(payload);
                this.setState({
                    publicKey: '',
                    money: ''
                })
            }catch(err){
                message.error(err.toString());
                this.setState({
                    publicKey: '',
                    money: ''
                })
            }
        })

        this.props.onCreate();
    }

    handleComment = (e) => {
        alert(e.target.value );
    }

    onChangeMoney = (value) => {
        this.setState({ money: value });
    }



    render(){
        const { visible, onCancel} = this.props;
        return(
            <div>
                <Modal
                    width={helpers.WIDTH_INPUT_STATUS}
                    visible={visible}
                    title="Send money"
                    okText="Send"
                    onCancel={onCancel}
                    onOk={this.onCreate}
                >
                    <div className="wrapper-box-send-money">
                        <div className='wrapper-public-key'>
                            <Input
                                placeholder='Enter public key'
                                size='large'
                                onChange={this.onChangePublicKey}
                                value={this.state.publicKey}
                            />
                            <NumericInput className='input-money'
                                size='large'
                                value={this.state.money} 
                                onChange={this.onChangeMoney} />
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default BoxSendMoney

function formatNumber(value){
    value += '';
    const list = value.split('.');
    const prefix = list[0].charAt(0) === '-' ? '-' : '';
    let num = prefix ? list[0].slice(1) : list[0];
    let result = '';
    while (num.length > 3) {
        result = `,${num.slice(-3)}${result}`;
        num = num.slice(0, num.length - 3);
    }
    if (num) {
        result = num + result;
    }
    return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`;
}

class NumericInput extends React.Component {
    onChange = (e) => {
        const { value } = e.target;
        const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
        if ((!Number.isNaN(value) && reg.test(value)) || value === '' || value === '-') {
            this.props.onChange(value);
        }
    }

    // '.' at the end or only '-' in the input box.
    onBlur = () => {
        const { value, onBlur, onChange } = this.props;
        if (value.charAt(value.length - 1) === '.' || value === '-') {
            onChange({ value: value.slice(0, -1) });
        }
        if (onBlur) {
            onBlur();
        }
    }

    render() {
        const { value } = this.props;
        const title = value ? (
            <span className="numeric-input-title">
            {value !== '-' ? formatNumber(value) : '-'}
            </span>
        ) : 'Enter money';
        return (
            <Tooltip
            trigger={['focus']}
            title={title}
            placement="topLeft"
            overlayClassName="numeric-input"
            >
            <Input
                {...this.props}
                onChange={this.onChange}
                onBlur={this.onBlur}
                placeholder="Enter money"
            />
        </Tooltip>
        );
    }
}
