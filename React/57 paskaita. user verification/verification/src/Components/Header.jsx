import Login from "./Login";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";

const Header = () => {

  const { loggedInUser } = useContext(UserContext);

  return ( 
    <>

    {
      loggedInUser ? "prisijunges" : <Login /> //jei session storage yra duomenys (po sekmingo prisijungimo, tai bus prisijunges), kitaip rodys login forma. Kuris vartotojas prisijunges ziurima pagal key
    }

    
    </>
   );
}
 
export default Header;