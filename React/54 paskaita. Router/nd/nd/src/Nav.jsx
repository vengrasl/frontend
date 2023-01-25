import { Link } from 'react-router-dom'

const Nav = () => {
  return ( 
    <>
     <nav>
      <Link to="/">Home</Link>
      <Link to="/add">Add</Link>
      <Link to="/edit">Edit</Link>
    </nav>
    <hr />
    </>
   );
}
 
export default Nav;