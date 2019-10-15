import * as CONST from '../constants';

export default function addTask(taskName) {
    return {
        type: CONST.ADD_TASK,
        payload: {
            name: taskName,
            status: 'undone',
            key: Date.now().toString()
        }
    };
}
