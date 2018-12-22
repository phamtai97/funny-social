import React, {Component} from 'react';
import './input-status.css';
import { Avatar, Button, Input } from 'antd';

const {TextArea} = Input;

class InputStatus extends Component{
    state={
        status: ''
    }
    //handler write status
    handleClickFunnyBtn = () => {
        alert(this.state.status);
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
        return(
            <div>
                <div className="container-status">
                    <div className="container-input-status">
                        <div className="avatar-input-status">
                            <Avatar size={40} icon="user" />
                        </div>
                        <div className="input-status">
                            <TextArea placeholder="What's happening ?" onChange={this.onChange} onPressEnter = {this.handleComment} autosize={{ minRows: 1, maxRows: 6}}/>
                        </div>
                    </div>
                    <div className="container-list-button">
                        <div className="wrapper-button">
                            <Button type="primary" onClick={this.handleClickFunnyBtn}>Funny</Button>                                    
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InputStatus;
