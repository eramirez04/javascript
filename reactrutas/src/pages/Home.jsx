import React from "react";
import {Link} from "react-router-dom";
import Myboton from "../components/Myboton.jsx";
import Header from "../components/Header.jsx";
import Estado from "../components/Estado.jsx";

const Home = () => {
    return (
        <>
            <Header component={
               <Link to='/about'>
                <Myboton page='formulario'/>
               </Link>
            } name={
                <h1 className="text-3xl text-white font-bold underline">
                    Home
                </h1>
            }/>
            <main className='flex flex-col md:gap-4 h-96'>
                <Estado/>
            </main>
        </>
    )
}
export default Home