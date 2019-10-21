/* eslint-disable no-undef */
import addTask from './addTask.js';
import taskClicked from './taskClicked';
import { TASK_CLICKED } from './taskClicked';

describe('taskClicked action Test', () => {
    let name = 'someString';
    let task = addTask(name);
    let handledTask = taskClicked(task);
    test('is object returned', () => {
        expect(typeof handledTask).toBe('object');
    });
    test('has returned action Property type', () => {
        expect(handledTask).toHaveProperty('type');
    });
    test('has returned action correct type', () => {
        expect(handledTask.type).toBe(TASK_CLICKED);
    });
    test('has returned action Property payload', () => {
        expect(handledTask).toHaveProperty('payload');
    });
    test('it returns the same task in payload', () => {
        expect(handledTask.payload).toEqual(task);
    });
});
