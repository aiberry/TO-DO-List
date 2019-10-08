import React from 'react';
import './App.css';
import Task from'./Task.js'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    tasks: [
      {
        name: "Get tickets",
        isDone: "alreadyDone"
      },{
        name: "Get bread",
        isDone: "notDone"
    
      }
    ],
    searchText: "",
  }

  taskClicked = event => {
    let target = event.target || event.srcElement;
    this.setState(
      {tasks: this.state.tasks.map(
        (element) => {
          if (element.name === target.innerHTML) {
            element.isDone === "notDone" ? element.isDone = "alreadyDone" : element.isDone = "notDone";
          }

          console.log(element);
          return element;
        }
      )}
    );
  }

  taskAdding = event => {
    if (event.keyCode === 13) { // Button Enter
      let target = event.target || event.srcElement;
      this.setState(
        {tasks: this.state.tasks.concat(
          [
            {
              name: event.target.value,
              isDone: "notDone"
            }
          ]
        )}
      )
      target.value = '';
    }
  }

  searchHandler = event => {
    let target = event.target || event.srcElement;
    this.setState({
      searchText: target.value
    });
  };

  render() {
    return (
      <div className="wrap" >
        <h1>TO-DO List</h1>
        <input 
          placeholder="Search tasks...."
          className="typesearch" 
          onKeyUp={this.searchHandler}
        ></input>
        <ul>
          {this.state.tasks.filter(
            task => task.name.toLowerCase().indexOf(this.state.searchText.toLowerCase()) >= 0
          ).map(
            (task, index) => (
              <Task 
                name={task.name} 
                isDone={task.isDone} 
                key={index} 
                handler={this.taskClicked}
              />
          ))}
        </ul>
        <input 
          placeholder="Add tasks...."
          className="taskAdd" 
          onKeyUp = {this.taskAdding}
        ></input>
          
      </div>
    )
  }
}

// function App() {
//   var 
//   var addingTask = function () {
//     this.state.tasks.push({
//       name: 
//     })
//   }
//   return (
//     <div className="wrap">
//       <h1>
//         TO-DO List
//       </h1>
//       <ul>
//         {state.tasks.map((task, index) => (
//           <li className="singeTask" key={index} >
            
//             {task.name}
//           </li>
//         ))}
//       </ul>
     

//       <input className="taskAdd" ></input><button onClick={addingTask}>Add task</button>
//     </div>
//   );
// }

export default App;
