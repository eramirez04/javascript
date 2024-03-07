// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import Menu from "./components/Menu";

import api from "./components/Api.jsx"

import {useNavigate} from "react-router-dom";

const CrearUsuario = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleDefault = async (e) => {
        e.preventDefault()
        try {
            const response = await api.post('/crear', {
                nombre: name,
                email: email,
                password: password
            }).finally(() => {
                navigate('/listarusuario')
            })
            console.log(response.data.mensaje)
            setName('')
            setEmail('')
            setPassword('')
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div>
            <Menu/>

            <div className='p-2'>
                <h2 className=''>Crear Usuario</h2>
                <div className='max-w-xs'>
                    <input type='text' className='shadow appearance-none border rounded w-full p-2 m-2 text-gray-500 leading-tight
                    '
                           placeholder='Nombre' value={name} onChange={(e) => setName(e.target.value)}
                    />
                    <input type='text' className='shadow appearance-none border rounded w-full p-2 m-2 text-gray-500 leading-tight
                    '
                           placeholder='Correo' value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                    <input type='text' className='shadow appearance-none border rounded w-full p-2 m-2 text-gray-500 leading-tight
                    '
                           placeholder='Clave' value={password} onChange={(e) => setPassword(e.target.value)}
                    />
                    <p className=''>
                        <button
                            className='bg-yellow-300 hover:bg-blue-950 text-white font-bold p-2 m-2 rounded focus:outline-none focus:shadow-outline'
                            onClick={handleDefault}>Crear Usuario
                        </button>
                    </p>
                </div>
            </div>


            hola desde crear usuario
        </div>
    )
}

export default CrearUsuario