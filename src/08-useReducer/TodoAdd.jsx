import React from 'react'
import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {


    const { description, onInputChange, onRestForm, } = useForm({
        description: '',
    })

    const onFormSubmit = (event) => {
        event.preventDefault();
       
        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description,
        }
        
        if( description.length < 2 ) return;
        
        onNewTodo(newTodo);
        
    }


    return (

        <form onSubmit={onFormSubmit}>
            <input type="text"
                placeholder='¿Que hay que hacer?'
                className='form-control'
                name='description'
                value={description}
                onChange={onInputChange}
            />
            <button
                type='submit'
                className='btn btn-outline-primary mt-4'>Agregar

            </button>
        </form>
    )
}
