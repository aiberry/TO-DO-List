export const ADD_TASK = 'ADD_TASK';

export default function addTask(taskName, key) {
    return {
        type: ADD_TASK,
        payload: {
            name: taskName,
            status: 'undone',
            key: key || Date.now().toString()
        }
    };
}
