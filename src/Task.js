import React from 'react';
import PropTypes from 'prop-types';
import styles from './Task.module.css';

export default function Task({ onToggle, task }) {
    return (
        <li
            onClick={() => onToggle(task)}
            className={task.status === 'done' ? styles.viewDone : styles.viewUndone}
        >
            {task.name}
        </li>
    );
}

Task.propTypes = {
    onToggle: PropTypes.func,
    task: PropTypes.object
};
