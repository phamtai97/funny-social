import {reactReviewConstant} from '../constants/react-review-constant.js';

const actionSetTypeReact = (payload) => ({
    type:reactReviewConstant.SET_TYPE_REACT,
    payload:{
        typeReact:payload.typeReact
    }
});

export const reactReviewAction = {
    actionSetTypeReact,
}
