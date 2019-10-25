/* eslint-disable no-undef */
import { initStoreState } from '../constants';
import searchFilter from '../actions/searchFilter.js';
import search from './search.js';

describe.only('todos reducer, search part', () => {
    it('should handle SEARCH', () => {
        expect(search(initStoreState.search, searchFilter('some'))).toEqual('some');

        expect(search(undefined, searchFilter('some'))).toEqual('some');

        expect(search(undefined, undefined)).toEqual('');

        expect(search('defined', searchFilter('some'))).toEqual('some');

        expect(search('defined', searchFilter(''))).toEqual('');
    });
});
