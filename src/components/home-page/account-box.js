import React, {Component} from 'react';
import './account-box.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Input, Button, Icon} from 'antd';

class AccountBox extends Component {
    render(){
        const {publicKey} = this.props;   
        const money = "100000000000000000000000000000";  
        const oxygen = "11111111111111111"   
        return(
            <div className='container-account-box'>
                <div className='public-key'>
                    <div className="title-public-key">
                        <Icon type="key" />
                        <span>Public Key</span>
                    </div>
                    <div className="wrapper-input-button-key">
                        <Input
                            size='default'
                            disabled={false}
                            value={publicKey}
                        />
                        <CopyToClipboard text={publicKey}>
                            <Button type="primary" size="default">Copy</Button>
                        </CopyToClipboard>
                    </div>
                </div>
                <div className='container-balance'>
                    <div className='balance-title'>
                        <Icon type="dollar" />
                        <span>Balance</span>
                    </div>
                    <div className='money'>
                        {money}
                    </div>
                </div>

                <div className='container-oxygen'>
                    <div className='oxygen-title'>
                        <Icon type="rocket" />  
                        <span>Oxygen</span>
                    </div>
                    <div className='oxygen'>
                        {oxygen}
                    </div>
                </div>
            </div>
        )
    }
}

export default AccountBox;
