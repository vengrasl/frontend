import UserContext from './UserContext';
import { useContext } from "react";

const UserInfo = () => {

  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  return (
    <div style={{display:'flex', justifyContent:'flex-end'}}>
      <img
        src={loggedInUser.avatar}
        alt="user avatar"
        style={{width:'30px', height:'auto'}}
      />
      <span>{loggedInUser.username}</span>
      <button onClick={() => setLoggedInUser(null)}>LogOut</button>
    </div>
  );
}

export default UserInfo;