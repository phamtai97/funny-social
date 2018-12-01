import React, {Component} from 'react';
import './item-header-main.css';

class ItemHeader extends Component {
    // handleClickHomeBtn = () =>{
    //     this.props.history.push('/');
    // }

    render(){
        const content = this.props.content;
        return(
            <div className="item-container selected" onClick={this.props.onClick()}>
                <div className="content">
                    {content}
                </div>
            </div>
        )
    }
}

export default ItemHeader;
