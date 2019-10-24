import reducer from './index.js'
import { initStoreState } from '../constants';
import { SEARCH } from '../actions/searchFilter.js';
import { TASK_CLICKED } from '../actions/taskClicked.js';
import { ADD_TASK } from '../actions/addTask.js';
import addTask from '../actions/addTask.js';

describe.only('todos reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            initStoreState
        )
    })

    it('should handle ADD_TASK', () => {
        let key = Date.now().toString();
        expect(
            reducer(initStoreState, addTask('testText', key))
        ).toEqual(
            {
                search: initStoreState.search, 
                tasks: [
                    ...initStoreState.tasks, 
                    {
                        name: 'testText',  
                        status: 'undone',
                        key: key
                    }
                ]
            }
        )
        
    })
})
