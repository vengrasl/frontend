import './App.css';
import Home from './components/Home';
import UserLogin from './components/UserLogin';
import UserRegistration from './components/UserRegistration';
import Card from './components/Card';
import Cards from './components/Cards';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>

      <header>
        <h1>Hello, nav</h1>
        <nav> {/*apgaubs visus routes, nes yra routes isoreje */}
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
      </header>
      <hr />

      <Routes>


        <Route path="/" element= {<Home />}/>



        <Route path="/register" element= {<UserRegistration />}/>



        <Route path="/login" element= {<UserLogin />}/>



        <Route path="/cards" element= {<Cards />}/>



        <Route path="/card" element= {<Card />}/>


      </Routes>

      <hr />

      <footer>
        <h1>Hey, footer</h1>
      </footer>
    </>
  );
}

export default App;
