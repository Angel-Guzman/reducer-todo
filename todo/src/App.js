import React, { useReducer } from 'react';
import { reducer, tasks } from './reducers/reducer.js';

function App() {

  const [state, dispatch] = useReducer(reducer, tasks)
  
  return (
    <div>
      <h1>Todo App</h1>
      <div className="tasks">
        {tasks.map(item => {
          return <p>{item.task}</p>
        })}
      </div>
      <div className="todo-form">
        
      </div>
    </div>
  );
}

export default App;
