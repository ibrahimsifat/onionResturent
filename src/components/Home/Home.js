import React from 'react';


import Banner from './Header/Banner';

import Meals from './Meals-container/Meals';
import WhyChoose from './WhyChoose/WhyChoose';

const Home = () => {
    return (
        <div>
   

           <Banner></Banner>
           <Meals></Meals>
           <WhyChoose></WhyChoose>
         
        </div>
    );
};

export default Home;