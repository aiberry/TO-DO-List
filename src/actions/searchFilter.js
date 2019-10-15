export const SEARCH = 'ADD_TASK';

export default function searchFilter(query) {
    return { type: SEARCH, query };
}
