export const ADD_TASK = 'ADD_TASK';

export default function addTask(taskName) {
    return {
        type: ADD_TASK,
        payload: {
            name: taskName,
            status: 'undone',
            key: Date.now().toString()
        }
    };
}
