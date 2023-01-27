import Login from './Login';
import UserInfo from './UserInfo';
import UserContext from './UserContext';
import { useContext } from "react";
import { Link } from 'react-router-dom';

const Header = () => {

  const { loggedInUser } = useContext(UserContext);

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      
     <div className='loginLogout'></div> 
      {
        loggedInUser ? 
        <UserInfo /> :
        <>
          <Login />
        </>
      }
    </header>
  );
}
 
export default Header;