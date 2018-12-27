import React, {Component} from 'react';
import PostHomeReview from '../../components/post-home-review';
import {typeActivity} from '../../config/typeActivity';
import './list-post.css';
import moment from 'moment';
import helpers from '../../helpers/helpers';
import axios from 'axios';
import { baseURL } from '../../config/baseURL';

const value1 = {
    "_id" : "008096CC174EF9A93F7274D88BDFF878AE56A5310763AC2CE8C4DB4280B86036",
    "time" : 1545708287,
    "author" : "GCZRPJNYGLR4VD3HROBGDUF4IIS32DAF5FNBRFRHUD4QCDE5ZKTEB37B",
    "type" : "post",
    "params" : {
        "type" : 1,
        "content" : {
            "type" : 1,
            "text" : "Dù ai nói ngã nói nghiêng\nThì ta cũng vững như kiềng ba chân"
        },
        "keys" : []
    }
}

class ListPost extends Component {
    constructor(props){
        super(props);
        this.state = {
            listNewFeed : []
        }
    }
    componentDidMount = () => {
        const request = {
            baseURL: baseURL.BASE_URL,
            url: baseURL.URL.GET_LIST_NEW_FEED,
            method: 'get',
            params:{
                address: 'GDMZJFJVTR4PWYGZJEHN2USXQSEXNKET4AWDIUNJX7ZE56PUCTEY5NOO',
                page: -1,
                per_page: 10
            }
        };

        axios.request(request).then(result =>{
            var payload = {
                listPostHomePage: result.data.data.list
            }
            console.log(payload);

            this.props.actionSetListPostHomePage(payload);
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        const {listPostHomePage, publicKey} = this.props;
        return (
            <div className="list-post">
                <div className="list-post-container">
                    {
                        listPostHomePage.map((value, index)=> {
                            console.log('value post home: ',  value)
                            return <PostHomeReview key={index} value={value} publicKey={publicKey}/>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ListPost;
