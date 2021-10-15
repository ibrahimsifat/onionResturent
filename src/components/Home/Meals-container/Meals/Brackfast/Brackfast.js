import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import DisplayBrackfast from './DisplayBrackfast';

const Brackfast = () => {
const [meals,setMeals]=useState([])
const [chackout,setCheckout]=useState({})
let history=useHistory()
useEffect(()=>{
    const url='../Brackfast.json'
    fetch(url)
    .then(res =>res.json())
    .then(data =>setMeals(data))
},[])
const handleBrackfastCheckout=(id)=>{
    const url=`/brackfastcheckout/${id}`
history.push(url)
}
console.log(meals);

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
          
          {
               meals.map(meal=><DisplayBrackfast
                key={meal.id}
                meal={meal}
                handleBrackfastCheckout={handleBrackfastCheckout}
                ></DisplayBrackfast>)
          }
        </div>
    );
};


export default Brackfast;