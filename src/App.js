import React from "react";
import "./App.css";
import Task from "./Task.js";

class App extends React.Component {
  state = {
    tasks: [
      {
        name: "Get tickets",
        isDone: "alreadyDone",
        key: 88

      },
      {
        name: "Get bread",
        isDone: "notDone",
        key: 99
      }
    ],
    searchText: ""
  };
  
  taskClicked = event => {
    this.setState({
      tasks: this.state.tasks.map(element => {
        if (element.name === event.target.innerHTML) {
          return {
            ...element,
            isDone:
              element.isDone === "notDone"
                ? (element.isDone = "alreadyDone")
                : (element.isDone = "notDone")
          };
        } else {
          return element;
        }
      })
    });
  };

  incrementStart = 100;
  taskValue = "";

  taskAdding = event => {
    if (event.keyCode === 13) {
      // Button Enter
      let target = event.target || event.srcElement;
      this.taskValue = event.target.value;
      this.setState(prevState => {
        return {
          tasks: [
            ...prevState.tasks,
            {
              name: this.taskValue,
              isDone: "notDone",
              key: this.incrementStart++
            }
          ]
        };
      });
      target.value = "";
    }
  };

  searchHandler = event => {
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
              task =>
                task.name
                  .toLowerCase()
                  .indexOf(this.state.searchText.toLowerCase()) >= 0
            )
            .map(task => (
              <Task
                name={task.name}
                isDone={task.isDone}
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
