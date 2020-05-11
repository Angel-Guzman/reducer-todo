import React from 'react';
// import { tasks } from '../reducers/reducer.js';

export default function TodoList(props) {
    return(
        <div
        onClick={(e) => {
            props.dispatch({ type: 'TOGGLE_COMPLETE' , payload: e.target.id})
            // debugger
        }}
        className="tasks">
            {props.tasks.map(item => {
                return <p className={item.completed === true ? 'item completed' : 'item'} id={item.id} key={item.id}>{item.task}</p>
            })}
        </div>
    )
}