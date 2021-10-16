import React from 'react';
import { useParams } from 'react-router';
import useDinner from '../MealsHooks/useDinner';
import DCheckoutbody from './AddtoCard/DCheckoutbody';
const DCheckout = () => {
    // const [addMeal,setAddMeal]=useState()


const{mealId2}=useParams()
const[meals]=useDinner()


    const mached= meals.filter(item=> item.id===mealId2)
    console.log(mached);
   return (
<div>
    
{
    mached.map(items=><DCheckoutbody
    items={items}
    ></DCheckoutbody>)
}
</div>
    );
};

export default DCheckout;