export const TASK_CLICKED = 'ADD_TASK';

export default function taskClicked(task) {
    return {
        type: TASK_CLICKED,
        payload: task.name
    };
}
