import React, {Component} from 'react';
import './account-box.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Input, Button, Icon, Tooltip} from 'antd';

class AccountBox extends Component {
    render(){
        const {publicKey, balance, oxygen} = this.props;   
        return(
            <div className='container-account-box'>
                <div className='public-key'>
                    <div className="title-public-key">
                        <Icon type="key" />
                        <span>Public Key: </span>
                    </div>
                    <div className="wrapper-input-button-key">
                        <Tooltip placement="bottomRight" title={publicKey}>
                            <Input
                                size='default'
                                disabled={false}
                                value={publicKey}
                            />
                        </Tooltip>
                        <CopyToClipboard text={publicKey}>
                            <Button type="primary" size="default">Copy</Button>
                        </CopyToClipboard>
                    </div>
                </div>
                <div className='container-balance'>
                    <div className='balance-title'>
                        <Icon type="dollar" />
                        <span>Balance: </span>
                    </div>
                    <Tooltip placement="bottomRight" title={balance}>
                        <div className='balance'>
                            {balance}
                        </div>
                    </Tooltip>
                    <div className="unit">
                        TRE
                    </div>
                </div>

                <div className='container-oxygen'>
                    <div className='oxygen-title'>
                        <Icon type="rocket" />  
                        <span>Oxygen: </span>
                    </div>
                    <Tooltip placement="bottomRight" title={oxygen}>
                        <div className='oxygen'>
                            {oxygen}
                        </div>
                    </Tooltip>
                    <div className="unit">
                        OXY
                    </div>
                </div>
            </div>
        )
    }
}

export default AccountBox;
