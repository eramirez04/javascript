// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link, Outlet } from "react-router-dom";



const Menu = () => {
    return (
        <div>
            <nav className="bg-sky-500 p-4">
                <ul className="flex space-x-4 text-white">
                    <li>
                        <Link to='/'>
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link to='/nosotros'>
                            Nosotros
                        </Link>
                    </li>
                    <li>
                        <Link to='/contacto'>
                            Contactanos
                        </Link>
                    </li>
                    <li>
                        <Link to='/crearusuario'> Crear Usuario</Link>
                    </li>
                    <li>
                        <Link to='/listarusuario'>Listar Usuarios</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    )
}

export default Menu