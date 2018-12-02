
import { combineReducers } from 'redux';
import profilePage from './profilePageReducer';
import reactReviewReducer from './reactReviewReducer.js';
const rootReducer = combineReducers({
    profilePage,
    reactReviewReducer
});

export default rootReducer;
