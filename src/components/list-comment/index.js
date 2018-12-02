import React, {Component} from 'react';
import CommentReview from '../comment-review';
import './list-comment.css';

class ListComment extends Component {
    render() {

        let a = Array(15).fill(0);
        let cnt = 0;

        return (
            <div className="list-comment">
                <div className="list-comment-container">
                    {
                        a.map(()=> {
                            cnt++;
                            return <CommentReview key={cnt}/>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ListComment;
