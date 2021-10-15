import React, { useEffect, useState } from 'react';

import DisplayLunch from './DisplayLunch'
const Lunch = () => {
const [meals,setMeals]=useState([])
useEffect(()=>{
    const url='../Lunch.json'
    fetch(url)
    .then(res =>res.json())
    .then(data =>setMeals(data))
},[])
console.log(meals);

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
          
          {
               meals.map(meal=><DisplayLunch
                key={meal.id}
                meal={meal}
                ></DisplayLunch>)
          }
        </div>
    );
};


export default Lunch;