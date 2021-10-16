import React, { createContext } from 'react';
import useCart from '../shared/useCart';


  
export const AuthContext2=createContext()
const AuthProvider2 = ({children}) => {
    //const {children}=props
  const  AllContext2=useCart()
   return (
        <AuthContext2.Provider value={AllContext2}>
    {children}
        </AuthContext2.Provider>
    );
};

export default AuthProvider2;