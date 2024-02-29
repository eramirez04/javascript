import React, {useState} from "react";
import {Link} from "react-router-dom";
import Myboton from "../components/Myboton.jsx";
import Header from "../components/Header.jsx";

const Formulario = (e) => {
    const [nombre, setNombre] = useState('')

    return (
        <div className='md:flex h-28 gap-2 flex-col'>
            <Header component={
                <Myboton page={
                    <Link to='/'>
                        Inicio
                    </Link>
                }/>
            } name={
                <h1 className="text-3xl text-white font-bold underline">
                    Formulario
                </h1>
            }
            />

            <div className='p-4  text-amber-950'>
                <label>
                    Nombre :
                    <input value={nombre} className='border' onChange={e => setNombre(e.target.value)}/>
                </label>
                {nombre !== '' && <p>Tu nombre es {nombre}</p>}
            </div>
        </div>
    )
}


export default Formulario