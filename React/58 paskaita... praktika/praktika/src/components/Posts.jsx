import { useContext } from "react";
import PostContext from "../context/PostContext";
import Post from "./Post";
import UserContext from "../context/UserContext";


const Posts = () => {

  const { users } = useContext(UserContext)
  const { posts } = useContext(PostContext)

  const bannedUsers = users.map(user => user.isBanned && user.id).filter(item => item !== false);

  console.log(bannedUsers);

  const availablePosts = posts.filter(post => !bannedUsers.includes(post.userId));
  
  console.log(availablePosts)

  return ( 
    <section className="allPosts">
    
    {
      availablePosts.map(post =>
        <Post
          key={post.id}
          data={post}
          />
        )
    }
    </section>
   );
}
 
export default Posts;