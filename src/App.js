import React from 'react';
import styles from './App.module.css';
import Task from './Task.js';
import { connect } from 'react-redux'

class App extends React.Component {
  taskClicked = (event) => {
    this.props.onTaskClicked(event.target.innerHTML)
  };
  taskAdding = (event) => {
    if (event.keyCode === 13) {
      // 13 - Button Enter
      this.props.onTaskAdding(event.target.value, this.incrementStart++);
      event.target.value = '';
    }
  };
  searchHandler = (event) => {
    this.props.onSearchHandler (event.target.value)
  };

  incrementStart = 100;

  render() {
    let stateRedux = this.props.stateRedux;
    return (
      <div className={styles.wrap}>
        <h1>TO-DO List</h1>
        <input
          placeholder="Search tasks...."
          className={styles.typesearchInput}
          onKeyUp={this.searchHandler}
        />
        <ul>
          {stateRedux.tasks
            .filter(
              (task) =>
                task.name
                  .toLowerCase()
                  .indexOf(stateRedux.searchText.toLowerCase()) >= 0
            )
            .map((task) => (
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
          onKeyUp={this.taskAdding}
        />
      </div>
    );
  }
}

export default connect(
  state => ({
    stateRedux: state
  }),
  dispatch => (
    {
      onTaskAdding: (taskName, key) => {
        dispatch(
          { 
            type: 'ADD_TASK', 
            taskData:  {
              name: taskName,
              status: 'undone',
              key: key
            }
          }
        )
      },
      onTaskClicked: (clickedTaskName) => {
        dispatch(
          {
            type: 'TASK_CLICKED', 
            taskName: clickedTaskName
          }
        )
      },
      onSearchHandler: (queryText) => {
        dispatch(
          {
            type: 'SEARCH',
            query: queryText
          }
        )
      }
    }
  )
)(App);
