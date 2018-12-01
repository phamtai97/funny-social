import { VIEW_POST, VIEW_FOLLOWING, VIEW_FOLLOWER } from '../constants/profile-page-const';

const initState = {
    view: VIEW_POST
}

const profilePage = (state = initState, action) => {
    switch (action.type) {
        case VIEW_POST:
        case VIEW_FOLLOWING:
        case VIEW_FOLLOWER:
            return {
                ...state,
                view: action.type
            }
        default:
            return state;
    }
}

export default profilePage;