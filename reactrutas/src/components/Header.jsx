import React from "react";
import CardProfile from "./CardProfile.jsx";
import {Link} from "react-router-dom";

const Header = (props) => {
    return (
        <header className='md:flex md:justify-center md:gap-10 md:items-center shadow-lg w-full bg-black'>
            <div className='md:w-4/12 p-6 rounded-lg'>{props.name}</div>
            <div className=''>{props.component}</div>
            <div className='text-white'>
                <Link to='/perfil'>

                    <CardProfile/>
                </Link>
                </div>
        </header>
    )
}

export default Header