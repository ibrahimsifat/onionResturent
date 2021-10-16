import React from 'react';
import { useParams } from 'react-router';
import Checkoutbody from '../checkoutbody/Checkoutbody';
import UseAll from '../MealsHooks/UseAll';
const Checkout = () => {
    // const [addMeal,setAddMeal]=useState()


const{mealId}=useParams()
const[meals]=UseAll()


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