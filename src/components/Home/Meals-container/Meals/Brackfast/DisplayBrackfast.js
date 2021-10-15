import React from 'react';





const DisplayBrackfast = (props) => {
  const {img,title,discription,Price,id}=props.meal
  const{handelBuyBtn}=props
 

    return(
        <div>
       
<div class="min-h-5/6 flex   justify-center items-center my-8">
  <div class="container w-64 mx-auto  bg-white rounded-xl  overflow-hidden hover:shadow-xl transform hover:scale-105 duration-300 px-5">
    <img class="w-full" src={img} alt="" />
    <div class="text-center relative py-6">
      <span class="absolute transform -translate-x-10 -translate-y-24 z-50 text-green-500 bg-white rounded-full hover:text-green-400 transition-all duration-200 cursor-pointer">
      <svg onClick={()=>handelBuyBtn(id)} xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
  </svg>
      </span>
      <h1 class="mb-1 text-md font-sans font-semibold text-gray-700 hover:text-gray-900 cursor-pointer">{title}</h1>
      <span class="text-sm text-gray-700 hover:text-gray-400">{discription}</span>
      <h1 class="mb-1 text-xl font-sans font-semibold text-gray-700 hover:text-gray-900 cursor-pointer">${Price}</h1>
    </div>
  </div>
</div>

        </div>
    )
};


export default DisplayBrackfast;
