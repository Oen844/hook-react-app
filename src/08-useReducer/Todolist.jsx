import React from 'react'
import { TodoItem } from './TodoItem'

export const Todolist = ({ value, onDeleteTodo, onToggleTodo }) => {
    return (

        <ul className='list-group'>
            {
                value.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onDeleteTodo={onDeleteTodo}
                        onToggleTodo={onToggleTodo}

                    />
                ))
            }
        </ul>
    )
}
