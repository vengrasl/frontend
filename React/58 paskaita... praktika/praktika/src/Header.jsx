import Login from './Login';
import UserInfo from './UserInfo';
import UserContext from './UserContext';
import { useContext } from "react";

const Header = () => {

  const { loggedInUser } = useContext(UserContext);

  return (
    <header>
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