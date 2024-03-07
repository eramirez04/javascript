import React from "react";
import Menu from "./components/Menu";

const Contacto = () =>{
    return (
        <>
        <Menu/>
        <h1>hola desde contactanos</h1>
        <div>
            <label htmlFor="">
                <p>ingresa email</p>
                <input type="text" />
            </label>
        </div>
        </>
       
    )
}

export default Contacto