import React from 'react';
import CheckoutHeader from './CheckoutHeader';
const Checkoutbody=(props)=>{
    const {title,Price,img}=props.item
    return(
   <div className="  mx-auto  h-screen-full py-16">
       <div className='md:grid w-10/12 mx-auto grid-cols-2 justify-between items-center'>
 <div className="left_site md:mr-16">
     <h1 className='text-5xl md:font-semibold pb-6'>{title}</h1>
     <h2 className='text-gray-500 pb-3'>
     We all know breakfast is the most important meal of the day. But just because you're aware that this meal is crucial doesn't mean you always have time to whip up something delicious. From school drop-offs to busy commutes to squeezing in a sweat session, weekday mornings can often be our busiest time of day.
     </h2>
     <h2 className='text-4xl md:font-semibold pb-6'>${Price}</h2>
     <button className='bg-red-500 text-white px-7 py-2 rounded-full'>Add</button>
 </div>
 <div className="right_site md:w-9/12">

     <img src={img} alt="" />
 </div>
    </div>
   </div>
    )
    }

export default Checkoutbody;