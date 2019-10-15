export default function searchFilter(queryText) {
    return {
        type: 'SEARCH',
        query: queryText
    };
}
