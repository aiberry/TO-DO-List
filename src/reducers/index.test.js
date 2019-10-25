/* eslint-disable no-undef */
import reducer from './index.js'
import { initStoreState } from '../constants';
import addTask from '../actions/addTask.js';
import taskClicked from '../actions/taskClicked.js';
import searchFilter from '../actions/searchFilter.js';
import tasks from './tasks.js';
import search from './search.js';

describe.only('todos reducer', () => {
    let store;
    beforeEach(() => store = initStoreState);
    it('should return correct initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            store
        )
        expect(reducer(undefined, {})).toHaveProperty('search', '')
        expect(reducer(undefined, {})).toHaveProperty('tasks')
    })

    it('should handle SEARCH', () => {
        expect(
            search(undefined, searchFilter('some'))
        ).toEqual('some')

        expect(
            search(undefined, searchFilter())
        ).toEqual('')

        expect(
            search(undefined, undefined)
        ).toEqual('')
        
        expect(
            search('defined', searchFilter('some'))
        ).toEqual('some')

        expect(
            search('defined', searchFilter(''))
        ).toEqual('')
    })

    it('should handle TASK_CLICKED', () => {
        expect(
            tasks(store.tasks, {})
        ).toHaveProperty('0.status', 'undone') 

        expect(
            tasks(store.tasks, 
                taskClicked(store.tasks[0])
            )
        ).toHaveProperty('0.status', 'done')        
    })

    it('should handle ADD_TASK', () => {
       let numberOfTasks = store.tasks.length;
        expect(
            tasks(store.tasks, addTask('testText'))
        ).toHaveLength(numberOfTasks + 1)

        let singleTaskAction = addTask('testText');
        let expectedTaskList = [...initStoreState.tasks, singleTaskAction.payload]    
        expect(
            tasks(store.tasks, singleTaskAction)
        ).toEqual(expectedTaskList)
    })

    it('tasks reducer should handle undefined values', () => {
        expect(
            tasks(undefined, {})
        ).toEqual(store.tasks)

        let singleTaskAction = addTask('testText');
        let expectedTaskList = [...initStoreState.tasks, singleTaskAction.payload]  
        expect(
            tasks(undefined, singleTaskAction)
        ).toEqual(expectedTaskList)
     })

})
