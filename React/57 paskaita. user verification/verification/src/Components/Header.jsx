import UserInfo from './UserInfo';
import UserContext from "../contexts/UserContext";
import { useContext } from "react";
import { Link } from 'react-router-dom';

const Header = () => {

  const { loggedInUser } = useContext(UserContext);

  return (
    <>
      {
        loggedInUser ? 
        <UserInfo /> :
        <div className="loginRegister">
          <Link to='/login'>Login</Link>
          <br />
          <Link to='/register'>Register</Link>
        </div>
      }
    </>
  );
}
 
export default Header;