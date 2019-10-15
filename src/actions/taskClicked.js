export default function taskClicked(clickedTaskName) {
    return {
        type: 'TASK_CLICKED',
        payload: clickedTaskName
    };
}
