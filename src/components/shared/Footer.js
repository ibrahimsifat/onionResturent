import React from 'react';
import { NavLink } from 'react-router-dom';
import FooterLogo from '../../img/home/logo.png'
const Footer = () => {
    return (
        <div className='mt-auto -block'>
            
<footer class="relative text-white bg-gray-900 pt-8 pb-6">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap text-center lg:text-left">
      <div class="w-full lg:w-6/12 px-4">
      <img className='w-52 lg:mr-auto block ' src={FooterLogo} alt="" />
       
      </div>
      <div class="w-full lg:w-6/12 px-4 ">
        <div class="flex flex-wrap items-top mb-6">
          <div class="w-full md:w-4/12 px-4 ml-auto">
            <span class="block uppercase text-blueGray-500 text-md font-semibold mb-2">Useful Links</span>
            <ul class="list-unstyled">
              <li>
                <NavLink class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:text-red-500 duration-500" to="">About Us</NavLink>
              </li>
              <li>
              <NavLink class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:text-red-500 duration-500" to="">Blog</NavLink>
              </li>
              <li>
              <NavLink class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:text-red-500 duration-500" to="">Github</NavLink>
              </li>
              <li>
              <NavLink class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:text-red-500 duration-500" to="">Product</NavLink>
              </li>
            </ul>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <span class="block uppercase text-blueGray-500 text-md font-semibold mb-2">Other Resources</span>
            <ul class="list-unstyled">
              <li>
              <NavLink class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:text-red-500 duration-500" to="">MIT License</NavLink>
              </li>
              <li>
              <NavLink class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:text-red-500 duration-500" to="">Terms &amp; Conditions</NavLink>
              </li>
              <li>
              <NavLink class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:text-red-500 duration-500" to="">Privacy Policy</NavLink>
              </li>
              <li>
              <NavLink class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm hover:text-red-500 duration-500" to="">Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap items-center md:justify-between justify-center">
      <div class="w-full md:w-4/12 px-4 mx-auto text-center">
        <div class="text-sm text-blueGray-500 font-semibold py-1">
          <span>Copyright © </span>
          <span id="get-current-year">2021</span>
         
          <NavLink to=''>Ibrahim Sifat</NavLink>.
        </div>
      </div>
    </div>
  </div>
</footer>
        </div>
    );
};

export default Footer;