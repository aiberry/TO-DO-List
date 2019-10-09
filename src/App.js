import React from 'react';
import './App.css';
import Task from './Task.js';

class App extends React.Component {
  state = {
    tasks: [
      {
        name: '24',
        statusClass: 24,
        key: 88
      },
      {
        name: 'Get bread',
        statusClass: 'notDone',
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
            statusClass:
              element.statusClass === 'notDone'
                ? (element.statusClass = 'alreadyDone')
                : (element.statusClass = 'notDone')
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
              statusClass: 'notDone',
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
                statusClass={task.statusClass}
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
