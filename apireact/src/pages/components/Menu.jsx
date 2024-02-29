import React from "react";
import { Link, Outlet } from "react-router-dom";



const Menu = () => {
    return (
        <div>
            <nav className="bg-sky-100">
                <ul className="flex space-x-4 texr-white">
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
            <Outlet />
        </div>

    )
}

export default Menu