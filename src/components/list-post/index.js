import React, {Component} from 'react';
import PostReview from '../post-review';
import './list-post.css';

class ListPost extends Component {
    render() {

        let a = Array(15).fill(0);
        let cnt = 0;

        return (
            <div className="list-post">
                <div className="list-post-container">
                    {
                        a.map(()=> {
                            cnt++;
                            return <PostReview key={cnt}/>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ListPost;