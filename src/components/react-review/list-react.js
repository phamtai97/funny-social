import React, {Component} from 'react';
import './list-react.css';
import helpers from '../../helpers/helpers.js';

class ListReact extends Component {
    state ={
        typeReact: '',
    }

    handleClickReactLove = () =>{
        this.showModalReactReview(helpers.TYPE_REACT_LOVE);
    }

    handleClickReactLike = () =>{
        this.showModalReactReview(helpers.TYPE_REACT_LIKE);
    }

    handleClickReactAngry = () =>{
        this.showModalReactReview(helpers.TYPE_REACT_ANGRY);
    }

    handleClickReactComment = () =>{
        this.showModalReactReview(helpers.TYPE_REACT_COMMENT);
    }

    handleClickReactShare = () =>{
        this.showModalReactReview(helpers.TYPE_REACT_SHARE);
    }

    showModalReactReview = (typeReact) => {
        var payload = {
            typeReact: typeReact
        }
        
        this.props.actionSetTypeReact(payload)
        this.setState({ visibleReactReview: true});

    }

    render(){
        const cntLove = 10;
        const cntLike = 100;
        const cntAngry = 40;
        const cntCmt = 50;
        const cntShare = 4566;

        return(
            <div className="list-react-container">
                <div className="list-react-wrapper">
                    <div className="list-react">
                        <div className="item">
                            <div className="icon love" onClick={() => this.handleClickReactLove()}>
                            </div>
                            <div className="count" onClick={() => this.handleClickReactLove()}>
                                {cntLove}
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon like" onClick={() => this.handleClickReactLike()}>
                            </div>
                            <div className="count" onClick={() => this.handleClickReactLike()}>
                                {cntLike}
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon angry" onClick={() => this.handleClickReactAngry()}>
                            </div>
                            <div className="count" onClick={() => this.handleClickReactAngry()}>
                                {cntAngry}
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon comment" onClick={() => this.handleClickReactComment()}>
                            </div>
                            <div className="count" onClick={() => this.handleClickReactComment()}>
                                {cntCmt}
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon share" onClick={() => this.handleClickReactShare()}>
                            </div>
                            <div className="count" onClick={() => this.handleClickReactShare()}>
                                {cntShare}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListReact;
