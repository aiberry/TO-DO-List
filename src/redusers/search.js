import * as CONST from '../constants';

export default function search(state = '', action) {
    if (action.type === CONST.SEARCH) {
        return action.query;
    }
    return state;
}
