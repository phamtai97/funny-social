
import { combineReducers } from 'redux';
import profilePage from './profilePageReducer';
import reactReviewReducer from './reactReviewReducer';
import headerMainReducer from './headerMainReducer';
import registerReducer from './registerReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
    profilePage,
    reactReviewReducer,
    headerMainReducer,
    registerReducer,
    loginReducer
});

export default rootReducer;
