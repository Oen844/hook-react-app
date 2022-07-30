import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm"



export default function FormWithCustomHook() {


    const {  onInputChange, useState, username, email, password, onRestForm } = useForm({
        username: '',
        email: '',
        password: '',
    });

    //const { username, email, password} = formState;

    

    return (

        <>
            <h1>Formulario Con custom Hook</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email"
                className="form-control mt-4"
                placeholder="papau84@gmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            <input
                type="password"
                className="form-control mt-4"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button onClick={onRestForm} className="btn btn-primary mt-4">Reset</button>



        </>
    )
}
