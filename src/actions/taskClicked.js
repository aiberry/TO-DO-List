import * as CONST from '../constants';

export default function taskClicked(task) {
    return {
        type: CONST.TASK_CLICKED,
        payload: task.name
    };
}
