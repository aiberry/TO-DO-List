/* eslint-disable no-undef */
import { initStoreState } from '../constants';
import searchFilter from '../actions/searchFilter.js';
import searchReducer from './search.js';

describe.only('todos reducer, search part', () => {
    it('should handle SEARCH', () => {
        expect(
            searchReducer(initStoreState.search, searchFilter('newValue'))
        ).toEqual('newValue');

        expect(
            searchReducer(initStoreState.search, {
                type: 'ANY_OTHER_TYPE',
                query: ''
            })
        ).toEqual(initStoreState.search);
    });
});
