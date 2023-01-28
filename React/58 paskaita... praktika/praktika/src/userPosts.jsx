import Post from "./Post";
import PostContext from "./PostContext";
import UserContext from "./UserContext";
import { useState } from "react";
import { useContext } from "react";

const UserPosts = () => {

  const { loggedInUser } = useContext(UserContext)
  const { posts } = useContext(PostContext)

  console.log(posts)
  console.log(loggedInUser)

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