import { combineReducers } from 'redux';
import tasks from './tasks.js';
import search from './search.js';

export default combineReducers({
    tasks,
    search
})