import React, {Component} from 'react'
import './input-status.css'
import { Modal,  Input, Tooltip } from 'antd'
import helpers from '../../helpers/helpers';
import './box-send-money.css';


class BoxSendMoney extends Component {
    state={
        publicKey: '',
        money: ''
    }

    onChangePublicKey = (e) => {
        this.setState({
            publicKey:e.target.value
        })
    }
    //handler write status
    onCreate = () => {
        alert(this.state.publicKey + this.state.money)
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
