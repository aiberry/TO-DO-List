import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

function storeHandler(state = {tasks:[], searchText: ''}, action) {
    if (action.type === 'ADD_TASK') {
      return {...state, tasks: [...state.tasks, action.taskData]
      }
    } 
    if (action.type === 'SEARCH') {
        return {...state, searchText : action.query};
    }
    if (action.type === 'TASK_CLICKED') {
        let newTasks = state.tasks.map((element) => {
            if (element.name === action.taskName) {
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
      return {...state, tasks : newTasks};
    }
    return state;
  }
  const store = createStore(storeHandler);
 
  store.dispatch({ type: 'ADD_TASK', taskData:  {
    name: 'some',
    status: 'undone',
    key: 87
  }})

  store.dispatch({ type: 'ADD_TASK', taskData:  {
    name: 'some2',
    status: 'undone',
    key: 86
  }})
  
ReactDOM.render(
    <Provider store={store}>
        <App />
     </Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
