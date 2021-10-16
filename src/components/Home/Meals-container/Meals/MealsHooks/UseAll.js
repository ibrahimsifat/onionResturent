import  { useEffect, useState } from 'react';

const UseAll = () => {
    const [meals,setMeals]=useState([])
    useEffect(()=>{
        const url='../AllMeal.json'
        fetch(url)
        .then(res =>res.json())
        .then(data =>setMeals(data))
    },[])
    return [meals]
};

export default UseAll;