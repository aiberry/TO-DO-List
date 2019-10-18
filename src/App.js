import React from 'react';
import styles from './App.module.css';
import Task from './Task.js';
import { connect } from 'react-redux';
import addTask from './actions/addTask.js';
import taskClicked from './actions/taskClicked.js';
import searchFilter from './actions/searchFilter.js';
import PropTypes from 'prop-types';

function App({ onTaskClicked, onTaskAdded, onSearchHandler, filteredTasks }) {
    let taskClicked = (task) => {
        onTaskClicked(task);
    };

    let  taskAdded = (event) => {
        if (event.keyCode === 13) {
            // 13 - Button Enter
            onTaskAdded(event.target.value);
            event.target.value = '';
        }
    };

    let searchHandler = (event) => {
        onSearchHandler(event.target.value);
    };

    return (
        <div className={styles.wrap}>
            <h1>TO-DO List</h1>
            <input
                placeholder="Search tasks...."
                className={styles.typesearchInput}
                onKeyUp={searchHandler}
            />
            <ul>
                {filteredTasks.map((task) => (
                    <Task
                        task={task}
                        key={task.key}
                        onToggle={taskClicked}
                    />
                ))}
            </ul>
            <input
                placeholder="Add tasks....."
                className={styles.taskAddInput}
                onKeyUp={taskAdded}
            />
        </div>
    );
}

export default connect(
    (state) => ({
        filteredTasks: state.tasks.filter((track) =>
            track.name.includes(state.search)
        )
    }),
    (dispatch) => ({
        onTaskAdded(taskName) {
            dispatch(addTask(taskName));
        },
        onTaskClicked(task) {
            dispatch(taskClicked(task));
        },
        onSearchHandler(queryText) {
            dispatch(searchFilter(queryText));
        }
    })
)(App);

App.propTypes = {
    onTaskClicked: PropTypes.func,
    onTaskAdded: PropTypes.func, 
    onSearchHandler: PropTypes.func, 
    filteredTasks: PropTypes.array
};
