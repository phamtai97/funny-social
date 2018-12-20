import {VIEW_POST, VIEW_FOLLOWING, VIEW_FOLLOWER} from '../constants/profilePageConstant';

export const onViewPost = () => {
    return {
        type: VIEW_POST
    }
}

export const onViewFollowing = () => {
    return {
        type: VIEW_FOLLOWING
    };
}

export const onViewFollower = () => {
    return {
        type: VIEW_FOLLOWER
    };
}
