import './App.css';
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Register from './components/Register'
import Main from './components/Main';
import UserPage from './components/userPage';
import AddPost from './components/AddPost';
import EditPostForm from './components/EditPostForm';
import ManageUsers from './components/manageUsers';


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
      <Route path='/manageUsers' element={<ManageUsers />} />
      <Route path="/*" element={<h1>404 not found</h1>} />
    </Routes>

    </>
  );
}

export default App;
