import { SEARCH } from '../actions/searchFilter.js';
import { initStoreState } from '../constants';

export default function searcр(state = initStoreState.search, action) {
    if (action && action.type === SEARCH) {
        return action.query;
    } 
    return state;
}
