import React, { useReducer } from 'react'
import { TodoAdd } from './TodoAdd';
import { Todolist } from './Todolist';
import { todoReducer } from './todoReducer'

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del alma',
        done: false
    },
    {
        id: new Date().getTime() * 3,
        description: 'Recolectar la piedra del poder',
        done: false
    }
]

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState);

    const handleNewTodo = (todo) => {
        console.log(todo);
    }

    return (

        <>
            <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <Todolist value = {todos}/>
                </div>
                <div className="col-5">
                    <h4>Agregar todo</h4>
                    <hr />
                    
                    <TodoAdd onNewTodo = {handleNewTodo}/>
             
                </div>
            </div>

        </>
    )
}
