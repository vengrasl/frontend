import Post from "./Post";
import PostContext from "../context/PostContext";
import UserContext from "../context/UserContext";
import { useContext } from "react";

const UserPosts = () => {

  const { loggedInUser } = useContext(UserContext)
  const { posts } = useContext(PostContext)


  return ( 
    <>
      { //filter per visus postus, jei sutampa prisijungusio vartotojo ir posto savininko id, map per postus ir juos dispaly
        posts
          .filter(post => post.userId === loggedInUser.id)
          .map(post => 
            <Post 
              key={post.id}
              data={post}
            />  
          )
      }
    </>
   );
}
 
export default UserPosts;