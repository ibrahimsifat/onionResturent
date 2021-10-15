import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../img/home/logo2.png'
const Navigation = () => {
    return (
        <div className='container mx-auto py-5'>
            <nav className='flex justify-between items-center'>
                <div className="left_site">
                    <NavLink to='/home'>
                    <img className='w-32' src={Logo} alt="" />
                    </NavLink>
                </div>
                <div className="right">
                    <NavLink className='pr-12 font-semibold' to ='login'>Login</NavLink>
                    <NavLink className='pr-12 font-semibold' to ='signup'>SignUp</NavLink>
                    <NavLink className='text-white bg-red-500 py-2 px-4 rounded-full hover:bg-red-400 duration-300' to ='signup'>Sign Up</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;