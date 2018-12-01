import React, { Component } from 'react';
import './list-following.css';
import { Row, Col } from 'antd';
import UserReview from '../user-review';

class ListFollowing extends Component {

    maxColumn = 3;

    renderColum = (row) => {
        let res = [];

        for (let j = 0; j < this.maxColumn; j++) {
            res.push(
                <Col span={24 / this.maxColumn}>
                    <UserReview>
                    </UserReview>
                </Col>
            );
        }

        return res;
    }

    renderListUser = () => {
        let a = Array(20).fill(0);

        let nRow = a.length / this.maxColumn;
        let res = [];

        for (let i = 0; i < nRow; i++) {
            res.push(
                <Row>
                    {
                        this.renderColum(i)
                    }
                </Row>
            );
        }

        return res;
    }

    render() {
        return (
            <div className="list-following">
                {
                    this.renderListUser()
                }
            </div>
        );
    }
}

export default ListFollowing;