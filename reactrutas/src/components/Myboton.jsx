import React from "react";


const Myboton = (props) =>{
    return (
        <nav>
            <button className='bg-sky-700 p-2 rounded-b text-white shadow-lg shadow-cyan-500/50'>Ir a {props.page}</button>
        </nav>
    )
}

export default Myboton