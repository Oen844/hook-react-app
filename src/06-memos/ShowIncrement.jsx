import React from 'react'


export const ShowIncrement = ({ increment }) => {
    console.log('dibujar'); 
    return (

        <button
            className='btn btn-primary'
            onClick={() => {
                increment();
            }}
        >
            Incrementar
        </button>
    )
}
