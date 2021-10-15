import { useEffect, useState } from 'react';

const useBrackfast = () => {
    const [meals,setMeals]=useState([])
    useEffect(()=>{
        const url='../Brackfast.json'
        fetch(url)
        .then(res =>res.json())
        .then(data =>setMeals(data))
    },[])
    return [meals]
};

export default useBrackfast;