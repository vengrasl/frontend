import UserContext from './UserContext';
import { useContext } from "react";
import { Link } from 'react-router-dom';

const UserInfo = () => {

  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  return (
    <div className='userInformation'>
      <Link to='/userPage'><p>My posts</p></Link>
      <img className='userImage' src={loggedInUser.avatar} alt="user avatar"/>
      <span>{loggedInUser.username}</span>
      <button onClick={() => setLoggedInUser(null)}>LogOut</button>
    </div>
  );
}

export default UserInfo;