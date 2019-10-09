import React from 'react';
import './App.css';
import Task from './Task.js';

class App extends React.Component {
  state = {
    tasks: [
      {
        name: '24',
        status: 'undone',
        key: 88
      },
      {
        name: 'Get bread',
        status: 'done',
        key: 99
      }
    ],
    searchText: ''
  };

  taskClicked = (event) => {
    this.setState({
      tasks: this.state.tasks.map((element) => {
        if (element.name === event.target.innerHTML) {
          return {
            ...element,
            status:
              element.status === 'undone'
                ? (element.status = 'done')
                : (element.status = 'undone')
          };
        } else {
          return element;
        }
      })
    });
  };

  incrementStart = 100;
  taskValue = '';

  taskAdding = (event) => {
    if (event.keyCode === 13) {
      // 13 - Button Enter
      this.taskValue = event.target.value;
      this.setState((state) => {
        return {
          tasks: [
            ...state.tasks,
            {
              name: this.taskValue,
              status: 'undone',
              key: this.incrementStart++
            }
          ]
        };
      });
      event.target.value = '';
    }
  };

  searchHandler = (event) => {
    this.setState({
      searchText: event.target.value
    });
  };

  render() {
    return (
      <div className="wrap">
        <h1>TO-DO List</h1>
        <input
          placeholder="Search tasks...."
          className="typesearch"
          onKeyUp={this.searchHandler}
        />
        <ul>
          {this.state.tasks
            .filter(
              (task) =>
                task.name
                  .toLowerCase()
                  .indexOf(this.state.searchText.toLowerCase()) >= 0
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
          className="taskAdd"
          onKeyUp={this.taskAdding}
        />
      </div>
    );
  }
}

export default App;
