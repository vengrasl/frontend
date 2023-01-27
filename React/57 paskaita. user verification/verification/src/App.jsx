import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Register from './components/Register';
import Login from './components/LogIn';
import UserPage from './components/UserPage';
import NewPostForm from './components/NewPostForm';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" 
          element = {
            <>
              <Header />
              <hr />
              <Main />
            </>
          }
        />
        <Route path="/user" 
          element={
            <>
              <Header />
              <hr />
              <UserPage />
            </>
          }
        />
        <Route path="/newPost" 
          element={
            <>
              <Header />
              <hr />
              <NewPostForm />
            </>
          }
        />
        <Route path="/register"
          element = {
            <Register />
          }
        />
        <Route path="/login"
          element = {
            <Login />
          }
        />
      </Routes>
    </>
  );
}

export default App;
