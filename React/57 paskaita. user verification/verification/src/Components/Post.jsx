import UserContext from "../contexts/UserContext";
import { useContext } from "react";

const Post = ({data}) => {

  const { users, loggedInUser } = useContext(UserContext);

  const postOwner = users.find(user => user.id === data.userId);

  return (
    <div style={{border:'3px solid black'}}>
      <img
        src={postOwner.avatar}
        alt="user avatar"
        style={{width:'30px', height:'auto'}}
      />
      <span>{postOwner.userName}</span>
      {
        loggedInUser && loggedInUser.id === postOwner.id && ' edit'
      }
      <hr />
      <h1>{data.heading}</h1>
      <p>{data.content}</p>
    </div>
  );
}
 
export default Post;
