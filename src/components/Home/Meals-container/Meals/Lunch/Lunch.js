import React from 'react';
import { useHistory } from 'react-router';
import UseLunch from '../MealsHooks/UseLunch';

import DisplayLunch from './DisplayLunch'
const Lunch = () => {
    const history=useHistory()
    const handelBuyBtn=(id)=>{
      history.push(`/Checkout/${id}`)
    }
    const [meals]=UseLunch()

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
          
          {
               meals.map(meal=><DisplayLunch
                key={meal.id}
                meal={meal}
                handelBuyBtn={handelBuyBtn}
                ></DisplayLunch>)
          }
        </div>
    );
};


export default Lunch;