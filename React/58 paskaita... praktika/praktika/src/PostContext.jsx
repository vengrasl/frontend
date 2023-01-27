import { createContext, useState } from "react";

import { createContext, useState } from "react";

const PostContext = createContext();

const PostProvider = ({ children }) => {

  const [posts, setPosts] = useState([])

  useEffect(()=>{
    const postData = async () => {
      const res = await fetch('http://localhost:5000/meals');
      const userData = await res.json();
      setPosts(postData)
    }
    userData()
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