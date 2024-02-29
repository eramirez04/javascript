import React, { useEffect, useState } from "react";
import Menu from "./components/Menu";
import api from "./components/Api"
import { Link } from "react-router-dom";


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
        <div >
            <Menu />

            <h1 className="text-center font-bold underline text-3xl"></h1>
            {
                usuarios.map((usuario) => (
                    <div key={usuario.id}>

                        Nombre del usuario :
                        <Link to={`/edit/${usuario.id}`}>
                            {usuario.nombre},
                        </Link>

                        <span>
                            <p>con correo : </p>
                            {usuario.email}
                        </span>

                    </div>
                ))
            }
        </div>
    )
}

export default ListarUsuario