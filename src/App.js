import React from 'react';
import styles from './App.module.css';
import Task from './Task.js';
import { connect } from 'react-redux';
import addTask from './actions/addTask.js';
import taskClicked from './actions/taskClicked.js';
import searchFilter from './actions/searchFilter.js';

class App extends React.Component {
    taskClicked = (event) => {
        this.props.onTaskClicked(event.target.innerHTML);
    };
    taskAdded = (event) => {
        if (event.keyCode === 13) {
            // 13 - Button Enter
            this.props.onTaskAdded(event.target.value, this.incrementStart++);
            event.target.value = '';
        }
    };
    searchHandler = (event) => {
        this.props.onSearchHandler(event.target.value);
    };

    render() {
        let filteredTasks = this.props.filteredTasks;
        return (
            <div className={styles.wrap}>
                <h1>TO-DO List</h1>
                <input
                    placeholder="Search tasks...."
                    className={styles.typesearchInput}
                    onKeyUp={this.searchHandler}
                />
                <ul>
                    {filteredTasks.map((task) => (
                        <Task
                            name={task.name}
                            status={task.status}
                            key={task.key}
                            handler={this.taskClicked}
                        />
                    ))}
                </ul>
                <input
                    placeholder="Add tasks....."
                    className={styles.taskAddInput}
                    onKeyUp={this.taskAdded}
                />
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            filteredTasks: state.tasks.filter((track) =>
                track.name.includes(state.search)
            )
        };
    },
    (dispatch) => ({
        onTaskAdded: (taskName) => {
            dispatch(addTask(taskName));
        },
        onTaskClicked: (clickedTaskName) => {
            dispatch(taskClicked(clickedTaskName));
        },
        onSearchHandler: (queryText) => {
            dispatch(searchFilter(queryText));
        }
    })
)(App);
