import React from 'react';
import AboutBody from './AboutBody';

const AboutUs = () => {
    return (
      <div>
            <div className='positio h-screen about_banner flex justify-center items-center'>
        <h1 className='text-5xl text-red-500 font-bold'>About Us</h1>
        </div>
        <AboutBody></AboutBody>
      </div>
    );
};

export default AboutUs;