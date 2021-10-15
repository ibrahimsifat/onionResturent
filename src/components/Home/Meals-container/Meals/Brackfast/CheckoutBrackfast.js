import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CheckoutBrackfast = () => {
const [meals,setMeal]=useState([])
   let {mealId}=useParams()
useEffect(()=>{
    const url='../Brackfast.json'
    fetch(url)
    .then(res =>res.json())
    .then(data =>setMeal(data))
},[])

console.log(meals);

const displayMeal=meals.filter(meal=> meal.id===mealId)


   return (
        <div>
            this is brackfast {displayMeal.length}
        </div>
    );
};

export default CheckoutBrackfast;