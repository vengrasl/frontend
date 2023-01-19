import './App.css';
import Card from './components/Card';
import Cards from './components/Cards';
import Home from './components/Home';
import UserLogIn from './components/UserLogIn';
import UserRegistration from './components/UserRegistration';

import { Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

const App = () => {

  const [cards] = useState([
    {
      tekstas: "labas",
      id: 1
    },{
      tekstas: "ate",
      id: 2
    },{
      tekstas: "haha",
      id: 3
    },{
      tekstas: "hihi",
      id: 4
    },{
      tekstas: "hallo",
      id: 5
    }
  ]);

  return (
    <>
      <header>
        <h1>Hello, nav here</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/cards">Cards</Link></li>
          </ul>
        </nav>
      </header>
      <hr />

      <Routes>

        <Route path="/" element= {<Home />}/>

        <Route path="/register" element={<UserRegistration />}/>

        <Route path="/login" element={<UserLogIn />}/>


        <Route path="/cards" element={
          <Cards
            data={cards}
          />
        }/>

  
        <Route path="/cards/card/:id" element={
          <Card 
            data={cards}
          />
        }/>


        <Route path="/*" element={
          <>
            <h1>404 not found</h1>
          </>
        }/>


      </Routes>

      <hr />
      <footer>
        <h1>Hey yo, foot here</h1>
      </footer>
    </>
  );
}

export default App;
