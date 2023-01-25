import UserContext from "../contexts/UserContext";
import { useContext } from "react";



const UserInfo = () => {

  const {loggedInUser, setLoggedinUser} = useContext(UserContext);


  return ( 
    <div style={{display:'flex', justifyContent:'flex-end', alignitems:'center'}}>
    <img 
    src={loggedInUser.avatar} 
    alt='useravatar' />
    <span>{loggedInUser.userName}</span>
    <button onClick={() => setLoggedinUser(null)}>Logout</button> 
    </div>
   );
}
 
export default UserInfo;