import React, { Component } from 'react';
import './FollowButton.css';

class FollowButton extends Component {

    getFollowBtnClassName = (index) => {
        let res = this.props.className;
        if (index === 1) {
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