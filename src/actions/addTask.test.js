/* eslint-disable no-undef */
import addTask from './addTask.js';
import { ADD_TASK } from './addTask.js';

describe('addTask action Test', () => {
    let name = 'someString';
    let task = addTask(name);
    test('is object returned', () => {
        expect(typeof task).toBe('object');
    });
    test('has task Property type', () => {
        expect(task).toHaveProperty('type');
    });
    test('has task correct type', () => {
        expect(task.type).toBe(ADD_TASK);
    });
    test('has task Property payload', () => {
        expect(task).toHaveProperty('payload');
    });
    test('has task Property name', () => {
        expect(task.payload).toHaveProperty('name');
    });
    test('has task Property status', () => {
        expect(task.payload).toHaveProperty('status');
    });
    test('has task Property key', () => {
        expect(task.payload).toHaveProperty('key');
    });
    test('is propper task name', () => {
        expect(task.payload.name).toBe(name);
    });
    test('is proper done status', () => {
        expect(task.payload.status).toBe('undone');
    });
    test('is proper key type', () => {
        expect(typeof task.payload.key).toBe('string');
    });
    test('is key changed', () => {
        expect(+task.payload.key).toBeLessThan(+addTask().payload.key);
    });
});
