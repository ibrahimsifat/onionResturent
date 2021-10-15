import React from 'react';
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='banner_img flex justify-center items-center'>
           <div className="banner_contant flex flex-col justify-center items-center container mx-auto px-4">
               <p className=' text-2xl sm:text-3xl md:text-5xl pb-8'>Best food waiting for your belly</p>
               
              <div>
              <input type="text" placeholder='Search your food item' className='-mr-5  rounded-l-full sm:w-64 md:w-96 py-2 px-2   focus:outline-none' id="" /> 
               <NavLink className='text-white bg-red-500 py-2 px-4 rounded-full hover:bg-red-400 duration-300' to ='signup'>Sign Up</NavLink>
              </div>
           </div>
        </div>
    );
};

export default Banner;