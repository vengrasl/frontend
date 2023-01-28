import { useContext } from "react";
import PostContext from "./PostContext";
import Post from "./Post";


const Posts = () => {

  const { posts } = useContext(PostContext)

  return ( 
    <>
    
    {
      posts.map(post =>
        <Post
          key={post.id}
          data={post}
          />
        )
    }
    </>
   );
}
 
export default Posts;