export const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TASK':
            return [
                ...state,
                action.payload,
            ]
        case 'TOGGLE_COMPLETE':
            return (
                state.map(task => {
                    if (task.id === action.payload ) {
                        debugger
                        task.completed = !task.completed
                        debugger
                        return task
                    }
                    return task
                })
            )
            default: 
                return state;
    }
}

export const tasks = [
  {
    task: 'Clean Room',
    id: '23458976',
    completed: false
  },
  {
    task: 'Workout',
    id: '98769234',
    completed: false
  },
  {
    task: 'Finish Assignment',
    id: '57896263',
    completed: false
  }
];