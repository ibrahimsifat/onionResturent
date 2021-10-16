import React from 'react';
import { useHistory } from 'react-router';
import useDinner from '../MealsHooks/useDinner';
import DisplayDinner from './DisplayDinner';


const Dinner = () => {
    const history=useHistory()
    const handelBuyBtn=(id)=>{
      history.push(`/Checkout/${id}`)
    }
    const [meals]=useDinner()


    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
          
          {
               meals.map(meal=><DisplayDinner
                key={meal.id}
                meal={meal}
                handelBuyBtn={handelBuyBtn}
                ></DisplayDinner>)
          }
        </div>
    );
};


export default Dinner;