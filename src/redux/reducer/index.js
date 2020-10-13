import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import global from './reducer';
const rootReducer = combineReducers({
    global
});

export default rootReducer;