import React, {Component} from 'react';
import { Modal, Avatar } from 'antd';
import './react-reivew.css';
import ListReactActioner from '../../containers/listReactActioner';
import ListReact from '../../containers/reactActioner';

class ReactReview extends Component{
    render(){
        const { visible, onCancel, onCreate, width, typeReact} = this.props;
        const titleReactReview= (
            <div className='title-react-review'>
                <ListReact></ListReact>
            </div>
        )
        return(
            <div className="react-review-container">
                <Modal
                    wrapClassName={"react-review-container"}
                    title={titleReactReview}
                    footer={null}
                    width={width}
                    visible={visible}                 
                    onCancel={onCancel}
                    onOk={onCreate}
                    typeReact={typeReact}>
                        <div className="list-react-actioner-container">
                            <ListReactActioner></ListReactActioner>
                        </div>
                </Modal>
            </div>

        )
    }
}

export default ReactReview;
