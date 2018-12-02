import React, {Component} from 'react';
import './list-react.css';

class ListReact extends Component {
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
        alert("number love");
    }

    handleClickNumberReactLike = () =>{
        alert("number like");
    }

    handleClickNumberReactAngry = () =>{
        alert("number Angry");
    }

    handleClickNumberReactComment = () =>{
        alert("number Comment");
    }
    handleClickNumberReactShare = () =>{
        alert("number Share");
    }

    render(){
        const cntLove = 10;
        const cntLike = 100;
        const cntAngry = 40;
        const cntCmt = 50;
        const cntShare = 4566;

        return(
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
        )
    }
}

export default ListReact;
