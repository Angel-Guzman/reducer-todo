import React, { useReducer } from 'react';
import { reducer, tasks } from './reducers/reducer.js';
import TodoList from './components/TodoList.js';
import TodoForm from './components/TodoForm.js';

function App() {
  
  const [state, dispatch] = useReducer(reducer, tasks);

  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm dispatch={dispatch} />
      <TodoList dispatch={dispatch} tasks={state} />
    </div>
  );
}

export default App;
