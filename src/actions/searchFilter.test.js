/* eslint-disable no-undef */
import searchFilter from './searchFilter.js';
import { SEARCH } from './searchFilter.js';

describe('addTask action Test', () => {
    let query = 'someString';
    let searchObject = searchFilter(query);
    test('is object returned', () => {
        expect(typeof searchObject).toBe('object');
    });
    test('has searchObject Property type', () => {
        expect(searchObject).toHaveProperty('type');
    });
    test('has searchObject correct type', () => {
        expect(searchObject.type).toBe(SEARCH);
    });
    test('has searchObject Property query', () => {
        expect(searchObject).toHaveProperty('query');
    });
    test('has searchObject correct query', () => {
        expect(searchObject.query).toBe(query);
    });
});
