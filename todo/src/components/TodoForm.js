import React, { useState, useReducer } from 'react';
import { reducer, tasks } from '../reducers/reducer.js';
import TodoList from './TodoList.js';

export default function TodoForm(props) {

    const [newTask, setNewTask] = useState('');
 

    const handleChanges = e => {
        setNewTask(e.target.value);
    }

    return(
        <div className="todo-form">
            <label> Task Name:
                <input
                type='text'
                name='newTask'
                value={newTask}
                onChange={handleChanges}
                />
            </label>
                <button
                // disabled={newTask.length !== 0 ? 'true' : 'false'}
                    onClick={() => {
                        props.dispatch({ type: 'ADD_TASK', payload: {task: newTask, id: Date.now(), completed: false }})
                        setNewTask('')
                    }}

                >Add Task
                </button>
                <button
                    onClick={() => {
                        props.dispatch({ type: 'CLEAR_COMPLETED'})
                    }}
                >Clear Completed
                </button>
        </div>
    )
}