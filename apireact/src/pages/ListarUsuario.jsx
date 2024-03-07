// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from "react";
import Menu from "./components/Menu";
import api from "./components/Api"
import {Link} from "react-router-dom";


const ListarUsuario = () => {

    const [usuarios, setUsuario] = useState([])

    useEffect(() => {
        const buscarUsuarios = async () => {
            try {
                const response = await api.get('/listar')
                setUsuario(response.data.personas)
                /* console.log(response.data.personas) */
            } catch (err) {
                console.error('error listando usuarios', err)
            }
        }
        buscarUsuarios()
    }, [])
    return (
        <>
            <Menu/>
            <div className='m-3 p-3'>
                <p className='font-bold'>
                    <Link to='/crearusuario'>Crear Usuario</Link>
                </p>
                <h1 className='text-center font-bold underline text-3xl'></h1>
                <h1 className="text-center font-bold underline text-3xl"></h1>
                {
                    usuarios.map((usuario) => (
                        <div key={usuario.id}>

                            Nombre del usuario :
                            <Link to={`/edit/${usuario.id}`}>
                                {usuario.nombre},
                            </Link>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default ListarUsuario