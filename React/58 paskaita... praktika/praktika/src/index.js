import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserProvider } from './context/UserContext';
import { BrowserRouter } from 'react-router-dom';
import { PostProvider } from './context/PostContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <UserProvider>
    <PostProvider>
    < BrowserRouter>
      <App />
    </BrowserRouter>
    </PostProvider>
  </UserProvider>   

);

