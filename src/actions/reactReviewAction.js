import {reactReviewConstant} from '../constants/reactReviewConstant.js';

const actionSetTypeReact = (payload) => ({
    type:reactReviewConstant.SET_TYPE_REACT,
    payload:{
        typeReact:payload.typeReact
    }
});

export const reactReviewAction = {
    actionSetTypeReact,
}
