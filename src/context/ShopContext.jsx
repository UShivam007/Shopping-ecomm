import React, { createContext, useState } from 'react'
import { products } from '../assets/assets';


export const ShopContext = createContext();

  const ShopContextProvider = (props) =>{
   
    const currency = '$';
    const delivery_fees = 20;

    const [search,setSearch] = useState('');
    const [showSearch,setShowSearch] = useState(false);

    const value = {
        products,
        currency,
        delivery_fees,
        search,setSearch,showSearch,setShowSearch,
    }

    

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
  };

  export default ShopContextProvider;