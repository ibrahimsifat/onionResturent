import React from 'react';
import { NavLink } from 'react-router-dom';
import Img1 from '../../../img/Image/adult-blur-blurred-background-687824.png'
import Img2 from '../../../img/Image/chef-cook-food-33614.png'
import Img3 from '../../../img/Image/architecture-building-city-2047397.png'
const WhyChoose = () => {
const title_1='Fast Delivery'
const title_2='A Good Auto Responder '
const title_3='Home Delivery'
const displayStyle={
    height:'1000px'
}
    return (
        <div className='container mx-auto '>
        <div className='container md:px-16 px-5'>
        <h2 className='text-4xl pb-4'>Why you choose us</h2>
            <p className='text-gray-600'>Barton waited twenty always repair in within we do. An delighted offernding <br /> curiosity my is deshwoods at . Boy prosperous increasing surrounded.</p>
        </div>

           <div className="card_container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
               <Card img={Img1} title={title_1}></Card>
               <Card style={{height:'700px'}} img={Img2} title={title_2}></Card>
               <Card img={Img3} title={title_3}></Card>
          
              
           </div>
        </div>
    );
};

const Card=(props)=>{
    const {title,img,style}=props
return(
    <div className="wrapper">
    <div className="my-14 " >
  
<div className="w-80 m-auto ">
<div
className=" rounded-2xl  bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" style={style}
>
<div className="col-span-3 row-span-4 p-1 m-1">
<a href="/">
<img
  src={img}
  alt="Placeholder"
  className="rounded-b-xl object-cover h-80 w-full"
/>
</a>
</div>
<div className="col-span-3 row-span-1">
<div className="flex align-bottom flex-col leading-none p-2 md:p-4">
<div className="flex  flex-row justify-between items-center">
  <div>
   <div  className="flex flex-row items-center no-underline hover:underline text-black">
   <img
      alt="Placeholder"
      className="block rounded-full"
      src="https://picsum.photos/32/32/?random"
    />
    <span className="ml-2 text-sm">{title}</span>
   </div>
  <div>
  <p className='text-grey-500 text-sm pl-10'>
        Keep Your systems in sync with automated web hook based notification each time link is paid and how we dream about our future.
    </p>
    <NavLink  className='text-blue-500 text-md pl-10 font-bold mt-2 block' to ='/'>See more</NavLink>
  </div>

  </div>
</div>
</div>
</div>
</div>
</div>
</div>


    </div>
)
}




export default WhyChoose;