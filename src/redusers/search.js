export default function search(state = '', action) {
    if (action.type === 'SEARCH') {
        return action.query;
    }
    return state;
}
