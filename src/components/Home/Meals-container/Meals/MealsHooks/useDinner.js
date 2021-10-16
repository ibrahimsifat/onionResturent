import  { useEffect, useState } from 'react';

const useDinner = () => {
    const [meals,setMeals]=useState([])
    useEffect(()=>{
        const url='../dinner.json'
        fetch(url)
        .then(res =>res.json())
        .then(data =>setMeals(data))
    },[])
    return [meals]
};

export default useDinner;