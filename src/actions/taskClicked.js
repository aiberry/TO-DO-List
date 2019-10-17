export const TASK_CLICKED = 'TASK_CLICKED';

export default function taskClicked(task) {
    return {
        type: 'TASK_CLICKED',
        payload: task
    };
}
