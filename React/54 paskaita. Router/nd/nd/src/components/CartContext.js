import { createContext, useState } from "react"

const CartContext = createContext();

const CardProvider = ({ children }) => {
  //kilnojami dalykai eina cia


 
  return (
    <ToDosContext.Provider
    //value = {{
      //kilnojami dalykai
    //}}
    
    >
      {children}
    </ToDosContext.Provider>
  );
}



export { CardProvider }
export default CartContext;