import React, { Component } from 'react';
import './FollowButton.css';

class FollowButton extends Component {

    getFollowBtnClassName = () => {
        let res = this.props.className;
        if ('following' === this.props.type) {
            return res + " following-text"
        }

        return res + " follow-text";
    }

    render() {
        console.log(this);
        return (
            <div className={this.getFollowBtnClassName(new Date().getTime() % 2)}
                onClick={() => this.props.onClick()}
            >
            </div>
        );
    }
}

export default FollowButton;