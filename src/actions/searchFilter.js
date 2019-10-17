export const SEARCH = 'SEARCH';

export default function searchFilter(query) {
    return { type: SEARCH, query };
}
