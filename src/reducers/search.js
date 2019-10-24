import { SEARCH } from '../actions/searchFilter.js';
import { initStoreState } from '../constants';

export default function search(state = initStoreState.search, action) {
    if (action.type === SEARCH) {
        return action.query;
    }
    return state;
}
