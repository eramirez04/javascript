import React from "react";

const persona = {
    nombre: 'Emersson',
    apellido: "Ramirez",
    imgUrl: 'https://picsum.photos/1000/1023?random=2',
    dim: 90,
    telefono: 1122233132
}

const CardProfile = () => {
    return (
        <div className='text-center flex gap-4 justify-end'>
            <h1 className='text-3xl font-bold underline'>{persona.nombre} {persona.apellido}</h1>
            <img src={persona.imgUrl} alt={persona.nombre} className='rounded-full mx-3.5'
                 width={persona.dim} height={persona.dim}/>
        </div>
    )
}

export default CardProfile