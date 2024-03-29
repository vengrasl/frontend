import UserContext from '../context/UserContext';
import { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';

const UserInfo = () => {

  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  const navigation = useNavigate();

  const LogoutUser = () => {
    setLoggedInUser(null)
    navigation('/')
  }

  return (
    <div className='userInformation'>
      {
        loggedInUser.role === 'admin' && 
        <Link to='/manageUsers'><p>Manage users</p></Link>
      }
      <Link to='/userPage'><p>My posts</p></Link>
      <img className='userImage' src={loggedInUser.avatar} alt="user avatar"/>
      <span>{loggedInUser.username}</span>
      <button onClick={() => LogoutUser()}>LogOut</button>
    </div>
  );
}

export default UserInfo;