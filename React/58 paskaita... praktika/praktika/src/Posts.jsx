import { useContext } from "react";
import PostContext from "./PostContext";
import Post from "./Post";


const Posts = () => {

  const { posts } = useContext(PostContext)

  return ( 
    <section className="allPosts">
    
    {
      posts.map(post =>
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