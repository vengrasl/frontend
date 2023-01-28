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

  const addNewPost = async (newPost) => {
    const res = await fetch('http://localhost:5000/meals', {
      method: 'POST',
      body: JSON.stringify(newPost),
      headers: {'Content-Type': 'application/json'}
    });
    const uptatedData = await res.json();
    setPosts([...posts, uptatedData]);
  }
    
  return (
    <PostContext.Provider
      value={{
        posts,
        addNewPost
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export { PostProvider };
export default PostContext;