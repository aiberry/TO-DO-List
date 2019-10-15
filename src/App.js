import React from 'react';
import styles from './App.module.css';
import Task from './Task.js';
import { connect } from 'react-redux';
import  addTask from './actions/index.js'

// console.log(addTask(''));

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

  incrementStart = 100;

  render() {
    console.log('this.props', this.props);
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
          {stateRedux.tasks.map((task) => (
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
    console.log(
      'state',
      state.tasks.filter((track) => track.name.includes(state.search))
    );
    return {
      stateRedux: {
        ...state,
        tasks: state.tasks.filter((track) => track.name.includes(state.search))
      }
    };
  },
  (dispatch) => ({
    onTaskAdded: (taskName, key) => {
      dispatch({
        type: 'ADD_TASK',
        payload: {
          name: taskName,
          status: 'undone',
          key: key
        }
      });
    },
    onTaskClicked: (clickedTaskName) => {
      dispatch({
        type: 'TASK_CLICKED',
        payload: clickedTaskName
      });
    },
    onSearchHandler: (queryText) => {
      dispatch({
        type: 'SEARCH',
        query: queryText
      });
    }
  })
)(App);
