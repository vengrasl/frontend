import Login from "./Login";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";
import UserInfo from "./UserInfo";

const Header = () => {

  const { loggedInUser } = useContext(UserContext);

  return ( 
    <>
      {loggedInUser ? <UserInfo /> : <Login />}
    </>
  );
}
 
export default Header;