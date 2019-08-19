import { combineReducers } from 'redux';
import Count from './Count';
import User from './User';

const rootReducers = combineReducers({ Count, User });
export default rootReducers;
