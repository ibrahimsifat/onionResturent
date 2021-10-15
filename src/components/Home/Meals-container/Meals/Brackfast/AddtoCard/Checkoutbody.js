import React from 'react';
import CheckoutHeader from './CheckoutHeader';
const Checkoutbody=(props)=>{
    console.log(props.item);
    return(
   <div className="container">
       <CheckoutHeader></CheckoutHeader>
       <div>
    <h1>{props.item.title}</h1>
        <img src={props.item.img} alt="" />
    </div>
   </div>
    )
    }

export default Checkoutbody;