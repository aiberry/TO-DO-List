/* eslint-disable no-undef */
import { initStoreState } from '../constants';
import addTask from '../actions/addTask.js';
import taskClicked from '../actions/taskClicked.js';
import tasks from './tasks.js';

describe('todos reducer, tasks part', () => {
    let state;
    beforeEach(() => (state = initStoreState));

    it('marks task as done if it is undone', () => {
        expect(tasks(state.tasks, {})).toHaveProperty('0.status', 'undone');

        expect(tasks(state.tasks, taskClicked(state.tasks[0]))).toHaveProperty(
            '0.status',
            'done'
        );
    });

    it('marks task as undone if it is done', () => {
        expect(tasks(state.tasks, {})).toHaveProperty('2.status', 'done');

        expect(tasks(state.tasks, taskClicked(state.tasks[2]))).toHaveProperty(
            '2.status',
            'undone'
        );
    });

    it('should add task to tasks list', () => {
        let numberOfTasks = state.tasks.length;
        expect(tasks(state.tasks, addTask('testText'))).toHaveLength(
            numberOfTasks + 1
        );

        let singleTaskAction = addTask('testText');
        let expectedTaskList = [...initStoreState.tasks, singleTaskAction.payload];
        expect(tasks(state.tasks, singleTaskAction)).toEqual(expectedTaskList);
    });
});
