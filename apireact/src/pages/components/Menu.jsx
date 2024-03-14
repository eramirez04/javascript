// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link, Outlet } from "react-router-dom";



const Menu = () => {
    return (
        <div>
            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px">
                    <li className="me-2">
                        <Link to='/' className='inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'>
                            Inicio
                        </Link>
                    </li>
                    <li className="me-2">
                        <Link to='/contacto' className='inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'>
                            Contactanos
                        </Link>
                    </li>
                    <li className="me-2">
                        <Link to='/nosotros' className='inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'>
                            Nosotros
                        </Link>
                    </li>
                    <li className="me-2">
                        <Link to='/crearusuario' className='inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'>
                            Crear Usuario
                        </Link>
                    </li>
                    <li className="me-2">
                        <Link to='/listarusuario' className='inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                        >Listar Usuarios</Link>
                    </li>
                </ul>
                <Outlet/>
            </div>
        </div>
    )
}

export default Menu