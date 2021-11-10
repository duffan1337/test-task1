import {createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunkMiddleware from "redux-thunk"
import authReducer from './reducers/login';
import newsReducer from './reducers/news';
import profileReducer from './reducers/profile';
let reducers = combineReducers({
    auth:authReducer,
    profile:profileReducer,
    news:newsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store=createStore(reducers,composeEnhancers(applyMiddleware(thunkMiddleware)));
window.__store__=store

export default store