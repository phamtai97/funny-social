import {createStore} from 'redux';
import rootReducer from '../reducers/rootReducers.js'

export const store = createStore(rootReducer);
window.store = store;
