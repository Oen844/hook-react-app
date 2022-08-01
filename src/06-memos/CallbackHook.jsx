
import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CallbackHook = () => {

    const{counter, setCounter}=useCounter

    return (
        <>
            <h1>useCallback hook: {counter} </h1>
            <hr />
        </>
    )
}
