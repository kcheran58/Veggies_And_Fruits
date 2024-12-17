import React, { createContext, useContext } from "react";
const Cart=createContext(undefined);
export function useUserCart()
{
    const cart=useContext(Cart);
    if(cart==undefined)
    {
       
    }
    else{
        return cart;
    }
}
export default Cart;
