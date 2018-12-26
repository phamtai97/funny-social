
import { combineReducers } from 'redux';
import profilePageReducer from './profilePageReducer';
import reactReviewReducer from './reactReviewReducer';
import headerMainReducer from './headerMainReducer';
import registerReducer from './registerReducer';
import loginReducer from './loginReducer';
import updateProfileReducer from './updateProfileReducer';
import homePageReducer from './homePageReducer';
import accountReducer from './accountReducer';

const rootReducer = combineReducers({
    profilePageReducer,
    reactReviewReducer,
    headerMainReducer,
    registerReducer,
    loginReducer,
    updateProfileReducer,
    homePageReducer,
    accountReducer
});

export default rootReducer;
