import { createContext } from "react"
import { useState } from "react";

const CartContext = createContext(); //default. dbr galima komponenti pasiimti kintamuosius/reiksmes. pvz Home const { orders } = useContext(CartContext);

const CardProvider = ({ children }) => {
  //kilnojami dalykai eina cia
  
  const [orders, setOrders] = useState([
    {
      id: 1,
      people: 4,
      price: 12.99
    },
    {
      id: 2,
      people: 4,
      price: 12.99
    },
    {
      id: 3,
      people: 4,
      price: 12.99
    }
  ])
 
  return (
    <CartContext.Provider
     value = {{
      orders,
      setOrders
    }}
  >
      {children}
    </CartContext.Provider>
  );
}



export { CardProvider }
export default CartContext;