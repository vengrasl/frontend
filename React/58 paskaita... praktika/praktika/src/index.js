import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserProvider } from './UserContext';
import { BrowserRouter } from 'react-router-dom';
import { PostProvider } from './PostContext';


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

