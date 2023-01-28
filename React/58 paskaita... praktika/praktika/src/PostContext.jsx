import { createContext, useState, useEffect } from "react";

const PostContext = createContext();
const PostProvider = ({ children }) => {

const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const postData = async () => {
      const res = await fetch('http://localhost:5000/meals');
      const postData = await res.json();
      setPosts(postData)
    }
    postData()
  }, []);
    
  return (
    <PostContext.Provider
      value={{
        posts
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export { PostProvider };
export default PostContext;