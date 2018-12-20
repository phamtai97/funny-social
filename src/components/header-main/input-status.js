import React, {Component} from 'react'
import './input-status.css'
import { Modal, Avatar,  Input } from 'antd'
import helpers from '../../helpers/helpers';

const {TextArea} = Input;

class InputStatus extends Component {
    //handler write status
    onCreate = () => {
        this.props.onCreate();
    }

    handleComment = (e) => {
        alert(e.target.value );
    }
    
    render(){
        const { visible, onCancel, onCreate} = this.props;
        
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
                            <TextArea placeholder="What's happening ?" onPressEnter = {this.handleComment} autosize={{ minRows: 2, maxRows: 6}}/>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default InputStatus
