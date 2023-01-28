import './App.css';
import { Route, Routes } from 'react-router-dom'
import Header from './Header';
import Register from './Register'
import Main from './Main';
import UserPage from './userPage';
import AddPost from './AddPost';
import EditPostForm from './EditPostForm';


const App = () => {
  
  return (
    <>
    <Header />

    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/register" element={<Register />} />
      <Route path='/userPage' element={<UserPage />} />
      <Route path='/addPost' element={<AddPost />} />
      <Route path='/editPost/:id' element={<EditPostForm />} />
      <Route path="/*" element={<h1>404 not found</h1>} />
    </Routes>

    </>
  );
}

export default App;
