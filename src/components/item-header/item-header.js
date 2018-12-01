import React, {Component} from 'react';
import './item-header.css';

class ItemHeader extends Component {
    render(){
        const content = this.props.content;
        return(
            <div className="item-container">
                <div className="content">
                    {content}
                </div>
            </div>
        )
    }
}

export default ItemHeader;
