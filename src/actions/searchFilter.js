import * as CONST from '../constants';

export default function searchFilter(query) {
    return { type: CONST.SEARCH, query };
}
