import './App.css';
import Knygos from "./components/Knygos";
import { useState, useEffect } from "react";
import PostForm from './components/PostForm';
import SignIn from './components/SignIn';


const App = () => {

  const [data, setData] = useState(null); 


  //                                              LogIn, LogOff 

  const [isLoggedIn, setIsLoggedIn] = useState(false); //by default vartotojas neprisijunges

  const [username, setUsername] = useState(''); //koks vartotojas prisijunges


  const login = (username) => { 
    setIsLoggedIn(true); // keis isLoggedIn reiksme. po prisijungimo pavers i true
    setUsername(username);      // keis username reiksme, kad butu aisku po sekmingo prisijungimo koks varototjas prisijunges 
  }

  const logout = () => {    
    setIsLoggedIn(false);     //po Log out out keis isLoggedIn reiksme i false
    setUsername('');               // pasalins prisijungusio varotojo varda is DOM
  }



  

  const fetchData = async () => {
    const duomenys = await fetch('http://localhost:5000/knygos')
      .then(res => res.json());
    console.log(duomenys);
    setData(duomenys);
  }

  useEffect(()=>{
    fetchData();
  }, []);


  return (
    <>
    <header>
      
      <img className='headerLogo' src="https://media.istockphoto.com/id/1130660569/vector/vector-logo-concept-of-a-book-club-with-people-reading.jpg?s=612x612&w=0&k=20&c=D-7acU7woXwbKii_XEWtTz-SegmYcU02D-0O7Tqh4KY=" alt="header-logo" />

      { !isLoggedIn ? //jei neprisijunges
        <SignIn isLoggedIn={isLoggedIn} username={username}  login={login} logout={logout} /> //rodyti signIn forma
      :  // kitu atveju pasisveikinti su prisijungusiu vartotoju pagal jo varda ir rodyti log out mygtuka
        <div className='logOut'>
          <p>Welcome back {username}!</p> 
          <button className='logOffButton' onClick={logout}>Log out</button>
        </div> 
      }

    </header>



    <PostForm  />
     
    <main>
      { data?
        data.map(item =>
          <Knygos
            key={item.id}
            knygos={item}
          />
        ):
        <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="loading"/> }

      </main>
    </>
  );
}

export default App;