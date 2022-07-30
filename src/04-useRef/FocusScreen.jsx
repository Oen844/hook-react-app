import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputref = useRef();
    

    const onClick = () => {
        // console.log(inputref)
        inputref.current.select();
    }

    return (
        <>

            <h1>Focus Screen</h1>
            <hr />

            <input
                ref={inputref}
                className='form-control'
                type="text"
                placeholder='Ingrese su nombre'
            />

            <button
                className='btn btn-primary mt-3'
                onClick={onClick}>
                Set focus
            </button>
        </>
    )
}
