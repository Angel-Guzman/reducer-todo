import React from 'react';

export default function TodoList(props) {
    return(
        <div
        className="tasks">
            {props.tasks.map(item => {
                return <p         onClick={(e) => {
                    props.dispatch({ type: 'TOGGLE_COMPLETE' , payload: item.id })
                    // debugger
                }} className={item.completed === true ? 'item completed' : 'item'} id={item.id} key={item.id}>{item.task}</p>
            })}
        </div>
    )
}