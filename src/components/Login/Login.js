import React from 'react';
import { NavLink } from 'react-router-dom';
import LoginBanner from '../../img/Image/Group 1151.png'
const Login = () => {
    return (
        <div>
          <div class=" container mx-auto my-32 mx-auto grid md:grid-cols-2  justify-center items-center">
		<div className='ml-auto'>
<img  className='px-4' src={LoginBanner} alt="" />
		</div>
	<div class="md:ml-12 ">
		<div class="bg-white flex justify-center items-center">
			<div>

				<form>
					<div>
						<span class="text-sm text-gray-900">Welcome back</span>
						<h1 class="text-2xl font-bold">Login to your account</h1>
					</div>
					<div class="mt-5">
						<label class="block text-md mb-2" for="password">Password</label>
						<input class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="password" name="password" placeholder="password"/>
        </div>
						<div class="my-3">
							<label class="block text-md mb-2" for="email">Email</label>
							<input class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="email" name="password" placeholder="email"/>
        </div>
							<div class="flex justify-between">
								<div>
									<input class="cursor-pointer"  type="radio" name="rememberme"/>
									<span class="text-sm">Remember Me</span>
								</div>
								<span class="text-sm text-blue-700 hover:underline cursor-pointer">Forgot password?</span>
							</div>
							<div class="">
								<button class="mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100">Login now</button>
								<div class="flex  space-x-2 justify-center items-end bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md transition duration-100">

            <img class=" h-5 cursor-pointer" src="https://i.imgur.com/arC60SB.png" alt=""/>
									<button >Or sign-in with google</button>
								</div>
							</div>
				</form>
				<p class="mt-8"> Dont have an account? <NavLink class="cursor-pointer text-sm text-blue-600" to='/register'> Join free today</NavLink></p>
			</div>
		</div>
	</div>
</div>
        </div>
    );
};

export default Login;