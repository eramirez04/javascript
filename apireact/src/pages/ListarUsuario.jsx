// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from "react";
import Menu from "./components/Menu";
import api from "./components/Api"
import {Link, useNavigate} from "react-router-dom";



const ListarUsuario = () => {

    const [usuarios, setUsuario] = useState([])
    const navigate = useNavigate()

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
    const onDelete = async (id) => {
        try {
            await api.delete(`/eliminar/${id}`)
            alert('Se elimino la persona')
            navigate('/listarusuario')

        } catch (e) {
            console.error(e)
        }

    }
    return (
        <>
            <Menu/>
            <div className='m-3 p-3'>
                <p className='font-bold'>

                </p>
                <button type="button"
                        className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    <Link to='/crearusuario'>Crear Usuario</Link>
                </button>
                <h1 className='text-center font-bold underline text-3xl'></h1>
                <h1 className="text-center font-bold underline text-3xl"></h1>


                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead
                            className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Correo
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Editar
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            usuarios.map((usuario) => (
                                <tr key={usuario.id}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {usuario.id}
                                    </th>
                                    <th scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {usuario.nombre}
                                    </th>
                                    <th scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {usuario.email}
                                    </th>
                                    <th className='border-y-1 focus:bg-slate-300'>
                                        <button type="button"
                                                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            <Link to={`/edit/${usuario.id}`}>Actualizar</Link>
                                        </button>
                                        <button type="button" value={usuario.id}
                                                onClick={(e)=>onDelete(e.target.value)}
                                                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Eliminar
                                        </button>
                                    </th>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ListarUsuario