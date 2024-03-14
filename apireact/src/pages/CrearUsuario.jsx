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
    const [errr, setError] = useState('')
    const [clase, setClass] = useState('')
    const alerta = 'p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400'

    const handleDefault = async (e) => {
        e.preventDefault()
        try {
            if (name !== '' & email !== '' & password !== '') {
                const response = await api.post('/crear', {
                    nombre: name,
                    email: email,
                    password: password
                })
                if (response.data) {
                    console.log('User creado', response.data)
                    navigate('/listarusuario')
                }
                setName('')
                setEmail('')
                setPassword('')
            } else {
                alert("Campos Vacios")
            }
        } catch (errpr) {
            switch (errpr.response.data.message) {
                case 'The email field must be a valid email address.':
                    setClass(alerta)
                    setError("El campo de tener un email")
                    break
                case 'The nombre field must be at least 3 characters.':
                    setClass(alerta)
                    setError("El campo de nombre debe de tener al menos tres caracteres ")
                    break
                case 'The email has already been taken.':
                    setClass(alerta)
                    setError("Ya existe un usuario con este correo")
                    break
                default:
                    setError(e.response.data.message)
            }
        }
    }

    return (<div>
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
                <input type='password' className='shadow appearance-none border rounded w-full p-2 m-2 text-gray-500 leading-tight
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

        <p></p>
        <div className={clase}>
            <span className="font-medium">{errr}</span>
        </div>

    </div>)
}

export default CrearUsuario