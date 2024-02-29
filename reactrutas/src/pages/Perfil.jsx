import React from "react";
import Header from "../components/Header.jsx";
import Myboton from "../components/Myboton.jsx";
import Profile from "../components/Profile.jsx";
import {Link} from "react-router-dom";

const Perfil = () => {
    return (
        <>
            <Header name={
                <h1 className="text-3xl text-white font-bold underline">
                    Perfil
                </h1>
            } component={
                <Myboton page={
                    <Link to='/'>
                        Inicio
                    </Link>
                }/>
            }/>
            <main className='md:flex '>
                <Profile/>
            </main>
        </>
    )
}

export default Perfil