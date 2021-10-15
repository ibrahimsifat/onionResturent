

import { useHistory } from 'react-router';
import useBrackfast from '../MealsHooks/useBrackfast';

import DisplayBrackfast from './DisplayBrackfast';

const Brackfast = () => {
  const history=useHistory()
  const handelBuyBtn=(id)=>{
    history.push(`/Checkout/${id}`)
  }
  const [meals]=useBrackfast()




    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
       
          {
               meals.map(meal=><DisplayBrackfast
                key={meal.id}
                meal={meal}
            
            handelBuyBtn={handelBuyBtn}
           
                ></DisplayBrackfast>)
          }
        </div>
    );
};


export default Brackfast;