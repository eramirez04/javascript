// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";


import api from "./components/Api.jsx";

import Menu from "./components/Menu";


const EditarUser = () => {

    const {id} = useParams()
    const [usuario, setUsuario] = useState({name: '', email: ''})
    const navigate = useNavigate()


    useEffect(() => {
        const buscarUsuario = async () => {
            try {
                const response = await api.get(`/user/${id}`)
                setUsuario(response.data.user)
            } catch (e) {
                console.error(e)
            }
        }
        buscarUsuario()
    }, [id])

    const handEditUser =async () =>{
        try {
            await api.put(`/actualizar/${id}`, usuario)
            navigate('/listarusuario')
        }catch (e) {
            console.error('error editandot usuario', e)
        }
    }

    return (
        <>
            <Menu/>
            <div>
                <h1 className='text-center font-bold underline text-3xl p-3 m-2'>Editar Usuario</h1>
                <div className='max-w-xs'>
                    <input type='text' className='shadow appearance-none border rounded w-full p-2 m-2 text-gray-500 leading-tight'
                           placeholder='name'
                           value={usuario.nombre}
                           onChange={(e) => setUsuario({...usuario, name: e.target.value})}
                    />
                    <input type='text' className='shadow appearance-none border rounded w-full p-2 m-2 text-gray-500 leading-tight'
                           placeholder='Email'
                           value={usuario.email}
                           onChange={(e) => setUsuario({...usuario, email: e.target.value})}
                    />
                    <button className='bg-blue-950 hover:bg-blue-600
                    text-white font-bold p-2 m-2 rounded focus:outline-none focus:shadow-outline'
                    onClick={handEditUser}
                    >Actualizar Usuario </button>
                </div>
            </div>
        </>
    )
}

export default EditarUser