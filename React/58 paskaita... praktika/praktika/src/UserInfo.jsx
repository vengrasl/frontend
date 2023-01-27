import UserContext from './UserContext';
import { useContext } from "react";

const UserInfo = () => {

  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  return (
    <div className='userInformation'>
      <img className='userImage' src={loggedInUser.avatar} alt="user avatar"/>
      <span>{loggedInUser.username}</span>
      <button onClick={() => setLoggedInUser(null)}>LogOut</button>
    </div>
  );
}

export default UserInfo;