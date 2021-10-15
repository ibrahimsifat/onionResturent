import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Brackfast from './components/Home/Meals-container/Meals/Brackfast/Brackfast';
import CheckoutBrackfast from './components/Home/Meals-container/Meals/Brackfast/CheckoutBrackfast';
import Dinner from './components/Home/Meals-container/Meals/Dinner/Dinner';




import Lunch from './components/Home/Meals-container/Meals/Lunch/Lunch';


import Login from './components/Login/Login';


import Footer from './components/shared/Footer';
import Navigation from './components/shared/Navigation';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div>
   <BrowserRouter>
      <Navigation></Navigation>
      
     
        <Switch>
          
          <Route exact path='/'> 
              <Home></Home>
          </Route>
          <Route path='/home'> 
              <Home></Home>
          </Route>

          <Route path='/login'> 
              <Login></Login>
          </Route>
          <Route path='/brackfast'> 
              <Brackfast></Brackfast>
          </Route>
          <Route path='/lunch'> 
              <Lunch></Lunch>
          </Route>
          <Route path='/dinner'> 
              <Dinner></Dinner>
          </Route>
          <Route path='/brackfastcheckout/:mealId'> 
              <CheckoutBrackfast></CheckoutBrackfast>
          </Route>

          <Route path='/signup'> 
              <SignUp></SignUp>
          </Route>


    

          <Route path='home'> 
              <Home></Home>
          </Route>

        </Switch>
     
     <Footer></Footer>
   </BrowserRouter>
    </div>
  );
}

export default App;
