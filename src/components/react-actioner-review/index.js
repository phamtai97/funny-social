import React, {Component} from 'react';
import './react-actioner-review.css';
import UserReactActioner from '../user-review';


class ReactActionerReview extends Component {
    render(){
        return(
            <div className="user-react-actioner-warpper">
                <UserReactActioner></UserReactActioner>
            </div>
        )
    }
}

export default ReactActionerReview;
