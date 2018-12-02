import {reactReviewConstant} from '../constants/react-review-constant.js';

const initalState = {
    typeReact: '',
}

export default function reactReviewReducer(state=initalState, actions){
    switch(actions.type){
        case reactReviewConstant.SET_TYPE_REACT:
            return{
                ...state,
                typeReact: actions.payload.typeReact,
            };
        default:
        return state;
    }
}
