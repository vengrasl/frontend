import { useState } from "react";
import { useContext } from 'react';
import CartContext from './CartContext';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';


const Edit = () => {

  const { orders, setOrders } = useContext(CartContext); //import is context.js

  const [formosLaukai, setFormosLaukai] = useState({id: '', people: '', price: ''});

  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  

  const handleEdit = (id) => {

    const orderToEdit = orders.find(order => order.id === id); //ieskomas orderis pagal id

    setFormosLaukai({id: orderToEdit.id, people: orderToEdit.people, price: orderToEdit.price }); // i input fields istatomos koreguotinos reiksmes

    setShowModal(true);


  }

  const handleInputChange = (e) => {
    switch(e.target.name){
      case 'people':
        setFormosLaukai({
          ...formosLaukai,
          people: e.target.value,
        });
        break;
      case 'price':
        setFormosLaukai({
          ...formosLaukai,
          price: e.target.value
        });
        break;  
      default:
        console.log('fail');
    }
  }

  const closeModal = () => {
    setShowModal(false);
  }

  const submitForm = (e) => {
    e.preventDefault();
    const updatedOrders = orders.map(order => order.id === formosLaukai.id ? {id: formosLaukai.id, people: formosLaukai.people, price: formosLaukai.price } : order);
    setOrders(updatedOrders);
    setFormosLaukai({people: '', price: '' });
    closeModal();
    navigate('/');
  }

  const cancelEdit = () => {
    navigate('/');
  }

  return ( 
    <>
      <h1>Edit</h1>
      <div className="updateDiv">
        {orders.map(item => (
          <div key={item.id} className="singleUpdateDiv">
            <p className="editID">Id: {item.id}</p>
            <p>Number of people: {item.people}</p>
            <p>Price: {item.price}</p>
            <button onClick={() => handleEdit(item.id)}>Edit</button>
          </div>
        ))}
      </div>
      <Modal isOpen={showModal} onRequestClose={closeModal} ariaHideApp={false} className="modal">
        <form onSubmit={submitForm}>
          <label>How many people: <br />
            <input 
            type="number"
            name="people" 
            value={formosLaukai.people}
            onChange={handleInputChange}/>
          </label>
            <br />
          <label>
            Price: <br />
            <input 
            type="number"
            name="price"
            value={formosLaukai.price}
            onChange={handleInputChange}/>
          </label>
          <br />
          <input type="submit" value="Submit" /> <br />
          <button onClick={cancelEdit}>Cancel Edit</button>
        </form>


        
      </Modal>
    </>
   );
}

export default Edit;