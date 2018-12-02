import React, {Component} from 'react';
import './list-react-actioner.css';
import ReactActionerReview from '../react-actioner-review';
import helpers from '../../helpers/helpers';

class ListReactActioner extends Component {
    render(){
        const typeReact = this.props.typeReact;
        var n = 0;
        if(typeReact === helpers.TYPE_REACT_LOVE ){
            n = 10;
        }else if(typeReact === helpers.TYPE_REACT_ANGRY){
            n = 15;
        }else if(typeReact === helpers.TYPE_REACT_COMMENT){
            n = 20;
        }else if(typeReact === helpers.TYPE_REACT_SHARE){
            n = 5;
        }else if(typeReact === helpers.TYPE_REACT_LIKE){
            n = 25;
        }
        var listActioner = Array(n).fill(0);

        return(
        <div className="list-react-actioner-container">
            {
                listActioner.map((item, index) => {
                    return(
                        <ReactActionerReview key={index}></ReactActionerReview>
                    )
                })
            }      
        </div>

        )
    }
}

export default ListReactActioner;
