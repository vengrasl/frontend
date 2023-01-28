import UserPosts from "./userPosts";
import { Link } from "react-router-dom";

const UserPage = () => {
  return ( 
    <section className="userPosts">
      <h1>My posts</h1>
      <Link to='/addPost'><h1 className="AddAPost">Add a post</h1></Link>
      <div className="allPosts">
        <UserPosts/>
      </div> 
    </section>
   );
}
 
export default UserPage;