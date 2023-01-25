import { useState } from "react";
import CartContext from './CartContext'
import { useContext } from 'react';
import { nanoid }  from 'nanoid'

const Add = () => {

  const [formosLaukai, setFormosLaukai] = useState({people: '', price: ''});

  const { orders, setOrders} = useContext(CartContext); //import is context.js

  const handleInputChange = (e) => { 
    switch(e.target.name){
      case 'people':
        setFormosLaukai({
          ...formosLaukai,
          people: e.target.value,
        })
        break;
      case 'price':
        setFormosLaukai({
          ...formosLaukai,
          price: e.target.value
        })
        break;  
      
      default:
        console.log('kazka keitem')
    }
  }

  const submitForm = (e) => {
    e.preventDefault();
    console.log(e);
    setOrders([...orders, { //naujas order
        id: nanoid(),
        people: formosLaukai.people,
        price: formosLaukai.price
      },
    ]);
    setFormosLaukai({people: '', price: ''}) //isvalomi laukai 
  }

  return ( 
    <>
    <h1>Add</h1>
    <form className="addForm" onSubmit={submitForm}>
        <label>
          How many people: <br />
          <input type="number"
          name="people" 
          value={formosLaukai.people}
          onChange={handleInputChange}/>
        </label> 
        <br />
        <label>
          Price: <br />
          <input type="number"
          name="price"
          value={formosLaukai.price}
          onChange={handleInputChange}/>
        </label> 
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
   );
}
 
export default Add;