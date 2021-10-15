import React, { useEffect, useState } from 'react';
import DisplayDinner from './DisplayDinner';


const Dinner = () => {
const [meals,setMeals]=useState([])
useEffect(()=>{
    const url='../dinner.json'
    fetch(url)
    .then(res =>res.json())
    .then(data =>setMeals(data))
},[])


    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
          
          {
               meals.map(meal=><DisplayDinner
                key={meal.id}
                meal={meal}
                ></DisplayDinner>)
          }
        </div>
    );
};


export default Dinner;