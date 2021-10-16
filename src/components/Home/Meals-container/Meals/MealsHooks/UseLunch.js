import { useEffect, useState } from 'react';

const UseLunch = () => {
    const [meals,setMeals]=useState([])
    useEffect(()=>{
        const url='../Lunch.json'
        fetch(url)
        .then(res =>res.json())
        .then(data =>setMeals(data))
    },[])
    return [meals]
};

export default UseLunch;