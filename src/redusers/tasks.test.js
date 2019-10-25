/* eslint-disable no-undef */
import { initStoreState } from '../constants';
import addTask from '../actions/addTask.js';
import taskClicked from '../actions/taskClicked.js';
import tasks from './tasks.js';

describe('todos reducer, tasks part', () => {
    let store;
    beforeEach(() => (store = initStoreState));

    it('should handle TASK_CLICKED', () => {
        expect(tasks(store.tasks, {})).toHaveProperty('0.status', 'undone');

        expect(tasks(store.tasks, taskClicked(store.tasks[0]))).toHaveProperty(
            '0.status',
            'done'
        );
    });

    it('should handle ADD_TASK', () => {
        let numberOfTasks = store.tasks.length;
        expect(tasks(store.tasks, addTask('testText'))).toHaveLength(
            numberOfTasks + 1
        );

        let singleTaskAction = addTask('testText');
        let expectedTaskList = [...initStoreState.tasks, singleTaskAction.payload];
        expect(tasks(store.tasks, singleTaskAction)).toEqual(expectedTaskList);
    });

    it('should handle undefined/initial values', () => {
        // expect(reducer(undefined, {})).toEqual(store)
        // expect(reducer(undefined, {})).toHaveProperty('search', '')
        // expect(reducer(undefined, {})).toHaveProperty('tasks')

        expect(tasks(undefined, {})).toEqual(store.tasks);

        let singleTaskAction = addTask('testText');
        let expectedTaskList = [...initStoreState.tasks, singleTaskAction.payload];
        expect(tasks(undefined, singleTaskAction)).toEqual(expectedTaskList);
    });
});
