import React, { useEffect, useReducer } from 'react'
import { TodoAdd } from './TodoAdd';
import { Todolist } from './Todolist';
import { todoReducer } from './todoReducer'

const initialState = [
    
]

const init = () => {
    return JSON.parse ( localStorage.getItem('todos') ) || []
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

   
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos) );
      
    }, [todos])
    

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch(action);
    }

    return (

        <>
            <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <Todolist value={todos} />
                </div>
                <div className="col-5">
                    <h4>Agregar todo</h4>
                    <hr />

                    <TodoAdd onNewTodo={handleNewTodo} />

                </div>
            </div>

        </>
    )
}
