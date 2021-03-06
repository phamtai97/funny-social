import React, {Component} from 'react';
import './list-react.css';
import ReactReview from '../react-review';
import helpers from '../../helpers/helpers.js';

class ListReact extends Component {
    state ={
        visibleReactReview:false
    }

    handleClickReactLove = () =>{
        alert("react love");
    }

    handleClickReactLike = () =>{
        alert("react like");
    }

    handleClickReactAngry = () =>{
        alert("react angry");
    }

    handleClickReactComment = () =>{
        alert("react Comment");
    }

    handleClickReactShare = () =>{
        alert("react Share");
    }

    handleClickNumberReactLove = () =>{
        this.showModalReactReview(helpers.TYPE_REACT_LOVE);
    }

    handleClickNumberReactLike = () =>{
        this.showModalReactReview(helpers.TYPE_REACT_LIKE);
    }

    handleClickNumberReactAngry = () =>{
        this.showModalReactReview(helpers.TYPE_REACT_ANGRY);
    }

    handleClickNumberReactComment = () =>{
        this.showModalReactReview(helpers.TYPE_REACT_COMMENT);
    }
    handleClickNumberReactShare = () =>{
        this.showModalReactReview(helpers.TYPE_REACT_SHARE);
    }

    handleCancelReactReview = () => {
        this.setState({ visibleReactReview: false });
    }

    handleOkReactReview = () => { 
        this.setState({ visibleReactReview: false });        
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
        const typeReact = this.props.typeReact;
        
        return(
            <div className="list-react-container">
                <ReactReview 
                    width={helpers.WIDTH_REACT_REVIEW}
                    visible={this.state.visibleReactReview}
                    onCancel={this.handleCancelReactReview}
                    onCreate={this.handleOkReactReview}
                    typeReact={this.state.typeReact}
                >
                </ReactReview>

                <div className="list-react-wrapper">
                    <div className="list-react">
                        <div className="item">
                            <div className="icon love" onClick={() => this.handleClickReactLove()}>
                            </div>
                            <div className="count" onClick={() => this.handleClickNumberReactLove()}>
                                {cntLove}
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon like" onClick={() => this.handleClickReactLike()}>
                            </div>
                            <div className="count" onClick={() => this.handleClickNumberReactLike()}>
                                {cntLike}
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon angry" onClick={() => this.handleClickReactAngry()}>
                            </div>
                            <div className="count" onClick={() => this.handleClickNumberReactAngry()}>
                                {cntAngry}
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon comment" onClick={() => this.handleClickReactComment()}>
                            </div>
                            <div className="count" onClick={() => this.handleClickNumberReactComment()}>
                                {cntCmt}
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon share" onClick={() => this.handleClickReactShare()}>
                            </div>
                            <div className="count" onClick={() => this.handleClickNumberReactShare()}>
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
