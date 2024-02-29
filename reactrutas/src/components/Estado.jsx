import React, { useState } from "react";

const Estado = () =>{
    const [contador,setContador] = useState(0)

    const click = () =>{
        setContador(contador + 1)
    }

    return (
        <>
        <button className="bg-slate-500 p-2 rounded-md text-white w-28" onClick={click}>
            Hiciste click {contador} veces
        </button>
        </>
    )
}


export default Estado