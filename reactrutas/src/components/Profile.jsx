import React from "react";


const Profile = () => {
    return (<div className='md:flex md:gap-2 flex-row '>
            <div>
                <img src='https://picsum.photos/1000/1023?random=2' alt='emer'
                     className='rounded-full mx-auto w-full bg-lime-700'/>
            </div>
            <span className='flex justify-center items-center flex-col'>
                <p className=' text-5xl font-extrabold w-1/2'>Emersson Ramirez Ruiz</p>
            </span>

        </div>)
}

export default Profile