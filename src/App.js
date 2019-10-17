import React, { useState } from 'react';
import styles from './App.module.css';
import Task from './Task.js';
import { connect } from 'react-redux';
import addTask from './actions/addTask.js';
import taskClicked from './actions/taskClicked.js';
import searchFilter from './actions/searchFilter.js';

function App(props) {
    const [searchQuery, setQuery] = useState('');


    const taskClicked = (task) => {
        props.onTaskClicked(task);
    };
    
    const taskAdded = (event) => {
        if (event.keyCode === 13) {
            // 13 - Button Enter
            props.onTaskAdded(event.target.value, Date.now().toString());
            event.target.value = '';
        }
    };
  
    props.onSearchHandler(searchQuery);
   
        return (
            <div className={styles.wrap}>
                <h1>TO-DO List</h1>
                <input
                    placeholder="Search tasks...."
                    className={styles.typesearchInput}
                    // onKeyUp={searchHandler}
                    onKeyUp={e => setQuery(e.target.value)}
                />
                <ul>
                    {props.filteredTasks.map((task) => (
                        <Task
                            name={task.name}
                            status={task.status}
                            key={task.key}
                            handler={() => taskClicked(task)}
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
