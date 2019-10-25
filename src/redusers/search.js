import { SEARCH } from '../actions/searchFilter.js';

export default function search(state = '', action) {
    if (action && action.type === SEARCH) {
        return action.query;
    }
    return state;
}
