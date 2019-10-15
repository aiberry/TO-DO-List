import TASK_CLICKED from '../actions/taskClicked.js';
import ADD_TASK from '../actions/addTask.js';
import * as CONST from '../constants';

export default function tasks(state = CONST.initStoreState, action) {
    switch (action.type) {
        case ADD_TASK:
            return [...state, action.payload];
        case TASK_CLICKED: {
            let newTasks = state.map((element) => {
                if (element.name === action.payload) {
                    return {
                        ...element,
                        status:
                            element.status === 'undone'
                                ? (element.status = 'done')
                                : (element.status = 'undone')
                    };
                } else {
                    return element;
                }
            });
            return newTasks;
        }
        default:
            return state;
    }
}
