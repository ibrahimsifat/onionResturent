import React from 'react';
import { useParams } from 'react-router';
import useBrackfast from '../MealsHooks/useBrackfast';
import Checkoutbody from './AddtoCard/Checkoutbody';
const Checkout = () => {
    // const [addMeal,setAddMeal]=useState()


const{mealId}=useParams()
const[meals]=useBrackfast()


    const mached= meals.filter(item=> item.id===mealId)
    console.log(mached);
   return (
<div>
    
{
    mached.map(item=><Checkoutbody
    item={item}
    ></Checkoutbody>)
}
</div>
    );
};

export default Checkout;