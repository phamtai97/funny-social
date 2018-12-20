import React, {Component} from 'react';
import './input-status.css';
import { Avatar, Button, Input } from 'antd';

const {TextArea} = Input;

class InputStatus extends Component{
    //handler write status
    handleClickFunnyBtn = () => {
        alert("Funny");
    }

    handleComment = (e) => {
        alert(e.target.value );
    }
    
    render(){
        return(
            <div>
                <div className="container-status">
                    <div className="container-input-status">
                        <div className="avatar-input-status">
                            <Avatar size={50} icon="user" />
                        </div>
                        <div className="input-status">
                            <TextArea placeholder="What's happening ?" onPressEnter = {this.handleComment} autosize={{ minRows: 2, maxRows: 6}}/>
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
