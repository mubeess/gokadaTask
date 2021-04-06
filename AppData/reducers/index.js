import {combineReducers} from 'redux';
import UserReducers from './users';

const allReducers=combineReducers({
    users:UserReducers
});
export default allReducers;
