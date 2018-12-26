import React, { Component } from 'react';
import './list-follower.css';
import { Row, Col } from 'antd';
import UserReview from '../user-review';
import {baseURL} from '../../config/baseURL';

class ListFollower extends Component {

    maxColumn = 3;

    renderColum = (row, listFollowingProfilePage) => {
        var index = row * this.maxColumn;

        let res = [];

        for (let j = 0; j < this.maxColumn && j < listFollowingProfilePage.length; j++) {
            res.push(
                <Col span={24 / this.maxColumn}>
                    <UserReview user={listFollowingProfilePage[j + index]} type={'follower'} key={j}>
                    </UserReview>
                </Col>
            );
        }

        return res;
    }

    getTag(){
        const url = window.location.href.split('/');

        if(url.length === 5 && url[3] === "profile"){
            return url[4];
        }else{
            return null;
        }
    }

    getPayLoad = (page, perPage, publicKeyPath) => ({
        url: baseURL.BASE_URL + baseURL.URL.GET_FOLLOWERS + publicKeyPath + '&page=' + page + '&per_page=' + perPage
    })
    
    componentDidMount=()=>{
        const {actionGetListFollowerProfilePage} = this.props;
        const publicKeyPath = this.getTag();
        const perPage = 10;
        const page = -1;

        const payload = this.getPayLoad(page, perPage, publicKeyPath);

        actionGetListFollowerProfilePage(payload);
    }


    renderListUser = (listFollowingProfilePage) => {
        let len = listFollowingProfilePage.length;

        let nRow = len / this.maxColumn;
        let res = [];

        for (let i = 0; i < nRow; i++) {
            res.push(
                <Row>
                    {
                        this.renderColum(i, listFollowingProfilePage)
                    }
                </Row>
            );
        }

        return res;
    }

    render() {
        const {listFollowerProfilePage} = this.props;
        console.log(listFollowerProfilePage);
        return (
            <div className="list-follower">
                {
                    this.renderListUser(listFollowerProfilePage)
                }
            </div>
        );
    }
}

export default ListFollower;
