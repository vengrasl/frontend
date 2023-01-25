import CartContext from './CartContext'
import { useContext } from 'react';

const Home = () => {

  const { orders, } = useContext(CartContext);

  return ( 
    <>
    <h1>Home</h1>
    <div className="tablediv">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Number of people</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
        {orders.map(item => (
        <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.people}</td>
        <td>{item.price}</td>
    </tr>
))}
        </tbody>
      </table>
    </div>
    </>
   );
}
 
export default Home;